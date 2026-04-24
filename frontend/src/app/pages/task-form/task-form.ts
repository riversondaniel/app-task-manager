import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm implements OnInit {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEditMode = false;
  taskId = 0;
  loading = false;
  errorMessage = '';

  form = {
    title: '',
    description: '',
    status: 'Pendente'
  };

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.isEditMode = true;
      this.taskId = Number(idParam);
      this.loadTask(this.taskId);
    }
  }

  loadTask(id: number): void {
    this.loading = true;
    this.errorMessage = '';

    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        this.form = {
          title: task.title,
          description: task.description,
          status: task.status
        };
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar tarefa.';
        this.loading = false;
      }
    });
  }

  save(): void {
    this.errorMessage = '';

    if (!this.form.title.trim() || !this.form.description.trim() || !this.form.status.trim()) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    if (this.isEditMode) {
      this.taskService.updateTask(this.taskId, this.form).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => {
          this.errorMessage = 'Erro ao atualizar tarefa.';
        }
      });
      return;
    }

    this.taskService.createTask(this.form).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => {
        this.errorMessage = 'Erro ao criar tarefa.';
      }
    });
  }
}