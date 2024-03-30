import React from 'react'

const search = () => {
  return (
    <div>   <ul className=' '>
    {searchResult && searchResult.map(item => {
    return  <li key={item.id} className='text-lg'><Link to={`/blog/single/${item.id}`}>{item.title}</Link></li>
})}
    
  </ul></div>
  )
}

export default search