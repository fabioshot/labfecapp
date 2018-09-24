import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html'
})
export class InputsComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel) model : NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model
    if (this.input === undefined) {
        throw new Error('Usar ngModel')
    }
  }
  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
