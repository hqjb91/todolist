import { Component, OnInit } from '@angular/core';
import { FormData } from './model/formData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todolist';
  dataPassToList: FormData[] = [];

  ngOnInit(){
    const dataToLoad = JSON.parse(localStorage.getItem('tasksList'));
    console.log(dataToLoad);
    this.dataPassToList = dataToLoad;
  }

  sendDataToParent(event: FormData){
    this.dataPassToList.push({
      toEdit: false,
      completed: false,
      desc: event.desc,
      priority: event.priority,
      duedate: event.duedate,
      taskID: event.taskID
    });
  }
}
