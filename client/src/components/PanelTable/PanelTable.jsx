import React from 'react';
import './panelTable.css';

export default function PanelTable({products}) {
    return (
        <table className='table'>
            <thead className='table-head'>
                <tr>
                    <th className='table-th-img'>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                {
                    products.map(product => {
                        return(
                            <React.Fragment key={product.identificator}>
                                {
                                    product[product.name].map(p => {
                                        return(
                                            <tr className='table-body-tr' key={p.identificator}>
                                                <th className='table-th-img'>
                                                    <img src={p.image} className='table-body-img'/>
                                                </th>
                                                <th className='table-body-th'>{p.title}</th>
                                                <th className='table-body-th'>$ {p.price}</th>
                                                <th className='table-body-th'>
                                                    <button className='table-body-button'>Eliminar</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </tbody>
        </table>
  )
}
