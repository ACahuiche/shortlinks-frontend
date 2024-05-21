import { Component } from '@angular/core';
import { DataShortlinkService } from '../services/datashortlink.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shortlink-form',
  templateUrl: './shortlink-form.component.html',
  styleUrls: ['./shortlink-form.component.css']
})
export class ShortlinkFormComponent {
 shortlink: string = '';
 error: string = '';
 urlResult:string = 'http://short.link/gst45'

 constructor(private shortlinkService: DataShortlinkService) {}

 saveUrl(form: NgForm) {
    if (form.valid) {
      this.shortlinkService.save(form.value.urlInput).subscribe(
        (response) => {
          this.shortlink = environment.dominio + response.message;
          form.resetForm();
        },
        (error) => {
          this.error = error.error.message;
        }
      );
    }

  }
}
