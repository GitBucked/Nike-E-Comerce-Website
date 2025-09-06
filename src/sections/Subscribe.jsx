import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
    <section
    className="max-container flex flex-col items-center justify-center gap-10 text-center py-10"
    id="contact-us"
  >
    <h2 className="font-palanquin leading-[68px] font-bold text-4xl max-w-2xl">
      Sign Up for
      <span className="text-coral-red"> Updates </span>
      & Newsletter
    </h2>

    <div className="w-full max-w-4xl flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
      <input
        className="flex-1 px-5 py-3 rounded-full outline-none"
        placeholder="Subscribe@nike.com"
        type="text"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign Up" fullWidth />
      </div>
    </div>
  </section>
  )
}

export default Subscribe
