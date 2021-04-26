import react from 'react';
import styles from './styles';

export default function SecondCard({ }) {
  const style = styles();
  return (
    <>
      <div className={style.divSecondCard}>
        <div>
          <img className={style.image} src='undraw_taking_selfie_lbo7.svg'></img>
          <img className={style.image} src='undraw_young_and_happy_hfpe.svg'></img>
        </div>
        <div>
          <h2 className={style.lembreSeText}>Lembre-se</h2>
          <ul className={style.ulFontStyle}>
            <li>
              Não forneça sua senhas para outras pessoas
            </li>
            <li>
              Não anote suas senhas em locais de fácil acesso
            </li>
            <li>
              Não use a mesma senha para todos os serviços que acessa.<br />Cofres de senhas como o Keepass, Bitwaren e Firefox Lockwise podem te auxiliar no gerenciamento
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}