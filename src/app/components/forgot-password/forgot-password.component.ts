import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {delay} from 'rxjs/operators';
import {User} from 'src/app/models/user';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
  private email;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    this.submitted = true;
      this.authService.reset(this.email).pipe(delay(1500)).subscribe(
        data => {
        if(data == true) {

      this.router.navigate(['/login']);
      this.toastr.success('E-Mail sent!');
        } else {
          this.toastr.error('E-Mail not sent!')
        }
      
    }, error => {
      this.submitted = false; 
<<<<<<< HEAD
      const message = error.error ? error.error.message ? error.error.message : 'Reset E-Mail Sent' : 'Reset E-Mail Sent';
=======
      const message = error.error ? error.error.message ? error.error.message : 'E-Mail not found' : 'E-Mail not found';
>>>>>>> f31d4c8c2bbf18439e45147b534f333226392f11
      this.toastr.error(message);
    });
  }

}