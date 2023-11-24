import styled from 'styled-components';


export const FooterSection = styled.section`
display: flex;
align-items: center;
color: #fff;
background-color: #328CC8;
@media (min-width:320px){
    display: block;
}
@media (min-width:1000px){
    display: flex;
}
`;
export const FooterContainer = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 100%;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 1rem;
overflow:hidden;

@media (min-width:320px){
    align-items: center;
}
@media (min-width: 1000px) {
    padding: 2rem 6rem;
    align-items: center;
    width: auto;
}
@media (min-width: 1500px) {
    max-width: 100%;
    padding: 0 0;
}

@media (min-width: 1800px) {
    max-width: 100%;
    padding: 0 0;
}
`;
export const LogoImg = styled.div`

height: auto;
display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: right;
    @media (min-width: 1000px) {
        width: 175px;
    }
    @media (min-width: 1200px) {
        width: 200px;
    }
    @media (min-width: 1400px) {
        width: 240px;
    }
  

`;

export const Img = styled.img`
width: 211.56px;
height: 55.2px;
@media (min-width: 1000px) {
    width: 150px
   
}
}

`;


export const FooterLinkContainer = styled.div`

margin-top: 4rem;
padding-bottom: 11px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #e3e0d96b;


@media (min-width: 1000px) {
    gap: 1rem;
}
@media (min-width: 1700px) {
    gap: 4rem;
    
}
@media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;
justify-content:center;
&:not(:last-child) {
    margin-right: 3rem;
}
@media only screen and (max-width: 900px) {
&:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4rem;
}
}
// @media only screen and (max-width:700px){

// }
@media only screen and (min-width:1000px){
    margin-right: 1rem;
    &:not(:last-child) {
        margin-right: .5rem;
    }
}
`;

export const FooterLinks = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;

&:not(:last-child) {
    margin-right: 5rem;
}
@media only screen and (min-width:1000px){
    width:max-content;
}
@media only screen and (min-width:1400px){
    width:max-content;
}
`;

export const FooterLinkTitle = styled.div`
color: #FFF;
font-family: PT Serif;

font-weight:600;
font-style: normal;

line-height: 1;
margin-bottom: 1rem;
// border-bottom:1px solid #fff;
@media only screen and (min-width:320px){
    font-size: 22px;
}
@media only screen and (min-width:1000px){
    font-size: 20px;
}
@media only screen and (min-width:1400px){
    font-size: 22px;
}
`;

export const FooterLink = styled.a`
text-decoration: none;
color: #fff;
font-size:16px;
font-weight:600;

margin-bottom: .5rem;
transition: all .4s ease;

&:hover {
    color: #E38B06;
}

@media only screen and (min-width:320px){
    font-size: 18px;
}
@media only screen and (min-width:1000px){
    font-size: 14px;
}
}

`;

export const FooterLinkTop = styled.a`
text-decoration: none;
color: #fff;
margin-bottom: 1rem;
transition: all .4s ease;
font-size:20px;
font-weight:600;
.spanText{
    font-size:18px;  
}
&:hover {
    color: #E38B06;
}

`;

export const FooterCopyRight = styled.p`
text-decoration: none;
outline: none;
color: #fff;
padding: 1rem 0 1rem 0;
font-size:16px;
font-weight:500;
&:hover {
    color: #E38B06;
}
`;