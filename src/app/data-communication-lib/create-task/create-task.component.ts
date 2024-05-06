import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  @Output() emitData:EventEmitter<any>= new EventEmitter<any>();
  public myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      TITLE: ['', Validators.required],
      STATUS: ['', [Validators.required]],
    });
  }
  public onSubmit() {
    if (this.myForm.valid) {
      // Form is valid, do something with the form data
      console.log(this.myForm.value);
      this.emitData.emit(this.myForm.value)
    } else {
      // Form is invalid, display error messages
      this.markFormGroupTouched(this.myForm);
    }
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
