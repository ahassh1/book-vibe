import React, { Component } from 'react';

import {
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component:Root
  },
]);