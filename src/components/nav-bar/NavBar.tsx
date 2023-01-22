
"use client";
import {
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledContainerBox,
  StyledLanguageIcon,
  StyledTypography,
} from "./styles/NavBarStyle";

export interface NavBarprops {}

export function NavBar(props: NavBarprops) {
  return (
    <StyledContainerBox sx={{ flexGrow: 1 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <StyledLanguageIcon />
      </IconButton>
      <StyledTypography color="inherit">login</StyledTypography>
      <StyledTypography color="inherit">Sign up</StyledTypography>

      <MenuIcon />
    </StyledContainerBox>
  );
}

export default NavBar;
