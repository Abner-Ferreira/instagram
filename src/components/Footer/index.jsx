import React from 'react';
import styles from './Footer.module.css'
// import { Container } from './styles';

function Footer() {

    const date = new Date()
    const ano = date.getFullYear()

    const handleLanguage = (e) => {

            if (e.target.value === "Portuguese") {
                return window.location.href = 'http://localhost:3000/pt'
            }
            // else if (e.ta)
    }

    
  return (
    <>
        <div className={styles.container}>
            <ul className={styles.itensFooter}>
                <li>Meta</li>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Help</li>
                <li>API</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Top Accounts</li>
                <li>Locations</li>
                <li>Instagram Lite</li>
                <li>Contact Uploading & Non-Users</li>
                <li>Meta Verified</li>
            </ul>
            <ul>
                <li><select name="languages" id={styles.languages} onChange={handleLanguage}>
                    <option value="English">English</option>
                    <option value="Portuguese">Portuguese</option>
                    </select></li>
                <li>© {ano} Instagram from Meta</li>
            </ul>
        </div>
    </>
  );
}

export default Footer;
