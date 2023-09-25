
import React, { useState } from 'react';
import Header from '../../components/Header';
import Seacher from '../../components/Seacher';
import style from './Home.module.scss';

export default function Home(){
  const [buscar, setBusca] = useState("");
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className={style.main_product}>
          <div className={style.h1background}>
            <h1>Os Melhores Cachorros Quentes com Molho Chilli</h1>
          </div>
      </div>

      <div>
        <Seacher  busca={buscar} setBusca={setBusca}/>
      </div>
    </div>

  )

}
