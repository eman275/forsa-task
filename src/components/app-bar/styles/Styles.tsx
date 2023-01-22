import styled from "styled-components";
import { AppBar, Box, Button, Menu, Toolbar, Typography } from "@mui/material";
import { Language } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export const StyledAppBar = styled(AppBar)`
  width: 100%;
  align-items: center;
  height: auto;
  // position:static;
  padding: 25px 40px;
  background-color: #000 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 !important;
  .MuiPaper-root {
    border-radius: 0 !important;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .MuiPaper-root {
    border-radius: 0 !important;
  }
`;

export const StyledMenueItem = styled(Menu)`
  .MuiPaper-root {
    background-color: rgb(0, 0, 0);
    width: 100% !important;
    height: auto;
    display: flex;
    align-items: center;
    // justify-content: center;
    font-size: 20px;
    top: 110px !important;
    left: 0 !important;
    .MuiButtonBase-root {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: #fff;
`;

export const LogoBoxStyle = styled(Box)`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  // margin: 0 35px;
`;

export const StyledLogoImage = styled.img`
  width: 70px;
  height: auto;
`;
export const StyledButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledHeaderButton = styled(Button)`
  height: 0;
  color: RGB(255, 255, 255);
  margin: 0 10px;
  font-weight: 400;
  border-radius: 5px;
`;

export const StyledRegisterButton = styled(Button)`
  height: 0;
  color: RGB(255, 255, 255);
  margin: 0 10px;
  font-weight: 400;
  background: linear-gradient(208.65deg, #e0c35b, #bd902e);
  color: #000 !important;
  height: 40px;
`;

export const StyledLanguageIcon = styled(Language)`
  cursor: pointer;
`;

export const StyledLanguageTypography = styled(Typography)`
  margin: 0 4px;
`;
