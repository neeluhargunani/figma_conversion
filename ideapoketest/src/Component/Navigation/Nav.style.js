import styled from 'styled-components';


export const NavbarContainer = styled.div`
background-color: #fff;
color: white;
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`;

export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TopNav = styled(NavSection)`
  margin-bottom: 10px;
  border-bottom: 1px solid #328CC8;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;


export const BottomNav = styled(NavSection)`
  margin-top: 10px;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 500px;
    top: 8%;
    background: beige;
    z-index: 1;
}
  

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const SaleText = styled.span`
  margin-left: 3rem;
  color: #000;
  font-family: PT Serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 18px;
  }
`;
export const LinksContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

@media only screen and (min-width:320px){
  display:none;
 }

@media only screen and (min-width:768px){
 display:none;
}
@media only screen and (min-width:1000px){
  display:flex;
 }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
font-family: PT Serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  margin-right: 30px;

  display: flex;
  gap:.5vh;
  /* align-items: center; */
  justify-content: center;
  &:hover {
    color: #61dafb;
  }
  @media only screen and (min-width:320px){
 display:none;
  }
 
  @media only screen and (min-width:1000px){
    margin-right: 13px;
    font-size: 15px;
    display:flex;
   
  }
  @media only screen and (min-width:1200px){
    margin-right: 30px;
    font-size: 18px;
   
  }
  
`;
export const Nav = styled.div`
display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 0 0rem;
    width: 90%;
    position:relative;
    @media only screen and (min-width:320px){
      display: flex;
    }
    @media only screen and (min-width:1000px){
      display: flex;
      width: 100%;
    }
    @media only screen and (min-width:1200px){
      width: 90%;
    }
    @media only screen and (min-width:1700px){
      width: 100%;
    }
`;
export const Logo = styled.div`
  color: white;
  width: 199.31px;
  height: 50.896px;

  @media only screen and (min-width:320px){
    width: 153.31px;
    height: 50.896px;
    }
  @media only screen and (min-width:1000px){
    width: 141.31px;
    height: 42.896px;

  }
  @media only screen and (min-width:1200px){
    width: 199.31px;
  height: 50.896px;
  }
`;
export const Img = styled.img`
width: 199.31px;
height: 50.896px;
@media only screen and (min-width:320px){
width: 153.31px;
height: 50.896px;
}
@media only screen and (min-width:1000px){
  width: 141.31px;
  height: 42.896px;

}
@media only screen and (min-width:1200px){
  width: 199.31px;
height: 50.896px;
padding-left:15px;
}
`;
// export const MenuIcon = styled.div`
//   cursor: pointer;
//   display: block;

//   @media (min-width: 1000px) {
//     display: none;
//   }
// `;
export const MenuButton = styled.div`
  cursor: pointer;
  display: block;

  @media (min-width: 1000px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
// display: flex;
align-items: center;
justify-content: start;
padding-left: 2rem;
@media only screen and (min-width:320px){
  display:none;
 }
@media only screen and (min-width:768px){
  display:none;
 }

@media only screen and (min-width:1000px){
  padding-left: 0rem;
  display:flex;
}
@media only screen and (min-width:1200px){
  padding-left: 2rem;
}
`;

export const SearchInput = styled.input`
  padding: 8px;
  // margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
`;
export const NavLinksRight = styled.div`
display: flex;
align-items: center;
padding-left: 0rem;
justify-content: center;
@media only screen and (min-width:320px){
  display:none;
 }
@media only screen and (min-width:768px){
  display:none;
 }

@media only screen and (min-width:1000px){
  padding-left: 0rem;
  display:flex;
}
`;