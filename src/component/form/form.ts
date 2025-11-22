import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CardModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  // Datos de la sección
  personSrc = '/mujer-sin.png';
  heroTitle = 'Gama Completa de';
  heroHighlight = 'Servicios';
  heroTail = 'Generales';

  // 1) Inyecta primero
  private fb = inject(FormBuilder);

  // 2) Usa fb después para crear el form
  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    celular: [''],
    tipo: ['']
  });

  // (opcional) atajo para el template
  get f() { return this.form.controls; }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Enviar:', this.form.value);
  }
}
