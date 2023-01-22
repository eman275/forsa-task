
"use client";
import { Box } from "@mui/material";
import { StyledTwitterIcon, StyledButtonBox, StyledContainerBox, StyledDetailsBox, StyledFooterButton, StyledIconBox, StyledSocialBox, StyledSubTitleTypography, StyledTabsBox, StyledTitleTypography, StyledFacebookIcon, StyledInstagramIcon, StyledMainContainer } from "./styles/Styles";


export interface FooterProps {
  small?:boolean
}

export function Footer({small}: FooterProps) {

 

  return (
    <StyledMainContainer  small={small}>
      <StyledDetailsBox small={small}>
        <Box>
          <StyledTitleTypography variant="h4">
            We Deliver your Vacation with Propertiano!
          </StyledTitleTypography>
          <StyledSubTitleTypography variant="body1">
            We offer tailored services for all your traveling needs. Our host are wonderful, ready to accommodate your stay as you enjoy your vacation without worries.
          </StyledSubTitleTypography>
        </Box>
        <StyledSubTitleTypography variant="body2">
          © 2022  Propertiano.
        </StyledSubTitleTypography>
      </StyledDetailsBox>
      <StyledTabsBox small={small}>
        <StyledButtonBox>
          <StyledFooterButton>
            Contact us
          </StyledFooterButton>
          <StyledFooterButton >
            Privacy policy
          </StyledFooterButton>
          <StyledFooterButton>
            Help center
          </StyledFooterButton>
          <StyledFooterButton>
            About us
          </StyledFooterButton>
        </StyledButtonBox>
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
      </StyledTabsBox>

    </StyledMainContainer>
  );
}

export default Footer;

