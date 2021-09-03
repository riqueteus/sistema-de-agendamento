import styles from './styles.module.scss';
import { FcGoogle } from 'react-icons/fc';

export function SignIn () {
    return (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FcGoogle className={styles.buttonIcon}/>
            Fazer login com Google
        </button>
    )
}