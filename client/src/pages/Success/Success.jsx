import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendProduct } from '../../app/state/productsSlice.js';

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
    <div>Success</div>
  )
}
