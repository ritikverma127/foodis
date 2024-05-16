import React from 'react';
import styles from './Foods.module.css';
import FoodData from '../Data/Food';
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/CartSystem";
function Foods() {
    const dispatch = useDispatch();
    return (
        <div className={styles.hello}>
            {FoodData.map((item, i) => (
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
    );
  
}

export default Foods;
