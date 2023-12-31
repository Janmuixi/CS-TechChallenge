import repository from "~/api/cars.api"
import type { AllCars, Car, CarDetails } from "./interfaces/cars.interface"

class CarsService {
    async getAllCars(text: string, page: number): Promise<AllCars> {
        return repository.getAllCars(text, page)
    }
    async getPopularCars(): Promise<Car[]> {
        return repository.getPopularCars()
    }
    async getCarDetails(id: string): Promise<CarDetails> {
        return repository.getCarDetails(id)
    }
}

export default new CarsService()