import React, { useState } from 'react'

const Summarizer = () => {
  const [article, setArticle] = useState({
    "url": "",
    "summary":  ""
  });

  const handleSubmit = () => {
    alert("Submitted!")
  }

  return (
    <section className = "mt-16 w-full max-w-xl">
      <div className = "flex flex-col w-full gap-2">
        <form 
        className = "relative flex justify-center items-center"
        onSubmit = {handleSubmit}>
            <input 
              type = "url"
              placeholder = "Enter a URL to summarize!"
              defaultValue=""
              onChange = {(e) => {setArticle({...article, url: e.target.value})}}
              required
              className = "input peer">
            </input>
            <button type = "submit" className = "submit_button">Click me!</button>
        </form>
        {/* Display browing history */}
      </div>
        {/* Display results of the summarizer */}
    </section>
  )
}

export default Summarizer
