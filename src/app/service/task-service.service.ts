import { Injectable } from '@angular/core';
import {Task}from '../Tasks';
import {Tasks}from '../Mock-Tasks'
import {Observable,of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  getTasks():Observable<Task[]>{
    const tasks = of(Tasks);
    return tasks;

  }
}
