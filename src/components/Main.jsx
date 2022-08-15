import React from 'react' 
import ChartSNP from '../sections/Chart'
import LivePrice from '../sections/LivePrice'

function Main() {
  return (
    <div className='container  m-10'>
        <h2 className='font-black text-4xl  text-primary2'> Indexx Crypto Token pegged to index of Top 20 Crypto Currencies</h2>

        <section className='grid grid-cols-3 w-full max-w-full'>
            <ChartSNP/> 
            <LivePrice/>
        </section>
    </div>
  )
}

export default Main