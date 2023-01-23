import styled from 'styled-components';
import { Box, Button, Divider, Skeleton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { font2vw, px2vh, px2vw } from '@/utils/ResponsiveDimensions';


export const StyledCardBox = styled(Box)(({ theme }) => ({
  width: px2vw(374),
  borderRadius: px2vw(8),
  border: `${px2vw(1)} solid  gray`,
  overflow: 'hidden',
  marginBottom: px2vh(24),
  cursor: 'pointer',
}));

export const StyledCardImage = styled.img`
height:${px2vw((374 * 9) / 16)};
width:${px2vw(374)};
object-fit: cover;
`
export const StyledImgSkelton = styled(Skeleton)`
height:${px2vw((374 * 9) / 16)};
width:${px2vw(374)};
`
export const StyledLocationSkeleton = styled(Skeleton)`
margin-bottom: ${px2vh(20)};
`
export const StyledDetailsBox = styled(Box)`
padding:${px2vw(10)};
`

export const StyledSalaryBox = styled(Box)`
display:flex;
align-items: center;
`

export const StyledPriceTypography = styled(Typography)`
color:RGB(255, 159, 10);
font-weight:700;
margin:0 ${px2vw(4)};
`

export const StyledPlaceOutlinedIcon = styled(PlaceOutlinedIcon)(({ theme }) => ({
  // color: theme.palette.primary.main,
  fontSize: font2vw(16)
}));

export const StyledNightTypography = styled(Typography)`
color: #2AC084;
font-weight:500;
`
export const StyledSubTitleBox = styled(Box)`
display: flex;
align-items: center;
`

export const StyledIconBox = styled(Box)`
width:${px2vh(32)};
height:${px2vh(32)};
background-color:RGBA(0, 114, 239, 0.1);
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

export const StyledSalaryAndLikedBox = styled(Box)`
display: flex;
justify-content: space-between;
// margin-bottom:${px2vh(8)};
`

export const StyledFavoriteIcon = styled(Favorite)`
font-size:${font2vw(16)};
`

export const StyledFavoriteBorderIcon = styled(FavoriteBorder)(({ theme }) => ({
  color: '#fff',
  fontSize: font2vw(16)
}));

export const StyledPromoTypography = styled(Typography)`
color:RGB(25, 41, 101);
letter-space:0.147059;
font-weight:500;
line-height: inherit;
margin-bottom:${px2vh(8)};
`

export const StyledSubTitleTypography = styled(Typography)(({ theme }) => ({
  margin: `0 ${px2vw(8)}`
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  color: '#F5F5F5',
  marginBottom: px2vh(5)
}));

export const StyledIconAndTypographyBox = styled(Box)`
display:flex;
align-items: center;
justify-content: center;
`

export const StyledIconImage = styled.img(({ theme }) => ({
  color: '#F5F5F5',
  fontSize: font2vw(20)
}));





export const StyledFooterTypography = styled(Typography)(({ theme }) => ({
  color: 'RGBA(60, 60, 67, 0.6)',
  fontWeight: '700',
  margin: `0 ${px2vw(8)}`,
  whiteSpace: 'nowrap',

}));

export const StyledFooterBox = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const StyledCheckPriceButton = styled(Button)`
  height: ${px2vh(30)};
  width:100%;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(0, 114, 239, 0.201807);
  background-color: rgba(0, 114, 239, 0.106023);
    border-radius: ${px2vw(6)};
`;

