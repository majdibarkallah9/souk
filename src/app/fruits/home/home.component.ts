
import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  allFruits: Fruits[] = [];

  
  constructor(private fruitService: FruitsService) { }

  ngOnInit(): void { 
    console.log("hello");
     this.get();
  }
 
  get() {
    this.fruitService.get().subscribe((data) => {
      console.log("data : ", data);
      this.allFruits = data;
    });
  }
}
  
