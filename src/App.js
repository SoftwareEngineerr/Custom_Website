import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router";

import { Themefunc } from './theme/DefaultColors';
import { Router } from "./routes/routes";
import "./App.css";


const FirstTimeWebSrn = lazy(() => import('./hooks/FirstTimeWebSrn/FirstTimeWebSrn'));
const Loader = lazy(() => import('./components/loader/loader'));
const Popup = lazy(() => import('./components/popup/popup'));


const App = () => {
  const routing = useRoutes(Router);
  const theme = Themefunc();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        {/* All lazy components must be inside Suspense */}
        <FirstTimeWebSrn />
        <Loader />
        <Popup />
        <div>{routing}</div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
