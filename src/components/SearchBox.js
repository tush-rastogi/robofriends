import React from 'react';

 const SearchBox=({Searchchange})=>{
 
      return (
          <div className='pa3'>
      <input className='pa3 ba ph5 b--gree  bg-lightest-blue br-pill'type="text" placeholder="search robots" onChange={Searchchange}/>
      </div>
      );
 }

 export default SearchBox;