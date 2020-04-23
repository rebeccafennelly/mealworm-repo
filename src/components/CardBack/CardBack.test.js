import React from "react";
import CardBack from "./CardBack";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";

describe("CardBack tests", () => {
  let component;
  let testRecipe;

  beforeEach(() => {
    testRecipe = recipes[0];
    component = shallow(<CardBack recipe={testRecipe} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
