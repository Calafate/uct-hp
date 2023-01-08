import React from 'react';
import './styles.css';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <h6>No se encontró información</h6>
    <img src='/assets/images/13525-empty.gif' alt='sin resultados' />
  </div>
);

export default EmptyList;
