import React,{useState,useEffect}  from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade'
import {connect} from 'react-redux'
import store from './redux/store'
import {inCrease, deCrease, reMove} from './redux/action'


function Cart(props) {  
  const {history, newcart}=props
  const [status, setStatus]=useState(false)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [tong,setTong]=useState(0)

  const remove=(product)=>{
    reMove(product)
  }
  const checkout =()=>{
    console.log('haaaaaa')
    
    history.push('/checkout')
  }

  useEffect(()=>{
    let total= props.newcart.reduce((a,b)=>a+b.cost*b.count,0)
    setTong(total)
  },[props.newcart,tong,setTong])


  const increase=(product)=>{
    
    inCrease(product)
  }

  const decrease=(product)=>{
    if(product.count>1){deCrease(product)}
    
  }

  const proceed=()=>{
    setStatus(!status)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  return (
    <div>
      <h1 className='title'>Cart</h1> 
      
      <div className='app'> 
      
      { props.newcart.length===0? (<div className='title-cart'>Cart is empty</div>) :
      (<>
      <div className='title-cart'>You have {props.newcart && props.newcart.length} items in the cart</div>
      {/* <Fade left cascade> */}
      <div className='item-cart'>
        {props.newcart.map(product => (
        <div className='content-cart'>
          <img className='img-cart' src={product.image} alt={product.name}/>
          <div  className='content-right'>
            <div className='button-quantity'>
              <button className='button-control' onClick={()=>decrease(product)} >-</button>
              <b className='count-item'>{product.count}</b>
              <button className='button-control' onClick={()=>increase(product)} >+</button>
            </div>
            <div className='price'>
              <b>{product.count} x $ {product.cost} </b>
              <button className='button-remove' onClick={()=>remove(product)}>Remove</button>
            </div>
          </div> 
        </div>
      ))} </div>
      {/* </Fade> */}
      
      <hr className='total-hr'></hr>
      <div className='total'>
          <b className='total-text'>Total: ${tong}</b>
          <button className='total-button' onClick={()=>proceed()}>Proceed</button>
      </div>
      <div>
        {status && (
          <div className='checkout'>
            <form className='form' noValidate autoComplete="off">
              <TextField  className='form-input' id="outlined-name" label="Email" value={email} onChange={handleChangeEmail} variant="outlined" />
              <br/>
              <TextField  className='form-input' id="outlined-name" label="Name" value={name} onChange={handleChangeName} variant="outlined" />
              <br/>
              <TextField className='form-input' id="outlined-name" label="Address" value={address} onChange={handleChangeAddress} variant="outlined" />
              <br/>
              <Button variant="contained" color="primary" onClick={checkout}>Checkout</Button>
            </form>
          </div>
        )}
      </div>
      </>
      ) 
      }
     
      </div>  
     
    </div> 
  )
   
}
 
const mapStatetoProps=(state)=>{
  return{  
    newcart: state.data
  }
}
export default connect(mapStatetoProps)(Cart)
