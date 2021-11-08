import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';
import { usuario } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsuarios: usuario[] = [];
  listPost:post[]=[];

  constructor(private _userService: UsuariosService) { }

  ngOnInit(): void {
    this.verUser();
    this.verPost();
  }


  verUser(){
    this._userService.getUsuarios().subscribe(data =>{
      // console.log(data);
      this.listUsuarios = data;
    }, error =>{
      console.log(error);
    })
  }
  verPost(){
    this._userService.getPost().subscribe(data =>{
      // console.log(data);
      this.listPost = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminarUsuario(id:any){
    this._userService.eliminarUsuario(id).subscribe(data => {
      
    this.verUser()
    })
  }
  eliminarPost(id:any){
    this._userService.eliminarPost(id).subscribe(data => {
      
    this.verPost()
    })
  }

}
