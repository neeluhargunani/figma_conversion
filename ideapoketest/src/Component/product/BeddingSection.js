// BeddingSection.js
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

function BeddingSection({ products }) {
  return (

      <ProductContainer>
        {products.map((productItem, index) => (
          <ProductContent key={index}>
        
            <ProductContentText >
              <ProductContentTitle>{productItem.title}</ProductContentTitle>
              <ProductText style={{width:"300px"}}>{productItem.desc}</ProductText>
              <a href={productItem.cta} type="button" className='bttn_primary'>
               {productItem.ctaButton}
              </a>
            </ProductContentText>
            <ProductImg >
              <Img src={productItem.Heroimage} alt={productItem.alt} />
            </ProductImg>
          </ProductContent>
        ))}
      </ProductContainer>
  
  );
}

export default BeddingSection;
