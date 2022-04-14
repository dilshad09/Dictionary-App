import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import categories from '../data/Category'
const Header = ({category, setCategory, word, setWord}) => {
    
  return (
    <div className='header'>
      <div className='title'>
          <span>{word ? word : "Word Hunt"}</span>
          <div className='inputs'>
          <TextField id="standard-basic" value={word} onChange={(e)=>setWord(e.target.value)} label="Search a word here" variant="standard" />
          <TextField id="select" label="Language" onChange={(e)=>setCategory(e.target.value)} value={category} select>
          {
              categories.map((options, i)=>{
               return <MenuItem value={options.label} key={i}>{options.value}</MenuItem>
              })
          }
         </TextField>
          </div>
      </div>
    </div>
  )
}

export default Header
