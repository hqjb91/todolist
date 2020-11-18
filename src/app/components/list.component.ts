import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../model/formData';
import { DateValidator } from '../DateValidator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() dataReceived: FormData[];
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      desc: this.fb.control('', [Validators.required]),
      priority: this.fb.control('high', []),
      duedate: this.fb.control('', [Validators.required, DateValidator]),
      taskID: this.fb.control('')
    })
  }

  deleteTask(taskID:number){
    for(let task of this.dataReceived){
      if(task.taskID === taskID){
        this.dataReceived.splice(this.dataReceived.indexOf(task), 1);
      }
    }
  }

  setCompleted(taskID:number){
    for(let task of this.dataReceived){
      if(task.taskID === taskID){
        task.completed = true;
      }
    }
  }

  editTask(taskID:number){
    for(let task of this.dataReceived){
      if(task.taskID === taskID){
        task.toEdit = true;
      }
    }
  }

  processForm(){
    console.log(this.form);
    for(let task of this.dataReceived){
      if(task.taskID === this.form.value.taskID){
        task.desc = this.form.value.desc;
        task.priority = this.form.value.priority;
        task.duedate = this.form.value.duedate;
        task.toEdit = false;
      }
    }
  }

  ngOnDestroy(): void {
    const dataToSave: string = JSON.stringify(this.dataReceived);
    console.log(dataToSave);
    localStorage.setItem('tasksList', dataToSave);
  }
}
