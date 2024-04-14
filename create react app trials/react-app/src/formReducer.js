function formReducer(state=initialState,action){
    switch (action.type){
        case 'personal':
            return {...state,value:{personal:action.payload}}
        case 'spouse':
            return {...state,value:{spouse:action.payload}}
        case 'childern':
            return {...state,value:{children:action.payload}}
        default :
        return state;
        
    }

}