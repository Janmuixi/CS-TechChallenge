import axios from 'axios'
import type { AllCarsDTO, CarDTO } from './interfaces/cars.interface'

const URL_BASE = 'https://dm-assignment-commonshare.koyeb.app/api'
const URL_CARS = `${URL_BASE}/cars`
const URL_CARS_POPULAR = `${URL_CARS}/popular`
const URL_CAR_DETAILS = `${URL_CARS}/:id`

class CarsRepository {
    async getAllCars(page: number): Promise<AllCarsDTO> {
        const res = axios.get(URL_CARS, {
            params: { page }
        })
        return (await res).data
    }
    async getPopularCars(): Promise<CarDTO[]> {
        const { data } = await axios.get(URL_CARS_POPULAR)
        return data
    }
}

export default new CarsRepository()
