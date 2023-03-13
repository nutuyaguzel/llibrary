//state leri yönetecek masa gibi düşünebiliriz

import { createStore ,combineReducers} from "redux";
import booksReducer from "./reducer/booksReducer";
import categoryReducer from "./reducer/categoryReducer";


const rootReducer = combineReducers({
    booksState:booksReducer,
    categoryState:categoryReducer

}) //iki reducer ın birlikte çalışması için combinereducer ile 
 const store=createStore(rootReducer)

 export default store
  
 //buraya state yönetim merkezi diyebiliriz



