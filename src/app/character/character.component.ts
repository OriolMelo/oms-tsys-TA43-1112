import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  
  character:any = {
    name: "",
    status: "",
    species:  "",
    gender: "",
    origin: "",
    image: ""
  };

  id:string | null = null;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacter(this.id!)
      .subscribe(
        result=> {
          this.character = result;
        }
      );
  }

  eliminar(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.characterService.deleteCharacter(this.id!)
      .subscribe({
        next: data => {
            this.router.navigate(['characters']);
        },
        error: error => {
            console.log('error');
        }
    });
  }
}
