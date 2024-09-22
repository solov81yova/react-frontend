import Button from "../../components/Button/Button";
import "./styles.css";
import { v4 } from "uuid";
import { useState } from "react";

// const numbers = [1,2,3,4,5];
// const updateNumbers = numbers.map((number) => {
//     return number*2;
// });

function Lesson_05() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientButtonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];
  console.log(v4());

  const ingredientsButtons = ingredientButtonNames.map((ingredient) => {
    const addIngredient = () => {
      setIngredients((prevValue) => {
        return [...prevValue, ingredient];
      });
    };

    return (
      <div key={v4()} className="ingredient-button-control">
        <Button name={ingredient} onClick={addIngredient} />
      </div>
    );
  });

  const orderList = ingredients.map((ingr) => {
    return (
      <li key={v4()} className="ingredient">
        {ingr}
      </li>
    );
  });

  return (
    <div className="lesson05-wrapper">
      <div className="ingredient-buttons-container">
        {ingredientsButtons}
        {/* <div className="ingredient-button-control">
          <Button name="Burger" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Fries" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Cola" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Salad" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ketchup" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ice-cream" />
        </div> */}
      </div>
      <div className="ingredients-container">
        <p className="ingredients-title">Your order</p>
        <ol>{orderList}</ol>
      </div>
    </div>
  );
}
export default Lesson_05;
