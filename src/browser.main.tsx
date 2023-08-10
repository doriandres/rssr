import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Root } from "./components/Root";
import { createStore } from "./redux";

const domNode = document.getElementById("root");
const store = createStore();
hydrateRoot(domNode, <Root url={window.location.href} store={store} />);