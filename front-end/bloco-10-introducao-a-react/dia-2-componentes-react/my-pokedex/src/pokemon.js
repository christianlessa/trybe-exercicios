import { Component } from "react";
import pokemons from "./data";

class Pokemon extends Component {
  render() {
    return (
      <div className="quadrado">
        {pokemons.map((poke) => (
          <div className="cubo">
            <div>
              <p key={poke.id}>{poke.name}</p>
              <p>{poke.type}</p>
              <p>
                {poke.averageWeight.value.toFixed(1)}{" "}
                {poke.averageWeight.measurementUnit}
              </p>
            </div>
            <img src={poke.image}></img>
          </div>
        ))}
      </div>
    );
  }
}

export default Pokemon;
