import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Card from './card.js'

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

const cards_data = [
  {
    key: 0,
    title: 'Barbeque Salad',
    description: 'Delicious Dish',
    price: '22.4$',
    image: 'plate1.png'
  },
  {
    key: 1,
    title: 'Salad with Fish',
    description: 'Delicious Dish',
    price: '12.00$',
    image: 'plate2.png'
  },
  /*{
    key: 2,
    title: 'Salad with Spinach',
    description: 'Delicious Dish',
    price: '9.50$',
    image: 'plate3.png'
  }*/
]

const card_items = cards_data.map(item => <Card key={item.key}
    price={item.price}
    title={item.title}
    description={item.description}
    image={item.image}/>)

let st_defCard = {
  display: 'flex',
  flexFlow: 'row',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center'
}

function CardsGroup() {
  return (
    <div style={st_defCard}>
    {card_items}
    </div>
    )
}

const con_cards = document.getElementById('con-cards')
const body_main = document.querySelector('body')

ReactDOM.render(<CardsGroup />, con_cards)