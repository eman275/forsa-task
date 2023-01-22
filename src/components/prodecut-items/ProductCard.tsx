/* eslint-disable react/jsx-no-useless-fragment */
"use client";
import { Checkbox, Skeleton } from "@mui/material";
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
  StyledCheckPriceButton,
} from "./styles/Styles";

export interface ProductCardProps {
  image: string;
  price?: number;
  days?: number;
  promo: string;
  city: string;
  resorts?: string;
  bed: number;
  bathRoom: number;
  floor: string;
  currency?: string;
}

export function ProductCard(props: ProductCardProps) {
  const {
    image,
    currency,
    price,
    days,
    promo,
    bed,
    bathRoom,
    floor,
    city,
    resorts,
  } = props;

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
            
              
                {price || currency || days ? (
                  <>
                    <StyledPriceTypography variant="h5">
                      {currency} {price}
                    </StyledPriceTypography>
                    <StyledNightTypography variant="body2">
                      {`(${days}  'Night')`}
                    </StyledNightTypography>
                  </>
                ) : (
                  <Skeleton
                    variant="rectangular"
                    width="60%"
                    animation={false}
                  />
                )}
        
           
          </StyledSalaryBox>

          {image ? (
            <StyledIconBox>
              <Checkbox
                {...label}
                icon={<StyledFavoriteBorderIcon />}
                checkedIcon={<StyledFavoriteIcon />}
              />
            </StyledIconBox>
          ) : (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation={false}
            />
          )}
        </StyledSalaryAndLikedBox>

        {promo ? (
          <StyledPromoTypography variant="h5">{promo}</StyledPromoTypography>
        ) : (
          <Skeleton variant="rectangular" width="60%" animation={false} />
        )}

        {resorts || city ? (
          <StyledSubTitleBox>
            <StyledPlaceOutlinedIcon />
            <StyledSubTitleTypography variant="body1">
              {resorts} {city}
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
              <StyledIconImage src={""} />
              <StyledFooterTypography variant="body2">
                {`${bed}  'Bedroom'`}
              </StyledFooterTypography>
            </StyledIconAndTypographyBox>
          ) : (
            <Skeleton variant="rectangular" width="30%" animation={false} />
          )}
          {bathRoom ? (
            <StyledIconAndTypographyBox>
              <StyledIconImage src={""} />
              <StyledFooterTypography variant="body2">
                {`${bathRoom}  'Bathroom')}`}
              </StyledFooterTypography>
            </StyledIconAndTypographyBox>
          ) : (
            <Skeleton variant="rectangular" width="30%" animation={false} />
          )}
          {floor ? (
            <StyledIconAndTypographyBox>
              <StyledIconImage src={""} />
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
