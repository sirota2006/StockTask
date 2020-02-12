import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Output() optionSelected: EventEmitter<string> = new EventEmitter();
  @Input() options: string[];
  @Input() selectTitle: string;
  faSortDown = faSortDown;
  constructor() { }

  ngOnInit() {
  }

  onSelect(option: string) {
    this.optionSelected.emit(option);
  }

}
