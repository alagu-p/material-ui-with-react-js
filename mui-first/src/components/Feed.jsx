import {
  // Avatar,
  Box,
  // Card,
  // CardActions,
  // CardContent,
  // CardHeader,
  // CardMedia,
  // Checkbox,
  // IconButton,
  // Typography,
} from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShareIcon from "@mui/icons-material/Share";

import React from "react";
import { Post } from "./Post";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export const Feed = () => {
  return (
    <Box bgcolor="pink" flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
