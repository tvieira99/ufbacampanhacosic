import react from 'react'
import compStyle from './styles'
import Hidden from '@material-ui/core/Hidden';

export default function header() {
  const style = compStyle();
  let dt = new Date();
  return (
    <>
      <div className={style.container}>
        <h1 className={style.campaingTitle}>Uma campanha COSIC/STI <br/> { dt.getFullYear() } </h1>
        <div className={style.containerImages}>
          <img className={style.cosicImg} src='cosic1000px-05.png'></img>
          <img className={style.ufbaImg} src='sti_logo.png'></img>
        </div>
      </div>
    </>
  );
}