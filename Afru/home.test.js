import React from "react";

import isReact from "is-react";
import Enzyme from 'enzyme';
// import toJson from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';


// import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from './src/conteinerComponentes/home/home';

Enzyme.configure({ adapter: new Adapter() })
describe("<Home />", () => {
// Home Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Home />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
})