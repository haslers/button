import {increment} from './increment';

describe('increment', () => {
    it('should increment a given number by the specified amount', () => {
        expect(increment(2,3)).toEqual(5)
    })
})