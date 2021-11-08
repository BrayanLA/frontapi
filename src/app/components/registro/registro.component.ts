import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario} from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userForm: FormGroup;
  title = 'Crear Usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private usuariosService: UsuariosService,
              private aRouter: ActivatedRoute,
              ) 
    {
    this.userForm = this.fb.group({
      nombre:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.usuarioEditar();
  }

  agregarUsuario(){
    const USUARIO: usuario = {
      nombre: this.userForm.get('nombre')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value
    }

    if(this.id !== null){
      this.usuariosService.editarUsuarios(this.id, USUARIO).subscribe(data =>{
        this.router.navigate(['/']);
      })
    }else{
      this.usuariosService.guardarUsuario(USUARIO).subscribe(data =>{
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.userForm.reset();
      })
    }

    

    
  }
  usuarioEditar(){
    if(this.id !== null){
      this.title = 'Editar Usuario';
      this.usuariosService.ficharUsuario(this.id).subscribe(data => {
        this.userForm.setValue({
          nombre:data.nombre,
          email:data.email,
          password:data.password
        })
      })
    }
  }

}
