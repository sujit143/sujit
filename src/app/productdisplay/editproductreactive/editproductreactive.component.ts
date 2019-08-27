import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editproductreactive',
  templateUrl: './editproductreactive.component.html',
  styleUrls: ['./editproductreactive.component.css']
})
export class EditproductreactiveComponent implements OnInit {
  signup3: FormGroup;
  pro_id: number;
  displayProduct: Product;
  constructor(
    private _act: ActivatedRoute,
    private data: ProductdataService,
    // private _taskdata: TaskdataService,
    private fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.pro_id = this._act.snapshot.params['pro_id'];
    this.data.getProductById(this.pro_id).subscribe((data: Product[]) => {
    // this._taskdata.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayProduct = data[0];
      this.signup3.patchValue({
        pro_name: this.displayProduct.pro_name,
        pro_price: this.displayProduct.pro_price,
        pro_desc: this.displayProduct.pro_desc,
        pro_qty: this.displayProduct.pro_qty,
        pro_mfg: this.displayProduct.pro_mfg,
        pro_img: this.displayProduct.pro_img


      });
    });
    this.signup3 = this.fb.group({
      pro_id: new FormControl(null),

      pro_name: new FormControl(null),

    pro_price: new FormControl(null),

    pro_desc: new FormControl(null),

    pro_qty: new FormControl(null),

    pro_mfg: new FormControl(null),

    pro_img: new FormControl(null)

    });
  }


  onProductEdit() {
      this.data

        .editProduct(this.pro_id,
          new Product(
            this.signup3.value.pro_id,
            this.signup3.value.pro_name,

            this.signup3.value.pro_price,
            this.signup3.value.pro_desc,

            this.signup3.value.pro_qty,

            this.signup3.value.pro_mfg,
            this.signup3.value.pro_img

          )
        )

      .subscribe(
        (data: any) => {

          this._router.navigate(['/product']);
          alert('updated');

        }
      );
  }

//   id: number;
//   name: string = "";
//   desc: string = "";
//   price: number;
//   qty: number;
//   mfg: string = "";
//   img: string = "";
//   constructor(
//     private _act: ActivatedRoute,
//     private _data: ProductdataService
//   ) {}

//   ngOnInit() {
//     this.id = this._act.snapshot.params["pro_id"];

//     this._data.getProductById(this.id).subscribe(
//       (data: Product[]) => {
//         this.name=data[0].pro_name;
//         this.price=data[0].pro_price;
//         this.desc=data[0].pro_desc;
//         this.mfg=data[0].pro_mfg;
//         this.qty=data[0].pro_qty;
//         this.img=data[0].pro_img;
//     });
//   }
//   onEditProduct(f){
//       this._data.editProduct(this.id,f.value).subscribe(
//         (data:any)=>{
//           alert('updated');
//         }
//       );
//   }


// }
}
