const cart=[]
const addCart=(state=cart,action)=>{
    switch(action.type){
      case 'INCART':
        return [
          ...state,{...action.payload,count:1}
          // ...state,action.payload
        ]

      case 'UPDATEITEM':
        state.forEach(item=>{
          if(item.id===action.payload.id){
            item.count++;
          }
        })
        return [...state]

      case 'INCREASE':
        const index=state.findIndex((item)=> item.id === action.payload.id)
        const item = state[index]
        state[index]={...item,count:item.count+1}
        return [...state]
        
      case 'DECREASE':
        const index2=state.findIndex((item)=> item.id === action.payload.id)
        const item2 = state[index2]
        state[index2]={...item2,count:item2.count-1}
        return [...state]

      case 'REMOVE':
        const newState =state.filter(item=>item.id !== action.payload.id)
        return [...newState]

      default:
        return state
    }
  }

export default addCart