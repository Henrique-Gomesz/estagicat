import styles from './Cardcand.module.css'
import {Container} from 'reactstrap'
import {ImLocation} from 'react-icons/im'
import {BsTelephoneFill} from 'react-icons/bs'
function Cardcand({nome_cand,cidade_cand,tel_cand,img_cand}){
    return (
        <Container className={styles.container}>
            <img className={styles.img} alt='cat' src={img_cand} />
            <div>
                <ul className={styles.list}>
                    <li>{nome_cand}</li>
                    <li><ImLocation/>{cidade_cand}</li>
                    <li><BsTelephoneFill/>{tel_cand}</li>
                </ul>
            </div>
        </Container>
    )
}
export default Cardcand;