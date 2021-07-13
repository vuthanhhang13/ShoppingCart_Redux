const appStyle = {
  container: {
    width: '100%',
    margin: '15px 25px',
  },
  wrapper: {
    height: '100vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    color: '#000',
    border: '1px solid #ccc',
  },

  formView: {
    padding: '12px 50px 20px 50px',
    backgroundColor: '#fff',
    margin: 'auto',
    width: '25%',
    // height: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    boxShadow: '0 0px 10px rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  viewOverlay: {
    // position: 'absolute',
    // top: '-40px',
    width: '90%',
    padding: '10px 0px',
    textAlign: 'center',
    // background: 'linear-gradient(60deg, #faa53e, #F7941D)',
    borderRadius: '8px',
    // boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 193, 117,.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '25px',
  },
  input: {
    width: '100%',
    margin: '15px 25px',
    // marginBottom: '40px',
  },
  errorText: {
    color: '#f44336',
    fontSize: '12px',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '-20px',
  },
  btnView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputRegion: {
    width: '95%',
    height: '100%',
    borderRadius: '4px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'inherit',
    textDecoration: 'none',
  },
}

export default appStyle