import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

function Checkout(props) {
  const {newcart}=props
  const [tong,setTong]=useState(null)

  useEffect(()=>{
    let total= props.newcart.reduce((a,b)=>a+b.cost*b.count,0)
    setTong(total)
  },[props.newcart,tong,setTong])

  return (
    <div>
      <div  className='title-cart'>Successful</div>
      <div  className='checkout-border'>
        {newcart.map((item,key) =>(

          <div className='checkout-total'><b  className='index'>{key+1}.{' '}</b>{item.count} x ${item.cost}</div>
        ))}
        
      </div>
      <div className='checkout-tong'>Total: {'  '}${tong}</div>
    </div>
  )
}
const mapStatetoProps=(state)=>{
  return{  
    newcart: state.data
  }
}
export default connect(mapStatetoProps)(Checkout)