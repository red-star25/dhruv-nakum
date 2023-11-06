import React, { useEffect } from "react";
import aiReader from "../../assets/images/ai_reader.png";
import budgetTracker from "../../assets/images/budget_tracker.png";
import forkify from "../../assets/images/forkify.png";
import google from "../../assets/images/google_clone.jfif";
import netflix from "../../assets/images/netflix_clone.jfif";
import pigGame from "../../assets/images/pig_game.png";
import spotify from "../../assets/images/spotify_clone.jfif";
import todo from "../../assets/images/todo.jfif";
import "./Project.css";

import workout from "../../assets/images/Workout.png";
import brightstar from "../../assets/images/brightstar.png";
import covidTracker from "../../assets/images/covid_tracker_mob.jfif";
import domtm from "../../assets/images/domtm.png";
import inbrief from "../../assets/images/inbrief.png";
import matchmde from "../../assets/images/matchmde.png";
import mediaPlayer from "../../assets/images/media_player_mob.jfif";
import messanger from "../../assets/images/messanger_app.jfif";
import towntips from "../../assets/images/towntips.png";
import waller from "../../assets/images/waller.png";
import wyck from "../../assets/images/weather.png";
import whatsapp from "../../assets/images/whatsapp_mob.jfif";

import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  const webProjects = [
    {
      title: "Netflix",
      subtitle: "With video functionality and authentication",
      image: netflix,
    },
    {
      title: "Google",
      subtitle: "Using Google Search API",
      image: google,
    },
    {
      title: "Spotify",
      subtitle: "Using Spotify Authentication and Media Player",
      image: spotify,
    },
    {
      title: "AI News Reader",
      subtitle: "Using Alan AI service",
      image: aiReader,
    },
    {
      title: "Budget Tracker",
      subtitle: "A budget tracker for daily use",
      image: budgetTracker,
    },
    {
      title: "Forkify",
      subtitle: "An Online Recipe Search Web Application using JavaScript ",
      image: forkify,
    },
    {
      title: "Pig Game",
      subtitle: "High score dice rolling game for two player",
      image: pigGame,
    },
    {
      title: "Google Keeps Note",
      subtitle: "Daily notes taking web application",
      image: todo,
    },
  ];
  const appProjects = [
    {
      title: "MatchMde",
      subtitle: "An AI Dating App",
      image: matchmde,
    },
    {
      title: "TownTips",
      subtitle: "Local Search Engine for both customers and businesses",
      image: towntips,
    },
    {
      title: "Brightstar",
      subtitle: "An Event and Service management application",
      image: brightstar,
    },
    {
      title: "DomTm",
      subtitle: "An online restaurant directory and ordering application",
      image: domtm,
    },
    {
      title: "WorkoutGo",
      subtitle: "A Workout App",
      image: workout,
    },
    {
      title: "Inbrief",
      subtitle: "A short news app. Read news in seconds",
      image: inbrief,
    },
    {
      title: "Waller",
      subtitle: "A Wallpaper app. Save & Set wallpapers in one click",
      image: waller,
    },
    {
      title: "Wyck",
      subtitle: "A Weahter forcast app using 'openweatherapi'",
      image: wyck,
    },
    {
      title: "Whatsapp",
      subtitle: "An UI clone of Whatsapp mobile application",
      image: whatsapp,
    },
    {
      title: "Messanger",
      subtitle: "An UI clone of Facebook messanger mobile application",
      image: messanger,
    },
    {
      title: "Covid Tracker",
      subtitle: "App to track Covid-19 cases from all over the world",
      image: covidTracker,
    },
    {
      title: "Media Player Neumorphic Design",
      subtitle: "An Neumorphic design of Media Player ",
      image: mediaPlayer,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="project">
      <h1 data-aos="zoom-in">Projects</h1>
      <div data-aos="zoom-in" className="project__seperator"></div>
      
      <div className="project__mobile">
        <h2>Application Development Projects</h2>
        <div className="project__listOfProject">
          {appProjects.map((project) => {
            return (
              <div data-aos="zoom-in-up" className="projectCard__main">
                <div className="projectCard">
                  <img src={project.image} alt="" />
                </div>
                <div className="projectCard__title">
                  <h2>{project.title}</h2>
                </div>
                <div className="projectCard__subTitle">
                  <p>{project.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="project__web">
        <h2>Website Development Projects</h2>
        <div className="project__listOfProject">
          {webProjects.map((project) => {
            return (
              <div data-aos="zoom-in-up" className="projectCard__main">
                <div className="projectCard">
                  <img src={project.image} alt="" />
                </div>
                <div className="projectCard__title">
                  <h2>{project.title}</h2>
                </div>
                <div className="projectCard__subTitle">
                  <p>{project.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
