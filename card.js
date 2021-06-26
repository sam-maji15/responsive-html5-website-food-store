import React, {Component} from 'react'
import Tools from './tools.js'

const card_box_shadow = '0 0 4px 0 rgba(0,0,0,0.2)'
let st_defCardCon = {
  width: '40vw',
  height: 'fit-content',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column',
  paddingTop: '16px',
  boxShadow: card_box_shadow,
  marginLeft: '10px',
  marginRight: '10px'
}
let st_defImg = {
  width: '16vw',
  height: '16vw',
  display: 'block',
  margin: 'auto'
}
let st_defArticle = {
  display: 'block',
  margin: 'auto 8px',
  marginTop: '20px',
}
let st_defTitle = {
  fontSize: '1.2rem',
  color: Tools.theme.titleColor
}
let st_defDes = {
  fontSize: '1rem',
  fontWeight: '400',
  color: Tools.theme.textColor
}
let st_defPrice = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: Tools.theme.titleColor
}
let st_defAnchor = {
  width: 'fit-content',
  height: 'fit-content',
  background: Tools.theme.colorPrimary,
  display: 'block',
  marginTop: 'auto',
  marginLeft: 'auto',
  padding: '8px',
  borderRadius: '8px 0px 8px 0px'
}


function Card(prop) {
  return (
  <div style={st_defCardCon}>
    <img style={st_defImg} src={`./assets/img/${prop.image}`} />
    <article style={st_defArticle}>
      <h2 style={st_defTitle}>{prop.title}</h2>
      <h3 style={st_defDes}>{prop.description}</h3>
      <h2 style={st_defPrice}>{prop.price}</h2>
    </article>
    <a style={st_defAnchor}>
      <i style={{color: 'white'}} className='fa fa-bars'></i>
    </a>
  </div>
    )
}

export default Card