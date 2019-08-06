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

const arr : Routes=[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'task',component:TaskdisplayComponent},
  {path:'addtask',component:TaskaddComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
