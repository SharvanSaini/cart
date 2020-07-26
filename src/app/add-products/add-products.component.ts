import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  
  catid:any;

  addproduct:FormGroup;
  allcategory:string;
  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService,private arouter:ActivatedRoute) { }

  ngOnInit() {
    this.addproduct=this.fb.group(
      {
        "productname":[null,Validators.required],
        "quantity":[null,Validators.required],
        "prize":[null,Validators.required],
        "category":[null,Validators.required],
        "images":[null,Validators.required],
      }
    );

    this.getallcategory();
  }

  getallcategory()
  {
    console.log("get all category");
    this.appservice.getallcategory().subscribe(data=>
      {
        console.log("get all category");
        console.log(data);
        this.allcategory=data;
        console.log(this.allcategory);
        // console.log(this.allcategory['categoryname']+"data get");
      })
  }


  addproducts(data)
  {
    console.log(data);
    this.appservice.addproduct(this.addproduct.value).subscribe(data=>
      {
        console.log("data saved");
      })
  }

}
