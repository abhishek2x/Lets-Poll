import React from 'react'
import Poll from './Poll'

function AnonymoudCard({ pollData2 }) {
  return (
    pollData2.map((data) => (data.isAnonymous) && (
      <Poll key={data.id} data={data} />
    ))
  )
}

export default AnonymoudCard