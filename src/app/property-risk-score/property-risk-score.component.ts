import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-risk-score',
  templateUrl: './property-risk-score.component.html',
  styleUrls: ['./property-risk-score.component.scss']
})
export class PropertyRiskScoreComponent implements OnInit {
  square_feet_length: number;
  square_feet_width: number;
  square_footage: number;
  home_loan_amount: number;
  annual_IR: number;
  mortage_payment: number;
  loan_terms: number;
  interest_rate: number;
  loanTerms = ['5', '10', '15', '20', '30', '40', '50'];

  constructor() { }

  ngOnInit(): void {
  }

  calculateSquareFootage(): void {
    this.square_footage = this.square_feet_length * this.square_feet_width;
  }

  calculateMortagePayment(): void {
    const term = +(this.loan_terms * 12);
    this.interest_rate = +((this.annual_IR/100)/12);
    const calc1 = Math.pow(1 + this.interest_rate, term);
    const calc2 = Math.pow(1 + this.interest_rate, term);
    const calc3 = this.interest_rate * calc1;
    this.mortage_payment = +(+this.home_loan_amount * calc3/(calc2 - 1)).toFixed(2);
  }

}
