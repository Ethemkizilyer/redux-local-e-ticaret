 const addtocartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":{
            localStorage.setItem("cartitem",JSON.stringify([...state,action.payload]))
            return [...state,action.payload]
        }
        case "deletefromcart":{
            let copyofBasket=[...state]
            let indeks=copyofBasket.findIndex(item=>item.id===action.payload)
            copyofBasket.splice(indeks,1)
            state=copyofBasket
            if(state.length===0){
                localStorage.clear()
            }else{
                localStorage.setItem("cartitems",JSON.stringify(state))
            }
            return [...state]
        }
        default:
            return state
    }
 }

 export default addtocartReducer