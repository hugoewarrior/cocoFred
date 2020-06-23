import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  public showFiller: boolean;
  public drawerOptions: any[];

  constructor() {
    this.drawerOptions = Object.assign([], initOptions)
  }

  ngOnInit(): void {
  }

}

const initOptions = [
  { nombre: "Primera", icon: "folder" },
  { nombre: "Segunda", icon: "folder" },
  { nombre: "Tercera", icon: "folder" },
  { nombre: "Cuarta", icon: "folder" },
];
