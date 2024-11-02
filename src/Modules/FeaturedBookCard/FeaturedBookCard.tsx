import React from 'react'

export default function FeaturedBookCard({name,price, author,description}) 

{
  return (
    <>
    <p>{name}</p>
    <p>{price}</p>
    <p>{author}</p>
    <p>{description}</p>

    </>
  )
}
