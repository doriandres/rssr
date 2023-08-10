import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { IndexPage } from "./IndexPage";
import { AboutPage } from "./AboutPage";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";

type RootProps = {
  url: string;
  store: Store;
};

export function Root({ url, store }: RootProps) {
  return (
    <Provider store={store}>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </StaticRouter>
    </Provider>
  );
}
