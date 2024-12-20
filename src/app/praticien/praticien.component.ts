import {Component, Input, OnInit} from '@angular/core';
import {Praticien} from '../models/praticien';
import {NgStyle, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {gsbService} from '../services/gsb.service';


@Component({
  selector: 'app-praticien',
  standalone: true,
  imports: [NgStyle, TitleCasePipe, UpperCasePipe],
  templateUrl: './praticien.component.html',
  styleUrl: './praticien.component.scss'
})
export class PraticienComponent{



  @Input() praticien!: Praticien;




  // imageUrl!: string;
  // nom!: string;
  // prenom!: string;
  // adresse!: string;
  // cp!: string;
  // ville!: string;
  // statut!: string;
  // /* à completer*/

  // ngOnInit() {
  //   this.imageUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  //   this.nom = 'Doe';
  //   this.prenom = 'John';
  //   this.adresse = '1 rue des malades';
  //   this.cp = '75000';
  //   this.ville = 'Paris';
  //   this.statut = 'À visiter';
  //   /* à completer */
  // }


  onModificationStatut() {
    this.gsbService.modificationStatutById(this.praticien.id, this.praticien.statut);
  }


  constructor(public gsbService : gsbService) {}


}
