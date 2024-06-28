import { Box, Card, Typography } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton, useWebApp } from "@vkruglikov/react-telegram-web-app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export type BoostsPageProps = {
  count: number;
};

export const BoostsPage: FC<BoostsPageProps> = ({ count }) => {
  const navigate = useNavigate();
  const WebApp = useWebApp();

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Center vertically
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          borderRadius: "10px",
          margin: "auto", // Center horizontally
          maxWidth: "600px", // Optional: Set a maximum width for responsiveness
          position: "relative", // Added position relative to position the back button absolutely
        }}
      >
        <Balance count={count} />
        <Typography sx={{ marginTop: "10px" }}>Your balance</Typography>

        {/* Daily booster use section */}
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            width: "100%",
            borderRadius: "10px",
            textAlign: "center", // Center content
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Daily Booster Use
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                width: "150px",
                padding: "10px",
                marginRight: "10px",
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Transition for background and text color
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black", // Change text color to black on hover
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Robust 3x 🚀
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                FREE
              </Typography>
            </Card>
            <Card
              sx={{
                width: "150px",
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Transition for background and text color
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black", // Change text color to black on hover
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Eveready 3x 🔋
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                FREE
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* Upgrade the weapon section */}
        <Box sx={{ width: "100%", marginLeft: "14px", borderRadius: "10px" }}>
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Upgrade the Weapon
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px", // Margin between cards
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Transition for background and text color
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black", // Change text color to black on hover
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Multi Tap Level 1 🛠️
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Upgrade Cost: 5,000
              </Typography>
            </Card>
            <Card
              sx={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px", // Margin between cards
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Transition for background and text color
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black", // Change text color to black on hover
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                EnergyMax Level 1 ⚡
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Upgrade Cost: 5,000
              </Typography>
            </Card>
            <Card
              sx={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px", // Margin between cards
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Transition for background and text color
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black", // Change text color to black on hover
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Alitaptap 🤖
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Upgrade Cost: 100,000
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
