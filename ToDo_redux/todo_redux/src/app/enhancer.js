export function print1(storeAPI){
   return function wrapDispatch(next){
      return  function handleAction(action){
            
    console.log(1)
    return next(action);
}}}
export const print2=storeAPI=>next=>action=>{
    console.log(2)
    return next(action)
}
export const print3=storeAPI=>next=>action=>{
    console.log(3)
    return next(action)
}
