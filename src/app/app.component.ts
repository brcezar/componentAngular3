import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cardImage: string = 'https://www.fillmurray.com/640/360';
  cardTitle: string = 'Meu Card';
  cardDescription: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ";

  alerts: string[] = [];

  showAlert = true;

  users: any[];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild(CountdownComponent) countDown: CountdownComponent;

  getUsers() {
    this.userService.getUsers().subscribe((result: any) => {
      this.users = result.results;
    });
  }

  resetCountDown() {
    this.countDown.count = 100;
  }

  onAlertButtonClick() {
    this.alerts.push('Nice, you triggered this alert message!');
  }

  onClick() {
    this.cardTitle = 'Clicou!';
  }

  onCloseAlert(index: number) {
    this.alerts.splice(index, 1);
  }
}
