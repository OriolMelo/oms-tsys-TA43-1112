import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-form-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css'
})
export class FormCharacterComponent {

  private static id: number = 6;
  name: string = "";
  status: string = "";
  species: string = "";
  gender: string = "";
  origin: string = "";
  image: string = "";

  constructor(private router: Router, private characterService: CharactersService, private route: ActivatedRoute){}

  ngOnInit(){
    if(this.route.snapshot.paramMap.get('id') != null){
      let boton: HTMLElement | null = document.getElementById("boton")
      if(boton!= undefined){
        boton.innerHTML = "Modificar";
      }
    }
  }


  crear(): void{    
    if(this.validarForm()){
      let character: any;
      if(this.route.snapshot.paramMap.get('id') == null){
        character = {
          id: FormCharacterComponent.id,
          name: this.name,
          status: this.status,
          species: this.species,
          gender: this.gender,
          origin: this.origin,
          image: this.image,
        };
        FormCharacterComponent.id++;
        this.characterService.addCharacter(character).subscribe(
          result =>this.router.navigate(['/characters'])
        );
      }
      else{
        character = {
          id: this.route.snapshot.paramMap.get('id'),
          name: this.name,
          status: this.status,
          species: this.species,
          gender: this.gender,
          origin: this.origin,
          image: this.image,
        };
        this.characterService.modifyCharacter(character.id, character).subscribe(
          result =>this.router.navigate(['/characters'])
        );
      }
      this.name = this.status = this.species = this.gender = this.origin = this.image ="";
    }
  }


  validarForm(): boolean {
    var nameError: HTMLElement | null = document.getElementById("errorName");
    var statusError: HTMLElement | null = document.getElementById("errorStatus");
    var speciesError: HTMLElement | null = document.getElementById("errorSpecies");
    var genderError: HTMLElement | null = document.getElementById("errorGender");
    var originError: HTMLElement | null = document.getElementById("errorOrigin");
    var imageError: HTMLElement | null = document.getElementById("errorImage");

    this.vacio(this.name, nameError);
    this.vacio(this.status, statusError);
    this.vacio(this.species, speciesError);
    this.vacio(this.gender, genderError);
    this.vacio(this.origin, originError);
    this.vacio(this.image, imageError);

    if (!nameError?.classList.contains("hidden") ||
        !statusError?.classList.contains("hidden")||
        !speciesError?.classList.contains("hidden")||
        !genderError?.classList.contains("hidden")||
        !originError?.classList.contains("hidden")||
        !imageError?.classList.contains("hidden")) {
        return false;
    }

    return true;
  }

  vacio(field: string | undefined, errorField: HTMLElement | null): void{
    if(field === "") {
        errorField?.classList.remove("hidden");
    } 
    else {
        errorField?.classList.add("hidden");
    }
  }
}
