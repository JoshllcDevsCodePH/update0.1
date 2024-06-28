import { Avatar, Box } from "@mui/material";
import { AnimatedCounter } from "react-animated-counter";

export type BalanceProps = {
  count: number;
};
export const Balance = ({ count }: BalanceProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20vh" }}>
      <Avatar src="logo.png" sx={{ width: "30px", height: "30px" }} />
      <AnimatedCounter
        includeDecimals={false}
        includeCommas
        incrementColor="white"
        decrementColor="white"
        value={count}
        color="white"
        fontSize="60px"
      />
    </Box>
  );
};
