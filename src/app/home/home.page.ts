import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: string;

  constructor(private http: HttpClient) {
    this.data='';
  }
  ngOnInit(){}

  private sendPostRequest(){

    let postData_register = {
      "email": "andgvrei.bisoc@ligaac.ro",
      "password": "B!soc69",
      "firstName": "Andrei",
      "lastName": "Bișoc"
    }

    let httpOptions_register = {
      headers: new HttpHeaders({
        "accept": "text/plain",
        'TEAM_KEY': "BA7HSEYKGEGFY",
        'Content-Type': 'application/json-patch+json'
      })
    }

    var headers_register = new HttpHeaders();
    headers_register.append("Accept", 'text/plain');
    headers_register.append('Content-Type', 'application/json-patch+json');
    headers_register.append('TEAM_KEY','BA7HSEYKGEGFY');
    console.log(postData_register);
    console.log(httpOptions_register);
    console.log(headers_register);
    this.http.post("/api/Auth/Register", postData_register,httpOptions_register)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
    });

        //this.storage.set("j",5);
  }


  // private prepareDataRequest(): Observable<object> {
  //   // Define the data URL
  //   const dataUrl = 'http://192.168.6.62:5060/api/Forum/Category';
  //   // Prepare the request
  //   return this.http.get(dataUrl,this.httpOptions);
  // }
}
