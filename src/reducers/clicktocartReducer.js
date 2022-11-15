const clicktocartReducer=(state=false,action)=> {
    switch(action.type){
        case "cartclick":
            {
                return (!state)
            }
            default:
                return state
    }
}

export default clicktocartReducer