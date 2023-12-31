// @vitest-environment nuxt
import { describe, it, expect, beforeEach} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCarsStore } from '@/stores/cars.store'
import { mockedCars } from './cars.mocked'

describe('Counter Store', () => {
    const store = useCarsStore()
    store.cars = [...mockedCars]

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('delete items with duplicated ids', () => {
        expect(store.cars.length).toBe(3)
        store.cars = store.deleteDuplicatedCars(store.cars)
        expect(store.cars.length).toBe(2)
    })

    it('mark car as liked', () => {
        expect(store.cars[1].liked).toBe(false)
        store.setCarLiked(store.cars[1].id)
        expect(store.cars[1].liked).toBe(true)
    })
})