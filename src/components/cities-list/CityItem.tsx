/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import axios from "axios";
import { citiesData } from "@/pages/api/types";

export function CityItem() {
  const [citiesItems, setCitiesItems] = React.useState<citiesData[]>();
  +console.log("citiesItems", citiesItems);

  React.useEffect(() => {
    axios
      .get("https://63bd70b818bc301c0267c02b.mockapi.io/api/v1/home_images")
      .then((response: any) => {
        const data = response.data;
        setCitiesItems(data);
        // console.log("data", data);
      });
  }, []);

  const result = citiesItems?.map((item) => {
    return (
      <>
        <ImageListItem key={item.image}>
          <Typography>{item.name}</Typography>
          <Typography>50 districts</Typography>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
        </ImageListItem>

      </>
    );
  });

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        <>
          {result}
        </>
      </ImageList>
    </Box>
  );
}
