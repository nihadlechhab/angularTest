import { Component } from '@angular/core';

@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.component.html',
  styleUrls: ['./clinets.component.scss']
})
export class ClinetsComponent {

  clientList = [
   {
    idC:10,
    fn:'nihad',
    ln: 'lechhab ouadrassi'
   },

   {
    idC:11,
    fn:'malak',
    ln: 'lechhab ouadrassi'
   },

   {
    idC:12,
    fn:'yassine',
    ln: 'lechhab ouadrassi'
   }

  ]

}
