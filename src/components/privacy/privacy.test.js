import React from "react";
import { shallow } from "enzyme";
import Privacy from "./privacy";

describe("Privacy", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Privacy />);
    expect(wrapper).toMatchSnapshot();
  });
});
