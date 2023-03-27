import './detail.css'

export default function Detail() {
  const detail = JSON.parse(localStorage.getItem('detail'));
  return (
    <div className='detail'>
      <img className='detail-img' src={detail.image} alt={detail.title} />
      <div className='detail-container'>
        <h2 className='detail-container-title'>{detail.title}</h2>
        <p className='detail-container-price'>ARS $ {detail.price}</p>
        <p className='detail-container-description'>{detail.description}</p>
        <button className='detail-container-button'>Comprar</button>
      </div>
    </div>
  );
}
