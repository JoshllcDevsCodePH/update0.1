import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { ProgressBar } from "./ProgressBar";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export type FooterProps = {
  maxPower: number;
  currentPower: number;
  progress: number;
};
export const Footer: FC<FooterProps> = ({ maxPower, currentPower, progress }) => {
  return (
    <Box sx={{ width: "100%", marginBottom: "15px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginLeft: "20px", // Adjusted the margin here
          marginRight: "20px", // Adjusted the margin here
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ width: "40px", height: "35px", fontSize: "1.7rem", marginRight: "5px" }}>⚡</Icon> {/* Adjusted margin here */}
          <Box>
            <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 900 }}>
              {currentPower}
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1, color: "rgba(255, 255, 255, 0.65)", marginLeft: "3px" }}
            >
              {"/  "}
              {maxPower}
            </Typography>
          </Box>
        </Box>
        <Menu color="inherit" variant="text">
          {menu.map((menuItem, index) => {
            return (
              <Link
                key={index}
                sx={{ color: "white" }}
                component={RouterLink}
                to={menuItem.link}
              >
                <Button>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginLeft: "3px", // Adjusted margin here
                    }}
                  >
                    <Icon sx={{ width: "22px", height: "22px", fontSize: "1rem" }}>
                      {menuItem.icon}
                    </Icon>
                    <Typography sx={{ fontSize: "12px", textTransform: "none" }}>
                      {menuItem.title}
                    </Typography>
                  </Box>
                </Button>
              </Link>
            );
          })}
        </Menu>
      </Box>
      <ProgressBar progress={progress} />
    </Box>
  );
};

const Menu = styled(ButtonGroup)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderRadius: "10px",
  "& .MuiButton-root": {
    borderColor: "rgba(255, 255, 255, 0.45)",
    maxWidth: "65px",
  },
}));

const menu = [
  { icon: "🧸", title: "Frens", link: "/boosts" },
  { icon: "📚", title: "Mine", link: "/upgrade" },
  { icon: "🪙", title: "Earn", link: "/task" },
  { icon: "🚀", title: "Boosts", link: "/boosts" },
];
