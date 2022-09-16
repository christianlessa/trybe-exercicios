import { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

export default class Content extends Component {
  render() {
    return conteudos.map((content) => {
      return (
        <div className="content">
          <div className="card" key={content.conteudo}>
            <h3>{`O conteúdo é: ${content.conteudo}`}</h3>
            <p>{`Status: ${content.status}`}</p>
            <p>{`Bloco: ${content.bloco}`}</p>
          </div>
        </div>
      );
    });
  }
}
