import { v4 as uuidv4 } from 'uuid';
import {PraticienStatut} from './praticien-statut.type';



export class Praticien {
              public id: string
  constructor(public imageUrl: string,
              public nom: string,
              public prenom: string,
              public adresse: string,
              public cp: string,
              public ville: string,
              public statut: PraticienStatut,
             ) {
    this.id = uuidv4().substring(0, 8);
  }

  // ajout de la méthode onModificationStatut()


  modifierStatut(statut: PraticienStatut) {
    if (statut == 'À visiter') {
      this.statut = 'Déjà visité'
    } else {
      this.statut = 'À visiter'
    }

  }


}
