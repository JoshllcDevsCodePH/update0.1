import React, { useEffect, useState } from "react";
import './index.css'; // Import the CSS file with animations

declare global {
  interface Window {
    Telegram: any;
  }
}

const SplashPage = () => {
  const [telegramUser, setTelegramUser] = useState<{ uid: number, username: string } | null>(null);

  useEffect(() => {
    // Initialize Telegram Web App
    window.Telegram.WebApp.ready();

    // Fetch the user's Telegram UID and username
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const { id, username } = window.Telegram.WebApp.initDataUnsafe.user;
      setTelegramUser({ uid: id, username: username });
      console.log("Telegram User ID:", id);
      console.log("Telegram Username:", username);
    }

    // Fetch the user's IP address without displaying it
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        // You can use the IP address here, for example, send it to your server
        console.log("User's IP Address:", data.ip);
        // Add logic here to handle the IP address if needed
      })
      .catch(error => console.error("Error fetching IP address:", error));

    // Simulate a delay to show the splash screen
    setTimeout(() => {
      // Replace with logic to navigate away from splash screen (e.g., using react-router-dom)
      // For example, redirect to the IndexPage or another route
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  return (
    <div className="splash-container">
      <div className="logo-wrapper">
        <img src="/path/to/facebook-logo.png" alt="Hello" className="logo" />
      </div>
      <div className="loader"></div>
      {telegramUser && (
        <div className="telegram-username">
          Welcome, {telegramUser.username}!
        </div>
      )}
    </div>
  );
};

export default SplashPage;
