import React from "react";
import { useSelector } from "react-redux";
import { upperFirstLetter } from "../utils/Function";
import Button from "./Button";

const ListBooks = () => {
    
  const { booksState,categoryState } = useSelector((state) => state);
 

  return (
    <div>
      { booksState.books.length === 0 && (
        <div className="my-5 d-flex justify-content-center">
          <div className="alert alert-warning text-center w-75" role="alert">
            Sistemde gösterilecek kitap kaydı yok.
          </div>
        </div>
      )}

      { booksState.books.length > 0 &&
       (
        <div>
          <table className="table table-striped">
            <thead>
              <tr >
                <th scope="col">Sıra no</th>
                <th scope="col">Kitap adı</th>
                <th scope="col">Kategori</th>
                <th scope="col">İşlemler</th>
              </tr>
            </thead>
            <tbody>
           {booksState.books.map((book,index)=>{
            const myCategory=categoryState.categories.find((item)=>item.id===book.categoryId)
    

            return (
                <tr key={book.id}>

                <th scope="row">{index+1} </th>
                <td>{upperFirstLetter(book.title)}</td>
                <td>{myCategory.name}</td>
                <td>
                <div className="btn-group" role="group" >
  <Button className="btn-sm" text="Detay" type="secondary"/>
  <Button className="btn-sm" text="Sil"  type="danger"/>
  <Button className="btn-sm" text="Güncelle" type="primary"/>
</div>
                </td>
              </tr>
            )
           })

           }
        
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListBooks;
