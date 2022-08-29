import {Container} from 'reactstrap'
import styles from './Search.module.css'
import {BiSearchAlt} from 'react-icons/bi'
import {useState} from 'react'
function Search({setSearch}){
    const [pesquisa,setPesquisa] = useState();
    function verify(){
        setSearch(pesquisa);
    }
    return (
        <Container className={styles.container}>
            <input className={styles.input} onChange={(e)=> setPesquisa(e.target.value)} type="text" placeholder='Digite a área de atuação/candidato que deseja...'/>
            <div className={styles.search} >
                <button onClick={verify} className={styles.btn}>
                    
                        <BiSearchAlt size='1.5em' />
                       
                  
                </button>
            </div>
        </Container>
    )
}
export default Search;