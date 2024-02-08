import React from 'react';
import './AboutMe.css';
import Card from '../card';

export default function AboutMe() {
  return (
    <div className='my-info'>
      <div className="container">
        <h1 className='AboutMe'>Who Am I</h1>
      </div>
      <div className='intro_container'>
        <p className='intro'>
          My Name is Aamil vahora and I have Grew up in the Catonsville Maryland Area My whole life. I attened Mount Hebron High School, and I Currently go to the Univeristy of Maryland baltimore County. Some things i like to do on my free time is play sports, watch movies and cook. 
        </p>
      </div>
      <div className="links-container">
        <a href="https://docs.google.com/document/d/1t_1MGW4__XyzQae20U9LPr1nw_2f3iqA/edit?usp=sharing&ouid=117331970786774132442&rtpof=true&sd=true" className="link-button" target="_blank" rel="noopener noreferrer">My Resume</a>
        <a href="https://docs.google.com/document/d/1GWeEb8rTKP2QwmrxAeC4tvYDZzey2RrX/edit?usp=sharing&ouid=117331970786774132442&rtpof=true&sd=true" className="link-button" target="_blank" rel="noopener noreferrer">My Transcript</a>
      </div>
      <div className='Sports'>
        <h2 className='Sports-Title'>
          Sports
        </h2>
        </div>
<div className='cards-container'>
  <div className='card-space'>
    <Card 
      imagePath="/images/bjj.jpeg" 
      description="On my Free time I love Practicing Brazilian Jiu-Jitsu, I go to a gym called Crazy 88 MMA and practice regularly"
    />
  </div>
  <div className='card-space'> {/* Repeat for each additional image */}
    <Card 
      imagePath="/images/spikeball.jpeg" 
      description="I also Love Playing SpikeBall especially on the beach, i play often with my friends whenever i get the chance"
    />
  </div>
  <div className='card-space'>
    <Card 
      imagePath="/images/football.jpeg" 
      description="I love watching Football and sometimes playng, my favorite team is the ravens, they almost made it all the way this year :("
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
      imagePath="/images/pasta.jpeg" 
      description="i Love all types of Pasta My favorite is alfredo despite the image above lol"
    />
  </div>
  <div className='card-space'> {/* Repeat for each additional image */}
    <Card 
      imagePath="/images/sushi.jpeg" 
      description="I could eat Sushi all day, i wasnt the biggets fan but i can tear up a shrimp tempura roll easily"
    />
  </div>
  <div className='card-space'>
    <Card 
      imagePath="/images/butterchicken.jpeg" 
      description="I am from India so my mom has taught me how to cook all types of food including butter chickicn which is my favorite"
    />
  </div>
  </div>
    </div>
    
    
  );
}