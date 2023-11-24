// HeroBanner.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 618px;
  background: url('/assets/heroban.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align text to the right */

   @media only screen and (min-width:320px){
    background-position:64% 24%;
   }
   @media only screen and (min-width:700px){
    background-position: center;
   }
`;

const TextContainer = styled.div`


  position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 655px;
    height: 618px;
    flex-shrink: 0;
    padding-top: 6rem;
    background: rgba(244, 242, 238, 0.42);
    color: #000;
    @media only screen and (min-width:320px){
      padding-top:60%;
      margin-top:70%;
      }
  }
    h1{
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 0;
    }

 
    p{
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0;
    }
    h6{
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0;
    }
    @media only screen and (min-width:320px){
      h1{padding-left:2rem;
      font-size: 30px;
      }
      p {
        padding-left:2rem;
        font-size: 28px;
      }
      p span{display:none}
      h6{display:none}
      
      }
      @media only screen and (min-width:1000px){
        h1{padding-left:5rem;
          
        font-size: 50px;
        }
        p{
          padding-left:5rem;
          font-size: 45px;
        }
        p span{display:block}
        h6{display:block}
      }
`;



const ActionButtons = styled.div`
display: flex;

position: absolute;
top: 70%;
left: 2%;
@media only screen and (min-width:320px){
flex-direction:column;
align-items:center;
justify-content:center;
top: 64%;
    left: 9%;
  }
  @media only screen and (min-width:1000px){
    flex-direction:row;
    top: 70%;
left: 2%;
      }
`;

const ActionButton = styled.button`
  margin-right: 10px;
  display: flex;
padding: 13px 33px 17px 29px;
align-items: center;
border-radius: 10px;
background: #328CC8;
color: #FFF;
font-family: PT Serif;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
@media only screen and (min-width:320px){
margin-bottom:2rem;
    }
    @media only screen and (min-width:1000px){
      margin-bottom:0;
        }
`;


const HeroBanner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2023-11-30') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <HeroContainer>
      <TextContainer>
        <h1>Early Black Friday</h1>
        <p>Enjoy $1,350 <br/>in LUXURY SAVINGS</p>
        <h6>Sale Ends in:</h6>
      </TextContainer>
    
      {/* <CountdownContainer>
        <ClockItem>{timeLeft.hours.toString().padStart(2, '0')}</ClockItem>
        <ClockItem>{timeLeft.minutes.toString().padStart(2, '0')}</ClockItem>
        <ClockItem>{timeLeft.seconds.toString().padStart(2, '0')}</ClockItem>
      </CountdownContainer>
      */}
       {/* <CountdownText> */}
        {/* <p>Sale Ends in:</p> */}
        <p><span>Hours</span> <span>Minutes</span> <span> Seconds</span></p>
     
      {/* </CountdownText> */}
      <ActionButtons>
        <ActionButton>Shop Mattress</ActionButton>
        <ActionButton>Take The Quiz</ActionButton>
      </ActionButtons>
    </HeroContainer>
  );
};

export default HeroBanner;
