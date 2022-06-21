import { Component } from '@angular/core';
import { User } from './user';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  loans = ['Home Loan','Personal Loan','Business Loan','Student Loan'];
  loanhasError = true;

  userModel = new User('Lubna','lubna@gmail.com',7009862246,'default','female',true);

  constructor(private _SubmissionService: SubmissionService){}
  validateLoan(value:any)
  {
    if(value=='default')
    {
      this.loanhasError = true;
    } else{
      this.loanhasError=false;
    }

  }
  onSubmit(userForm:any)
  {
    console.log(userForm);
    // this._SubmissionService.submission(this.userModel)
    // .subscribe(
    // data => console.log('Success!',data),
    // error => console.log('Error',error)
  // console.log(this.userModel);
    
  }

  
}
