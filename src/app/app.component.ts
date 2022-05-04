import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from './http.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent {
  users: User[]=[];

  constructor(private httpService: HttpService){}

  ngOnInit(){          
    this.httpService.getData().subscribe((data: any) => this.users=data["userList"]);
}
}
