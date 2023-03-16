import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // state e  abone olmak, dispatch te postacı görevi yapıyor.// redux a action göndermek için dispatch
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./page/NotFound";
import Home from "./page/Home";

import api from "./api/Api";
import Url from "./api/Url";
import actionType from "./redux/action/actionTypes";
import Loading from "./component/Loading";
import AddBook from "./page/AddBook";

function App() {
  const dispatch = useDispatch();
  const { booksState, categoryState } = useSelector((state) => state);
  useEffect(() => {
    //useEfect ile api ye istek atıyoruz.veri çağırıyoruz.bunuda axios la yapıyoruz
    dispatch({ type: actionType.bookAction.GET_BOOKS_START });
    api.get(Url.books)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionType.bookAction.GET_BOOKS_SUCCESS,
            payload: res.data
          });
        }, 1000);
      }) //eger başarılı olduysa start yani işlem başladıysa
      .catch((err) => {
        // başarılı olmadıysa
        dispatch({
          type: actionType.bookAction.GET_BOOKS_FAİL,
          payload: "kitaplar cekmeesnasında hata oluştu",
        });
      });
    // get category

    dispatch({ type: actionType.categoryAction.GET_CATEGORY_START });
    api.get(Url.categories)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionType.categoryAction.GET_CATEGORY_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      }) //eger başarılı olduysa start yani işlem başladıysa
      .catch((err) => {
        // başarılı olmadıysa
        dispatch({
          type: actionType.categoryAction.GET_CATEGORY_FAİL,
          payload: "kategori bulunamadı ",
        });
      });
  }, []);


  if (booksState.pending === true || categoryState.pending === true)
    return <Loading />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-book" element={<AddBook/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
