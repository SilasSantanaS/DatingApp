import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      //console.log("Usuário logado com sucesso.");
      this.alertify.success("Usuário logado com sucesso.");
    }, error => {
     // console.log(error);
     this.alertify.error(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem("token");
    //console.log("Usuário saiu");
    this.alertify.message("Usuário saiu");
  }

}
