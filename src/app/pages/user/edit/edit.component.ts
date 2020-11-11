import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {

  @Input() valueTf;
  @Output() closeEdit = new EventEmitter

  close(){
    this.closeEdit.emit()
  }
}
