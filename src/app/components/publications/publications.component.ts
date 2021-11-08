import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/models/post';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  postForm: FormGroup;
  title = 'Crear Post';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private usuariosService: UsuariosService,
              private aRouter: ActivatedRoute,
              ) 
    {
    this.postForm = this.fb.group({
      title:['', Validators.required],
      descrip:['', Validators.required],
      write:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.postEditar();
  }

  agregarPost(){
    const POST: post = {
      title: this.postForm.get('title')?.value,
      descrip: this.postForm.get('descrip')?.value,
      write: this.postForm.get('write')?.value
    }

    if(this.id !== null){
      this.usuariosService.editarPost(this.id, POST).subscribe(data =>{
        this.router.navigate(['/']);
      })
    }else{
      this.usuariosService.guardarPost(POST).subscribe(data =>{
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.postForm.reset();
      })
    }

    

    
  }
  postEditar(){
    if(this.id !== null){
      this.title = 'Editar post';
      this.usuariosService.ficharPost(this.id).subscribe(data => {
        this.postForm.setValue({
          title:data.title,
          descrip:data.descrip,
          write:data.write
        })
      })
    }
  }

}
