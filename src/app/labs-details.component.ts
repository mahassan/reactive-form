import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'labs-details',
    templateUrl:'labs-details.component.html'
})

export class LabsDetailsComponent{
  @Input('data') data: any;
  @Output('edit-this') editDataRow = new EventEmitter<any>();

  editRow(index){
    var row = this.data[index];
    this.editDataRow.emit({'index' : index});
  }
}