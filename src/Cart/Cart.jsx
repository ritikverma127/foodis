import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import styles from '../Home/Foods.module.css';

function Cart() {
  const {carts}=useSelector(item=>item.user);
  console.log(carts);
  return (
    <div>
   <Navbar/>
   <h1>Total Purchase :-{carts.length}</h1>
   {carts.map((item, i) => (
                <div key={i}>
                    <div className={styles.container}>
                      
                        <h2 className={styles.h2}>{item.name}</h2>
                        <img style={{ height: '200px', width: '300px' }} src={item.img} alt="Delicious Pizza" className={styles.img} />
                        <p className={styles.p}>{item.desc.slice(1, 60)}</p>
                        <button className={styles.buttons} onClick={() => dispatch(AddCart(item))}>Add</button>
                    </div>
                </div>
            ))}
</div>
  )
}

export default Cart