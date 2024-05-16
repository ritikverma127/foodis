import React from 'react'
import styles from './Foods.module.css';
function Footer() {
  return (
    <div>
    <div> <footer className={styles.footer}>
    <div className={styles.footercontent}>
        <div className={styles.points}>
            COMPANY
            <ul className="footerul">
                <li className={styles.footerli}><a href="#">Abouts us</a></li>
                <li className={styles.footerli}><a href="#">Team</a></li>
                <li className={styles.footerli}><a href="#">Careers</a></li>
                <li className={styles.footerli}><a href="#">Swiggy Blog</a></li>
                <li className={styles.footerli}><a href="#">Bug Bounty</a></li>
                <li className={styles.footerli}><a href="#">Swiggy Super</a></li>
                <li className={styles.footerli}><a href="#">Swiggy Corporate</a></li>
                <li className={styles.footerli}><a href="#">Swiggy Instamart</a></li>
            </ul>
        </div>
        <div className={styles.points}>
            CONTACT
            <ul className={styles.footerul}>
                <li className={styles.footerli}><a href="#">Help & Support</a></li>
                <li className={styles.footerli}><a href="#">Partner with us</a></li>
                <li className={styles.footerli}><a href="#">Ride with us</a></li>
            </ul>
        </div>
        <div className={styles.points}>
            LEGAL
            <ul className={styles.footerul}>
                <li className={styles.footerli}><a href="#">Terms & Conditions</a></li>
                <li className={styles.footerli}><a href="#">Refund & Cancellation</a></li>
                <li className={styles.footerli}><a href="#">Privacy Policy</a></li>
                <li className={styles.footerli}><a href="#">Cookie Policy</a></li>
                <li className={styles.footerli}><a href="#">Offer Terms</a></li>
                <li className={styles.footerli}><a href="#">Phishing & Fraud</a></li>
            </ul>
        </div>
        <div className={styles.points}>
          
        </div>
    </div>
</footer>
</div>
</div>
  )
}

export default Footer