import {
  FooterSection,
  FooterContainer,

  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  FooterLinkTop,
 
  LogoImg,
  Img

} from './Footer.styles';
import { Footerdata } from '../Clientdata/Data';
function Footer() {
  return (
      <div>
          <FooterSection>
              <FooterContainer>
            
                  <FooterLinkContainer>
                      <FooterLinksWrapper>
                      
                      <FooterLinks>
                      <FooterLinkTitle><LogoImg><Img src= "/assets/FooterLogo.svg" alt="Logo"/></LogoImg></FooterLinkTitle>
                      <FooterLinkTop to='/'><span className='spanText'><img src="/assets/PhoneIcon.svg" alt="phone"/></span><span className='spanText'>+1 (800) 430-8380</span></FooterLinkTop>
                      <FooterLinkTop to='/'><span ><img src="/assets/ChatIcon.svg" alt="Chat"/></span><span>Chat now</span> </FooterLinkTop>
                      <FooterLinkTop to='/'><span>@</span><span>support@puffy.com</span></FooterLinkTop>
                     
                          </FooterLinks>
                        
              
                             
                        

                      </FooterLinksWrapper>
                      {Footerdata.map((column, columnIndex) => (
              <FooterLinksWrapper key={columnIndex} >
                <FooterLinks>
                  <FooterLinkTitle>{column.title}</FooterLinkTitle>
                  {column.items.map((item, itemIndex) => (
                    <FooterLink key={itemIndex} to={item.linkDest}>
                      {item.text}
                    </FooterLink>
                  ))}
                </FooterLinks>
              </FooterLinksWrapper>
            ))}
                      <FooterLinksWrapper>
                          <FooterLinks>
                              
                          </FooterLinks>
                          <FooterLinks>
                             
                          </FooterLinks>
                          
                      </FooterLinksWrapper>
                  </FooterLinkContainer>
                  <FooterCopyRight to='https://github.com/neeluhargunani'> &copy; Copyright 2023, Designed and coded with 💛 by Neelam hargunani</FooterCopyRight>
              </FooterContainer>
          </FooterSection>
          
      </div>
  )
}
export default Footer;