import React from "react";
import CardFront from "./CardFront";
import { shallow } from "enzyme";
import recipes from "../../data/recipes";

describe("CardFront tests", () => {
  let component;
  let testRecipe;

  beforeEach(() => {
    testRecipe = recipes[0];
    component = shallow(<CardFront recipe={testRecipe} />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
