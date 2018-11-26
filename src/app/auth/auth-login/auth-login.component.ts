import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { AdministradorService } from '../../administrador/administrador.service'

import { Usuario } from '../../usuario/usuario'

import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../cliente/cliente';
import { Administrador } from '../../administrador/administrador';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private administradorService: AdministradorService,
        private clienteService: ClienteService
    ) { }

    user: Usuario;

    role: String;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
      debugger;
      if (this.role === 'Administrador')
      {
    this.administradorService.getAdministradores()
    .subscribe(data =>  { 
let administradores = data;
    for (var i = 0; i<administradores.length; i++) {
      let administrador: Administrador = data[i];

      if (administrador.nombreUsuario === this.user.nombreUsuario && administrador.contrasena === this.user.contrasena) {
        this.user = administrador;
        this.user.role = 'Administrador';
        this.authService.login(this.user.role);
        this.toastrService.success('Se ha iniciado sesión')
        return;
      }
    }
    this.toastrService.error('Email y/o contraseña no son válidos', 'Error iniciando sesión');
    return;
  });
      }
      
     else if (this.role === 'Cliente')
      {
        this.clienteService.getClientes()
        .subscribe(clientes => { 
    
        for (var i = 0; i<clientes.length; i++) {
          let cliente: Cliente = clientes[i];
          if (cliente.nombreUsuario === this.user.nombreUsuario && cliente.contrasena === this.user.contrasena) {
            this.user = cliente;
            this.user.role = 'Cliente';
            this.authService.login(this.user.role);
            this.toastrService.success('Se ha iniciado sesión')
            return;
          }
        }
        this.toastrService.error('Email y/o contraseña no son válidos', 'Error iniciando sesión');
        return;
      });
      }
      
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Administrador', 'Cliente'];
    }

}