import React from "react";
import List from "./List";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";


describe("List tests", () => {
  let component;
  let testIngredients;

  beforeEach(() => {
    testIngredients = recipes[0].ingredients;
    component = shallow(<List items={testIngredients} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});