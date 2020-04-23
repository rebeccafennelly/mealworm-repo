import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";

describe("Card tests", () => {
  let component;
  let testRecipe;

  beforeEach(() => {
    testRecipe = recipes[0];
    component = shallow(<Card recipe={testRecipe} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
