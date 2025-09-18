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

const isValidUrl = (string) => {
  try {
    new URL(string); // If URL is valid, this will not throw an error
    return true;
  } catch (_) {
    return false;
  }
};

function InfoDrawer({ open, onClose, info, title = "Information", anchor = "left", onClick }) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
    <Drawer
      anchor="left"
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
        ) : info && Object.keys(info).length > 0 ? (
          <>
            {info.image && (
              <Box
                component="img"
                src={info.image}
                alt="Profile"
                sx={{
                  height: 150,
                  width: 150,
                  borderRadius: "50%",
                  display: "block",
                  mx: "auto",
                  my: 2,
                  border: "2px solid #ffffffff",
                  boxShadow: "0 0 15px #ffffffff",
                }}
              />
            )}


            <List disablePadding>
              {Object.entries(info).map(([key, value], idx) => (
                <Box
                  key={idx}
                  sx={{
                    mb: 0.5,
                    mx: 1,
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#c9c9c9ff", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}
                  >
                    {formatLabel(key)}
                  </Typography>

                  {key === "recent" && Array.isArray(value) ? (
                    <List disablePadding>
                      {value.length > 0 ? (
                        value.map((item, i) => (
                          <ListItem key={i} disablePadding sx={{ color: "#ffffffff", fontSize: "0.9rem", ml: 1 }}>
                            • {typeof item === "object" ? JSON.stringify(item) : item.toString()}
                          </ListItem>
                        ))
                      ) : (
                        <ListItem disablePadding sx={{ color: "#ffffffff" }}>
                          -
                        </ListItem>
                      )}
                    </List>
                  ) : isValidUrl(value) ? (
                    // If value is a valid URL, render it as a hyperlink
                    <Typography sx={{ color: "#00e5ff", fontSize: "1rem", ml: 1 }}>
                      <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} onClick={onClick(value)}>
                        {value}
                      </a>
                    </Typography>
                  ) : (
                    <Typography sx={{ color: "#ffffffff", fontSize: "1rem", ml: 1 }}>
                      {value?.toString() || "-"}
                    </Typography>
                  )}
                </Box>
              ))}
            </List>
          </>
        ) : (
          <Typography sx={{ color: "#757575" }}>No data found.</Typography>
        )}
      </Box>
            
    </Drawer>


    </div>
  );
}


export default InfoDrawer;
