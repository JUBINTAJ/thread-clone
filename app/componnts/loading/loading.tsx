import React from 'react'

function loading() {
  return (
    <div className="loading-container">
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div> {/* Added fifth dot */}
    </div>
  </div>
  )
}

export default loading