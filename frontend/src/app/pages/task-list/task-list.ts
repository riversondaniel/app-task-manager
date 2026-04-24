import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskItem, TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {
  private taskService = inject(TaskService);

  tasks: TaskItem[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.errorMessage = '';

    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar tarefas.';
        this.loading = false;
      }
    });
  }

  deleteTask(id: number): void {
    const confirmed = window.confirm('Deseja excluir esta tarefa?');

    if (!confirmed) {
      return;
    }

    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks(),
      error: () => {
        this.errorMessage = 'Erro ao excluir tarefa.';
      }
    });
  }
}