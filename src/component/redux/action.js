import store from './store'

export const inCart=(payload)=>{
  store.dispatch({ type: 'INCART',payload})
}

export const updateItem=(payload)=>{
  store.dispatch({ type: 'UPDATEITEM',payload})
}

export const inCrease=(payload)=>{
  store.dispatch({type:'INCREASE',payload})
}

export const deCrease=(payload)=>{
  store.dispatch({type:'DECREASE',payload})
}

export const reMove=(payload)=>{
  store.dispatch({type:'REMOVE',payload})
}