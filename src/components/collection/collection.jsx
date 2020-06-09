import React from 'react';
import MenuList from '../menu-list/menu-list'


export const Collection = ({data}) => {
    
    return data.map((item) => {
        return <MenuList key={item.id} collection = {item} />
    })
}