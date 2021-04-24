import styles from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
export default makeStyles({
  container:{
    display: 'flex',
    justifyContent: 'start',
    background: '#ffffff',
    alignItems: 'center'

  },
  campaingTitle:{
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: '2vw',
    fontFamily: "Hind Siliguri, sans-serif",
    textAlign:'center'
  },
  cosicImg: {
    objectFit: 'contain',
    width: '30vw',
  },
  ufbaImg: {
    objectFit: 'contain',
    width:'20vw'
  },
  containerImages: {
    display:'flex'
  }
});