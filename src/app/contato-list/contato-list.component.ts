import { Contato } from "./../../models/contato.model";
import { ContatoService } from "./../services/contato.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contato-list",
  templateUrl: "./contato-list.component.html",
  styleUrls: ["./contato-list.component.css"]
})
export class ContatoListComponent implements OnInit {
  contatos: Contato[];
  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.getAllContatos();
  }
}
