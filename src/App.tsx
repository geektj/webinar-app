// src/App.tsx
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Layout } from "./layout";
import { LayoutWrapper } from "./context/layoutWrapper";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Layout />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default App;
