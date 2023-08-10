import React from "react";
import { Root } from "../Root";
import type { Store } from "@reduxjs/toolkit";
import { renderToStaticMarkup } from "react-dom/server";
import { createStore } from "./../../redux";

export function renderPage(url: string, html: string, store?: Store) {
  if (!store) {
    store = createStore();
  }
  const root = renderToStaticMarkup(<Root store={store} url={url} />);
  return html
    .replace(
      "{{state}}",
      `<script>window.__INITIAL_STATE__=${JSON.stringify(
        store.getState()
      )};</script>`
    )
    .replace("{{root}}", root);
}
