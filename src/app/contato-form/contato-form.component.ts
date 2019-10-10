import { Contato } from "./../../models/Contato";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contato-form",
  templateUrl: "./contato-form.component.html",
  styleUrls: ["./contato-form.component.css"]
})
export class ContatoFormComponent implements OnInit {
  contato: Contato;
  constructor() {}

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
