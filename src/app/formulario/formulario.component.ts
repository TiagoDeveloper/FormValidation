import { Component, OnInit, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: FormGroup;
  attr: any;
  
  constructor( private fb: FormBuilder, private renderer: Renderer ) { }

  ngOnInit(): void {
    this.pessoa = this.fb.group({
      nome : new FormControl('',[ Validators.required, Validators.minLength(2) ]),
      cpf : new FormControl('',[ Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]+') ]),
      email : new FormControl('',[ Validators.required, Validators.minLength(2) ])
    });
  }

    onSubmit(pessoa): void {
      this.attr = new Array();//não curti muito essa ideia de instanciar em todo click do button
      for(let attr in pessoa.controls){
        if(pessoa.controls[attr].invalid){          
          this.attr.push(attr);
          this.setElement(attr, 'red');
        }else{
          this.setElement(attr, 'green');
        }
      }
    }

    setElement(attr: string, color: string): void {
          this.renderer.setElementStyle(this.renderer.selectRootElement('#'+attr), 'border-color', color);
    }


    rendererImage(event){      
      let file: File = event.target.files[0];
      let reader: FileReader = new FileReader();
      let image = this.renderer.selectRootElement('#image');

      reader.onload = e => {
        let src = reader.result;
        image.src = src;
      };
      reader.readAsDataURL(file);
  }

}
