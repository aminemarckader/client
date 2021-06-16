import React from "react";
import { shallow } from "enzyme";
import Terms from "./terms";

describe("Terms", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Terms />);
    expect(wrapper).toMatchSnapshot();
  });
});
