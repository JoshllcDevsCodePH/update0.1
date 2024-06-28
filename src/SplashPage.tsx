import React, { useEffect, useState } from "react";
import './index.css'; // Import the CSS file with animations

declare global {
  interface Window {
    Telegram: any;
  }
}

const SplashPage = () => {
  const [telegramUser, setTelegramUser] = useState<{
    uid: number;
    username: string;
    firstName?: string;
    lastName?: string;
    profilePhoto?: string;
  } | null>(null);

  useEffect(() => {
    // Initialize Telegram Web App
    window.Telegram.WebApp.ready();

    // Fetch the user's Telegram UID and username
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const { id, username, first_name, last_name, photo_url } = window.Telegram.WebApp.initDataUnsafe.user;
      setTelegramUser({
        uid: id,
        username: username,
        firstName: first_name,
        lastName: last_name,
        profilePhoto: photo_url,
      });
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
          <p>Welcome, {telegramUser.username}!</p>
          {telegramUser.firstName && <p>First Name: {telegramUser.firstName}</p>}
          {telegramUser.lastName && <p>Last Name: {telegramUser.lastName}</p>}
          {telegramUser.profilePhoto && (
            <img src={telegramUser.profilePhoto} alt="Telegram Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default SplashPage;
