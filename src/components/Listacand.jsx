import {Container} from 'reactstrap'
import Cardcand from './Cardcand';
import cat1 from '../img/cat1.jpeg'
import cat2 from '../img/cat2.jpeg'
import cat3 from '../img/cat33.jpg'
import cat4 from '../img/cat4.jpeg'
import cat5 from '../img/cat5.jpeg'
import cat6 from '../img/cat6.jpeg'
import styles from './Listcand.module.css'
function Listacand(){
    
    return (
        <Container className={styles.container}>
            <span className={styles.content}>
                <Cardcand nome_cand='Henrique Gomes' tel_cand='xxxxx-xxxx' cidade_cand='Regente Feijó' img_cand={cat1}/>
            </span>
            <span className={styles.content}>
                <Cardcand nome_cand='Camilly Vantini' tel_cand='xxxxx-xxxx' cidade_cand='Taciba' img_cand={cat2}/>
            </span>
            <span className={styles.content}>
                <Cardcand nome_cand='Ghabryel Santos' tel_cand='xxxxx-xxxx' cidade_cand='P. Prudente' img_cand={cat3}/>
            </span>
            <span className={styles.content}>
                <Cardcand nome_cand='Gabriel Cruz' tel_cand='xxxxx-xxxx' cidade_cand='P. Prudente' img_cand={cat4}/>
            </span>
            <span className={styles.content}>
                <Cardcand nome_cand='Beatriz Matos' tel_cand='xxxxx-xxxx' cidade_cand='Taciba' img_cand={cat5}/>
            </span>
            <span className={styles.content}>
                <Cardcand nome_cand='Lucas Junqueira' tel_cand='xxxxx-xxxx' cidade_cand='Regente Feijó' img_cand={cat6}/>
            </span>
        </Container>
    )
}
export default Listacand;