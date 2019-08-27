import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductdisplayComponent } from "./productdisplay.component";
import { ProductaddComponent } from "./productadd/productadd.component";
import { EditproductComponent } from "./editproduct/editproduct.component";

import { prodcutrouting } from './product.routing';
import { EditproductreactiveComponent } from './editproductreactive/editproductreactive.component';

@NgModule({
  declarations: [
    ProductdisplayComponent,
    ProductaddComponent,
    EditproductComponent,
    EditproductreactiveComponent,

  ],
  imports: [CommonModule, FormsModule, prodcutrouting]
})
export class ProductModule {}
