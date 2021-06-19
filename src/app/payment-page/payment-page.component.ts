import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Space } from '../models/Space';
import { PaymentInfoService } from '../services/payment-info.service';
import { SpaceService } from '../services/space.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private spaceService: SpaceService,private fb: FormBuilder, private http: HttpClient, private router: Router, private paymentInfoService:PaymentInfoService) { }
  get form(){ return this.paymentForm.controls;
  }

  public paymentForm = this.fb.group({
    name : ['', Validators.required ],
    cardNumber : ['', [Validators.required, Validators.pattern('^[0-9]{16}$')] ],
    cvc : ['', [Validators.required, Validators.pattern('^[0-9]{3}$')] ],
    mm : ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')] ],
    yyyy : ['', [Validators.required, Validators.pattern('^[0-9]{4}$')] ]

 });
 error!: string;

 onSubmit(){
    const data = {
      nameOnCard: this.paymentForm.value.name,
      cardNumber: this.paymentForm.value.cardNumber,
      cvc: this.paymentForm.value.cvc,
      mm: this.paymentForm.value.mm,
      yyyy : this.paymentForm.value.yyyy
    };
    console.log(data);
    this.paymentInfoService.get(data.cardNumber).subscribe(datas =>{
      if (datas.nameOnCard != data.nameOnCard){
        this.error = "Incorrect Name On Card!";
      }
      if (datas.cvc != data.cvc){
        this.error = "Incorrect  cvc!";
      }
      if (datas.mm != data.mm){
        this.error = "Incorrect  mm";
      }
      if (datas.yyyy != data.yyyy){
        this.error = "Incorrect  yyyy";
      }
      if (datas.sold < 200.0 ){
        this.error = "Insufficient Sold";
      }
    });
    this.paymentInfoService.updatePaymentInfos(200,data).subscribe(datas=>{
      console.log(datas);
      console.log(this.spaceService.spaceToAdd);
      console.log(this.spaceService.userId);
      this.spaceService.postSpace(this.spaceService.spaceToAdd,this.spaceService.userId,this.spaceService.pictureToAdd).subscribe(res => {
      console.log(res);
      console.log(this.spaceService.spaceToAdd);
      this.spaceService.submitted = "Space added with success";
        console.log("success");
        console.log(this.spaceService.submitted);
           this.router.navigate(['/coworkingspaces']).then(r => {
            //window.location.reload();


           });


    },(err: any) => {
      console.log(err);
    });

    }, (err)=>{
      console.log(err);
    })


 }
  ngOnInit(): void {
  }

}
