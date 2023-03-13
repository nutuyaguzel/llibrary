import actionType from "../action/actionTypes";

const initialState = {
  pending: false, //bir işlem başladı
  success: false, // işlem basarı bilgisi
  categories: [],
  error: false,
  errorMessage: "",
};

 // action dan gelen değişiklikler
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.categoryAction.GET_CATEGORY_START:
      
    return {
        ...state,
        pending: true,
      };
    case actionType.categoryAction.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        categories:action.payload
      };
       case actionType.categoryAction.GET_CATEGORY_FAİL:
        return {
            ...state,
            pending:false,
            error:true,
            errorMessage:action.payload
        };


    default:
      return state;
  }
};

export default categoryReducer;
