import {Component, OnInit} from '@angular/core';
import {PraticienComponent} from './praticien/praticien.component';
import {Praticien} from './models/praticien';
import {HeaderComponent} from './header/header.component';
import { RouterOutlet } from '@angular/router';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticienComponent, HeaderComponent, RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
