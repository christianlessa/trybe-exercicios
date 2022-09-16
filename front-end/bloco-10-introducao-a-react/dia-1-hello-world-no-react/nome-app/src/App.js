
    import React, { Component } from 'react';

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    const tarefas = ['Tomar café', 'Escovar os dentes', 'Estudar'];

    class App extends Component {
      render() {
        return (
          <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
        );
      }
    }

    export default App;