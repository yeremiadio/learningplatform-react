import { TextField, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Typography variant="h3">Landing Page</Typography>
      <TextField
        variant="outlined"
        label="Nama"
        placeholder="Inputkan namamu"
      />
    </div>
  );
};

export default LandingPage;
