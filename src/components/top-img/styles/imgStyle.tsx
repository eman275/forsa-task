import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



export const StyledContainerBox = styled(Box)`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: 100vh;
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

export const StyledImage = styled.img`
  top: 81px;
  left: 2px;
  width: 1920px;
  height: 712px;
  opacity: 1;
`;

export const StyledLanguageIcon = styled(LanguageIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledImgHearderTypograpy = styled(Typography)`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const StyledButtomInfoBox = styled(Box)`
  padding-top: 30vh;
  padding-left: 298px;
`;

export const StyledLifeTypography = styled(Box)`
  font-size: 3.5rem;
`;

export const StyledBox = styled(Box)`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 46%;
`;

export const StyledLocationTypograpy = styled(Typography)`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const StyledPriceTypograpy = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
`;

export const StyledDontImage = styled.img`
  top: 81px;
  left: 2px;
  width: 117px;
  height: 18px;
  opacity: 1;
`;

export const StyledLocationIcon = styled(LocationOnOutlinedIcon)`
  width: 17px;
  height: 20px;
`;

export const StyledSearchIcon =styled(SearchOutlinedIcon)`
top: 778px;
left: 363px;
width: 30px;
height: 28px;
opacity: 50%;
`;