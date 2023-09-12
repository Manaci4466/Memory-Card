import {fetchPokemon} from './components/functionality'

test('test fetch',() => {
    expect(fetchPokemon().length).toEqual(10);
})

