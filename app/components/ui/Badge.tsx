import React from 'react'
import "../../globals.css"

interface TBadge{
    badgeName: string,
}
const Badge = ({badgeName}: TBadge) => {
  return (
    <div>
      <div className="badge">{badgeName}</div>
    </div>
  )
}

export default Badge
