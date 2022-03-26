import { Component } from "react";
import Ingredient from "./Ingredient";
export default class IngredientList extends Component {
  render() {
    let allIngredients = this.props.ingredients.map((ing, i) =>( 
      <li key={i} onClick={this.props.addIngs}>
        <Ingredient itemKey={i} ingredient= {ing}/>
      </li>
    ))
    return (
      <section className="pane">
        <h2>Ingredient list</h2>
        <ul>
            {allIngredients}
        </ul>
      </section>
      )
  }
} 