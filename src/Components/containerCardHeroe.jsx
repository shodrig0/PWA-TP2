import React from 'react'
import CardHeroe from './cardHeroe/cardHeroe'

function containerCardHeroe() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
   <CardHeroe/>
   <CardHeroe/>
   <CardHeroe/>
  </div>
  )
}

export default containerCardHeroe
