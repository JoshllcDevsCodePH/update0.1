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
  faMask,
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
              cost: "170,000",
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
              cost: "340,000",
              image: "http://pm1.narvii.com/7583/b254ec08bb7ae92129ca3054685279a78e868993r1-364-512v2_uhq.jpg"
            },
            {
              name: "Manuel A. Roxas",
              cost: "600,000",
              image: "https://philippinespres.weebly.com/uploads/6/3/8/1/6381749/6669974.jpg"
            },
            {
              name: "Elpidio Quirino",
              cost: "400,000",
              image: "https://3.bp.blogspot.com/-qoABbIG4GsU/WYTROk1cvbI/AAAAAAAAK4w/2kOk9Ukz8pIm1GEE_mYbGzib0EdD7TtKwCLcBGAs/s1600/Talambuhay%2Bni%2BElpidio%2BQuirino.jpg"
            },
            {
              name: "Ramon Magsaysay",
              cost: "650,000",
              image: "https://i0.wp.com/www.tagaloglang.com/ux/wp-content/uploads/2016/07/President_Magsaysay_portrait_barong_tagalog.jpg?w=960&ssl=1"
            },
            {
              name: "Carlos P. Garcia",
              cost: "350,000",
              image: "https://live.staticflickr.com/2602/3839768568_c6c947dbbd_z.jpg"
            },
            {
              name: "Diosdado Macapagal",
              cost: "400,000",
              image: "https://farm3.staticflickr.com/2626/3838938345_d42d0145c0_z.jpg"
            },
            {
              name: "Ferdinand Marcos",
              cost: "700,000",
              image: "https://1.bp.blogspot.com/-ixLnaLlBRow/WGRIVOPMzBI/AAAAAAAAAA4/LJQOYtKPkYkkCAQ2VBCkBxPlRJXnhouNQCLcB/s1600/Marcos-w960.jpg"
            },
            {
              name: "Corazon Aquino",
              cost: "40,000",
              image: "https://ca-times.brightspotcdn.com/dims4/default/33474ba/2147483647/strip/true/crop/300x419+0+0/resize/840x1173!/quality/90/?url=https:%2F%2Fca-times.brightspotcdn.com%2F98%2Fd6%2Ff94e5f46d8c4aece457eb75e86dc%2Fla-corazon-aquino2008-km3mcbnc-span"
            },
            {
              name: "Fidel V. Ramos",
              cost: "75,000",
              image: "https://cdn.britannica.com/21/123121-004-624D3E93/Fidel-Ramos.jpg"
            },
            {
              name: "Joseph Estrada",
              cost: "60,000",
              image: "http://philippineculturaleducation.com.ph/wp-content/uploads/2017/10/sk-estrada-joseph.jpg"
            },
            {
              name: "Gloria Macapagal Arroyo",
              cost: "75,000",
              image: "https://www.onthisday.com/images/people/gloria-macapagal-arroyo-200.jpg"
            },
            {
              name: "Benigno Aquino III",
              cost: "50,000",
              image: "https://cdn.britannica.com/25/161725-050-F00F2842/Philippine-President-Benigno-S-Aquino-III.jpg"
            },
            {
              name: "Rodrigo Duterte",
              cost: "450,000",
              image: "https://images.saymedia-content.com/.image/t_share/MTg3ODMwOTUwNTk0ODE1MDI3/the-three-greatest-achievements-of-the-duterte-administration.jpg"
            },
            {
              name: "Ferdinand Marcos Jr.",
              cost: "500,000",
              image: "https://eliveclass.com/wp-content/uploads/2022/06/Ferdinand-Marcos-Jr-600x600.jpg"
            }   
          ]);
          break;
        case "settings":
          setUpgrades([
            {
              name: "Kurimaw",
              cost: "50,000",
              image: "/kurimaw.jpg"
            },
            {
              name: "Aswang",
              cost: "60,000",
              image: "http://4.bp.blogspot.com/-rYab7b2PXbA/UyaqiXAjeVI/AAAAAAAAAqQ/-Ad8VmOL3S4/s1600/aswang1.JPG"
            },
            {
              name: "Manananggal",
              cost: "70,000",
              image: "https://mythosaurus.com/wp-content/uploads/2023/07/During-the-day-the-Manananggal-appears-as-an-ordinary-human.-1.png"
            },
            {
              name: "Tiktik",
              cost: "50,000",
              image: "https://i.pinimg.com/originals/ae/f0/31/aef031d9b26022da49701d966f90cc0b.jpg"
            },
            {
              name: "Kapre",
              cost: "80,000",
              image: "https://mythlok.com/wp-content/uploads/2023/07/Mythlok-Kapre-AI_.jpg"
            },
            {
              name: "Tikbalang",
              cost: "90,000",
              image: "https://mythicalcreatures.blog/wp-content/uploads/2023/11/Tikbalang-werehorse-of-Philippine-folklore.jpg"
            },
            {
              name: "Diwata",
              cost: "100,000",
              image: "https://i.pinimg.com/originals/24/91/4a/24914a1248e3d4e79ea33ecdca9657f1.jpg"
            },
            {
              name: "Nuno sa Punso",
              cost: "40,000",
              image: "https://cdna.artstation.com/p/assets/images/images/004/025/826/large/clarita-joy-cailan-clarita-cailan-nuno2rgb.jpg?1479593351"
            },
            {
              name: "Tiyanak",
              cost: "50,000",
              image: "https://www.monstropedia.org/images/6/67/Tiyanak-vampire.jpg"
            },
            {
              name: "Sigbin",
              cost: "60,000",
              image: "https://i.pinimg.com/736x/2b/21/eb/2b21ebafd3c7b776bcf1802f6dd72f60--philippine-mythology-mythical-creatures.jpg"
            },
            {
              name: "Bungisngis",
              cost: "70,000",
              image: "https://i.pinimg.com/originals/eb/ce/31/ebce316319e0f258be0276b14a42c0e9.jpg"
            },
            {
              name: "Santelmo",
              cost: "80,000",
              image: "https://images.puertoparrot.com/articles/original/3_1601090353_d2b5c.png"
            },
            {
              name: "Berberoka",
              cost: "90,000",
              image: "http://mythicalcreatures.info/media/Berberoka-2.jpg"
            },
            {
              name: "Bakunawa",
              cost: "100,000",
              image: "https://cdna.artstation.com/p/assets/images/images/008/674/932/large/allen-michael-geneta-bakunawa01.jpg?1514477712"
            },
            {
              name: "Kataw",
              cost: "110,000",
              image: "https://orig00.deviantart.net/4c9a/f/2009/050/7/c/ugkoy_by_isaiahpaul.jpg"
            },
            {
              name: "Sirena",
              cost: "120,000",
              image: "https://orig00.deviantart.net/bb81/f/2007/030/f/9/sireno_by_blue_fusion.jpg"
            },
            {
              name: "Duwende",
              cost: "50,000",
              image: "https://cdnb.artstation.com/p/assets/images/images/054/800/721/large/ronald-gavin-castillo-duwende.jpg?1665414849"
            },
            {
              name: "Batibat",
              cost: "60,000",
              image: "https://cdna.artstation.com/p/assets/images/images/031/971/106/large/carlo-spagnola-batibat.jpg?1605112039"
            },
            {
              name: "Amomongo",
              cost: "70,000",
              image: "https://i.pinimg.com/originals/87/e4/52/87e452e8b4274149ab17420c374a4d85.jpg"
            }   
          ]);
          break;
        case "notifications":
          setUpgrades([
            
          ]);
          break;
        case "favorites":
          setUpgrades([
           
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
            Upgrade Card Section :
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
            icon={faMask}
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
