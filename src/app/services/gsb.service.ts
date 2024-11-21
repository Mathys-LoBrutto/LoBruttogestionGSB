import { Injectable } from "@angular/core";
import { Praticien} from '../models/praticien';
import {PraticienStatut} from '../models/praticien-statut.type';

@Injectable({
  providedIn: 'root'
})
export class gsbService {
  private praticiens: Praticien[] = [
    new Praticien('https://www.w3schools.com/howto/img_avatar2.png', 'Smith', 'Anna', '10 rue de la Santé', '75001', 'Paris', 'À visiter'),
    new Praticien('https://www.w3schools.com/howto/img_avatar.png', 'Brown', 'James', '20 rue de la Médecine', '75002', 'Paris', 'À visiter'),
    new Praticien('https://www.w3schools.com/w3images/avatar6.png', 'Johnson', 'Emily', '30 rue des Hôpitaux', '75003', 'Paris', 'Déjà visité'),
  ];

  getPraticiens() : Praticien[] {
    return [...this.praticiens];
  }

  modificationStatutById(id: string, statut: PraticienStatut) {
    const praticien = this.praticiens.find(praticien => praticien.id === id);
    if (!praticien) {
      throw new Error('Praticien non trouvé');
    }
    praticien.modifierStatut(statut)

  }

  getPraticienInfoStyle(statut: PraticienStatut) {
    return {
      "color": statut === 'À visiter' ? 'red' : 'green'
    };
  }
}
