import React from "react";
import { shallow } from "enzyme";
import Services from "./services";

describe("Services", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Services />);
    expect(wrapper).toMatchSnapshot();
  });
});
