import React from "react";
import CardList from "./CardList";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";
import Card from "../Card/Card";

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardList recipes={recipes} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should render the correct number of Card components', () => {
    const numberOfRecipes = recipes.length;
    const numberOfRenderedCards = component.find(Card).length;
    expect(numberOfRecipes).toEqual(numberOfRenderedCards);
  })
});
