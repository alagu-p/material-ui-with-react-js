import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos, direction }) => {
  if (!videos.length) return "loading";
  console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
      {/* <h1>{videos}</h1> */}
    </Stack>
  );
};

export default Videos;
