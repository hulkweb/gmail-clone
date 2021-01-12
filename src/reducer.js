export const initialState={
    user:null,
    isOpen:false
    
}
export const actionTypes={
    SET_USER:"SET_USER",
    OPEN:"OPEN",
    CLOSE:"CLOSE" 
   
};
const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user:action.user,
            };
        case actionTypes.OPEN:
            return {
                ...state,
                isOpen:true
            }
            case actionTypes.CLOSE:
                return {
                    ...state,
                    isOpen:false
                }
        default:
            return state;
    }
}
export default reducer;