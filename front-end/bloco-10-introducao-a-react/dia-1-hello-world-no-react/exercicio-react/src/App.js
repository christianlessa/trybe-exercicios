

const Task = (value) => {
  return (
      <li>{value}</li>
  );
}

const arrayComp = ['estudar', 'exercicio', 'alimentar']

function App() {
  return (
    <>
      <h1>{Task('Compromissos')}</h1>
      {arrayComp.map((comp) => <li>{comp}</li>)}
    </>
  );
}

export default App;
