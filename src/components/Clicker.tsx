import styled from "@emotion/styled";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";
import { useEffect, useState } from "react";
import { Balance } from "./Balance";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export type ClickerProps = {
  count: number;
  setCount: (value: React.SetStateAction<number>) => void;
  currentPower: number;
  setCurrentPower: (value: React.SetStateAction<number>) => void;
  click: number;
  maxPower: number;
};
export const Clicker = ({
  count,
  setCount,
  currentPower,
  setCurrentPower,
  click,
  maxPower,
}: ClickerProps) => {
  const [impactOccurred] = useHapticFeedback();
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (currentPower < maxPower - click) {
      setDisabled(false);
    }
  }, [currentPower, maxPower, click]);

  const increase = () => {
    console.log("ins");

    if (currentPower >= maxPower - click) {
      console.log(currentPower >= maxPower - click, maxPower - click, currentPower);
      setDisabled(true);
      setCurrentPower(maxPower);
      return;
    }
    setCount(count + click);
    setCurrentPower(currentPower + click);
  };

  return (
    <>
      <Balance count={count} />
      <Box
        sx={{
          position: "relative",
          marginTop: "-15vh",
        }}>
        {!disabled ? (
          <AnimatedBox>
            <Button
              disabled={disabled}
              sx={{
                borderRadius: "50%",
                width: 250,
                height: 250,
                zIndex: 12,
                "&:active": {
                  transform: "scale(0.98)",
                },
                "&.Mui-disabled": {
                  // background: "red",
                },
              }}>
              <ClickerButton
                onClick={() => {
                  impactOccurred("medium");
                  increase();
                }}
                src="logo.png"
              />
            </Button>
          </AnimatedBox>
        ) : (
          <Box
            sx={{
              borderRadius: "50%",
              width: 250,
              height: 250,
              top: 0,
              left: 0,
            }}>
            <AnimatedBox>
              <CountdownCircleTimer
                isPlaying
                size={250}
                duration={10}
                trailColor="rgba(0, 0, 0, 0)"
                colors="rgba(255, 255, 255, 0.2)"
                onComplete={() => ({ shouldRepeat: true, delay: 1 })}>
                {renderTime}
              </CountdownCircleTimer>
            </AnimatedBox>
          </Box>
        )}
      </Box>
    </>
  );
};

const ClickerButton = styled(Avatar)(() => ({
  width: 250,
  height: 250,
}));

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
  return (
    <Typography
      sx={{ fontWeight: "900", color: "rgba(255, 255, 255, 0.3)" }}
      variant="h4">
      {remainingTime}
    </Typography>
  );
};

const AnimatedBox = styled(Box)`
  animation: appearAnimation 0.5s ease-out;

  @keyframes appearAnimation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
