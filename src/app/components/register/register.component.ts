import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {delay} from 'rxjs/operators';
import {User} from 'src/app/models/user';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  user: User = new User();

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.authService.register(this.user).pipe(delay(1500)).subscribe(resp => {
      this.authService.setConnectedUser(resp);
      this.router.navigate(['/']);
      this.toastr.success('Registration Sucessful!');
    }, error => {
      this.submitted = false; 
      const message = error.error ? error.error.message ? error.error.message : 'Error Occurred' : 'Error Occurred';
      this.toastr.error(message);
    });
  }

}
