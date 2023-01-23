import styled from 'styled-components';
import { Box, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { font2vw, px2vw } from '@/utils/ResponsiveDimensions';

export const StyledContainerBox = styled(Box)`
background-color: #0c1f39;
display: flex;
align-content: center;
justify-content: center;
align-items: center;
background-color: #0c1f39;
padding: 80px;
height: auto;
`;


export const StyledTitleTypography = styled(Typography)`
color: #fff;
`;


export const StyledDetailsBox = styled(Box)`
height:100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;


export const StyledSocialBox = styled(Box)`
width:${px2vw(700)};
display: flex;
justify-content: flex-end;
`


export const StyledIconBox = styled(Box)(({ theme }) => ({
  // backgroundColor: '#fff',
  width: px2vw(40),
  height: px2vw(40),
  margin:`0 ${px2vw(5)}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledTwitterIcon=styled(TwitterIcon)(({ theme }) => ({
  color:'#fff',
  fontSize:font2vw(16)
}));

export const StyledFacebookIcon=styled(FacebookIcon)(({ theme }) => ({
  color: '#fff',
  fontSize:font2vw(16)
}));

export const StyledInstagramIcon=styled(InstagramIcon)(({ theme }) => ({
  color:'#fff',
  fontSize:font2vw(16)
}));
