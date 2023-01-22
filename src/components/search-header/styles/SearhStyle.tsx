import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const StyledContainerBox = styled(Box)`
  background-color: white;
  width: 1320px;
  padding-top: 30px;
  border-radius: 80px;
  // top: 729px;
  // left: 300px;
  padding: 22px;
  position: relative;
  top: 21px;
  left: 13px;
  bottom: 96px;
`;

export const StyledSubContainerBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 751px;
  left: 322px;
  width: 1276px;
  border-radius: 80px;
  border-color: 2px solid red;
  top: 729px;
  left: 300px;
  padding:  10px 22px;
  border-style: solid;
  border-color: #B1B1B1;
`;

export const StyledTypography = styled(Typography)`
  top: 25px;
  left: 1437px;
  width: 84px;
  height: 31px;
  color: var(--unnamed-color-0c1f39);
  text-align: left;
  font: normal normal 600 22px/33px Poppins;
  letter-spacing: 0px;
  color: #0c1f39;
  opacity: 1;
`;

export const StyledLanguageIcon = styled(LanguageIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledSearchTypograpy = styled(Typography)``;

export const StyledDivider = styled(Divider)`
width:2px;
height: 55px,
background-color: RGB(224, 222, 247);
margin:  0 15px ;
`;

export const StyledSearchButton =styled(Button)`
width: 175px;
border: 1px solid #FAB8CD;
border-radius: 39px;
opacity: 1;
color: red;
font-size: 20px;
font-weight: 800;
text-transform: capitalize;
`;