import React from 'react'
import styled from 'styled-components'
import { puffy }  from "../Clientdata/Data"

function PickYourPuffy() {
  return (
   
    <CardsRow>
          <h3>PICK YOUR PUFFY MATTRESS.</h3>
    
          <Card>
          {puffy.map((puffydata, i)=>(
  
  <div className="" key={i}>
                  
                  <div className="card_img">
                 
                    <img src={puffydata.image} alt={puffydata.alt}/>
                    <div className='figcaption'>
                      <span className='title'>{puffydata.title}</span>
                      <span className='sub_title'>{puffydata.subtitle}</span>
                     
                    </div>
                    <p className='description'>{puffydata.desc}</p>
                    <a href={puffydata.cta} type="button" className='btn_primary'>
               {puffydata.ctaButton}
              </a>
                  
                  </div>
                   
                
              </div>
       
            
))}
          </Card>
      
     
            </CardsRow>
     
  )
}

export default PickYourPuffy;

const CardsRow = styled.div`
width:90%;
display:block;
box-sizing:border-box;
text-align:center;
padding:0 0 10vh 0;
margin:auto;
@media only screen and (min-width:320px) {
  width:100%;
}
@media only screen and (min-width:1000px) {
  width:90%;
}

h3{
    color: #605343;
font-family: PT Serif;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
`;

const Card = styled.div`

display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 1.2rem;
    padding: 5vh 0 0 0;
    @media only screen and (min-width:320px) {
      display: block;
      padding: 0;
    }
    @media only screen and (min-width:1000px) {
      display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vh 0 0 0;
    }
.card_img {
  width:348.754px;
height:423.35px;
background: #F4F2EE;
box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
@media only screen and (min-width:320px) {
  width:100%;
margin:5vh 0 5vh 0;
height:528.35px;
}
@media only screen and (min-width:1000px) {
  width: 300px;
  height: 445px;
  margin: 0;
}
@media only screen and (min-width:1440px) {
  width: 371px;
    height: 450px;
}
}
.card_img img{
  width:348.754px;
  height:280px;
  @media only screen and (min-width:320px) {
    width:100%;

}
  @media only screen and (min-width:1000px) {
    width: 300px;
    height: 243px;

}
@media only screen and (min-width:1440px) {
  width: 371px;
  height: 243px;
}
}
.figcaption{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0.5rem;
  text-align:center;


}
.title{
  color: #635646;
font-family: PT Serif;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (min-width:320px) {
  font-size: 30px;
}

@media only screen and (min-width:1000px) {
  font-size: 25px;
}
@media only screen and (min-width:1200px) {
  font-size: 28px;
}
}
.sub_title{
  color: #6E6E72;
  font-family: PT Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 

}
.description{
  color: #000;
font-family: PT Serif;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 0;
padding-left: 12px;
@media only screen and (min-width:320px) {
  text-align:left;
  font-size: 20px;
}
    @media only screen and (min-width:1000px) {
      font-size: 16px;
      font-weight: 600;
    }
    @media only screen and (min-width:1440px) {
      font-size: 18px;
      font-weight: 700;
    }
}
.btn_primary{
  border-radius: 10px;
  background: #328CC8;
  display: inline-flex;
  padding: 5px 21px 7px 20px;
  float: left;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: PT Sans Caption;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  margin-top: 0.7rem;
}
`;