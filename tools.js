class Tools {
  
  static theme = {
    colorPrimary: '#069C54',
    colorPrimaryAccent: '#048654',
    titleColor: '#393939',
    textColor: '#707070',
    textColorLight: '#A6A6A6',
    bodyColor: '#FBFEFD',
    containerColor: '#FFFFFF' 
  }
  
  static dark_theme = {
    
  }
  
  static setStyle(st_new, st_ini) {
    for (let key in st_new)
      if (st_new != st_ini)
        st_ini[key] = st_new[key]
    return st_ini
  }
}

export default Tools