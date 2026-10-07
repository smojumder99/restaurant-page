import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
import { buildAboutPage } from "./about.js";



const button1=document.querySelector(".homeButton");
const button2=document.querySelector(".menuButton");
const button3=document.querySelector(".aboutButton");


button1.addEventListener("click", buildHomePage);
button2.addEventListener("click", buildMenuPage);
button3.addEventListener("click", buildAboutPage);



buildHomePage();