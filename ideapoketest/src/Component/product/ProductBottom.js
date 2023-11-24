import React from 'react'
import {
 ContainerBottom, ContainerBottomText
} from './Product.styles';
export default function ProductBottom() {
  return (
    <ContainerBottom>
        <h3>101 NIGHTS. RISK FREE. On ALL ESSENTIALS.</h3>
        <ContainerBottomText>With our 101-night sleep trial, you can ensure you’ve met your perfect comfort match or
 your money back. If you’re not convinced your award-winning Puffy product is the best fit
 for you, return it for a refund. Risk-free.</ContainerBottomText>
 <a href="/" type="button" className='btnn_primary'>
 START YOUR SLEEP TRIAL</a>
    </ContainerBottom>
  )
}
