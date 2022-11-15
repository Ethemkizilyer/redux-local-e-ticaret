export const addcart=(payload)=>{
    return{
        type:"addtocart",
        payload:payload,
    }
}
export const deletefrombasket=(payload)=>{
    return{
        type:"deletefrombasket",
        payload:payload,
    }
}

export const cartclick=()=> {
    return{
        type:"cartclick"
    }
}