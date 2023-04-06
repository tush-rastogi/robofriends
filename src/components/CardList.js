import React from 'react';
import Card from './Card';

const CardList = (props)=>{

    
       const CardArray=props.robots.map((user,i)=>{

           return <Card key={i} id={user.id} name={user.name} email={user.email}/>

       })

        

  return (

      <div>

         {CardArray};

      </div>


  )



}
export default CardList;