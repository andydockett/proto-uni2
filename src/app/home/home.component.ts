import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
    <img [src]="image">
    <div *ngFor="let person of persons">
        <p>{{person.name}}</p> <!-- this works fine-->
        <p *ngFor="let color of person.colors"> <!--I want to list the colors of the person here-->
           {{color.name}}
        </p>
      </div>

  `
})
export class HomeComponent {
  public message = `Angular Universal`;

  // tslint:disable-next-line:max-line-length
  public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

  constructor() {

    
  }

  persons = [
    {
      "name": "Mike",
      "colors": [
        {"name": "blue"},
        {"name": "white"}
      ]
    },
  
    {
      "name": "Phoebe",
      "colors": [
        {"name": "red"},
        {"name": "yellow"}
      ]
    }
    ];
}
