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

  all_characters: any;

  characters:any[] = [];

  num_characters: number[] = [];

  total_characters: string | null= "5";

  constructor(private charactersService: CharactersService){}

  private generarAleatorio(min: number, max: number): number {
      let num: number;
      do{
          num = Math.floor(Math.random() * (max - min + 1) + min);
          console.log(num)
      }
      while(this.num_characters.includes(num))
      
      this.num_characters.push(num);
      return num;
  }

  ngOnInit(): void{
    this.charactersService.getNumCharacters()
      .subscribe(
        result=> {
          this.total_characters = result.headers.get('X-Total-Count');
          this.refresh_characters();
        }
      );
  }

  refresh_characters(){
    this.charactersService.getCharacters()
      .subscribe(
        result=> {
          this.all_characters = result;
          for(let i:number = 0; i<5; i++){
            let num = this.generarAleatorio(0, +this.total_characters!-1);
            this.characters[i] = this.all_characters[num];
          }
        }
      ); 
  }
}
