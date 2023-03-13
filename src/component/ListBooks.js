import React from "react";
import { useSelector } from "react-redux";

const ListBooks = () => {
    
  const { booksState,categoryState } = useSelector((state) => state);
  console.log(booksState);

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
        <div className="container my-5">
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
                <td>{book.title}</td>
                <td>{myCategory.name}</td>
                <td>@mdo</td>
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
