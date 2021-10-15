import React from 'react';
import style from './index.module.css';

const Spinner1 = () => {
  return (
    <div className={style.parent}>
      <div className={style.spinner}>
        <div className={style.content}>
          Loading
        </div>
        <div className={style.border}/>
      </div>
    </div>
  );
};

export default Spinner1;
