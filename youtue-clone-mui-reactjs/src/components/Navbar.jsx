import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logos from "../assets/svg/Frame.svg";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      backgroundColor: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img src={logos} alt="logo" height={45} />
    </Link>
    <SearchBar className="hello" />
  </Stack>
);

export default Navbar;
