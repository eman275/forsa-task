"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles/navbar.module.css";
import {
  StyledBox,
  StyledButtomInfoBox,
  StyledContainerBox,
  StyledDontImage,
  StyledImage,
  StyledImgHearderTypograpy,
  StyledLanguageIcon,
  StyledLifeTypography,
  StyledLocationIcon,
  StyledLocationTypograpy,
  StyledPriceTypograpy,
  StyledTypography,
} from "./styles/imgStyle";
import Group from "../images/Group.png";
import dont from "../images/dont.png";
import Image from "next/image";
// import SearchHeader from "../search-header/SearchHeader";

// import {
//   LogoBoxStyle,
//   StyledButtonBox,
//   StyledContainerBox,
//   StyledLogoImage,
//   StyledCreateAccountButton,
//   StyledLoginButton
// } from "./styles/Styles";

export interface TopImgProps {}

export function TopImg(props: TopImgProps) {
  return (
    <>
      <StyledContainerBox>
        <StyledImage
           src={Group.src}
          alt="Mountains with snow"
          // layout="fill"
          // objectFit="cover"
        />
      </StyledContainerBox>
      <StyledButtomInfoBox>
        <StyledLifeTypography>let`s find</StyledLifeTypography>
        <StyledImgHearderTypograpy> your dreem home</StyledImgHearderTypograpy>
        <StyledBox>
          <StyledLocationTypograpy>
          <StyledLocationIcon/>
            5th Settlement, New Cairo</StyledLocationTypograpy>
          <StyledPriceTypograpy>10,000 EGP-mo</StyledPriceTypograpy>
          <StyledDontImage
           src={dont.src}
          alt="Mountains with snow"
        />
        </StyledBox>
        {/* <SearchHeader/> */}
      </StyledButtomInfoBox>
    </>
  );
}

export default TopImg;
