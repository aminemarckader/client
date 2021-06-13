import React from "react";
import { shallow } from "enzyme";
import Backtop from "./backtop";

describe("Backtop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Backtop />);
    expect(wrapper).toMatchSnapshot();
  });
});
