import React, { Component } from 'react';
import axios from 'axios';

class Articulo extends Component {
    constructor(props){
        super(props)

        const {nombre, precio, existencia, descripcion} = this.props
        this.state = {
            nombre: nombre,
            precio: precio,
            existencia: existencia,
            descripcion: descripcion
        }
    }
    
    
    
    state = {
        nombre:'',
        precio: 0,
        existencia:0, 
        descripcion:''
    }


    render() { 
        return (  
            <div classname="bg-info">
                <h1>Culo</h1>
                <span>{this.state.nombre}
                </span>
                <span>
                {this.state.descripcion}
                </span>
            </div>
        )};
 
}