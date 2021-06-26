import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const menu_data = [
  {
    key: 0,
    name: 'Home'
  },
   {
     key: 1,
     name: 'Dark Mode'
   },
   {
     key: 2,
     name: 'About Us'
   }
  ] 

function MenuItem(prop) {
  
  let st_defLi = {
    display: 'block',
    marginBottom: 'auto'
  }
  
  return (
  <li style={st_defLi}>
    <a>{prop.text}</a>
  </li>)
}


class Menu extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    
    let st_defUl = {
      listStyle: 'none',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70%'
    }
    
    const menuItems = menu_data.map(item => <MenuItem key={item.key} text={item.name} />)
    
    return (
      <ul style={st_defUl}>
      {menuItems}
      </ul>
      )
  }
}

const root = document.getElementById('menu-full')
ReactDOM.render(<Menu/>, root)
