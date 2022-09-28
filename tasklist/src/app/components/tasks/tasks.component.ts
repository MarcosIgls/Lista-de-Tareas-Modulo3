import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { from, Observable, of} from 'rxjs';
import { TaskService } from '../../service/task.service';
import { task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = [];

  constructor(
    private Taskservice: TaskService
  ) { }

  ngOnInit(): void {
    this.Taskservice.getTasks().subscribe(tasks=>{
      this.tasks = tasks
  });

  }

}
