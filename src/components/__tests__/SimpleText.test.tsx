import React from 'react';
import { render, screen } from 'test-utils';
import SimpleText from '../SimpleText';

describe("<SimpleText />", () => {
  it("Renders the component", () => {
    render(<SimpleText />);
    expect(screen.getByText("Simple Text")).toBeTruthy();
  })
})