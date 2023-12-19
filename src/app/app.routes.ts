import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { FormCharacterComponent } from './form-character/form-character.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'character/:id',
        component: CharacterComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'formCharacter',
        component: FormCharacterComponent,
    },
    {
        path: 'formCharacter/:id', 
        component: FormCharacterComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
