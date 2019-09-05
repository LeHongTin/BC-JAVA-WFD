import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = "Dog";
  petImage = "images/cho.jpg";

  constructor() { }

  updateName(name){
    this.petName = name;
  }

  updateImage(image){
    this.petImage = image;
  }

  ngOnInit() {
  }

}
