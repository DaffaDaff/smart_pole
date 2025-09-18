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

function InfoDrawer({ open, onClose, info, title = "Information", anchor = "left", onDelete }) {
  const [loading, setLoading] = useState(false);
  return (
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
                          <ListItem
                            key={i}
                            disablePadding
                            sx={{ color: "#ffffffff", fontSize: "0.9rem", ml: 1 }}
                          >
                            • {typeof item === "object" ? JSON.stringify(item) : item.toString()}
                          </ListItem>
                        ))
                      ) : (
                        <ListItem disablePadding sx={{ color: "#ffffffff" }}>
                          -
                        </ListItem>
                      )}
                    </List>
                  ) : (
                    <Typography sx={{ color: "#ffffffff", fontSize: "1rem", ml: 1 }}>
                      {value?.toString() || "-"}
                    </Typography>
                  )}
                </Box>
              ))}
            </List>

            {/* {onDelete && (
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  width: "100%",
                  background: "#00e5ff",
                  color: "#0f2027",
                  fontWeight: "bold",
                  textShadow: "0 0 5px #00e5ff",
                  "&:hover": { background: "#00bcd4", boxShadow: "0 0 20px #00e5ff" },
                }}
                onClick={onDelete}
              >
                Remove
              </Button>
            )} */}
          </>
        ) : (
          <Typography sx={{ color: "#757575" }}>No data found.</Typography>
        )}
      </Box>
    </Drawer>
  );
}


export default InfoDrawer;
