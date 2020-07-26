import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  product:any[];

  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService,private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.getallproducts();
  }

  getallproducts()
  {
    this.appservice.getallproduct().subscribe(data=>
      {
        console.log(data);
        this.product=data.product;
        console.log(this.product);
      });
  }


  gotoaddtocart(data)
  {
    this.appservice.storaddtocart(data).subscribe(check=>
      {
        console.log(check);
      });     
  }

  goBuy(data)
  {
    this.route.navigate(['buyproduct',data]);
  }
}
