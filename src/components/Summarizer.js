import React, { useState } from 'react';
import axios from 'axios';

const Summarizer = () => {
  const [article, setArticle] = useState({
    "url": "",
    "summary":  ""
  });

  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: article.url,
      length: "3"
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    }
  }

  const handleSubmit = async (e) => {
    alert("Submitted!");
    e.preventDefault();

    try {
      const response = await axios.request(options);
      setArticle({...article, summary: response.data})
    } catch (error) {
      console.error(error);
    }
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
      </div>
        {/* Display results of the summarizer */}
    </section>
  )
}

export default Summarizer
