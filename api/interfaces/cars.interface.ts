export interface CarDTO {
    name: string
    type: string
    gasolineLiter: number
    kindOfTransition: string
    people: number
    pricePerDay: number
    id: string
    img: string
    liked: boolean
}

export interface AllCarsMetaDTO {
    total: number,
    last_page: number
}

export interface AllCarsDTO {
    data: CarDTO[],
    meta: AllCarsMetaDTO
}

export interface CarDetailsDTO {
    name: string;
    type: string;
    description: string;
    gasolineLiter: number;
    kindOfTransition: string;
    people: number;
    pricePerDay: number;
    id: string;
    img: string;
    images: {
      url: string;
    }[];
}