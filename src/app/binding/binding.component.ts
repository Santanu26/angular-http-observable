import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  public name = "HP LAPTOP";


  OnClick(event) {
    console.log(event);

  }



}
