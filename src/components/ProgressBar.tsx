import { Box } from "@mui/material";
import { FC } from "react";

export type ProgressBarProps = {
  progress: number;
};
export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Box
      sx={{
        position: "relative",
        marginInline: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        height: "12px",
        borderRadius: "6px",

        "&:before": {
          content: '""',
          position: "absolute",
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);",
          top: "0",
          left: "0",
          borderRadius: "6px",
          transition: "width 0.2s ease-out",
        },
      }}></Box>
  );
};
