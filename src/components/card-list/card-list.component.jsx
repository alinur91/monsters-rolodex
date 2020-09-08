import React, { Component } from 'react'
import './card-list.styles.css'
import {Card } from '../card/card-component'

export class CardList extends Component {

 render(){
  const { monsters }=this.props
  
  return (
   <div className="card-list">
    {monsters.map(({ id, name, email }) => <Card email={email} id={id} key={id} name={name} />)}
   </div>
  )
 }
}


