import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Imports components
import { AComponent  } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  name: string = "fionn"
  age: number = 21
}
