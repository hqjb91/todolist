import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../model/formData';
import { DateValidator } from '../DateValidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  formInput: FormData;
  @Output() dataEmit = new EventEmitter<FormData>();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      desc: this.fb.control('', [Validators.required]),
      priority: this.fb.control('high', []),
      duedate: this.fb.control('', [Validators.required, DateValidator])
    });
  }

  processForm(){
    this.formInput = new FormData(this.form.value.desc,this.form.value.priority,this.form.value.duedate, Math.random());
    this.dataEmit.next(this.formInput);
  }
}
