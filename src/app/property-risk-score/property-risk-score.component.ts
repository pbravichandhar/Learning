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

  constructor() { }

  ngOnInit(): void {
  }

  calculateSquareFootage(): void {
    this.square_footage = this.square_feet_length * this.square_feet_width;
  }

}
