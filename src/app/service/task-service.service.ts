import { Injectable } from '@angular/core';
import {Task}from '../Tasks';
import {Tasks}from '../Mock-Tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  getTasks():Task[]{
    return Tasks;
  }
}
