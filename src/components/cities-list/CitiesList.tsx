// import { Dialog } from "@mui/material";
// import { webAssets } from "@propertiano/assets-web";
// import { AuthContainer } from "@propertiano/auth-container";
// import { StyledContainerBox } from "./styles/Styles";
'use client';

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles/navbar.module.css'
import { StyledContainerBox, StyledSubTitleTypography, StyledTypography, StyledViewAllCities } from "./styles/CitiesListStyle";
import { CityItem } from "./CityItem";

// import {
//   LogoBoxStyle,
//   StyledButtonBox,
//   StyledContainerBox,
//   StyledLogoImage,
//   StyledCreateAccountButton,
//   StyledLoginButton
// } from "./styles/Styles";

export interface CitiesListProps {
}

export function CitiesList(props: CitiesListProps) {




  return (
    <StyledContainerBox >
  <StyledTypography>A world of choice</StyledTypography>
  <StyledSubTitleTypography>Lorem ipsum dolor sit amet, consetetur</StyledSubTitleTypography>
     <CityItem/>
     <StyledViewAllCities> ViewAllCities</StyledViewAllCities>
  </StyledContainerBox>
  );
}

export default CitiesList;

