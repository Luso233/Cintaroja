import React { Component } from 'react';

class Tarjeta extends Component {
state = {
	url: 'http://lavisionnewspaper.com/wp-content/uploads/2017/10/Mapache.jpg',
	nombre: 'mapacho'
}
	render(){
		return () 
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={this.state.url}/>
<div className="card-body">
    <h5 className="card-title">{this.state.nombre}</h5>
 </div>
</div>
			)
			}
}
export default Holamundo;
