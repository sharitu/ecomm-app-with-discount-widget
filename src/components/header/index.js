import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-center align-middle flex-col md:flex-row p-6 bg-blue-400'>
      <p className='font-bold text-3xl uppercase text-white mr-2'>Free Shipping</p>
      <p className='font-light text-3xl uppercase text-white'>buy above $120</p>
    </header>
  );
}
