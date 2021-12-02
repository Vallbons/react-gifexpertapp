import React, {useState} from 'react';
import { AddCategoty } from './components/AddCategoty';
import { GifGrid } from './components/GifGrid';
//import React, {Fragment} from 'react';

// FC

const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
   const [categories, setCategories] = useState(['One piece']);
   // const handleAdd = () => {
     //   setCategories([...categories, 'One piece']);
        
        // setCounter ( (c) => c+1 );
    
    
    return (
        <>
        <h1> GifExpertApp </h1>
        <AddCategoty 
        setCategories={ setCategories }/>
       <hr/>

       

       <ol>
           {
            categories.map( category =>
                  <GifGrid
                  key= {category}
                  category={category}/>)
            }
            


       </ol>

        </>
    );
        }


export default GifExpertApp;