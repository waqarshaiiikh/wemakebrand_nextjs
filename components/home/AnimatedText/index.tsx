import style from './styles.module.css';
const index = ({children, className}:{children: any, className?: string}) => {
  return (
      <span className={`${style.focus_in_contract_bck} ${className}`}>{children}</span>
  )
}

export const AnimatedTextH1 = ({children, className}:{children: any, className?: string}) => {
  return (
      <h1 className={`${style.focus_in_contract_bck} ${className}`}>{children}</h1>
  )
}

export const AnimatedTextP = ({children, className}:{children: any, className?: string}) => {
  return (
      <p className={`${style.focus_in_contract_bck} ${className}`}>{children}</p>
  )
}

export default index