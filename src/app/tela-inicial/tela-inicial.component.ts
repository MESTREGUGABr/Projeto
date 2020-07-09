import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TelaLoginComponent } from '../tela-login/tela-login.component';
import { TelaCadastroComponent } from '../tela-cadastro/tela-cadastro.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private router : Router){

  }
  cadastro(){
    this.router.navigate(['telaloginC']);
    
  }
  ngOnInit(): void {
  }

}
