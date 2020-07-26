import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Categorys:any[];
  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService) { }

  ngOnInit() {
    this.getallcategory();
  }
  getallcategory()
  {
    console.log("get all category");
    this.appservice.getallcategory().subscribe(data=>
      {
        console.log("get all category");
        console.log(data);
        this.Categorys=data.Categorys;
        console.log(this.Categorys);
      });
  }
}
