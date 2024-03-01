import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShortlinkService } from 'src/app/services/datashortlink.service';

@Component({
  selector: 'app-show-shortlink',
  templateUrl: './show-shortlink.component.html',
  styleUrls: ['./show-shortlink.component.css']
})
export class ShowShortlinkComponent implements OnInit {

  key:string = '';
  url:string = '';
  message:string = '';
  
  constructor(private shortlinkService: DataShortlinkService, private router:Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.key = this.activatedRoute.snapshot.params['key'];

    this.shortlinkService.getUrl(this.key).subscribe(
      (response) => {
        if(response.success){
          this.message = 'Espere un momento, esta siendo redirigido....'
          this.url = response.message.url;
          window.location.replace(this.url);
        }
        else {
          this.message = 'Este shortlink no existe';
          this.router.navigate(['noshortlink']);
        }
      },
      (error) => {
        this.message = 'Este shortlink no existe';
        this.router.navigate(['noshortlink']);
      }
    );
  }

}
