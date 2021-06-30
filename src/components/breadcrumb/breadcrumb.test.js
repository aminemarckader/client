import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from "./breadcrumb";

describe("Breadcrumb", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
  });
});
