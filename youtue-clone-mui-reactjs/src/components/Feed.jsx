import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row", sm: "column" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
          }}
        >
          <SideBar />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ color: "#fff" }}
          >
            Copyright 2022 AllPings
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
export default Feed;
