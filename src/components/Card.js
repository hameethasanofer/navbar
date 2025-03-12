import React from "react";
import { FaCogs, FaIndustry, FaCheckCircle, FaLightbulb, FaBox, FaChartLine, FaArrowRight } from "react-icons/fa"; 
import "./../components/Card.css";

const iconMap = {
  "production": <FaCogs size={25} color="white" />,
  "custom": <FaIndustry size={25} color="white" />,
  "quality": <FaCheckCircle size={25} color="white" />,
  "technology": <FaLightbulb size={25} color="white" />,
  "packaging": <FaBox size={25} color="white" />,
  "consulting": <FaChartLine size={25} color="white" />
};

const Card = ({ title, description, icon }) => {
  return (
    <div className="card-container">
      <div className="card-icon">{iconMap[icon] || <FaCogs size={40} color="#01aacd" />}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="arrow-icon">
        <FaArrowRight size={20} color="#fff" />
      </div>
    </div>
  );
};

export default Card;
