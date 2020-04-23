import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

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

  it("should render a CardFront component", () => {
    expect(component.find(CardFront).length).toEqual(1);
  });

  it("should render a CardBack component", () => {
    expect(component.find(CardBack).length).toEqual(1);
  });

  it("should not have the faceDown class by default", () => {
    const element = component.find(".recipeCard");
    expect(element.hasClass('faceDown')).toBe(false);
  })

  it("should add or remove faceDown class based on isFaceDown component state", () => {
    expect(component.find(".recipeCard").hasClass('faceDown')).toBe(false);
    component.setState({ isFaceDown: true })
    expect(component.find(".recipeCard").hasClass('faceDown')).toBe(true);
    component.setState({ isFaceDown: false })
    expect(component.find(".recipeCard").hasClass('faceDown')).toBe(false);
  })

  it('should toggle the isFaceDown component state when clicked', () => {
    expect(component.state('isFaceDown')).toBe(false);
    component.find('.recipeCard').simulate('click');
    expect(component.state('isFaceDown')).toBe(true);
    component.find('.recipeCard').simulate('click');
    expect(component.state('isFaceDown')).toBe(false);
  })
});
