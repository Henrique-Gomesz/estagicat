import {Container} from 'reactstrap'
import styles from './Navbar.module.css'
import perfilimg from '../img/cat.jpeg'
import {GoPerson} from 'react-icons/go'
import {MdMessage} from 'react-icons/md'
import {AiTwotoneSetting} from 'react-icons/ai'
function Navbar(){
    return (
        
        <Container fluid="sm" className={styles.container}>
            <div className={styles.containerlogo}>
            <ul className={styles.listabrand}>
                    <li><img className={styles.img} src={perfilimg} alt="Cat_img" /></li>
                    <li className={styles.branddiv}> 
                        Estagi<br/>
                        Cats.com
                    </li>
                
                </ul>
                  
                    
               
            </div>
            <div className={styles.rede}>
                <ul className={styles.listarede}>
                    <li className={styles.listaelemento}><GoPerson/></li>
                    <li  className={styles.listaelemento}><MdMessage/></li>
                    <li  className={styles.listaelemento}><AiTwotoneSetting/></li>
                </ul>
            </div>
        </Container>
        
    );
}
export default Navbar;