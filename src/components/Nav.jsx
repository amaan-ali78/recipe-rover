import Logo from '../assets/Logo.png'
import style from './nav.module.css'
export default function Nav(){
    return <div className={style.cont}>
        <img className={style.logo} src={Logo} alt="img" />
        <h1 className={style.title}>Recipe Rover</h1>
    </div>
}