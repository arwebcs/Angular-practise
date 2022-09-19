import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goods-entry',
  templateUrl: './goods-entry.component.html',
  styleUrls: ['./goods-entry.component.css'],
})
export class GoodsEntryComponent implements OnInit {
  constructor() {}

  @Output() gname = new EventEmitter<string>();

  ngOnInit(): void {
    this.gname.emit('Hi goods');
  }
}
