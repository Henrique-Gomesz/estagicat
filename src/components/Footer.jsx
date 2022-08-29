import {Container} from 'reactstrap'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import {MdIosShare} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {TbBoxMultiple} from 'react-icons/tb'
import styles from './Footer.module.css'
function Footer(){
    return (
        <Container className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listitem}><BsChevronLeft/></li>
                <li className={styles.listitem}><BsChevronRight/></li>
                <li className={styles.listitem}><MdIosShare/></li>
                <li className={styles.listitem}><HiOutlineBookOpen/></li>
                <li className={styles.listitem}><TbBoxMultiple/></li>
            </ul>
        </Container>
    )
}
export default Footer;