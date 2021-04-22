import react from 'react';
import compStyle from './styles'
import LockIcon from '@material-ui/icons/Lock';

export default function firstCard() {
  const style = compStyle();

  const LockCaixa = ({textCaixa}:{textCaixa:string}) => {
    return(
    <div className={style.lockDiv}><LockIcon /><h3 className={style.lockText}>{textCaixa}</h3></div>
      );
  }
  return (
    <>
      <div className={style.firstCard}>
        <div className={style.caixaTextImg}>
          <img className={style.image1} src='undraw_among_nature_p1xb.svg'></img>
          <h1 className={style.titulo}>Senhas fortes</h1>
          <p className={style.textCaixaTextImg}>Criar uma senha forte vai ser como curtir uma brisa com esse tutorial!</p>
        </div>
        <div className={style.listaDiv}>
          <ol className={style.olPadding}>
            <li className={style.liList}>Crie palavras que não existam no dicionário, escolha uma frase qualquer que lhe agrade e selecione partes de cada palavra. Combine-as com números e símbolos
              <div>
                <h5 className={style.lockTopText}>"<span style={{color:'#00cfff'}}>É mui</span>to <span style={{color:'#00cfff'}}>im</span>portante <span style={{color:'#00cfff'}}>te</span>r <span style={{color:'#00cfff'}}>uma sen</span>ha <span style={{color:'#00cfff'}}>for</span>te<span style={{color:'#00cfff'}}>!</span>"</h5>
                <LockCaixa textCaixa='Émuiimte1SenFor!'/>
              </div>
            </li>
            <li className={style.liList}>
              Use uma frase longa que faça sentido pra você e que seja fácil de lembrar. Não use ditados populares ou frases que possam ser ligadas a você como trechos da sua música preferida
              <div><LockCaixa textCaixa="1 dia serei Mestre em senhas" /></div>
            </li>
            <li className={style.liList}>
              Use palavras aleatórias combinadas
              <div><LockCaixa textCaixa="#LápisCamisaOrelha" /></div>
            </li>
            <li className={style.liList}>
              Substitua letras por números ou símbolos, mas cuidado com as substiuições óbvias como a por @ e o por 0, pense fora da caixa ;)
              <div><LockCaixa textCaixa="#7ápis5amisa9relha" /></div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}