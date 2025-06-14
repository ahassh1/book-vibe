import React, { Component } from 'react';

import {
  createBrowserRouter,

} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        path:"/",
        Component:Home
      }
    ]
  },
]);