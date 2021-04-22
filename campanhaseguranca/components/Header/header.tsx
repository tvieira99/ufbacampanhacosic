import react from 'react'
import compStyle from './styles'

export default function header(){
  const style = compStyle();
  return (
    <>
    <div className={style.container}>
      <img className={style.cosicImg} src='cosic1000px-05.png'></img>
      <img className={style.ufbaImg} src='sti_logo.png'></img>
      </div>
    </>
  );
}