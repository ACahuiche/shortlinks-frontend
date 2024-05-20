import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3106212140.
@Injectable({
  providedIn: "root"
})
export class DataShortlinkService{
    constructor(private httpClient: HttpClient){}

    save(url: string): Observable<any>{
        const backurl = 'testurl'; // Pendiente agregar la URL del back end

        const body = {
            "urlToSave": url
        }

        return this.httpClient.post(backurl, body);
    }
  }
