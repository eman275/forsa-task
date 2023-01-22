import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const StyledContainerBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 200px;
  @media (max-width: 375px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const StyledLanguageIcon = styled(LanguageIcon)`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
