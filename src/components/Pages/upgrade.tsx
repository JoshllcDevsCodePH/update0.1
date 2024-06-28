import { useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faUser,
  faGhost,
  faFlag,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export type UpgradePageProps = {
  count: number;
};

export const UpgradePage: FC<UpgradePageProps> = ({ count }) => {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("home");
  const [upgrades, setUpgrades] = useState([
    { name: "Tukmol", cost: "🪙5,000", image: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/14164044/mutant-975x1024-1.jpeg" },
    { name: "Monggoloid", cost: "🪙100,000", image: "https://wallpaperbat.com/img/735370-boringstone-an-nft-magazine.jpg" },
    { name: "Tarantado", cost: "🪙5,000", image: "https://i.pinimg.com/originals/2f/0f/b1/2f0fb1caf873a793f50b627dc95b7b4a.jpg" },
    { name: "Gago", cost: "🪙100,000", image: "https://i.pinimg.com/736x/09/32/8e/09328e373960083b77c842beb838fc65.jpg" },
    { name: "Taknaydamo", cost: "🪙5,000", image: "https://blockmedia.com/wp-content/uploads/2022/04/mono-1024x1024.jpg" },
    { name: "Shabu", cost: "🪙100,000", image: "https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" },
    { name: "Butu", cost: "🪙5,000", image: "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/03/17154007/create-characters-with-traits-for-nft-art-collection-_3_-768x766.jpg" },
    { name: "Salagpi", cost: "🪙100,000", image: "https://publish.one37pm.net/wp-content/uploads/2021/07/image-2.png?fit=750%2C750" },
    { name: "Salot", cost: "🪙5,000", image: "https://wallpapercave.com/wp/wp10537345.png" },
    { name: "Burat", cost: "🪙100,000", image: "https://i.seadn.io/gae/_MvwHtPIbahDuNKtXHqvyWzrWDlDrH1a20WATiOQ8v2A7kbkeBR31Jz533g9zORLRySBJiH0JEHHzHVVNmldHepyoirYORyrNgooizU?auto=format&w=3840" },
  ]);

  const comboImages = [
    { name: "Combo 1", image: "/combo1.png" },
    { name: "Combo 2", image: "/combo2.png" },
    { name: "Combo 3", image: "/combo3.png" },
  ];

  const setDefaultUpgrades = () => {
    setUpgrades([
      { name: "Tukmol", cost: "🪙5,000", image: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/14164044/mutant-975x1024-1.jpeg" },
      { name: "Monggoloid", cost: "🪙100,000", image: "https://wallpaperbat.com/img/735370-boringstone-an-nft-magazine.jpg" },
      { name: "Tarantado", cost: "🪙5,000", image: "https://i.pinimg.com/originals/2f/0f/b1/2f0fb1caf873a793f50b627dc95b7b4a.jpg" },
      { name: "Gago", cost: "🪙100,000", image: "https://i.pinimg.com/736x/09/32/8e/09328e373960083b77c842beb838fc65.jpg" },
      { name: "Taknaydamo", cost: "🪙5,000", image: "https://blockmedia.com/wp-content/uploads/2022/04/mono-1024x1024.jpg" },
      { name: "Shabu", cost: "🪙100,000", image: "https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" },
      { name: "Butu", cost: "🪙5,000", image: "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/03/17154007/create-characters-with-traits-for-nft-art-collection-_3_-768x766.jpg" },
      { name: "Salagpi", cost: "🪙100,000", image: "https://publish.one37pm.net/wp-content/uploads/2021/07/image-2.png?fit=750%2C750" },
      { name: "Salot", cost: "🪙5,000", image: "https://wallpapercave.com/wp/wp10537345.png" },
      { name: "Burat", cost: "🪙100,000", image: "https://i.seadn.io/gae/_MvwHtPIbahDuNKtXHqvyWzrWDlDrH1a20WATiOQ8v2A7kbkeBR31Jz533g9zORLRySBJiH0JEHHzHVVNmldHepyoirYORyrNgooizU?auto=format&w=3840" },
    ]);
  };

  useEffect(() => {
    setDefaultUpgrades();
  }, []);

  const handleMenuItemClick = (menuItem: string) => {
    if (selectedMenuItem === menuItem && menuItem === "home") {
      setDefaultUpgrades();
      navigate("#");
    } else {
      setSelectedMenuItem(menuItem);
      switch (menuItem) {
        case "dashboard":
          setDefaultUpgrades();
          navigate("/");
          break;
        case "profile":
          setUpgrades([
            {
              name: "Emilio Aguinaldo",
              cost: "50,000",
              image: "https://i.pinimg.com/236x/d1/38/d1/d138d1f29aff772151462774bc90a3d1--president-of-the-philippines-american-war.jpg"
            },
            {
              name: "Manuel L. Quezon",
              cost: "75,000",
              image: "https://www.onthisday.com/images/people/manuel-quezon-medium.jpg"
            },
            {
              name: "Jose P. Laurel",
              cost: "50,000",
              image: "https://3.bp.blogspot.com/-aQrhWe9o-nc/TpuLrKd19hI/AAAAAAAAAaA/1mI-AVQdG-A/s1600/Jose%2BP%2BLaurel.jpg"
            },
            {
              name: "Sergio Osmeña",
              cost: "75,000",
              image: "http://pm1.narvii.com/7583/b254ec08bb7ae92129ca3054685279a78e868993r1-364-512v2_uhq.jpg"
            },
            {
              name: "Manuel A. Roxas",
              cost: "50,000",
              image: "https://philippinespres.weebly.com/uploads/6/3/8/1/6381749/6669974.jpg"
            },
          ]);
          break;
        case "settings":
          setUpgrades([
            {
              name: "Kurimaw",
              cost: "50,000",
              image: "/kurimaw.jpg"
            },
          ]);
          break;
        case "notifications":
          setUpgrades([
            { name: "Notification Upgrade 1", cost: "40,000", image: "/notification_upgrade1.png" },
            { name: "Notification Upgrade 2", cost: "60,000", image: "/notification_upgrade2.png" },
          ]);
          break;
        case "favorites":
          setUpgrades([
            { name: "Favorite Upgrade 1", cost: "35,000", image: "/favorite_upgrade1.png" },
            { name: "Favorite Upgrade 2", cost: "45,000", image: "/favorite_upgrade2.png" },
          ]);
          break;
        default:
          setDefaultUpgrades();
          break;
      }
    }
  };

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
          justifyContent: "center",
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          borderRadius: "10px",
          margin: "auto",
          maxWidth: "600px",
          position: "relative",
        }}
      >
        <Balance count={count} />
        <Typography sx={{ marginTop: "10px" }}>Your balance</Typography>

        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Combo Section
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            {comboImages.map((combo, index) => (
              <Card
                key={index}
                sx={{
                  width: "80px",
                  height: "120px",
                  margin: "5px",
                  borderRadius: "5px",
                  border: "1px solid yellow",
                  backgroundColor: "transparent",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "yellow",
                    color: "black",
                  },
                }}
              >
                <img
                  src={combo.image}
                  alt={combo.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
                />
              </Card>
            ))}
          </Box>
        </Box>

        <Box sx={{ width: "100%", marginTop: "20px", borderRadius: "10px", textAlign: "center" }}>
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Upgrade Card Section
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {upgrades.map((upgrade, index) => (
              <Card
                key={index}
                sx={{
                  width: "130px",
                  height: "200px",
                  padding: "0",
                  margin: "5px",
                  backgroundColor: "transparent",
                  border: "1px solid yellow",
                  color: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "yellow",
                    color: "black",
                  },
                }}
              >
                <img
                  src={upgrade.image}
                  alt={upgrade.name}
                  style={{ width: "100%", height: "calc(100% - 50px)", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                />
                <Box
                  sx={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 0 10px 10px",
                    padding: "5px",
                    fontSize: "12px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    {upgrade.name}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    {upgrade.cost}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            display: "flex",
            gap: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            color={selectedMenuItem === "home" ? "yellow" : "white"}
            onClick={() => handleMenuItemClick("home")}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            color={selectedMenuItem === "profile" ? "yellow" : "white"}
            onClick={() => handleMenuItemClick("profile")}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faGhost}
            size="2x"
            color={selectedMenuItem === "settings" ? "yellow" : "white"}
            onClick={() => handleMenuItemClick("settings")}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faFlag}
            size="2x"
            color={selectedMenuItem === "notifications" ? "yellow" : "white"}
            onClick={() => handleMenuItemClick("notifications")}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            color={selectedMenuItem === "favorites" ? "yellow" : "white"}
            onClick={() => handleMenuItemClick("favorites")}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default UpgradePage;
