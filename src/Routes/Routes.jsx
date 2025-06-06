import React, { Component } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>
  },
]);