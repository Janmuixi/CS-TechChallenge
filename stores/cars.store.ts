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
    isLoading: false
  }),
  actions: {
    async getAllCars() {
        const { data, meta } = await CarsService.getAllCars(this.currentPage)
        this.cars = data
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
        
    }
  }
})