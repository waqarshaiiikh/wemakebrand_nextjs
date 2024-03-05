import PropTypes from 'prop-types'
import styles from './Spinner.module.css'
import { Suspense } from 'react';

const SpinnerComponent = ()=>{
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loading}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

const Spinner = ({children}) => {
  return (
  <Suspense fallback={<SpinnerComponent/>}>
    {children}
  </Suspense>
  )
}

Spinner.propTypes = {children: PropTypes.object}

export default Spinner
