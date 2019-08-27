import { Routes,RouterModule } from "@angular/router";
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdisplayComponent } from './productdisplay.component';
const arr : Routes=[
 {path:'addproduct',  component:ProductaddComponent},
 {path:'editproduct/:pro_id',component:EditproductComponent},
 {path:'product',component:ProductdisplayComponent}
];
export const prodcutrouting=RouterModule.forChild(arr);
