import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
// import SideBar from "./SideBar";
import { Videos, SideBar } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    // const data = fetchFromAPI(`search?`);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Result for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>video
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
