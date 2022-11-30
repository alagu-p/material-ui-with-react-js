import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const selectedCategory = "New";
const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        marginLeft: "2px",
      }}
    >
      {categories.map((categories) => (
        <Avatar sx={{ display: "flex", marginBottom: "3px", padding: "2px" }}>
          <Button
            sx={{
              bgcolor: "black",
              background: categories.name === selectedCategory && "#FCFCFC",
              color: "white",
            }}
            className="category-btn"
          >
            <span>{categories.icon}</span>
          </Button>
        </Avatar>
      ))}
    </Stack>
  );
};

export default Sidebar;
