import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductosContainer from "../containers/Productos/ProductosContainers";
import PeliculasContainer from "../containers/Peliculas/PeliculasContainer";
const ProductosNavigator = createStackNavigator(
{
    Productos : {
    screen : ProductosContainer
    }
}
);

const PeliculasNavigator = createStackNavigator(
{
    Peliculas : {
    screen : PeliculasContainer
    }
}
);

//SwitchNavigator
const SwitchNavigator = createSwitchNavigator(
    {
        snProductos : ProductosNavigator,
        snPeliculas : PeliculasNavigator
    },
    {
        initialRouteName : 'snProductos'
    }
)
export default createAppContainer(SwitchNavigator);