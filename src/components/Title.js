import { Component } from "react";

const styles = {
  titulo: {
    marginButtom: '30px',

  }
}

class Title extends Component{
  render(){
    return(
      <h1 style={styles.titulo}>Tienda</h1>
    )
  }
}

export default Title