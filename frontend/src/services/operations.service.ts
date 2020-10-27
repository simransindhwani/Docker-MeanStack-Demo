import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private httpclient:HttpClient) { }
  getComments(): Observable<any>{
    return this.httpclient.get('http://ec2-18-188-48-118.us-east-2.compute.amazonaws.com:3000/getEmailData');

  }
  insertValues(data): Observable<any>{
    console.log("Data from Service file to node.js",data);
    return this.httpclient.post('http://ec2-18-188-48-118.us-east-2.compute.amazonaws.com:3000/insertEmailData',data);

  }
}
