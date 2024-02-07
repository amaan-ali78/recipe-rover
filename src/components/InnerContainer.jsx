import style from './innerContainer.module.css'
export default function InnerContainer({children}){
    return<div className={style.con}>
    {children}
    </div>
}