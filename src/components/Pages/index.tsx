import { Box } from "@mui/material";
import { Clicker } from "../Clicker";
import { Footer } from "../Footer";
import { FC } from "react";

export type IndexPageProps = {
  count: number;
  setCount: (value: React.SetStateAction<number>) => void;
  currentPower: number;
  setCurrentPower: (value: React.SetStateAction<number>) => void;
  click: number;
  maxPower: number;
  progress: number;
  saveDataToTelegram: () => void;
};

export const IndexPage: FC<IndexPageProps> = ({
  count,
  setCount,
  currentPower,
  setCurrentPower,
  click,
  maxPower,
  progress,
  saveDataToTelegram // Dito walang default value
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        color: "white",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          margin: "0",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("background.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -100,
          backgroundRepeat: "no-repeat",
          transform: "scale(1.1)",
          filter: "blur(8px)",
          "-webkit-filter": " blur(8px)",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "350px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 80%);",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            margin: "auto",
          },
        }}
      ></Box>
      <Clicker
        maxPower={maxPower}
        click={click}
        count={count}
        currentPower={currentPower}
        setCount={setCount}
        setCurrentPower={setCurrentPower}
      />
      <Footer maxPower={maxPower} currentPower={currentPower} progress={progress} />
    </Box>
  );
};
