import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/hrithikkalal15";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dww2dkomu/image/upload/v1664699201/avatars/iihtngszc88tszt7njoc.jpg"
              alt="Founder"
            />
            <Typography>Hrithik Ram</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Connect on LinkedIN
            </Button>
            <span>
              This is a sample wesbite made by @hrithikRam. Only with the
              purpose to practically apply MERN Stack skills on a web application project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect:</Typography>
            <a
              href="https://www.linkedin.com/in/hrithikkalal15"
              target="blank"
            >
              <LinkedInIcon className="linkedInSvgIcon" />
            </a>

            <a href="https://twitter.com/hrithikram5" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
