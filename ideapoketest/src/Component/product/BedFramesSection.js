// BedframesSection.js
import React from 'react';
import {
  ProductContainer,
  ProductContent,
  ProductImg,
  ProductContentText,
  ProductContentTitle,
  ProductText,
  Img,
} from './Product.styles';

function BedframesSection({ products }) {
  return (
   
       <ProductContainer>
        {products.map((productItem, index) => (
          <ProductContent key={index}>
                <ProductImg>
              <Img src={productItem.Heroimage} alt={productItem.alt} />
            </ProductImg>
            <ProductContentText >
              <ProductContentTitle>{productItem.title}</ProductContentTitle>
              <ProductText style={{width:"300px"}}>{productItem.desc}</ProductText>
              <a href={productItem.cta} type="button" className='bttn_primary'>
               {productItem.ctaButton}
              </a>
            </ProductContentText>
         
          </ProductContent>
        ))}
      </ProductContainer>
 
  );
}

export default BedframesSection;
