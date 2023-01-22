"use client";
import { Grid } from "@mui/material";
import NavBar from "../nav-bar/NavBar";
import {
  StyledAuthBox,
  StyledchildrenBox,
  StyledBox,
  StyledButtomInfoBox,
  StyledDontImage,
  StyledLifeTypography,
  StyledLocationIcon,
  StyledLocationTypograpy,
  StyledPriceTypograpy,
  StyledImgHearderTypograpy,
} from "./styles/Styles";
import dont from "../images/dont.png";
import SearchHeader from "../search-header/SearchHeader";

export interface AuthContainerProps {
}

export function AuthContainer(props: AuthContainerProps) {

  return (
    <StyledAuthBox>
      <StyledchildrenBox>
        <StyledButtomInfoBox>
          <StyledLifeTypography>
            let`s find
            <StyledImgHearderTypograpy>
              your dreem home
            </StyledImgHearderTypograpy>
          </StyledLifeTypography>

          <StyledBox>
            <StyledLocationTypograpy>
              <StyledLocationIcon />
              5th Settlement, New Cairo
            </StyledLocationTypograpy>
            <StyledPriceTypograpy>10,000 EGP-mo</StyledPriceTypograpy>
            <StyledDontImage src={dont.src} alt="Mountains with snow" />
          </StyledBox>
          <SearchHeader/>
        </StyledButtomInfoBox>
      </StyledchildrenBox>
    </StyledAuthBox>
  );
}

export default AuthContainer;
