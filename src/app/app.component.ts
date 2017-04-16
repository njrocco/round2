import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<div class="jumbotron">
  <div class="text-center">
    <h1>Ratings</h1>
  </div> 

  <div class="text-center">
    <i class="fa fa-star fa" aria-hidden="true"></i>
    <i class="fa fa-star fa" aria-hidden="true"></i>
    <i class="fa fa-star fa" aria-hidden="true"></i>
    <i class="fa fa-star fa" aria-hidden="true"></i>
    <i class="fa fa-star fa" aria-hidden="true"></i>
  </div>
</div>
  `,
  styleUrls: ['styles.css']
})
export class AppComponent  { name = 'Angular'; }
