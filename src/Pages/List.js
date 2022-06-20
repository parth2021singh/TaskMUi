import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Appbar from "../Appbar";
import axios from "axios";

const List = () => {
  const [details, setDetails] = useState([]);
  const fetchDetails = () => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      console.log(response.data.results);
      setDetails(response.data.results);
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <Appbar />

      <div>
        <Grid container spacing={4} margin="0 auto">
          {details.map((value) => {
            return (
              <Grid item key={value.id}>
                <Card sx={{ width: 140, height: 180 }}>
                  <CardContent alignItems="center">
                    <CardMedia
                      component="img"
                      sx={{ height: "25%", width: "25%" }}
                      image={value.picture.medium}
                    />
                    <Typography>
                      Name:{value.name.first + " " + value.name.last}
                    </Typography>
                    <Typography variant="body3">
                      Gender:{value.gender}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">More Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default List;
