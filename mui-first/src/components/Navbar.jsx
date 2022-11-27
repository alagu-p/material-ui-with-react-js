import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "20px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor:"white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor:"white",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Alagu Dev
          </Typography>

          <SensorOccupiedIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search ..."></InputBase>
          </Search>
          <Icons>
            <Badge variant="dot" color="error">
              <NotificationsNoneIcon color="action" />
            </Badge>
            <Badge badgeContent={10} color="error">
              <NotificationsNoneIcon color="white" />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={<PersonIcon />}
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={<PersonIcon />}
              onClick={(e) => setOpen(true)}
            />
            <Typography variant="span">john</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-postitioned-menu"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
