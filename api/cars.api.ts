import axios from 'axios'
import type { AllCarsDTO, CarDTO, CarDetailsDTO } from './interfaces/cars.interface'

const URL_BASE = '/api'
const URL_CARS = `${URL_BASE}/cars`
const URL_CARS_POPULAR = `${URL_CARS}/popular`

class CarsRepository {
    async getAllCars(text: string, page: number): Promise<AllCarsDTO> {
        const res = axios.get(URL_CARS, {
            params: { q: text, page }
        })
        return (await res).data
    }
    async getPopularCars(): Promise<CarDTO[]> {
        const { data } = await axios.get(URL_CARS_POPULAR)
        return data
    }
    async getCarDetails(id: string): Promise<CarDetailsDTO> {
        const { data } = await axios.get(`${URL_CARS}/${id}`)
        return data
    }
}

export default new CarsRepository()
