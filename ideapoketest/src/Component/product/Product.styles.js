import styled from 'styled-components';

export const MainContainer = styled.section`
width: 100%;
    display: block;
    box-sizing: border-box;
    text-align: center;
    padding: 5vh 0 5vh 0;
    background: #E3E0D9;
   
}
h3{
    color: #605343;
font-family: PT Serif;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height:1;
padding: 0 0 5vh 0;

@media only screen and (min-width:320px) {
    font-size: 30px;
    
    }
    @media only screen and (min-width:1000px) {
        font-size: 35px;
        
        }
}
`;

export const ProductContainer = styled.section`
// display: flex;
justify-content: flex-start;
align-items: center;
// margin-top: 5rem;
  
`;

export const ProductContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #F4F2EE;
height:443px;
 @media only screen and (min-width:320px) {
     flex-direction: column;
    }
 @media only screen and (min-width:1000px) {
     flex-direction: row;

}
`;

export const ProductImg = styled.div`

display: flex;

height:443px;
@media only screen and (min-width:320px) {
    width: 100%;
    height:500px;
}
@media only screen and (min-width:1000px) {
  width:535px;
    height:443px;
}

@media only screen and (min-width:1440px) {
    width: 907px;
}
@media only screen and (min-width:1560px) {
    width: 100%;
}
`;

export const Img = styled.img`
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
object-fit: cover;
height:443px;
@media only screen and (min-width:320px) {
    height:243px;
    width: 100%;
}

@media only screen and (min-width:1000px) {
    width:535px;
    height:443px;
}
@media only screen and (min-width:1200px) {
    width:660px;
    
}
@media only screen and (min-width:1440px) {
    width: 100%;
}
@media only screen and (min-width:1800px) {
    width: 100%;
}
`;

export const ProductContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (min-width:320px) {
  order:1;  
  margin-bottom: 13px;
}
@media only screen and (min-width:1000px) {
    order:0;
     padding: 3rem 6rem;
     margin-bottom: 0;
    
 }
@media only screen and (min-width:1200px) {
   order:0;
    padding: 3rem 6rem;
   
}
@media only screen and (min-width:1500px) {
    padding: 3rem 9rem;
  
}
`;

export const ProductContentTitle = styled.h2`
color: #685B4C;
font-family: PT Serif;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height:0;
@media only screen and (min-width:320px) {
    font-size: 40px;
  }
  @media only screen and (min-width:1000px) {
    font-size: 50px;
      
   }
`;

export const ProductText = styled.p`
    color: #685B4C;
    font-family: PT Serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height:1;
    margin:0;
    /* padding: 0rem; */
    text-align: center;
}
.bttn_primary {
    border-radius: 10px;
    background: #328CC8;
    display: inline-flex;
padding: 10px 21px 13px 20px;
justify-content: center;
align-items: center;
color: #FFF;
font-family: PT Sans Caption;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height:1;
text-decoration:none;
margin-top:1rem;
}
`;
export const ContainerBottom = styled.section`
   width: 90%;
    padding: 5vh 0 5vh 0;
    background: #E3E0D9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
}
    .btnn_primary{
        border-radius: 10px;
        background: #328CC8;
        display: inline-flex;
        padding: 15px 21px 15px 30px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: PT Sans Caption;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration:none;
    margin-top:1rem;
    @media only screen and (min-width:230px) {
        font-size: 18px;
        font-weight: 600;
    } 
    @media only screen and (min-width:1000px) {
        font-size: 22px;
        font-weight: 600;
    }  
`;

export const ContainerBottomText = styled.p`
    color: #685B4C;
   font-family: PT Serif;
   font-size: 30px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   text-decoration:none;
   padding: 0 30px 0 30px;
   text-align:left;
   margin:0;
   @media only screen and (min-width:320px) {
    font-size: 20px;   
}
   @media only screen and (min-width:1000px) {
       font-size: 22px;   
   }
   @media only screen and (min-width:1400px) {
    font-size: 30px;   
}
   `;
