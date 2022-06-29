import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('data') data: any[] = [];
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event) {
    this.change.emit(event);
  }

}
