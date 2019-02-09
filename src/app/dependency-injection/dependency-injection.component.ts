import { Component, OnInit } from '@angular/core';
import { PopcornServiceService } from './popcorn-service.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [PopcornServiceService] 
})
export class DependencyInjectionComponent implements OnInit {

   ngOnInit(): void { 
       
   } 
   constructor(private popcorn: PopcornServiceService) {}

  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }

}
