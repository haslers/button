import {increment} from './increment';

describe('increment', () => {
    it('should increment a number by 1 if no amount to increment is given', () => {
        expect(increment(2)).toEqual(3);
    })
    it('should increment a given number by the specified amount', () => {
        expect(increment(2,3)).toEqual(5);
    })
})