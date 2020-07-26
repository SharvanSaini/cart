import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule }  from 'ng6-toastr-notificateions';
import { Router,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';
import { WelcomeAdminPageComponent } from './welcome-admin-page/welcome-admin-page.component';
import { UserYourOrdersComponent } from './user-your-orders/user-your-orders.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCategoryComponent } from './user-category/user-category.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { ProductsComponent } from './products/products.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryComponent } from './category/category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeUserPageComponent,
    WelcomeAdminPageComponent,
    UserYourOrdersComponent,
    UserProductsComponent,
    UserLoginComponent,
    UserCategoryComponent,
    UserAddToCartComponent,
    ProductsComponent,
    FrontPageComponent,
    CategoryComponent,
    AdminLoginComponent,
    AddProductsComponent,
    AddCategoryComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'',redirectTo:'front',pathMatch:'full'
        },
        {
          path:'front',component:FrontPageComponent,
          children:[
            {
              path:'userlogin',component:UserLoginComponent
            },
            {
              path:'adminlogin',component:AdminLoginComponent
            },
          ]
        },
        {
          path:'WelcomeLogin',component:WelcomeUserPageComponent,
          children:[
            {
              path:'products',component:UserProductsComponent
            },
            {
              path:'category',component:UserCategoryComponent
            },
            {
              path:'addtocart',component:UserAddToCartComponent
            },
            {
              path:'yourouders',component:UserYourOrdersComponent
            }
          ]
        },
        {
          path:'WelcomAdmin',component:WelcomeAdminPageComponent,
          children:[
            {
              path:'products',component:ProductsComponent
            },
            {
              path:'category',component:CategoryComponent,
              children:[
                {
                  path:'productbyid',component:ProductsComponent
                }
              ]
            },
            {
              path:'addproducts',component:AddProductsComponent
            },
            {
              path:'addcategory',component:AddCategoryComponent
            },
            
          ]
        },
        // {
        //   path:'productbyid',component:ProductsComponent
        // }
        // {
        //   path:'AdminHome',component:WelcomeAdminPageComponent,
        //   children:[
        //     {
        //       path:'products',component:ProductsComponent
        //     },
        //     {
        //       path:'category',component:CategoryComponent
        //     },
        //     {
        //       path:'addproducts',component:AddProductsComponent
        //     },
        //     {
        //       path:'addcategory',component:AddCategoryComponent
        //     },
        //     {
        //       path:'productbyid',component:ProductsComponent
        //     }
        //   ]
        // },
      ]
    )
  ],

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
