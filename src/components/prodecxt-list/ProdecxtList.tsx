/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import axios from "axios";
import { citiesData, PropertyType } from "@/pages/api/types";
import { StyledRowBox, StyledTypography } from "./styles/ProdecutsStyle";
import ProductCard from "../prodecut-items/ProductCard";

export function ProductList() {
  const [prodecxtItem, setProdecxtItem] = React.useState<PropertyType[]>();
  +console.log("citiesItems", prodecxtItem);

  React.useEffect(() => {
    axios
      .get(
        "https://63bd70b818bc301c0267c02b.mockapi.io/api/v1/properties?page=1&limit=10"
      )
      .then((response: any) => {
        const data = response.data;
        setProdecxtItem(data);
        // console.log("data", data);
      });
  }, []);

  const result = prodecxtItem?.map((item, index) => {
    return (
      <>
        <ProductCard
          key={index}
          image={item.image}
          city={item.address}
          bed={item.number_of_bedrooms}
          bathRoom={item.number_of_bedrooms}
          floor={item.area} 
          price={item.price}
          currency='EGP'
                  />
      </>
    );
  });

  return (
    <Box>
      <StyledTypography>Featured properties</StyledTypography>
      <StyledRowBox>{result}</StyledRowBox>
    </Box>
  );
}
