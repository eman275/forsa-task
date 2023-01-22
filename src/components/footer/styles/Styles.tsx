import styled from 'styled-components';
import { Box, Button, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { font2vw, px2vh, px2vw } from '@/utils/ResponsiveDimensions';

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor:'#0c1f39',
  padding: px2vw(40),
  height: px2vh(320),
  display: 'flex',
  justifyContent: 'space-between',
  '@media (min-width: 481px) and (max-width: 830px)':{
    height: `${px2vh(200)} !important`,
  },
  '@media (max-width: 480px)' :{
    height: `${px2vh(150)} !important`,
  }
}));
export const StyledMainContainer = styled(StyledContainerBox)<{ small?: boolean }>`
  height: ${(props) => (props.small ? 'auto' : px2vh(320))};
`;

export const StyledDetailsBox = styled(Box)<{small?:boolean}>`
width:${props=>props.small?'auto':px2vw(431)};
height:100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: '700',
  letterSpacing: '0.4px',
}));

export const StyledSubTitleTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
}));

export const StyledTabsBox = styled(Box)<{ small?: boolean }>`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledButtonBox = styled(Box)`
display: flex;
justify-content: space-between;
margin-top:${px2vh(10)};
`

export const StyledFooterButton = styled(Button)`
height:0;
color: RGB(255, 255, 255);
margin:0 ${px2vw(10)};
`

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
