// app.component.ts

import { Component } from '@angular/core';
import { Computer } from './Computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public computer: Computer;

    constructor()
    // tslint:disable-next-line:one-line
    {
        this.computer = new Computer();
    }
  makeComputer()
  // tslint:disable-next-line:one-line
  {
    return this.computer.complete();
  }
}
