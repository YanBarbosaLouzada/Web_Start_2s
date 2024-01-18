import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  // const[variavel, functionParaMudarValorDaVariavel]=useState("Valor inicial");
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    console.log("useEffect chamado");
    setUseEffectCounter(useEffectCounter + 1);
  }, [logado]);

  const Logar = () => {
    setLogado(true);
  }
  const Deslogar = () => {
    setLogado(false);
  }

  return (
    <div className="App">

      <h1> useEffect foi chamado {useEffectCounter} vezes </h1>
      <h2>UseEffect(Contador) é chamado quando o estado da variavel LOGADO E DESLOGADO muda de um para o outro</h2>
      <h2>useState(estado) é chamado para trocar o estado da variavel </h2>

      {/* If e else ternario para html */}
      {logado ? <p>Logado</p> : <p>Deslogado</p>}

      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}>Deslogar</button>

    </div>
  );
}

export default App;
