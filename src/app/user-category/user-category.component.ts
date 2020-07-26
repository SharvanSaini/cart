import { Component, OnInit } from '@angular/core';
import { AppControllerService } from '../app-controller.service';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  Categorys:any[];

  constructor(private appservice:AppControllerService) { }

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