import style from './styles.module.css';
const index = ({children, className}:{children: any, className?: string}) => {
  return (
      <span className={`${style.focus_in_contract_bck} ${className}`}>{children}</span>
  )
}

export default index