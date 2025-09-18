// components/UserDrawer.js
import { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  CircularProgress,
  List,
  ListItem,
} from "@mui/material";

const formatLabel = (key) => {
  return key
    .replace(/([A-Z])/g, " $1") // split camelCase
    .replace(/_/g, " ") // replace underscores
    .replace(/\s+/g, " ") // remove double spaces
    .trim()
    .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
};

function UrlDrawer({ open, onClose, url, title = "Information", anchor = "left", onDelete }) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            background: "linear-gradient(135deg, #1d1d1dff)",
            color: "#000000ff",
            fontFamily: "'Orbitron', sans-serif",
            width: 400,
            px: 1,
            py: 1,
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        },
      }}
    >
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#ffffffff"}}
          align="center"
        >
          {title}
        </Typography>

        {loading ? (
          <CircularProgress sx={{ color: "#ffffffff" }} />
        ) : url ? (
        <div className="sketchfab-embed-wrapper" style={{ position: 'absolute', top: '20', left: '0', zIndex: 9999 }}>
          <iframe 
            width="400" 
            height="700" 
            title="Lampu MITJ" 
            frameBorder="0" 
            allowFullScreen 
            mozAllowFullScreen="true" 
            webkitAllowFullScreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xrSpatialTracking 
            executionWhileOutOfViewport 
            executionWhileNotRendered 
            webShare 
            src="https://sketchfab.com/models/bdc840d3d1ee45e88136122f69cd7eeb/embed"
          />
        </div>
      ) : (
          <Typography sx={{ color: "#757575" }}>No data found.</Typography>
        )}
      </Box>
            
    </Drawer>


    </div>
  );
}


export default UrlDrawer;
