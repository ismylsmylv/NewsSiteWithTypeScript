import Charts from "../img/scale-unbalanced-solid.svg";
import Ball from "../img/table-tennis-paddle-ball-solid.svg";
import Earth from "../img/earth-americas-solid.svg";
import Flask from "../img/heart-pulse-solid.svg";
import FlaskS from "../img/flask-solid.svg";
import Chip from "../img/microchip-solid.svg";
import LocalIcon from "../img/location-dot-solid.svg";
import Masks from "../img/masks-theater-solid.svg";

export const navs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "World",
    url: "/world",
    icon: Earth,
    bg: "#689F38",
  },
  {
    title: "Local",
    url: "/local",
    icon: LocalIcon,
    bg: "#38509f",
  },
  {
    title: "Business",
    url: "/business",
    icon: Charts,
    bg: "#ece924",
  },
  {
    title: "Technology",
    url: "/technology",
    icon: Chip,
    bg: "#0f47ff",
  },
  {
    title: "Entertainment",
    url: "/entertainment",
    icon: Masks,
    bg: "#a22dd8",
  },
  {
    title: "Sports",
    url: "/sports",
    icon: Ball,
    bg: "#ff8d21",
  },
  {
    title: "Science",
    url: "/science",
    icon: FlaskS,
    bg: "#ff88f5",
  },
  {
    title: "Health",
    url: "/health",
    icon: Flask,
    bg: "#ff3838",
  },
];
