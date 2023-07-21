import React from 'react'

const Header = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
      <nav className = "flex justify-between items-center w-full mb-10 pt-5">
        <h3 className = "font-bold font">summarize.ai</h3>
        <button 
        type = "button"
        //enter github link soon
        onClick = {() => window.open("")} className = "button">
          Github
        </button>
      </nav>

      <h1 className = "title">
        Summarize Quickly with <br />
        <span className = "text_gradient">GPT-4 Model</span>
      </h1>
      <h2 className = "subtitle">
        Summarize lengthy articles into easily-readable paragraphs with summarize.ai!
      </h2>

    </header>
  )
}

export default Header
