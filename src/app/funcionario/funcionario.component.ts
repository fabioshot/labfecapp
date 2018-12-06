import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html'
})
export class FuncionarioComponent implements OnInit {

  funcionarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.createForm();

  }

  createForm(): void {
    this.funcionarioForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      cargo: this.formBuilder.control(''),
      admissao: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      saida: this.formBuilder.control(''),
      observacao: this.formBuilder.control(''),
      usuario: this.formBuilder.control(''),
      senha: this.formBuilder.control(''),
      confirme: this.formBuilder.control(''),
      bloqueado: this.formBuilder.control(false)
    });
    this.funcionarioForm.get('saida').disable();
    this.funcionarioForm.controls['bloqueado'].setValue(false);
    this.funcionarioForm.get('bloqueado').disable();
  }



}
