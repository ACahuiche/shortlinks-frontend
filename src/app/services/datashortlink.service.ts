import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3106212140.
@Injectable({
  providedIn: "root"
})
export class DataShortlinkService{
    constructor(private httpClient: HttpClient){}

    save(url: string): Observable<any>{
        
        const body = {
            "urlToSave": url
        }

        return this.httpClient.post(environment.backurl, body);
    }

    getUrl(key: string): Observable<any>{
        return this.httpClient.get(environment.backurl + key)
    }
  }
