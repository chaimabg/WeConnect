import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
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

 }
  ngOnInit(): void {
  }

}
