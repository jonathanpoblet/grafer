import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendProduct } from '../../app/state/productsSlice.js';
import './success.css'

export default function Success() {  
  const dispatch = useDispatch();
  const [response,setResponse] = useState(1)
  useEffect(() => {
    if(response === 1) {
      const product = JSON.parse(localStorage.getItem('detail'))
      const user = JSON.parse(localStorage.getItem('user'));
      if(user) {
        const handleProduct = async() => {
          const info = {
            user,
            product
          }
          dispatch(sendProduct(info))
        }
        setResponse(2)
        handleProduct();
        localStorage.removeItem('user')
      }
    }
  }, [])
  
  return (
    <div className='success'>
      <p className='success-message'><span className='success-message-orange'>Felicidades</span> por tu nueva compra!</p>
      <p className='success-message'>Revisa tu email, allí encontras la información correspondiente a la compra y el link a nuestro producto digital para que lo puedas descargar.</p>
      <p className='success-message'>Muchas gracias, <span className='success-message-green'>Graciela!!!</span></p>
    </div>
  )
}
