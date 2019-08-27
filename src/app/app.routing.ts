import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { UsersComponent } from './users/users.component';
import { UserResolverService } from './user-resolver.service';
import { Product1Component } from './product1/product1.component';
import { ProductResolverService } from './product-resolver.service';
import { HomeComponent } from './home/home.component';
import { EditaskreactiveComponent } from './taskdisplay/editaskreactive/editaskreactive.component';
import { EditproductreactiveComponent } from './productdisplay/editproductreactive/editproductreactive.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product',component:ProductdisplayComponent},
  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'addproduct',canActivate:[UserGuardService],component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'editproductreactive/:pro_id',component:EditproductreactiveComponent},
  {path:'customer',canActivate:[UserGuardService],component:CustomerComponent},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  {path:'users',canActivate:[UserGuardService],component:UserdisplayComponent},
  {path:'user1', resolve:{uData:UserResolverService}, component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'demo',canActivate:[UserGuardService],component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'signup',canActivate:[UserGuardService],component:SignupComponent},
  {path:'task',canActivate:[UserGuardService],component:TaskdisplayComponent},
  {path:'addtask',canActivate:[UserGuardService],component:TaskaddComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'editaskreactive/:Id',component:EditaskreactiveComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
