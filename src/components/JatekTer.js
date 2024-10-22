import React from 'react'
import Cella from './Cella'

function JatekTer(props) {

  return (
    <>{
        props.lista.map((jel,i)=>{
            return <Cella jel={jel} key={i} index={i}/>
        }
        )        
        }
    </>
  )
}

export default JatekTer