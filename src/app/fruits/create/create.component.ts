import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit { fruitForm: Fruits = {
  id: 0,
  name: '',
  price: 0,
  quantity: 0,
};

  constructor(private fruitService:FruitsService,
    private router:Router) {}

  ngOnInit(): void {
  }

}
