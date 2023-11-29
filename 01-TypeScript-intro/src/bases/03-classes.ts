/**
 * @documentation
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * https://pokeapi.co/
 * https://www.npmjs.com/package/axios
*/

import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    public readonly id: number;
    public name: string;
    // public imgUrl: string;

    constructor( id: number, name: string ) {
        this.id = id;
        this.name = name;
    }

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`)
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves )

        return data.moves;
    }
}

export const charmander = new Pokemon( 4, 'Charmander' );

// console.log(charmander)

// charmander.scream()
// charmander.speak()

// console.log( charmander.getMoves() )

charmander.getMoves();