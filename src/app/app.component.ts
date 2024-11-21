import {Component, OnInit} from '@angular/core';
import {PraticienComponent} from './praticien/praticien.component';
import {Praticien} from './models/praticien';
import {HeaderComponent} from './header/header.component';
import {PraticienListComponent} from './praticien-list/praticien-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticienComponent, HeaderComponent, PraticienListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
