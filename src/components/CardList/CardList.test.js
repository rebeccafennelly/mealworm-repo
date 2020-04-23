import React from "react";
import CardList from "./CardList";
import { shallow } from 'enzyme';
import recipes from "../../data/recipes";

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardList recipes={recipes} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
