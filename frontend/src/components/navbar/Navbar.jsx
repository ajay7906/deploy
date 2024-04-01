
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggin }) => {
 // const NameData = localStorage.getItem('NameData')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();

    navigate("/login");
    console.log('clear');
   
};

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jobfinder</h1>
        <div className={styles.buttons}>
          {
            isLoggin === null ?
              <>
                <Link to='/login'> <button className={`${styles.button} ${styles.login}`}>Login</button></Link>
                <Link to='/register'><button className={`${styles.button} ${styles.register}`}>Register</button></Link>

              </> :
              <>
               <Link to='/login' onClick={logout}><button className={`${styles.button} ${styles.register}`}>Logout</button></Link>
               <Link to='/addjob'> <button style={{border:'none'}} className={`${styles.button} ${styles.login}`}>Post Job</button></Link>
              </>
           }
        </div>
      </div>
    </header>
  );
};

export default Navbar;