import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = () => {
  return (
    <Breadcrumb style={{margin: 0, fontSize: '14px'}}>
      <Breadcrumb.Item href="#" style={{paddingLeft: '15px'}}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Men's Shoes</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
