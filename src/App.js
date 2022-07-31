import { useEffect } from 'react';
import logo from './logo.svg'
import styles from './App.module.css'

function App() {

  useEffect(()=> {
    console.log(styles)
    if(process.env.NODE_ENV === 'production') {
      //analytic'i bilgilendir
    }
  }, [])


  return (
    <div className={styles.App}>
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
         <img src={logo} alt="" />
         <img src={logo} alt="" />
        </>
      )}
      {/* <img src={logo} alt="" /> */}
    </div>
   
  );
}

export default App;


