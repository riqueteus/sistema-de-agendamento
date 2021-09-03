import styles from './styles.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/client'

export function SignIn () {
    // Retorna os dados do login do usuário em session (visto no console.log abaixo)
    const [session] = useSession();
    
    console.log(session);

    return (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('google')}
        >
            <FcGoogle className={styles.buttonIcon}/>
            Fazer login com Google
        </button>
    )
}