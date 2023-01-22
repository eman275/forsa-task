import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import Group from "../../images/Group.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export const StyledAuthBox = styled(Box)`
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #000;
    background-image: url(${Group.src});
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .MuiGrid-root {
    max-width: none;
  }
`;

export const StyledchildrenBox = styled(Box)`
  // background-color: rgba(11, 11, 11, 0.527);
  // border: 1px solid #bd902e;
  // border-radius: 5px;
  // padding: 15px;
`;

export const StyledButtomInfoBox = styled(Box)`
  padding-top: 30vh;
  // padding-left: 298px;
`;

export const StyledLifeTypography = styled(Box)`
  font-size: 3.5rem;
`;

export const StyledBox = styled(Box)`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const StyledImgHearderTypograpy = styled(Typography)`
  font-size: 3.5rem;
  font-weight: bold;
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