import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  firstCard: {
    margin: '0px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  titulo: {
    paddingRight: '10px',
    paddingLeft: '10px',
    margin: '0px',
    color: '#700205',
  },
  caixaTextImg: {
    display: 'flex',
    alignItems: 'center'
  },
  textCaixaTextImg: {
    marginLeft: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
    textJustify: 'inter-word'
  },
  image1: {
    width: '50vw',
    height: 'auto',
    float: 'left',
    borderRadius: '0% 25% 25% 0%',
    shapeOutside: 'circle()',
  }
});