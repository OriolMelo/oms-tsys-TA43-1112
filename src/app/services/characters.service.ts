import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  readonly url_server ="http://localhost:3000/characters/";

  constructor(private http: HttpClient) { }

  getNumCharacters(){
    let response = this.http.get(this.url_server+"?_page=1", {observe: 'response'});
    return response;
  }

  getCharacters() {
    return this.http.get(this.url_server);
  }  

  getCharacter(id_character: string) {
    return this.http.get(this.url_server+id_character);
  }

  deleteCharacter(id_character: string){
    return this.http.delete(this.url_server+id_character);
  }

  addCharacter(character:any){
    return this.http.post(this.url_server, character);
  }

  modifyCharacter(id_character: number, character: any){
    return this.http.put(this.url_server+id_character, character);
  }
}
