import {Component, OnInit} from '@angular/core';
import {GET} from '../../projects/ehttp/src/lib/core/get.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private eget: GET) {
    // this.eget.setHeaders({test2: 'Heyder'}).setApi('https://jsonplaceholder.typicode.com/posts').request().subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // );
    this.eget.setHeaders({test3: 'Heyder'}).setParams({
      test: 'hello'
      }
    ).setApi('https://jsonplaceholder.typicode.com/users').request().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  ngOnInit() {
  }
}
