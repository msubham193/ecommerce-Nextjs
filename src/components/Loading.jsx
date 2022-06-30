import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="spinner-border animate-spin border-emerald-400  inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden ">O</span>
    </div>
  </div>
  )
}

export default Loading