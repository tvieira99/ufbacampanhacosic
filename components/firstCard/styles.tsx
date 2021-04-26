import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  backgroundEffect:{
    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(242,242,242,1) 90%, rgba(232,232,232,1) 100%, rgba(170,170,170,1) 100%);"
  },
  firstCard: {
    margin: '0px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4%',
    marginRight: '4%',
  },
  titulo: {
    margin: '0px',
    color: '#700205',
    fontFamily: "'PT Sans', sans-serif;",
    fontSize: '5vw',
    ['@media (min-width:800px)']:{
      fontSize: '7vw'
    },
    marginBottom: '3vh',
  },
  textCaixaTextImg: {
    textAlign: 'left',
    textJustify: 'auto',
    margin: 0,
    marginTop: '1%',
    fontFamily: "'PT Sans', sans-serif;",
    alignSelf: 'center',
    fontSize: '4vw',
    ['@media (min-width:800px)']:{
      fontSize: '3vw'
    },
  },
  image1: {
    width: '50vw',
    ['@media (min-width:800px)']:{
      width: '30vw'
    },
    height: 'auto',
    float: 'right',
    borderRadius: '10% 0% 0% 10%',
  },
  listaDiv: {
    fontFamily: "'PT Sans', sans-serif;",
  },
  lockTopText: {
    margin: 0,
    marginTop: '10px',
  },
  lockDiv: {
    color: '#4c3e4e',
    display: 'inline-flex',
    background: '#fefefe',
    borderRadius: '4px',
    padding: 4,
    marginTop: 10,
    border: '#6a6e6e solid 1px'
  },
  lockText: {
    margin: 0,
    marginLeft: '10px'
  },
  olPadding: {
    paddingLeft: '5vw',
    marginTop: 10
  },
  liList: {
    marginBottom: '15px',
    fontSize: '1em',
    ['@media (min-width:700px)']:{
      fontSize: '1.9vw',
    },
    ['@media (min-width:1000px)']:{
      fontSize: '1.4em',
    },
  }
});