/* eslint-disable react/jsx-no-useless-fragment */
"use client";
import { Checkbox, Skeleton } from "@mui/material";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import {
  StyledCardBox,
  StyledCardImage,
  StyledDetailsBox,
  StyledIconBox,
  StyledNightTypography,
  StyledSalaryAndLikedBox,
  StyledSalaryBox,
  StyledPriceTypography,
  StyledFavoriteIcon,
  StyledFavoriteBorderIcon,
  StyledPromoTypography,
  StyledSubTitleTypography,
  StyledDivider,
  StyledPlaceOutlinedIcon,
  StyledSubTitleBox,
  StyledIconAndTypographyBox,
  StyledIconImage,
  StyledFooterTypography,
  StyledFooterBox,
  StyledLocationSkeleton,
  StyledImgSkelton,
} from "./styles/Styles";

export interface ProductCardProps {
  image: string;
  price: number;
  city: string;
  bed: number;
  bathRoom: number;
  floor: string;
  currency: string;
}

export function ProductCard(props: ProductCardProps) {
  const { image, currency, price, bed, bathRoom, floor, city } = props;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <StyledCardBox>
      {image ? (
        <StyledCardImage src={image} />
      ) : (
        <StyledImgSkelton variant="rectangular" animation={false} />
      )}

      <StyledDetailsBox>
        <StyledSalaryAndLikedBox>
          <StyledSalaryBox>
            <StyledPriceTypography variant="h5">
              {currency} {price}
            </StyledPriceTypography>
            <StyledNightTypography variant="body2">
              {` /mo`}
            </StyledNightTypography>
          </StyledSalaryBox>

        </StyledSalaryAndLikedBox>

        {city ? (
          <StyledSubTitleBox>
            <StyledPlaceOutlinedIcon />
            <StyledSubTitleTypography variant="body1">
              {city}
            </StyledSubTitleTypography>
          </StyledSubTitleBox>
        ) : (
          <StyledLocationSkeleton
            variant="rectangular"
            width="60%"
            animation={false}
          />
        )}

        <StyledDivider />
        <StyledFooterBox>
          {bed ? (
            <StyledIconAndTypographyBox>
              <BedOutlinedIcon />
              <StyledFooterTypography variant="body2">
                {`${bed} Bedroom`}
              </StyledFooterTypography>
            </StyledIconAndTypographyBox>
          ) : (
            <Skeleton variant="rectangular" width="30%" animation={false} />
          )}
          {bathRoom ? (
            <StyledIconAndTypographyBox>
              <BathtubOutlinedIcon />
              <StyledFooterTypography variant="body2">
                {`${bathRoom}  Bathroom`}
              </StyledFooterTypography>
            </StyledIconAndTypographyBox>
          ) : (
            <Skeleton variant="rectangular" width="30%" animation={false} />
          )}
          {floor ? (
            <StyledIconAndTypographyBox>
              <WallpaperOutlinedIcon />
              <StyledFooterTypography variant="body2">
                {floor}
              </StyledFooterTypography>
            </StyledIconAndTypographyBox>
          ) : (
            <Skeleton variant="rectangular" width="30%" animation={false} />
          )}
        </StyledFooterBox>
      </StyledDetailsBox>
    </StyledCardBox>
  );
}

export default ProductCard;
