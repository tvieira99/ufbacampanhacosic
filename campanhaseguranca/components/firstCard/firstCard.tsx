import react from 'react';
import compStyle from './styles'

export default function firstCard() {
  const style = compStyle();
  return (
    <>
      <div className={style.firstCard}>
        <h1 className={style.titulo}>Senhas fortes e fáceis de lembrar</h1>
        <div className={style.caixaTextImg}>
          <img className={style.image1} src='undraw_among_nature_p1xb.svg'></img>
          <p className={style.textCaixaTextImg}>Criar uma senha forte vai ser como curtir uma brisa com esse tutorial!</p>
        </div>
        <div></div>
      </div>
    </>
  );
}