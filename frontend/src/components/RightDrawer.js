// components/RightClickDrawer.js
import React from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";

function RightDrawer({ open, onClose, lat, lng, onFlyHere }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        BackdropProps: { style: { backgroundColor: "transparent" } },
      }}
    >
      <Box sx={{ width: 300, p: 3 }}>
        <Typography>
          <strong>Latitude:</strong> {lat?.toFixed(6)}
        </Typography>
        <Typography>
          <strong>Longitude:</strong> {lng?.toFixed(6)}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            if (onFlyHere) onFlyHere({ lat, lng });
          }}
          sx={{ mt: 2 }}
        >
          Fly Here
        </Button>
      </Box>
    </Drawer>
  );
}

export default RightDrawer;
