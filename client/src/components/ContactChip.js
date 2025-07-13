import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AbsolutePositionedChip() {
  const chipContainerStyle = {
    position: "fixed",
    bottom: "12px",
    left: "16px",
    zIndex: 500,
    cursor: "pointer",
  };

  return (
    <div style={chipContainerStyle}>
      <Stack direction="row" spacing={1}>
        <Chip
          //avatar={<Avatar alt="Natacha" src="https://i.ibb.co/3z8L9vN/profile-pic.jpg" />}
          label="Made  by Prince Pandey"
          href="https://github.com/princepandey3"
          component="a"
          variant="filled"
          //   color="primary"
        />
      </Stack>
    </div>
  );
}
