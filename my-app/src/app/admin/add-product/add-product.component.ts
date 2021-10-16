import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'productCode': new FormControl(Number, Validators.required),
      'productName': new FormControl(null, Validators.required),
      'productSinger': new FormControl(null, Validators.required),
      "productCategory": new FormControl(null),
      "imageUrl": new FormControl('https://lh3.googleusercontent.com/ab')
    })

  }
  onSubmit() {
    console.log(this.productForm);
  }

}
