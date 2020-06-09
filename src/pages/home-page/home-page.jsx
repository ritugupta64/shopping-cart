import React from 'react'
import { Collection } from '../../components/collection/collection'
import { Home_Data } from '../../json/home-data'

export const HomePage = () => {
    return(
        <>
          <h1>Home Page</h1>
          <Collection data={Home_Data}/>
        </>
    )
}
