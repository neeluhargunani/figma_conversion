import React from 'react';
import BeddingSection from './BeddingSection';
import BedframesSection from './BedFramesSection';
import { product } from '../Clientdata/Data';
import {
  MainContainer
} from './Product.styles';
import ProductBottom from './ProductBottom';

function ProductSection() {
  const beddingProducts = product[0].bedding;
  const bedframesProducts = product[1].bedframes;

  return (
    <MainContainer>
       <h3>PICK YOUR PUFFY MATTRESS.</h3>
      <BeddingSection products={beddingProducts} />
      <BedframesSection products={bedframesProducts} />
      <ProductBottom/>
    </MainContainer>
  );
}
export default ProductSection;