import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HomeChildComponent } from './homechild.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(HomeChildComponent) child;
  selectedFile: null;
  message: string;
  value: number;
  disBtn: boolean;
  denominations = [2000, 500, 100];
  currancyValue = { '2000': 0, '500': 0, '100': 0 };
  remaining: number;

  //Tic tac toe
  blockArray = [];
  evenArray = [];
  oddArray = [];
  winnerArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]];
  isFirstPlayer = true;
  divContent =  [];

  constructor() { }


  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  ngAfterViewInit() {
    this.message = this.child.message;
  }
  activate() {
    this.disBtn = true;
    let n = this.value;
    while (n > 0) {
      while ((n > 4000)) {
        this.currancyValue['2000']++;
        n = n - 2000;
      }
      while ((n >= 1000) && (n <= 4000)) {
        this.currancyValue['500']++;
        n = n - 500;
      }
      while ((n >= 100) && (n < 1000)) {
        this.currancyValue['100']++;
        n = n - 100;
      }
      this.remaining = n;
      n = 0;
    }
  }
  clear() {
    this.currancyValue['2000'] = 0;
    this.currancyValue['500'] = 0;
    this.currancyValue['100'] = 0
    this.disBtn = false;
  }
  toggle() {
    this.isFirstPlayer = !this.isFirstPlayer;
  }

  ticTacClick(blockNumber) {
    if (!_.includes(this.blockArray, blockNumber)) {
      this.blockArray.push(blockNumber);
      this.switchImage(blockNumber, this.isFirstPlayer);
      let index = 1;
      this.isFirstPlayer ? this.oddArray.push(blockNumber) : this.evenArray.push(blockNumber);
      this.toggle();
      if (this.blockArray.length >= 5) {
        this.oddArray.sort();
        this.evenArray.sort();
        if (this.winnerConclusion(this.oddArray,1)) {
          this.initializeBlock(true);
        } else if (this.winnerConclusion(this.evenArray,2)) {
          this.initializeBlock(false);
        }
      }
    } else {
      alert('This Block already selected');
    }
  }

  initializeBlock(isPlayerOne) {
    if(isPlayerOne === true) {
      this.message = 'Player 1 wins'
    } else if (isPlayerOne === false) {
      this.message = 'Player 2 wins'
    } else {
      this.message = '';
    }
      this.oddArray = [];
      this.evenArray = [];
      this.blockArray = [];
    for(let i = 0; i <= 9; i++) {
      this.divContent[i] = '';
    }
  }

  winnerConclusion(userInput, player) {
    let found = [];
    let confirmFound
    this.winnerArray.forEach(singleSolution => {
      if (_.difference(singleSolution, userInput).length === 0) {
        found.push(true);
      }
    });
    return _.includes(found, true)?  true:  false;
  }
  switchImage(no, isFirst) {
    
    isFirst ? this.divContent[no] = 'X': this.divContent[no] = 'O';  
  }
  a(event){
    console.log(event);
  }
}
