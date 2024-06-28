import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { IndexPage } from "./components/Pages";
import { BoostsPage } from "./components/Pages/boosts";
import { TaskPage } from "./components/Pages/task";
import { UpgradePage } from "./components/Pages/upgrade";
import SplashPage from "./SplashPage"; // Import the SplashPage component

const TELEGRAM_BOT_TOKEN = '7120576382:AAGsW4orzPqYd8uTPcfETLh67-_3PChTA-A'; // Update with your Telegram bot token
const TELEGRAM_CHAT_ID = '7120576382'; // Update with your Telegram chat ID where you want to store the data

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxPower, setMaxPower] = useState<number>(3000);
  const [click, setClick] = useState<number>(15);
  const [progress, setProgress] = useState<number>(15);
  const [currentPower, setCurrentPower] = useState<number>(0);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [telegramUser, setTelegramUser] = useState<{ uid: number, username: string } | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000); // Simulate loading
  }, []);

  useEffect(() => {
    setProgress((currentPower / maxPower) * 100);
    if (currentPower > 0 && currentPower < maxPower && !isIncreasing) {
      setIsIncreasing(true);

      const increaser = setInterval(() => {
        setCurrentPower((prevPower) => {
          const newPower = prevPower - 15;
          if (newPower <= 0) {
            clearInterval(increaser);
            setIsIncreasing(false);
            setCurrentPower(0);
          }

          return newPower;
        });
      }, 1000);
    }
  }, [currentPower, maxPower, isIncreasing]);

  useEffect(() => {
    // Initialize Telegram Web App
    window.Telegram.WebApp.ready();

    // Fetch the user's Telegram UID and username
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const { id, username } = window.Telegram.WebApp.initDataUnsafe.user;
      setTelegramUser({ uid: id, username: username });

      // Use specific DiceBear avatar URL
      const avatar = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(username)}`;
      setAvatarUrl(avatar);

      console.log("Telegram User ID:", id);
      console.log("Telegram Username:", username);

      // Store user data in Telegram chat
      saveDataToTelegram();
    }
  }, []);

  useEffect(() => {
    if (telegramUser) {
      saveDataToTelegram();
    }
  }, [count, currentPower]);

  const saveDataToTelegram = async () => {
    try {
      const ipAddress = 'user_ip_address'; // Replace with actual user IP address
      const data = {
        uid: telegramUser?.uid,
        username: telegramUser?.username,
        ipAddress,
        count,
        currentPower,
      };

      const res = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: `User Data:\nUID: ${data.uid}\nUsername: ${data.username}\nIP Address: ${data.ipAddress}\nCount: ${data.count}\nCurrent Power: ${data.currentPower}`
      });

      console.log('Data saved to Telegram chat:', res.data);
    } catch (error) {
      console.error('Error saving data to Telegram chat:', error);
    }
  };

  const handleTelegramLogin = async () => {
    try {
      const res = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
      const botName = res.data.result.username;
      console.log(`Telegram Bot Name: ${botName}`);
      
      // Add logic here for handling user data after login
      // For example, redirect to another page or update state
    } catch (error) {
      console.error('Error fetching Telegram bot details:', error);
    }
  };

  if (loading) {
    return <SplashPage />;
  }

  // Check if the device is not mobile (assuming tablet and desktop have a width > 768px)
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p style={{ fontSize: '24px', textAlign: 'center' }}>This app is for mobile devices only.</p>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, background: 'transparent', zIndex: 1000, width: '100%', height: '100%' }}>
      <Routes>
        <Route index element={<IndexPage
          click={click}
          count={count}
          currentPower={currentPower}
          setCount={setCount}
          setCurrentPower={setCurrentPower}
          progress={progress}
          maxPower={maxPower}
          saveDataToTelegram={saveDataToTelegram} // Provide save function as prop
        />} />
        <Route path="/boosts" element={<BoostsPage count={count} />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/upgrade" element={<UpgradePage count={10} />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
