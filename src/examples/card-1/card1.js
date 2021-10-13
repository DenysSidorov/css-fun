import React from 'react';
import style from './index.module.css';

const Card1 = () => {
  return (
    <div className={style.parent}>
      <div className={style.card}>
        <span className={style.text}>Boom</span>
      </div>
    </div>
  );
};

export default Card1;
