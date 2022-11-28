import {
  Avatar,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setopen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" borderRadius={5} p={3}>
          <Typography variant="h6" color="gray">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }}>Al</Avatar>
            <Typography fontWeight={500} variant="span">
              john Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
          </Stack>
        </Box>
      </StyleModal>
    </div>
  );
};
