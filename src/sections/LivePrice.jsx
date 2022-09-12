import React,{useState,useEffect} from 'react'

function LivePrice() {
  const [price, setPrice] = useState(2618.763)
  const [prices, setPrices] = useState(2618.763)

  const getData = ()=>{
    fetch('http://localhost:4000/readCryptoPeriodPrice')
    .then((response)=>response.json())
    .then((data)=>{
        let price = data['close'][data['close'].length - 1];
        setPrices(parseFloat(price).toFixed(3)); 
        setPrice(parseFloat(price/1000).toFixed(1))
    })
}

useEffect(()=>{
    getData() 
},[price])
  return (
    <div className='mx-auto m-auto items-center justify-center col-span-1'>
       <h2 className='text-1xl '>Index of top 20 Crypto coins :   ${prices}
        </h2>
        <h2 className=' text-1xl'>Indexx Crypto Token is 1:1000 to the index of Top 20 Crypto coins
        </h2>
        <h2 className='font-medium text-1xl'>Indexx Crypto Token Price :
        </h2>
        {/* text-center  */}
        <h2 className='font-medium text-4xl text-center my-5'>
        ${price}
        </h2>
        <div className='flex items-center justify-center m-auto'>
        <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://inxc.indexx.ai/';
              }}
            className='bg-secondary2 rounded-3xl p-3 inline-block align-middle shadow-lg w-full'>
            Buy Indexx Crypto Token
            </button>
        </div>
    </div>
  )
}

export default LivePrice