import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { IndexPage } from "./components/Pages";
import { BoostsPage } from "./components/Pages/boosts";
import { TaskPage } from "./components/Pages/task";
import { UpgradePage } from "./components/Pages/upgrade";
import SplashPage from "./SplashPage"; // Import the SplashPage component

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; // Update with your Telegram bot token

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxPower, setMaxPower] = useState<number>(3000);
  const [click, setClick] = useState<number>(15);
  const [progress, setProgress] = useState<number>(15);
  const [currentPower, setCurrentPower] = useState<number>(0);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [telegramUser, setTelegramUser] = useState<{
    uid: number;
    username: string;
    profilePhoto?: string;
  } | null>(null);

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

    // Fetch the user's Telegram UID, username, and profile photo URL
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const { id, username, photo_url } = window.Telegram.WebApp.initDataUnsafe.user;
      setTelegramUser({ uid: id, username: username, profilePhoto: photo_url });
      console.log("Telegram User ID:", id);
      console.log("Telegram Username:", username);
      console.log("Telegram Profile Photo URL:", photo_url);
    }
  }, []);

  const saveDataToTelegram = async () => {
    try {
      const res = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: 'your_chat_id', // Replace with your chat ID where you want to store the data
        text: `Count: ${count}, Current Power: ${currentPower}` // Example data to save
      });

      console.log('Data saved to Telegram bot:', res.data);
    } catch (error) {
      console.error('Error saving data to Telegram bot:', error);
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

  return (
    <div style={{ position: 'relative' }}>
      {telegramUser && (
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', color: 'white', zIndex: 1000 }}>
          {telegramUser.profilePhoto && (
            <img src={telegramUser.profilePhoto} alt="Telegram Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
          )}
          <span>Welcome, {telegramUser.username}!</span>
        </div>
      )}
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
