import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(`users ${JSON.stringify(users)}`);
    });
  }

}
