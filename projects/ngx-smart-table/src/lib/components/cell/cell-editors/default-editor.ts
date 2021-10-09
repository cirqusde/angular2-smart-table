import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  template: '',
})
export class DefaultEditor implements Editor {
  @Input() cell: Cell;
  @Input() inputClass: string;

  @Output() onStopEditing = new EventEmitter<any>();
  @Output() onEdited = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  get disableEnterKeySave(): boolean {
    return this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().disableEnterKeySave;
  }
}

export interface Editor {
  cell: Cell;
  inputClass: string;
  onStopEditing: EventEmitter<any>;
  onEdited: EventEmitter<any>;
  onClick: EventEmitter<any>;
}