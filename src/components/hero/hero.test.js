import React from "react";
import { shallow } from "enzyme";
import Hero from "./hero";

describe("Hero", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toMatchSnapshot();
  });
});
