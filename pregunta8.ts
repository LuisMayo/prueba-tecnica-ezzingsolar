import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PokemonResponse, Type } from './pregunta8-typings';
@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.pug',
    styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent {
    private readonly useLastVersion = true;

    // I guess we use this component several times in the app? Let the pokemon be an input
    @Input()
    initialPokemon = 'ditto';
    // Added typing
    pokemonNames: string[] = [];
    private url: string;
    constructor(private http: HttpClient) {
        // Use component variable instead of global one
        this.url = this.getPokemonApiUrl(this.useLastVersion);
        this.init().then(() => {});
    }

    async init() {
        const types = await this.getPokemonTypes(this.initialPokemon);
        await this.addPokemonsByTypes(types);
    }

    // Added typing
    getPokemonApiUrl(useLastVersion: boolean): string {
        // No need to compare a boolean against true
        if (useLastVersion) {
            return 'https://pokeapi.co/api/v2/pokemon/';
        } else {
            return 'https://pokeapi.co/api/v1/pokemon/';
        }
    }

    
    private async addPokemonsByTypes(types: Type[]): Promise<void> {
        // For each is clearer than for
        for (const type of types) {
            const pokemons = await this.getPokemonsByType(type);
            this.pokemonNames.push(...pokemons);
        }
    }

    // All the URL and API logic would probably be in a service but let's keep it here
    getPokemonTypes(pokemonName: string): Promise<Type[]> {
        return new Promise(resolve => {
            this.http.get(this.url + pokemonName)
                // Add typing
                .subscribe((data: PokemonResponse) => {
                    resolve(data.types);
                });
        });

    }

    private getPokemonsByType(type: Type): Promise<string[]> {
        return new Promise(resolve => {
            // URL doesn't exist on the response but let's keep it here
            this.http.get(type.url)
                // I should add typing here but I don't know of it
                .subscribe((item: any) => {
                    // Used map for clarity
                    resolve(item.pokemon.map(pokemon => pokemon.name));
                });
        });
    }
}
