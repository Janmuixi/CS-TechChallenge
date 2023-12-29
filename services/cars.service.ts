import repository from "~/api/cars.api"
import type { AllCars, Car } from "./interfaces/cars.interface"

class CarsService {
    async getAllCars(page: number): Promise<AllCars> {
        return repository.getAllCars(page)
    }
    async getPopularCars(): Promise<Car[]> {
        return repository.getPopularCars()
    }
}

export default new CarsService()