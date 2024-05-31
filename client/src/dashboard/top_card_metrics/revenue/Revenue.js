import { useContext } from 'react'
import './revenue.css'
import AppContext from '../../../context/AppContext'

const Revenue = () => {
  const {products, collections} = useContext(AppContext)

  return (
    <div className='metric'>
      <div className='icon-header'>
        <div className='icon lightgreen'><i class="bi bi-currency-dollar"></i></div>
        <h4>REVENUE</h4>
      </div>
        
        <div className='contents'>
          
          <div>
            <ul className='revenues-content'>
              {/* Dynamically calculate the revenue for each product and assign className */}
              {
                products.map(product => (
                  <li className={product.name.split(" ")[1]}><i>{product.name} {`--->`} Ksh.{
                    collections.filter(collection => collection.productId === product.id).reduce(
                      (total, collection) => total + Number(collection.amount), 0
                    )
                  }</i></li>
                ))
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Revenue