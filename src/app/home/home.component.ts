import { NgForm } from "@angular/forms";
import { ContatoService } from "./../services/contato.service";
import { Contato } from "./../../models/contato.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  contato: Contato;
  contatos: Contato[];
  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contato = new Contato();
    this.contatos = this.contatoService.getAllContatos();
  }

  saveContato(form: NgForm) {
    this.contato = form.value;
    this.contato.id = new Date().getTime().toString();
    this.contatoService.save(this.contato);
    this.contatos.push(this.contato);
    form.resetForm();
  }
}
