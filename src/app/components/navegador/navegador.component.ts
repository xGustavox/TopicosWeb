import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

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
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
        document.querySelector('.' + e.url.split('/')[2]).classList.add("active")
      }
    })
  }
}
