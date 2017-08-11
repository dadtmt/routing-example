import { Component, OnInit, OnDestroy } from '@angular/core';

// import UserService
import { UserService } from '../user.service'
import { ListUserService } from '../list-user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user;

  // injecter le UserService
  constructor(
    private userService:UserService,
    private listUserService:ListUserService
  ) {
    console.log('construct profile');
  }

  ngOnInit() {
    console.log('profile init');
    console.log(this.userService.user);
    this.user = this.userService.user;
    console.log(this.listUserService.users);
  }

  ngOnDestroy() {
    console.log('profile destroy');
  }
}
