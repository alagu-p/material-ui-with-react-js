import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import {
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
  Navbar,
} from "./components/index";
// import Navbar from "./components/Navbar";
// import Feed from "./components/Feed";
// import VideoDetails from "./components/VideoDetails";
// import ChannelDetails from "./components/ChannelDetails";
// import SearchFeed from "./components/SearchFeed";
// import { lock } from "./assets/svg/lock.svg";
// import lock from "./assets/svg/lock.svg";
function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        {/* <img height={20} width={20} src={lock} alt="hello world" /> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route path="/Search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
