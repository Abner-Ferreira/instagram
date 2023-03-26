import React from 'react';
import styles from './LoginPT.module.css'
// import { Container } from './styles';
import facebookLogo from "../../assets/facebook.png"


function LoginPT() {
  return (
    <>
      <div className={styles.container}>
                <div className={styles.boxPrincipal}>
                    <i style={{backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png')", backgroundPosition: "0px 0px" ,backgroundSize: "176px 186px", width: "174px" ,height: "50px" ,backgroundRepeat: "no-repeat", display: "inline-block", marginTop: "50px"}}></i>
                    <div className={styles.containerInput}>
                        <input type="email" name="email" id={styles.userEmail} placeholder="Telefone, nome de usuário ou email" />
                        <input type="password" name="password" id={styles.userPassword} placeholder="Senha" />
                    </div>
                    <button type="submit" className={styles.botaoLogin}>Log in</button>

                    <div className={styles.containerDivisoria}>
                        <div className={styles.barra}></div>
                        <p>OU</p>
                        <div className={styles.barra}></div>
                    </div>

                    <div className={styles.facebookDiv}>
                        <img src={facebookLogo} alt="logo do facebook" />
                        <p><a href="https://www.facebook.com/login.php">Entrar com Facebook </a></p>
                    </div>
                    <div className={styles.forgotPassword}>
                        <a href="https://www.instagram.com/accounts/password/reset/">Esqueceu a senha?</a>
                    </div>
                </div>

                <div className={styles.boxSecundario}>
                    <p>Não tenho uma conta? <a href='https://www.instagram.com/accounts/emailsignup/'>Cadastre-se</a></p>
                </div>
                <div className={styles.linkAppStore}>
                    <p>Obtenha o aplicativo.</p>
                    <div className={styles.downloads}>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D266385EE-D727-4CE2-B736-49B497102DCD%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1"><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="baixe no google play" /></a>
                        <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-11%2C0%2C1461%2C1570"><img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="baixe na microsoft" /></a>
                    </div>
                </div>
            </div>
    </>
  );
}

export default LoginPT;