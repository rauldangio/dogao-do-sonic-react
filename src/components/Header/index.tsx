import logo from '../../assets/LogoCFundo.png';
import style from './Header.module.scss';

export default function Header(){
  return (
    <div>
         <header className={style.header}>
        <div className={style.header_content}>
          <img src={logo} alt="logo" className={style.icone}/>
          <div className={style.ancoras}>
            <a className={style.ancora} href="/#">Quem somos</a>
            <a className={style.ancora} href="/#">Cardapio</a>
            <a className={style.ancora} href="/#">Nossos produtos</a>
            <a className={style.ancora} href="/#">Delivery</a>
          </div>
        </div>
      </header>
    </div>
  )
}
