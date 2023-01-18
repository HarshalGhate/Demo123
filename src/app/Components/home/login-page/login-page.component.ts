import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  date = new Date()
  ngOnInit(): void {
    this.getmsg()
  }
  
  msg:string=""
  getmsg() {
    
    let hrs = this.date.getHours()
    // hrs=11
    if (hrs < 12)
      this.msg = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
      this.msg = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
      this.msg = 'Good Evening ';
  }


}
