"use client";
import {
  StyledTwitterIcon,
  StyledContainerBox,
  StyledDetailsBox,
  StyledIconBox,
  StyledSocialBox,
  StyledTitleTypography,
  StyledFacebookIcon,
  StyledInstagramIcon,
} from "./styles/Styles";

export interface FooterProps {}

export function Footer() {
  return (
    <StyledContainerBox>
      <StyledDetailsBox>
        <StyledTitleTypography>Navigate</StyledTitleTypography>
        <StyledTitleTypography>Home</StyledTitleTypography>
        <StyledTitleTypography>Properties</StyledTitleTypography>
        <StyledTitleTypography>Company</StyledTitleTypography>
      </StyledDetailsBox>
      <StyledDetailsBox>
        <StyledTitleTypography>Support</StyledTitleTypography>
        <StyledTitleTypography>Terms and conditions</StyledTitleTypography>
        <StyledTitleTypography>FAQs</StyledTitleTypography>
        <StyledTitleTypography>Contact us</StyledTitleTypography>
      </StyledDetailsBox>
      <StyledSocialBox>
          <StyledIconBox>
            <StyledTwitterIcon />
          </StyledIconBox>
          <StyledIconBox>
            <StyledFacebookIcon />
          </StyledIconBox>
          <StyledIconBox>
            <StyledInstagramIcon />
          </StyledIconBox>
        </StyledSocialBox>
    </StyledContainerBox>
  );
}

export default Footer;
