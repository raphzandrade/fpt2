import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group({
    email: ['',
      Validators.compose([Validators.required, Validators.email])
    ],
    password: ['',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ]
  })

  public disableSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getErrors(controlName: string, errorName: string): boolean {
    const controller = this.myForm.get(controlName)

    const error = controller?.getError(errorName)
    const touched = controller?.touched

    return error && touched ? true : false
  }

  public onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }

    this.disableSubmit = true;

    const emailController = this.myForm.get('email')
    const email = emailController?.value

    const passwordControlller = this.myForm.get('password')
    const password = passwordControlller?.value

    const newUser = new User(email, password)

    this.authService.register(newUser)
      .subscribe(response => {
        this.disableSubmit = false;
        this.authService.storeUserInfo(response)
        this.router.navigateByUrl('/my-list')
      })
  }

}
