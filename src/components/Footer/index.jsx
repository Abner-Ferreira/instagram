import React from 'react';
import styles from './Footer.module.css'
// import { Container } from './styles';

function Footer() {


    const handleLanguage = (e) => {

            if (e.target.value === "Portuguese") {
                return window.location.href = 'http://localhost:3000/pt'
            }
            // else if (e.ta)
    }

    
  return (
    <>
        <div className={styles.container}>
            <ul>
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
                <li>© 2023 Instagram from Meta</li>
            </ul>
        </div>
    </>
  );
}

export default Footer;
