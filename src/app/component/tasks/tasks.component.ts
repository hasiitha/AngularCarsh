
import { Component, OnInit } from '@angular/core';
import {TaskServiceService}from '../../service/task-service.service';
import {Task} from '../../Tasks';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] =[];


  constructor(private taskService:TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
     this.tasks = tasks;

    })
  }

}
