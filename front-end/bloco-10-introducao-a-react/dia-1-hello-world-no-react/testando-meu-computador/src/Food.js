import { Component } from "react";

const myfood = ['pizza' , 'hamburguer', 'sushi', 'lasanha', 'chocolate'];
const list = (item) => {
  return (
    <ul>
      <li>{item}</li>
    </ul>
  )
}

class Food extends Component {
  render() {
    return (
      myfood.map((element) => list(element))
    )
  }
}

export default Food;