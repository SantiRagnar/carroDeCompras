import { Component } from "react";

const style = {
  logo: {
    fontWeight: '700',
    fontSize: '2rm'
  }
}

class Logo extends Component{
  render(){
    return(
      <div style={style.logo}>
        Shop
      </div>
    )
  }
}

export default Logo