import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TodoItem } from 'src/app/interfaces';
import { TodoListService } from 'src/app/services';
import { validateId } from 'src/app/validators';
import { validateNumber } from 'src/app/validators/validate-number.validator';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private todoListService: TodoListService) {
    this.myForm = this.formBuilder.group({
      id: [null, Validators.compose(
        [
          Validators.required,
          // Validators.pattern(/^[0-9]\d*$/)
          validateNumber()
        ]), validateId(this.todoListService)],
      message: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30)
        ])]
    })
  }

  ngOnInit(): void {

  }

  public onReturn(): void {
    this.router.navigateByUrl('/')
  }

  public onChangeId(id: number): void {
    const controller = this.myForm.get('id')

    controller?.setValue(id)
  }

  public getErrors(controlName: string, errorName: string): boolean {
    const controller = this.myForm.get(controlName)

    const error = controller?.getError(errorName)
    const touched = controller?.touched

    return error && touched ? true : false
  }

  public onSubmit(): void {
    const isValid = this.myForm.valid

    if (!isValid) {
      return
    }

    const idController = this.myForm.get('id')
    const id: number = idController?.value

    const messageController = this.myForm.get('message')
    const message: string = messageController?.value

    const newTodoItem: TodoItem = new TodoItem(id, message)

    this.todoListService
      .postItemAsync(newTodoItem)
      .subscribe(() => this.onReturn())
  }
}
