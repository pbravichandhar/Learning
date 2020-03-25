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
  gross_yield_annual_income: number;
  gross_yield_purchase_price: number;
  gross_yield: number;
  dsr_gross_profit: number;
  dsr_maintenance_amount: number;
  dsr_interest_expense: number;
  debt_service_ratio: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculateSquareFootage(): void {
    this.square_footage = this.square_feet_length * this.square_feet_width;
  }

  calculateGrossYield(): void {
    this.gross_yield = (this.gross_yield_annual_income / this.gross_yield_purchase_price) * 100;
  }

  calculateDebtServiceRatio(): void {
    this.debt_service_ratio = (this.dsr_gross_profit - this.dsr_maintenance_amount) / this.dsr_interest_expense
  }

}
