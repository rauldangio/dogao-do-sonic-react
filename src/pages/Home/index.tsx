import logo from '../../assets/logo.png';
import mainProduct from '../../assets/dogao.jfif';
import style from './Home.module.scss';


export default function Home(){
  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="logo" />
        <div>
          <a href="/#">Quem somos</a>
          <a href="/#">Cardapio</a>
          <a href="/#">Nossos produtos</a>
          <a href="/#">Delivery</a>
        </div>
      </header>

      <div>
        <img src={mainProduct} alt="promoção do dia" />
      </div>

    </div>

  )

}
