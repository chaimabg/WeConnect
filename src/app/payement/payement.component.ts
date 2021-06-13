import { Component, OnInit } from '@angular/core';
import {SpaceService} from "../services/space.service";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PaymentInfoService} from "../services/payment-info.service";

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
success:any;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  get form(){ return this.paiementForm.controls;
  }

  public paiementForm = this.fb.group({
    name : ['', Validators.required ],
    cardNumber : ['', [Validators.required, Validators.pattern('^[0-9]{16}$')] ],
    cvc : ['', [Validators.required, Validators.pattern('^[0-9]{3}$')] ],
    mm : ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')] ],
    yyyy : ['', [Validators.required, Validators.pattern('^[0-9]{4}$')] ]

  });
  error!: string;

  onSubmit(){
    const data = {
      nameOnCard: this.paiementForm.value.name,
      cardNumber: this.paiementForm.value.cardNumber,
      cvc: this.paiementForm.value.cvc,
      mm: this.paiementForm.value.mm,
      yyyy : this.paiementForm.value.yyyy
    };
    console.log(data);
  this.success='Space reserved successfully !'
  }
  ngOnInit(): void {
  }

}

