import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  character: any = null;
  id:any = null

  constructor(private characterService: CharactersService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacter(this.id)
      .subscribe(
        result=> {
          this.character = result;
        }
      );
  }
}
