import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css']
})
export class UserAddToCartComponent implements OnInit {
  addtocart:any;

  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService,private aroute:ActivatedRoute) { 
  }
  ngOnInit() {  
    this.getproductbycart();
  }

 getproductbycart()
 {
  this.appservice.getprodaddtocart().subscribe(data=>{
    console.log(data);
    this.addtocart=data;
  })
 }

}