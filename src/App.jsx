import React from 'react'
import {Hero, PopularProducts, SpecialOffers ,SuperQuality ,CustomerReviews ,Subscribe ,Services ,Footer} from "./sections";
import Navbar from './Components/Navbar';
// import Test from './sections/Test';
import "./index.css"

function App() {
  return (
    <main className='relative'>
        {/* <Test /> */}
        <Navbar />
        <section className='xl:padding-l wide:padding-r padding-b'>
            <Hero />
        </section>
        <section className='padding'>
             <PopularProducts /> {/* make each product image lead to a separate page explaining details */}
        </section>
        <section className='padding'>
            <SuperQuality />
        </section>
        <section className='padding-x py-10'>
           <Services />
        </section>
        <section className='padding'>
           <SpecialOffers />
        </section>
        <section className='bg-pale-blue padding'>
           <CustomerReviews />
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
            <Subscribe />
        </section>
        <section className='bg-black padding-x padding-t pb-8 text-white'>
           <Footer />
        </section>
    </main>
  )
}

export default App
