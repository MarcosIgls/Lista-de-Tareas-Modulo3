import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
