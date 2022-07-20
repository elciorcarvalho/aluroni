import { Outlet } from 'react-router-dom';
// styles
import styles from './Template.module.scss';
import styleTema from 'styles/Tema.module.scss';

export default function Template() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
}
