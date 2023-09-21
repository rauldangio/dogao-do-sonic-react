
import Header from '../../components/Header';
import style from './Home.module.scss';

export default function Home(){
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

      </div>
    </div>

  )

}
