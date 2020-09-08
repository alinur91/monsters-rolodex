import React, { Component } from 'react'
import './search-box.styles.css'


export const SearchBox = ({placeholder,handleChange}) => (
 <input className="search" placeholder={placeholder} onChange={handleChange} type="search" />
)