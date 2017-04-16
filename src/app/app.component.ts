import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <h2>Goodbye {{name}}</h2>
            <h3>I'm back!</h3>
            <h4>No seriously, I'm back</h4>
            <i class="fa fa-star fa-2x" aria-hidden="true"></i>
  `,
  styleUrls: ['styles.css']
})
export class AppComponent  { name = 'Angular'; }
