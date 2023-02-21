import type { StateType } from "./Reducer";
import { reducer, TOGGLE_CONSTANT } from "./Reducer";

test('collapsed should be true', () => {
    const state : StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)


})

test('collapsed should be false', () => {
    const state : StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    const state : StateType = {
        collapsed: true
    }
    expect( () => {reducer(state, {type: 'FAKETYPE'})}).toThrowError()


})