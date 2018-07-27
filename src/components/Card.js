import React from 'react';

export const Card = ({children, className})=> {
  return <section className={`card ${className}`}>
    { children }
  </section>
}

export default Card;