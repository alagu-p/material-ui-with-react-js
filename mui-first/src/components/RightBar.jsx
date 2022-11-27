import { Box } from "@mui/material";
import React from "react";

export const RightBar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">RightBar</Box>
    </Box>
  );
};
