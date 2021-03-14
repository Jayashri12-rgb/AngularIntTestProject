import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  page = 1;
  pageSize = 3;
  collectionSize: number;
  currentRate = 8;
  public buttonName:any = 'Compare';
  public show:boolean = false;
  myuserslist = [];

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.userslist();
  }

  userlistting:any;
  userslist()
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     this.service.userList(headers).subscribe(Response =>{
     this.userlistting=Response;     
     this.collectionSize = Response.length;
      error => {
        alert("Connection Error");
      }
    });
  }

  addUsersList(user){
    console.log("myuserslist",this.myuserslist);
    let count = 0;
    if(this.myuserslist.length > 0){
    for(let i=0;i<this.myuserslist.length;i++){
      if(user.id == this.myuserslist[i].id){
        console.log(user.id)
        console.log(this.myuserslist[i].id)
        count++;
        break;
      } 
    }
    if(count==0){
      this.myuserslist.push(user);
    }
    }
    else{
      this.myuserslist.push(user);
    }
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Remove";
    else
      this.buttonName = "Compare";
  }
}
