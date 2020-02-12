import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockEntity} from '../../state';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  @Output() removeStock: EventEmitter<void> = new EventEmitter();
  @Input() stock: StockEntity;

  faTrash = faTrash;
  constructor() { }

  ngOnInit() {
  }

  onRemoveStock() {
    this.removeStock.emit();
  }

}
