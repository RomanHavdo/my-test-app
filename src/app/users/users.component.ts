import { Component, OnInit } from '@angular/core';
/*import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';*/

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  url='https://jsonplaceholder.typicode.com/users';
  users=[];

  constructor(/*private store:Store<{ui: fromApp.State}>*/) {
    fetch(this.url).then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
  ).then(res => {
      console.log(res.status);
      this.users=res.data;
  }));
   }

  ngOnInit() {
  //this.store.dispatch({type: 'DATA_LOADIONG'});
  }

}
