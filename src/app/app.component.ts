import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcodechallenge';
  activePage = 0;
  users: User[];
  allusers: User[] = [];
  filterUsers: User[] = [];
  tempGroupedArray: Array<User[]> = [];

  recordCount = 0;
  recordperpage = 0;
  groupedArray: any = [];
  constructor(private userService: UserService) {
    this.filterUsers = [];
    this.userService.getUsers().subscribe(result => {

      this.users = result ;
      this.users.forEach(element => {
        this.allusers.push(element);
      });
      this.recordCount = result.length;
      this.recordperpage = 10;
      this.chunkArray(this.allusers, this.recordperpage);

      this.filterUsers = this.tempGroupedArray[this.activePage - 1];

    }, (err) => {
     // console.log(err);
    });
  }

  columns = ['id', 'name', 'phone', 'email', 'company', 'date_entry', 'org_num', 'address_1', 'city',
  'zip', 'geo', 'pan', 'status', 'pin', 'fee', 'guid', 'date_first', 'date_recent', 'url'];

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.filterUsers = this.tempGroupedArray[this.activePage - 1];
  }

  UpdateUser() {
    this.userService.saveUser();
  }
   // tslint:disable-next-line:variable-name
   chunkArray(myArray, chunk_size) {
    let index = 0;
    const arrayLength = myArray.length;
    for (index = 0; index < arrayLength; index += chunk_size) {
        this.groupedArray = myArray.slice(index, index + chunk_size);
        this.tempGroupedArray.push(this.groupedArray);
    }

    return this.tempGroupedArray;
}
}
