import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  @Input()
  gameLabel: string = '';
  showCardLabel: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.gameLabel != '')
      this.showCardLabel = true;
  }

}
