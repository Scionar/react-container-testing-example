import React from "react";
import { createMockStore } from "redux-test-utils";
import shallowWithStore from "../test-utils/shallowWithStore";
import LogOutButtonContainer from "./LogOutButtonContainer";
import Button from '../components/Button';
import { logout } from '../actions/session'

describe("LogOutButtonContainer", () => {
  const mockState = {
    session: {
      logoutText: "Log me out"
    }
  };

  it("renders", () => {
    const store = createMockStore(mockState);
    const container = shallowWithStore(<LogOutButtonContainer />, store);
    expect(container).toBeTruthy();
  });

  it("dispatches action on click", () => {
    const store = createMockStore(mockState);

    shallowWithStore(<LogOutButtonContainer />, store)
      .dive()
      .find(Button)
      .simulate("click");

    expect(store.isActionDispatched(logout())).toEqual(true);
  });
});
