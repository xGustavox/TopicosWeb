import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  constructor
  (
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.router.events.subscribe((e: any) => {
    //   console.log(e)
    //   if (e.url) {
    //     let link = e.url
        
    //     document.getElementsByClassName('active')[0].classList.remove('active')
    //     document.getElementById(link).classList.add('active')
    //   }
    // })
  }
}
