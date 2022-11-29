import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Add } from "./components/Add";
import { Feed } from "./components/Feed";
import Navbar from "./components/Navbar";
import { RightBar } from "./components/RightBar";
import Sidbar from "./components/Sidbar";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.default"}>
        {/* navbar */}
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidbar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
