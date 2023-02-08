import React from "react";
import ReactDOM from "react-dom/client";
import MySocialApp from './App';

it('render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MySocialApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
