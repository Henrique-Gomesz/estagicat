import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap'
import styles from './App.module.css'
import Search from './components/Search';
import Footer from './components/Footer';
import { useState } from 'react';
import Listacand from './components/Listacand';
import Error from './components/Error';
function App() {
  const [search,setSearch] = useState("");
  return (
      <Container className={styles.bg}>
        <Navbar/>
        <Search setSearch={setSearch} />
        {search === "Design"&&(
          <Listacand/>
        )
        }
        {(search !== "Design" && search !== '') &&(
          <Error/>
        )

        }
        {search === "" &&(
            <div className={styles.nada}></div>
        )
        }
        
        <Footer/>
      </Container>
  );
}

export default App;
