import styles from './Error.module.css'
import {Container} from 'reactstrap'
import errorcat from '../img/errorcat.png'
function Error(){
    return (
        <Container className={styles.container}>
            <div><h1 className={styles.titulo}>Oops!</h1></div>
            <div className={styles.desc}>
                Não encontramos nenhum<br/>resultado para sua busca.
            </div>
            <div>
                <img src={errorcat} alt="Error cat" />
            </div>
             <div className={styles.btn}>
                <span className={styles.span}><button className={styles.btnb}>Voltar para página anterior</button></span>
                <span className={styles.span}><button className={styles.btnb} >Fazer uma nova busca</button></span>
             </div>
        </Container>
    )
}
export default Error;