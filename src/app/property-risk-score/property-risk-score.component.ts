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

  gross_yield_annual_income: number;
  gross_yield_purchase_price: number;
  gross_yield: number;

  dsr_gross_profit: number;
  dsr_maintenance_amount: number;
  dsr_interest_expense: number;
  debt_service_ratio: number;
  rental_income: number;
  other_income: number;
  vacancy_loss: number;
  NOI: number;
  cap_rate: number;
  other_expense_loss: number;
  present_market_value: number;

  purchase_price: number;
  renovation_price: number;
  repair_costs: number;
  arv_value: number;
  arv_percent_value: number;

  annual_rent: number;
  mortgage_payment: number;
  down_payment: number;
  fees_paid: number;
  cash_on_cash: number;

  property_total_price: number;
  annual_rent_of_property: number;
  rent_cost_ratio: number;
  
  arv_purchase_price: number;
  arv_renovation_price: number;
  after_repair_value: number;

  payment_calc_type = 'Mortage';
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

  calculateCapRate(): void {
    this.NOI = (+this.rental_income + +this.other_income) - (+this.vacancy_loss + +this.other_expense_loss);
    this.cap_rate = +((this.NOI / this.present_market_value) * 100).toFixed(2);
  }

  calculateARVRate(): void {
    this.arv_value = +this.purchase_price + +this.renovation_price;
    this.arv_percent_value = (this.arv_value * 0.70) - this.repair_costs;
  }

  calculateCashOnCashRate(): void {
    this.cash_on_cash = +((this.annual_rent - this.mortgage_payment) / (+this.down_payment + +this.fees_paid) * 100).toFixed(2);
  }

  calculateGrossYield(): void {
    this.gross_yield = (this.gross_yield_annual_income / this.gross_yield_purchase_price) * 100;
  }

  calculateDebtServiceRatio(): void {
    this.debt_service_ratio = (this.dsr_gross_profit - this.dsr_maintenance_amount) / this.dsr_interest_expense;
  }

  calculateRentCostRatio(): void {
    this.rent_cost_ratio = +(this.property_total_price / this.annual_rent_of_property).toFixed(2);
  }

  calculateAfterRepairValue(): void {
    this.after_repair_value = (+this.arv_purchase_price +  +this.arv_renovation_price);
  }

  paymentCalc(value) {
    this.payment_calc_type = value;
  }
}
