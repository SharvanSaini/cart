import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category:any;

  product:any[];

  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService,private aroute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    // this.getallproducts();

    this.category=this.aroute.snapshot.queryParams['cat'];    
    // this.aroute.paramMap.subscribe((params:ParamMap)=>
    // {
    //   console.log(params);
    //   this.category=params.get['cat'];
    //   console.log(this.category);
    // })
    console.log(this.category);
    this.getproductsbycatname();
  }

  getproductsbycatname()
  {
    this.appservice.getproductbycatename(this.category).subscribe(data=>
      {
        console.log(data);
        this.product=data;
        console.log(this.product);
      });
  }

  // getallproducts()
  // {
  //   this.appservice.getallproduct().subscribe(data=>
  //     {
  //       console.log(data);
  //       this.product=data.product;
  //       console.log(this.product);
  //     });
  // }

}