import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataShortlinkService {

  constructor(private http: HttpClient) { }

  save(url:string): Observable<any> {
    const backurl = "http://localhost:8030/saveUrl";

    const body = {
      "urlToSave": url
    }

    return this.http.post(backurl, body);
  }

  getUrl(key:string): Observable<any> {
    const backurl = `http://localhost:8030/${key}`;

    return this.http.get(backurl);
  }

}