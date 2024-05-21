import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShortlinkService } from '../services/datashortlink.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit{
  
  key: string = '';
  url: string = '';
  message: string = '';
  
  constructor(private shortlinkService: DataShortlinkService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.key = this.activedRoute.snapshot.params['key'];

    this.shortlinkService.getUrl(this.key).subscribe(
      (response) => {
        if(response.success) {
          this.message = 'Espere un momento, esta siendo redireccionado.....';
          this.url = response.message.url;
          window.location.replace(this.url);
        }
        else {
          this.message = 'Este shortlink no existe';
          this.router.navigate(['notfound']);
        }
      },
      (error) => {
        this.message = 'Este shortlink no existe';
        this.router.navigate(['notfound']);
      }
    )
    
  }

}
