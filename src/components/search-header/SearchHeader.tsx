// import { Dialog } from "@mui/material";
// import { webAssets } from "@propertiano/assets-web";
// import { AuthContainer } from "@propertiano/auth-container";
// import { StyledContainerBox } from "./styles/Styles";
'use client';

import { AppBar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles/navbar.module.css'
import { StyledContainerBox, StyledDivider, StyledLanguageIcon, StyledSearchButton, StyledSearchTypograpy, StyledSubContainerBox, StyledTypography } from "./styles/SearhStyle";
import { StyledSearchIcon } from "../top-img/styles/imgStyle";

// import {
//   LogoBoxStyle,
//   StyledButtonBox,
//   StyledContainerBox,
//   StyledLogoImage,
//   StyledCreateAccountButton,
//   StyledLoginButton
// } from "./styles/Styles";

export interface SearchHeaderProps {
}

export function SearchHeader(props: SearchHeaderProps) {

    return (
        <StyledContainerBox >
            <StyledSubContainerBox>
                <StyledSearchIcon />
                <StyledSearchTypograpy>
                    Select City
                    {/* <Divider orientation="vertical" variant="inset" flexItem /> */}
                </StyledSearchTypograpy>
                <StyledDivider   orientation="vertical"/>
                <StyledSearchTypograpy>
                   Min.price
                </StyledSearchTypograpy>
                <StyledSearchTypograpy>
                    Max.price
                </StyledSearchTypograpy>
                <StyledSearchTypograpy>
                    Area
                </StyledSearchTypograpy>
                <StyledSearchButton>Search</StyledSearchButton>
            </StyledSubContainerBox>
        </StyledContainerBox>
    );
}

export default SearchHeader;

