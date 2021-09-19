import React from "react";
import { Button, Typography } from "@mui/material";
const StyleGuide = () => {
  return (
    <div>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="caption">caption</Typography>
      <Button variant="text" color="error">
        success
      </Button>
      <Button variant="outlined" color="primary">
        Outlined Get Started
      </Button>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default StyleGuide;
