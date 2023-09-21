
import Header from '../../components/Header';
import style from './Home.module.scss';

export default function Home(){
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className={style.main_product}>
          <h1>Os Melhores Cachorros Quentes com Molho Chilli</h1>
      </div>
    </div>

  )

}
