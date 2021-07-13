import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {
  
  const {setStatus ,cart ,history}=props
  
  const add=(e)=>(
    setStatus(e),
    history.push('/cart',cart)
  )
  const goLogin=()=>{
    history.push('/login')
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={()=>setStatus('products')} src='https://theme.hstatic.net/1000299894/1000503245/14/logo.png?v=9352' className="App-logo" alt="logo" />
        <div  className="App-icons">
          <button className="App-button" onClick={goLogin} >
            <AccountCircleIcon className="icon"></AccountCircleIcon>
          </button>
          <button onClick={()=>add('cart')} className="App-button" >
            <ShoppingCartIcon className="icon"></ShoppingCartIcon>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
