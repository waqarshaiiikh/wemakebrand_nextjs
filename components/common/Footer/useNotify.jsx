import { useEffect, useState } from 'react'

const useNotify = () => {
    const [notify, setNotify] = useState({ status: false, text: '' });
  
    useEffect(()=>{
        setTimeout(()=>{
            if(notify.status){
                setNotify({ status: false, text: '' })
                console.log('checking status')
            }
        },5000)
    },[notify])

    return {notify, setNotify}
}

export default useNotify