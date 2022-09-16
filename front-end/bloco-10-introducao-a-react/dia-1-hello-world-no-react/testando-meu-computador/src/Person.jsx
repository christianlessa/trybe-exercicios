import { Component } from "react";
import Food from "./Food";

class Person extends Component {
  render() {
    return (
      <div>
        <h2>Christian Lessa</h2>
        <p>Nikita, capitu, Sr. Wilson</p>
        <Food/>
      </div>
    )
  }
}

export default Person;