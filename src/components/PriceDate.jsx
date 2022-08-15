import React, {useState, useEffect} from 'react'

function PriceDate() {
    const [dateData , setDateData] = useState("")

    const getData = ()=>{
            setDateData(new Date().toLocaleString());
    }
    useEffect(()=>{
        getData() 
    })
  return (
    <section>
        <div>
            <br></br>
            <p className='text-2xl text-primary2'>{dateData}</p>
            <br></br>
        </div>
    </section>
  )
}

export default PriceDate