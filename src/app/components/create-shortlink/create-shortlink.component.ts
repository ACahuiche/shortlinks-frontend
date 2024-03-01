import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataShortlinkService } from 'src/app/services/datashortlink.service';

@Component({
  selector: 'app-create-shortlink',
  templateUrl: './create-shortlink.component.html',
  styleUrls: ['./create-shortlink.component.css']
})
export class CreateShortlinkComponent {
  
  shortlink: string = '';
  error: string ='';

  constructor(private shortlinkService: DataShortlinkService) {}

  saveUrl(form: NgForm){
    if(form.valid) {
      this.shortlinkService.save(form.value.urlInput).subscribe(
        (response) => {
          this.shortlink = 'http://localhost:4200/'
          this.shortlink += response.message;
          form.resetForm();
        },
        (error) => {
          this.error = error.error.message;
          console.log(error);
        }
      );
    }
    
  }

}
