import React from 'react'

const Cell = ({value}) => {
  return (
    <td>{JSON.stringify(value)}</td>
  )
}

export default Cell