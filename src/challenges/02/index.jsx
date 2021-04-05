import chroma from 'chroma-js';
import styled from 'styled-components';
import productImage from '../../assets/product.png';

import { fromArrayToHSL } from '../../utils/helpers';

const ImageContainer = styled.aside.attrs({
  className: 'flex-grow',
})`
  background-color: ${fromArrayToHSL(chroma('#A6E4FC').hsl())};

  img {
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateZ(20deg);
  }

  div.product-shadow {
    background: ${chroma('#A6E4FC').darken(2).css('hsl')};
    filter: blur(13px);
  }
`;

console.log();
const FormContainer = styled.aside`
  flex-basis: 45%;
`;

export default function CreditCardPage() {
  return (
    <section className='flex h-screen'>
      <FormContainer>
        <h4>Payment</h4>
        <form>
          <div>{/* Card pick */}</div>
          <input />
          <input />
          <div>{/* Drop downs here */}</div>
        </form>
      </FormContainer>
      <ImageContainer className='relative flex items-center flex-col justify-center'>
        <img className='mb-6' src={productImage} alt='Watch' />
        <div className='product-shadow w-64 inset-y-0 h-1 rounded-full'></div>
      </ImageContainer>
    </section>
  );
}
