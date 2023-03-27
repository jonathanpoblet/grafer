import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductFromCollection } from '../../app/state/productsSlice.js';
import { toast } from "react-toastify";
import "./panelTable.css";

export default function PanelTable({products}) {
  const dispatch = useDispatch()
  const actionDeleteProduct = async (product) => {
    const productData = {
      identificator: product.identificator,
      name: product.name
    }
    const request = dispatch(deleteProductFromCollection(productData))
    if(request) {
      toast.success("Producto Borrado", {
        position: "top-right",
        autoClose: 1111,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Error al borrar producto", {
        position: "top-right",
        autoClose: 1111,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th className="table-th-img">Imagen</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {products.map((product) => {
          return (
            <React.Fragment key={product.identificator}>
              {product[product.name].map((p) => {
                return (
                  <tr className="table-body-tr" key={p.identificator}>
                    <th className="table-th-img">
                      <img src={p.image} className="table-body-img" />
                    </th>
                    <th className="table-body-th">{p.title}</th>
                    <th className="table-body-th">$ {p.price}</th>
                    <th className="table-body-th">
                      <button className="table-body-button" onClick={() => actionDeleteProduct(p)}>Eliminar</button>
                    </th>
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
