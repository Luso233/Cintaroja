import React, { Component } from 'react';
import articuloxd from './articuloxd';
import axios from 'axios'
class Verarticulo extends Component {
    state = { 
        articulos: []
     };

    componentDidMount(){
        axios
            .get ("https://supermercado-la-chona.herokuapp.com/api/articulos/")
            .then (respuesta => {
                console.log(respuesta.data);
            this.setState({
                articulos: respuesta.data
            })
        })   
            .catch (error => console.log(error));
        }

    render() { 
        return ( 
       <div>
        <h1> ver articulos </h1>
        {
            this.state.articulos.map( articulo => {
            return <articuloxd
            key= {articuloxd_id}
            nombre= {articuloxd_nombre}
            precio= {articuloxd_precio}
            existencia= {articuloxd_existencia}
            descripcion= {articuloxd_descripcion}
            />
            })
        }
            </div>
         );
    }
}
 
export default Verarticulo;