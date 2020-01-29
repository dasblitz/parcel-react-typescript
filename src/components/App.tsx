import React from "react";
import { hot } from "react-hot-loader";

const App = () => <h1>Hello world</h1>;

declare const module: any;
export default hot(module)(App);
