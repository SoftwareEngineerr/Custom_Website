import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { useRoutes } from "react-router";
import { Router } from "./routes/routes";
import { Themefunc } from './theme/DefaultColors';

import "./App.css"

// import "bootstrap/dist/css/bootstrap"

// In your index.js or App.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "slick-carousel/slick/fonts/"


const App = () => {
    
  const routing = useRoutes(Router);
  const theme = Themefunc();
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div>
        {routing}
      </div>
      </ThemeProvider>
    </>
  );
};

export default App;
