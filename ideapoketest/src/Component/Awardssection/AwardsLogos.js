import React from 'react'
import { awards } from "../Clientdata/Data"

import styled from 'styled-components';

function AwardsLogos() {
  return (
  
  <AwardsRow>
        <h3>AWARDED BEST LUXURY MATTRESS 2024</h3>
       <Awardscolumns>
        {awards.map((dataAwards, i)=>(
  
    <div className="" key={i}>
                    <div className="icon"><img src={dataAwards.ico_image} className="img-fluid" alt="AwardLogo"/></div>
                   
                 
                  
                </div>
         
              
  ))}
  </Awardscolumns>
          </AwardsRow>

          
 
  )
}

export default AwardsLogos;



const AwardsRow = styled.div`
width:100%;
display:block;
box-sizing:border-box;
text-align:center;
padding:0 0 10vh 0;
}
h3{
    color: #605343;
font-family: PT Serif;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: 1;
   

}
`;
const Awardscolumns = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
gap: 35px;
margin-top: 8vh;
width: 100%;
margin: auto;
}

.icon img{
    width: auto;
    height: auto;
    // @media only screen and (min-width:320px) {
    //   display:none;
    //   }
    //   @media only screen and (min-width:1000px) {
    //     display:block;
    //   }
}


`;
   

  
    
