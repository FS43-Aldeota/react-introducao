import BemVindo from "./BemVindo";
import Bolo from "./Bolo";
import Carro from "./Carro";
import Musico from "./Musico";

const App = () => {
  return (
    <>
      <h1>Olá mundo</h1>
      <BemVindo nome="Ailana" cidade="Aquiraz"/>
      <BemVindo nome="André" cidade="Fortaleza"/>
      <BemVindo nome="Marcio" cidade="Fortaleza"/>
      <BemVindo nome="Victor" cidade="Fortaleza"/>
      <BemVindo nome="Ieda" cidade="Maracanaú"/>

      <Bolo sabor={"cenoura"} cobertura={"chocolate"} /> 

      <Carro modelo={"Civic"} marca={"Honda"} />
      <Carro modelo={"Moby"} marca={"Fiat"} />

      <Musico instrumento={"bateria"} banda={"offspring"} />
      <Musico instrumento={"guitarra"} banda={"calcinha preta"} />
    </>
  );
}

export default App;