import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(num_characters: number[]) {
    return this.http.get("https://rickandmortyapi.com/api/character/"+num_characters.join());
  }  

  getCharacter(id_character: number[]) {
    return this.http.get("https://rickandmortyapi.com/api/character/"+id_character);
  }
}
