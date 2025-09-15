import React from 'react';
import './AboutMe.css';
import Card from '../card';
// Import images
import MatlabLogo from './Matlab_Logo.jpeg';
import PythonLogo from './python.png';
import RosLogo from './ros.jpeg';
import GitlabLogo from './Gitlab.png';
import GithubLogo from './Gihtub.jpeg';
import CondaLogo from './conda2.png';
import AssemblyLogo from './86.png';
import CLogo from './C.png';
import CppLogo from './C++.jpeg';
import BjjLogo from './bjj.jpeg';
import SpikeballLogo from './spikeball.jpeg';
import FootballLogo from './football.jpeg';
import PastaLogo from './pasta.jpeg';
import SushiLogo from './sushi.jpeg';
import ButterChickenLogo from './butterchicken.jpeg';

export default function AboutMe() {
  return (
    <div className='my-info'>
      <div className="container">
        <h1 className='AboutMe'>Who I Am</h1>
      </div>
      <div className='intro_container'>
        <p className='intro'>
          I'm Aamil Vahora, a Computer Science graduate from the University of Maryland, Baltimore County (UMBC) with a passion for software engineering and technology innovation. Currently working as a Software Engineer at Qualcomm, I specialize in low-level systems programming, crash dump analysis, and Windows driver development.
        </p>
        <p className='intro'>
          My journey in technology spans from autonomous vehicle simulation at Tesla to research at Johns Hopkins Applied Physics Lab. I'm passionate about solving complex technical challenges and building innovative solutions that make a real impact.
        </p>
        <p className='intro'>
          When I'm not coding, you'll find me practicing Brazilian Jiu-Jitsu, playing Spikeball, or experimenting with new recipes in the kitchen. I believe in continuous learning and staying curious about the world around me.
        </p>
      </div>
      <div className="links-container">
        <a href="https://docs.google.com/document/d/1ZtRtVhPCvWsdLq8tikTIMaqY4jxFTqQM/edit?usp=sharing&ouid=117331970786774132442&rtpof=true&sd=true" className="link-button" target="_blank" rel="noopener noreferrer">My Resume</a>
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
            description="ROS Robotics System"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={GitlabLogo}
            description="GitLab"
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={GithubLogo}
            description="GitHub"
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
            description="In my free time, I love practicing Brazilian Jiu-Jitsu. I train regularly at Crazy 88 MMA."
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={SpikeballLogo}
            description="I also love playing Spikeball, especially on the beach. I often play with my friends whenever I get the chance."
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={FootballLogo}
            description="I enjoy watching football and occasionally playing the sport. My favorite team is the Baltimore Ravens."
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
            description="I love all types of pasta. My favorite is Alfredo."
          />
        </div>
        <div className='card-space'> 
          <Card 
            imagePath={SushiLogo}
            description="I could eat sushi all day. Though I wasn't a big fan when I was younger, I now enjoy a shrimp tempura roll immensely."
          />
        </div>
        <div className='card-space'>
          <Card 
            imagePath={ButterChickenLogo}
            description="Being from India, my mom has taught me to cook a variety of dishes, including my favorite: butter chicken."
          />
        </div>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Email:</strong> <a href="mailto:aamilvahora786@gmail.com">aamilvahora786@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:+14436835070">+1 (443) 683-5070</a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong> 1332 Lincoln Wood Drive, Catonsville, MD 21228
          </div>
          <div className="contact-item">
            <strong>Portfolio:</strong> <a href="https://avahor8588.github.io/portfolio-website/" target="_blank" rel="noopener noreferrer">avahor8588.github.io/portfolio-website/</a>
          </div>
        </div>
      </div>
    </div>
  );
}