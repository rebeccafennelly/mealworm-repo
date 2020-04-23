import React from "react";
import Routes from "./Routes";
import { shallow } from 'enzyme';

describe("Routes tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Routes />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
