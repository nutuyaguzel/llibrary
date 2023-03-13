import actionType from "../action/actionTypes";


const initialState={
    pending:false,
    success:false,
    books:[],
    error:false,
    errorMessage:""
}
// if ve switch karar yapısı .switch daha kısa kullanışlı 
//reducer bir javascript fonksiyonudur.
const booksReducer=(state=initialState,action)=> { 
    switch(action.type){
        case actionType.bookAction.GET_BOOKS_START:
       return{
        ...state,
        pending:true
       }

     
    case actionType.bookAction.GET_BOOKS_SUCCESS:
      return{
        ...state,
        pending:false,
        success:true,
        books:action.payload// state in verisi 
      }
      case actionType.bookAction.GET_BOOKS_FAİL:
     return{
        ...state,
        pending:true,
        success:false,
       error:true,
       errorMessage:action.payload
     }
  
        default:
            return state
            
    }
}//başlangıç state i initialState 
export  default booksReducer
