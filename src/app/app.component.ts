import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabsDetailsComponent } from './labs-details.component';

@Component({
  selector: 'lgc-labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lgc-labs';
  labTypes = ['small','medium','large'];
  labForm : FormGroup;


  private labsArray = [];
  submitted = false;
  ngOnInit(){
    this.labForm = new FormGroup({
      'labName': new FormControl('',[Validators.required,Validators.maxLength(30)]),
      'labSize': new FormControl('',Validators.required),
      'isJoining': new FormControl(true)
    })
  }

  onRowEdit(event){
    var data = this.labsArray[event.index];
console.log(this.labsArray[event.index]);
this.labForm.setValue({
  'labName':data.labName,
  'labSize':data.labSize,
  'isJoining':data.isJoining =='yes' 
});
  }

  onSubmit(value){
    console.log(this.labForm);
    if(this.labForm.valid){
    this.submitted = true;
  
    this.labsArray.push({
'labName':this.labForm.value.labName,
'labSize':this.labForm.value.labSize,
'isJoining':this.labForm.value.isJoining ? 'yes' :'no'   });
   /* this.labs.name.push(this.labForm.value.labName);
    this.labs.type.push(this.labForm.value.labSize);
    this.labs.isJoining.push(this.labForm.value.isJoining);*/
    this.labForm.reset();
    }
  }
}
