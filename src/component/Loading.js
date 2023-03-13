import React from 'react'

const Loading = () => {
  return (
    <div style={{
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        height:"100vh",
        backgroundColor:'rgba(0,0,0,0.3)',
        display:'flex',
        justifyContent:"center",
        alignItems:"center"

}}>
        <div class="spinner-border text-primary">
 
</div>
    </div>
  )
}

export default Loading