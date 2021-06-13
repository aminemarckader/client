import React from "react";
import { shallow } from "enzyme";
import Topbar from "./topbar";

describe("Topbar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
