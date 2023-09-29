import React from 'react'
import Link from 'next/link'
import {useState} from "react"

type Props = {
  getSearchResults: any

}

const SearchCoins = ({getSearchResults}:Props) => {
  const [query, setQuery] = useState("")

  const handleSearch = async(e: React.FormEvent ) => {
    e.preventDefault()

    const response = await fetch(`/api/coins/search?query=${query}`)

    const coin = await response.json()

    getSearchResults(coin)

  }
  return (
    <form onSubmit={handleSearch} className='flex p-2 m-3 justify-around container' >
        <input type="text" value={query} placeholder='Search' onChange={(e) => setQuery(e.target.value)} className='p-2 text-black flex-grow rounded-md '/>
        <button type='submit' className='bg-blue-500 ml-3 text-white px-4 py-2 rounded-md hover:bg-slate-500'>Search</button>
    </form>
  )
}

export default SearchCoins