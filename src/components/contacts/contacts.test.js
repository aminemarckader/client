import React from "react";
import { shallow } from "enzyme";
import Contacts from "./contacts";

describe("Contacts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper).toMatchSnapshot();
  });
});
