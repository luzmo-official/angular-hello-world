import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dashboardId='DASHBOARD_ID_HERE';
  appServer='APP_SERVER_HERE';
  apiHost='API_HOST_HERE';
  key?: string;
  token?: string;

  constructor(
    private http: HttpClient,
  ) {}

  ngInit() {
    this.http.get<{
      status: string;
      key?: string;
      token?: string;
    }>('http://localhost:4001').subscribe((data) => {
      console.log(data);
      this.key = data.key;
      this.token = data.token;
    });
  }
}
