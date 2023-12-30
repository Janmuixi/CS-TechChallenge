import { defineStore } from 'pinia'
import type { Car } from '~/services/interfaces/cars.interface'
import CarsService from '~/services/cars.service'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: <Car[]>[],
    popularCars: <Car[]>[],
    currentPage: 1,
    lastPage: 0,
    totalCars: 0,
    isLoading: false,
    likedCars: <string[]>[],
    searchText: ''
  }),
  actions: {
    async getAllCars() {
        const { data, meta } = await CarsService.getAllCars(this.searchText, this.currentPage)

        let newCarsList = [...this.cars,...data]
        newCarsList = this.deleteDuplicatedCars(newCarsList)
        this.cars = newCarsList
        const {last_page: lastPage, total} = meta
        this.lastPage = lastPage
        this.totalCars = total
    },
    async getPopularCars() {
        this.popularCars = await CarsService.getPopularCars()
    },
    async getStartingData() {
        try {
            this.isLoading = true
            await Promise.all([this.getAllCars(), this.getPopularCars()])
        } finally {
            this.isLoading = false
        }
    },
    setPopularCarLiked(id: string) {
      const car = this.popularCars.find(car => car.id === id)
      if (car) {
        car.liked = !car.liked
      }
    },
    setCarLiked(id: string) {
      const car = this.cars.find(car => car.id === id)
      if (car) {
        car.liked = !car.liked
      }
    },
    addNextPage() {
      this.currentPage++
      this.getAllCars()
    },
    deleteDuplicatedCars(cars: Car[]) {
      const seenValues = new Set();

      return cars.reduce((result: Car[], obj: Car) => {
        const value = obj['id'];
        if (!seenValues.has(value)) {
          seenValues.add(value);
          result.push(obj);
        }
        return result;
      }, []);
    }
  }
})