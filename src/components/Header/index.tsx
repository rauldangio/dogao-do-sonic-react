import logo from '../../assets/LogoCFundo.png';
import style from './Header.module.scss';

export default function Header(){
  return (
    <div>
         <header className={style.header}>
        <div className={style.header_content}>
          <img src={logo} alt="logo" className={style.icone}/>
          <div className={style.ancoras}>
            <a href="/#">Quem somos</a>
            <a href="/#">Cardapio</a>
            <a href="/#">Nossos produtos</a>
            <a href="/#">Delivery</a>
          </div>
        </div>
      </header>
    </div>
  )
}
