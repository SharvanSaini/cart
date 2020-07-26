import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addcategory:FormGroup;
  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService) { }

  ngOnInit() {
    this.addcategory=this.fb.group(
      {
        "categoryname":[null,Validators.required],
        "images":[null,Validators.required],
      }
    );
  }


  


  addcategorys(data)
  {
    console.log(data);
    console.log(data['images']);
    this.appservice.addcategory(this.addcategory.value).subscribe(data=>
      {
        console.log("add category");
      })
  }

}
