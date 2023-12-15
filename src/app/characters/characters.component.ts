import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../services/characters.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  characters:any = null;

  num_characters: number[] = [];

  constructor(private charactersService: CharactersService){}

  private generarAleatorio(min: number, max: number): void {
    for(let i: number = 0; i < 5; i++){
       this.num_characters[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

  ngOnInit(): void{
    this.generarAleatorio(1, 826);
    this.charactersService.getCharacters(this.num_characters)
      .subscribe(
        result=> {
          this.characters = result;
        }
      );
  }
}
