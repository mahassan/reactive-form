import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'lgc-labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lgc-labs';
  labForm : FormGroup;
  labs = {
    Id:'',
    name : ''
  }

  ngOnInit(){
    this.labForm = new FormGroup({
      'labName': new FormControl(null,[Validators.required,Validators.maxLength(30)])
    })
  }

  onSubmit(){
    console.log(this.labForm);
    //console.log(this.labs.Id += ;
    this.labs.name = this.labForm.value.labName;
    this.labForm.reset();
  }

}
