import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAgency';
  sold = false;

  properties = [
    {
      title: 'Ma super maison',
      category: 'House',
      sold: true
    },
    {
      title: 'Little apartment',
      category: 'Apartment',
      sold: false
    },
    {
      title: 'Beautiful villa',
      category: 'House',
      sold: true
    },
  ];

  getSoldValue(index){
    if (this.properties[index].sold){
      return 'red';
    } else {
      return 'green';
    }
  }
}
