import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { HttpService } from "src/app/services/http.service";


@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})

export class ListaDeProdutosComponent implements OnInit {
  public produto: Produto[] = []; 
  public produtosExibidos: Produto[] = [];

  constructor(private http:HttpService) { 

    this.http.getProdutos().subscribe(
      (data) => {
        this.produto = data;
        this.produtosExibidos = data;
      }
    );    
  }  

  listarDoGrupo(codDoGrupo: number) {
    console.log(codDoGrupo);
    if(codDoGrupo != 0)
    this.produtosExibidos = this.produto.filter(
      produto => (produto.codGrupo == codDoGrupo)
    )
    else {
      this.produtosExibidos = this.produto;
    }
  }



  

  ngOnInit(): void {
  }

}
