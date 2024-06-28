import { Box, Button, Card, Typography, Grid, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton, useWebApp } from "@vkruglikov/react-telegram-web-app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faYoutube, faTiktok, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";  // Correct import for faArrowLeft

interface Task {
  id: number;
  name: string;
  icon: any;
  reward: number;
  link: string;
}

export const TaskPage: FC = () => {
  const navigate = useNavigate();
  const { WebAppInitData } = useWebApp();
  const [clickedTask, setClickedTask] = useState<string | null>(null);
  const [claiming, setClaiming] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [claimedTasks, setClaimedTasks] = useState<string[]>([]); // Track claimed tasks
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState<number | null>(null); // Track earned points
  const [coins, setCoins] = useState<number>(0); // Track user's coins

  const tasks: Task[] = [
    { id: 1, name: 'Telegram', icon: faTelegram, reward: 100000, link: 'https://t.me/titimoburat_01' },
    { id: 2, name: 'YouTube', icon: faYoutube, reward: 200000, link: 'https://youtube.com/@joshuacalaguas-ud2mh?si=Kj1WenVR8AF_z2LL' },
    { id: 3, name: 'TikTok', icon: faTiktok, reward: 300000, link: 'https://www.tiktok.com/@elepsipilipitbody?_t=8nWtR2jI4BN&_r=1' },
    { id: 4, name: 'Facebook', icon: faFacebook, reward: 400000, link: 'https://www.facebook.com/profile.php?id=100067784000990&mibextid=ZbWKwL' },
    { id: 5, name: 'Twitter', icon: faTwitter, reward: 500000, link: '#' }
  ];

  // Effect to update coins when earnedPoints changes
  useEffect(() => {
    if (earnedPoints !== null) {
      setCoins((prevCoins) => prevCoins + earnedPoints);
    }
  }, [earnedPoints]);

  const handleButtonClick = (taskLink: string) => {
    if (!clickedTask) {
      window.open(taskLink, "_blank");
      setClickedTask(taskLink);
    } else {
      setClaiming(true);
      setCountdown(15);

      const timer = setInterval(() => {
        setCountdown((prevCount) => (prevCount! > 0 ? prevCount! - 1 : 0));
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        setClaiming(false);
        setClickedTask(null);
        setClaimedTasks([...claimedTasks, taskLink]); // Add claimed task to state
        setEarnedPoints(tasks.find(task => task.link === taskLink)?.reward || null); // Set earned points

        // Show congratulations dialog
        setShowCongratulations(true);

        // Hide congratulations dialog after 3 seconds
        setTimeout(() => {
          setShowCongratulations(false);
          setEarnedPoints(null); // Reset earned points
        }, 3000);
      }, 15000);
    }
  };

  const isTaskClaimed = (taskLink: string) => claimedTasks.includes(taskLink);

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
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
          position: "relative", // Added position relative to position the back button absolutely
        }}
      >
        <Typography variant="h4" sx={{ marginTop: "100px" }}>
          {WebAppInitData?.user?.id}
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "15px" }}>
          Earn & Claim Reward
        </Typography>
        <Grid container direction="column" spacing={2} sx={{ marginTop: "30px" }}>
          {tasks.map((task) => (
            <Grid item key={task.id} sx={{ margin: "3px" }}>
              <Card sx={{ padding: "20px", borderRadius: "5px", margin: "3px", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
                <Grid container alignItems="center">
                  <Grid item sx={{ margin: "3px" }}>
                    <FontAwesomeIcon icon={task.icon} style={{ fontSize: "40px", color: "white" }} />
                  </Grid>
                  <Grid item sx={{ flexGrow: 1, paddingLeft: "10px", margin: "3px" }}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {task.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white", marginTop: "10px" }}>
                      Reward: {task.reward.toLocaleString()} points
                    </Typography>
                  </Grid>
                  <Grid item sx={{ margin: "3px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: claiming && clickedTask === task.link ? "green" : (isTaskClaimed(task.link) ? "rgba(255, 255, 255, 0.25)" : "yellow"),
                        color: "black",
                        '&:hover': {
                          backgroundColor: 'transparent',
                          border: '1px solid yellow',
                          color: 'yellow',
                        },
                        margin: "3px"
                      }}
                      onClick={() => handleButtonClick(task.link)}
                      disabled={claiming && clickedTask === task.link || isTaskClaimed(task.link)}
                    >
                      {clickedTask === task.link ? (
                        claiming && clickedTask === task.link ? (
                          <span style={{ color: "white" }}>{countdown && countdown > 0 ? `${countdown}s` : "Claimed"}</span>
                        ) : (
                          <span>Claim</span>
                        )
                      ) : (
                        <span>Check</span>
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Congratulations Dialog */}
      <Dialog open={showCongratulations} onClose={() => setShowCongratulations(false)} sx={{ minWidth: "300px", minHeight: "200px", borderRadius: "10px", margin: "3px" }}>
        <DialogTitle sx={{ margin: "3px" }}>Congratulations!</DialogTitle>
        <DialogContent sx={{ textAlign: "center", padding: "24px", margin: "3px" }}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "16px", lineHeight: "1.6" }}>
            You earned {earnedPoints?.toLocaleString()} points
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: "3px" }}>
            <img src="/reward.png" alt="Reward Icon" style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: '16px' }} />
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666", maxWidth: '80%', lineHeight: '1.4' }}>
              Congratulations on your achievement! You've successfully earned {earnedPoints?.toLocaleString()} points for completing this task.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', gap: '10px', marginTop: '10px', margin: "3px" }}>
          <Button onClick={() => setShowCongratulations(false)} variant="contained" sx={{ width: '100%', backgroundColor: 'yellow', color: 'black', margin: '3px' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
