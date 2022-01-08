import { Injectable } from '@angular/core';
import {Task}from '../Tasks';
import {Tasks}from '../Mock-Tasks';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
private  apiUrl = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
