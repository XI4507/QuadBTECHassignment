import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmerContainer'>
        {
            Array(10).fill('').map((val,i)=>{
                return <div className="shimmercard" key={i}></div>
            })
        } 
    </div>
  )
}

export default Shimmer
