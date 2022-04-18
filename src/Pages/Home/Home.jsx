import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Home.css";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const banner = "https://i.ibb.co/f9zs4r8/banner.jpg";
  return (
    <div>
      <div className="banner-container">
        <img style={{ width: "100%", height: "auto" }} src={banner} alt="" />
      </div>
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <div className="service-section">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
