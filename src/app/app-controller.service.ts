import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppControllerService 
{

  BaseUrl="http://localhost:8902";

  constructor(private httpc:HttpClient) { }

  chelogin(data):Observable <any>
  {
    console.log(data);
    let url=this.BaseUrl+"/userlogin";
    return this.httpc.post(url,data);
  }

  adminlogin(data):Observable<any>
  {
    console.log(data);
    let url=this.BaseUrl+"/adminlogin";
    return this.httpc.post(url,data);
  }

  addproduct(data):Observable<any>
  {
    console.log("service "+data);
    console.log("service "+data['productname']);

    let url=this.BaseUrl+"/addproduct";
    return this.httpc.post(url,data);
  }

  addcategory(data):Observable<any>
  {
    console.log(data);
    console.log(data['categoryname']);
    let url=this.BaseUrl+"/addcategory";
    return this.httpc.post(url,data);
  }

  getallcategory():Observable <any>
  {
    console.log("get all category");
    let url=this.BaseUrl+"/getallcategory";
    return this.httpc.get(url);
  }

  getallproduct():Observable<any>
  {
    console.log("data get to start");
    let url=this.BaseUrl+"/getallproducts";
    return this.httpc.get(url);
  }

//getproductsbycatname
  getproductbycatename(data):Observable<any>
  {
    console.log(data);
    let url=this.BaseUrl+"/getcategorybyname?category="+data;
    console.log(url);
    return this.httpc.get(url);
  }

  getproductbyId(data):Observable<any>
  {
    console.log(data);
    let url=this.BaseUrl+"/getproductbyid?productid="+data;
    console.log(url);
    return this.httpc.get(url);
  }

  storaddtocart(data):Observable<any>
  {
    console.log(data);
    console.log(data['productname']);
    let url=this.BaseUrl+"/storaddtocart";
    console.log(url);
    return this.httpc.post(url,data);
  }

  getprodaddtocart()
  {
    console.log("data are got");
    let url=this.BaseUrl+"/getprodaddtocart";
    console.log(url);
    return this.httpc.get(url);
  }


}
