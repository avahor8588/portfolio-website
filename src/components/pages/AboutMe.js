import React from 'react';
import './AboutMe.css';
import Card from '../card';
// Import images
import MatlabLogo from './Images/Matlab_Logo.jpeg';
import PythonLogo from './Images/python.png';
import RosLogo from './Images/ros.jpeg';
import GitlabLogo from './Images/Gitlab.png';
import GithubLogo from './Images/Gihtub.jpeg';
import CondaLogo from './Images/conda2.png';
import AssemblyLogo from './Images/86.png';
import CLogo from './Images/C.png';
import CppLogo from './Images/C++.jpeg';
import BjjLogo from './Images/bjj.jpeg';
import SpikeballLogo from './Images/spikeball.jpeg';
import FootballLogo from './Images/football.jpeg';
import PastaLogo from './Images/pasta.jpeg';
import SushiLogo from './Images/sushi.jpeg';
import ButterChickenLogo from './Images/butterchicken.jpeg';

export default function AboutMe() {
  return (
    <div className='my-info'>
      <div className="container">
        <h1 className='AboutMe'>Who Am I</h1>
      </div>
      <div className='intro_container'>
        <p className='intro'>
          My Name is Aamil Vahora and I grew up in the Catonsville, Maryland Area My whole life. I attended Mount Hebron High School, and I Currently go to the University of Maryland Baltimore County. Some things I like to do on my free time is play sports, watch movies, and cook.
        </p>
      </div>
      <div className="links-container">
        <a href="https://docs.google.com/document/d/1t_1MGW4__XyzQae20U9LPr1nw_2f3iqA/edit?usp=sharing&ouid=117331970786774132442&rtpof=true&sd=true" className="link-button" target="_blank" rel="noopener noreferrer">My Resume</a>
        <a href="https://docs.google.com/document/d/1GWeEb8rTKP2QwmrxAeC4tvYDZzey2RrX/edit?usp=sharing&ouid=117331970786774132442&rtpof=true&sd=true" className="link-button" target="_blank" rel="noopener noreferrer">My Transcript</a>
      </div>

      <div className='Sports'>
        <h2 className='Sports-Title'>
          Skills
        </h2>
      </div>

      <div className='cards-container'>
        <div className='card-space'>
          <Card 
            imagePath={MatlabLogo}
            description="Matlab"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={PythonLogo}
            description="Python"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={RosLogo}
            description="Ros Robotics System"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={GitlabLogo}
            description="Gitlab"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={GithubLogo}
            description="Github"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={CondaLogo}
            description="Conda"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={AssemblyLogo}
            description="Assembly"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={CLogo}
            description="C"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={CppLogo}
            description="C++"
          />
        </div>
      </div>

      <div className='Sports'>
        <h2 className='Sports-Title'>
          Sports
        </h2>
      </div>
      <div className='cards-container'>
        <div className='card-space'>
          <Card 
            imagePath={BjjLogo}
            description="On my Free time I love Practicing Brazilian Jiu-Jitsu, I go to a gym called Crazy 88 MMA and practice regularly"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={SpikeballLogo}
            description="I also Love Playing SpikeBall especially on the beach, i play often with my friends whenever i get the chance"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={FootballLogo}
            description="I love watching Football and sometimes playing the sport, my favorite team is the Baltimore Ravens, they almost made it all the way this year :("
          />
        </div>
      </div>
      <div className='Sports'>
        <h2 className='Sports-Title'>
          Cooking/Eating
        </h2>
      </div>
      <div className='cards-container'>
        <div className='card-space'>
          <Card 
            imagePath={PastaLogo}
            description="I love all types of Pasta. My favorite is Alfredo despite the image above lol."
          />
        </div>
        <div className='card-space'> 
          <Card 
            imagePath={SushiLogo}
            description="I could eat Sushi all day, I wasn't the biggest fan when I was younger, but I can tear up a shrimp tempura roll easily now."
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={ButterChickenLogo}
            description="I am from India so my mom has taught me how to cook all types of food including butter chicken which is my favorite."
          />
        </div>
      </div>
    </div>
  );
}
