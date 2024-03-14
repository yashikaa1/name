import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import WebDesign from "../routes/WebDesign";
import SEO from "../routes/SEO";
import Services from "../routes/Services";
import Layout from "./Layout";
import Frontend from "../routes/Frontend";
import PHP from "../routes/PHP";
import Node from "../routes/Node";
import WebDev from "../routes/WebDev";
import Overview from "../routes/Overview";
import VisionandMission from "../routes/VisionandMission";
import MilestonesandRewards from "../routes/MilestonesandRewards";
import OurTeam from "../routes/OurTeam";
import LegalStatusandEmpanelments from "../routes/LegalStatusandEmpanelments";
import WhatWeDo from "../routes/WhatWeDo";
import Projects from "../routes/Projects";
import Manan from "../routes/manan";
import MyComponent from "../routes/MyComponent";
import Gallery from "../routes/Gallery";
import ContactUs from "../routes/ContactUs";
import Donate from "../routes/Donate";
import Login from "../routes/Login";
import Events from "../routes/Events";
import Login_as_user from "../routes/Login_as_user";
import Login_as_ngo_committee_members from "../routes/Login_as_ngo_committee_members";
import Login_as_government from "../routes/Login_as_government";
import Login_as_admin from "../routes/Login_as_admin";
import * as React from "react";
import {useState} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Navbar from './Navbar'




const App = () => {
  const [userRole, setUserRole] = useState('admin');
  return ( 
    
    
      <Routes>
       
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="overview" element={<Overview />} />
          <Route path="vision-and-mission" element={<VisionandMission />} />
          <Route path="milestones-and-rewards" element={<MilestonesandRewards />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="legal-status-and-empanelments" element={<LegalStatusandEmpanelments />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery"element={<Gallery />} />
          <Route path="contactus"element={<ContactUs />} />
          <Route path="donate"element={<Donate />} />
          <Route path="login"element={<Login />} />
          <Route path="manan"element={<Manan/>} />
          <Route path="mycomponent"element={<MyComponent/>} />
          <Route path="login_as_admin"element={<Login_as_admin/>} />
          <Route path="login_as_ngo_committee_members"element={<Login_as_ngo_committee_members/>}/>
          <Route path="login_as_user"element={<Login_as_user/>}/>
          <Route path="login_as_government"element={<Login_as_government/>}/>
          <Route path="*" element={<p>Not found!</p>} />
          
        </Route>
      </Routes>
      
    
 
    
  );
};

export default App;
