import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'] // Corrected from styleUrl to styleUrls
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Display the form values in an alert
      const formValues = this.userForm.value;
      alert(`User Info:
        First Name: ${formValues.firstName}
        Last Name: ${formValues.lastName}
        Email: ${formValues.email}`);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
