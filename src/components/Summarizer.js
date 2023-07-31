import React, { useState } from 'react';
import axios from 'axios';
import SyncLoader from "react-spinners/SyncLoader";


const Summarizer = () => {
  const [article, setArticle] = useState({
    "url": "",
    "summary":  ""
  });

  const [loading, setLoading] = useState(false);

  const [buttonSubmitted, setButtonSubmitted] = useState(false);

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

  const replaceWithBr = (summary) => {
    return summary.replace(/\n/g, "<br />")
  }

  const handleSubmit = async (e) => {
    alert("Submitted!");
    e.preventDefault();
    setButtonSubmitted(true);
    article.summary = "";

    setLoading(true);

    try {
      const response = await axios.request(options);
      setArticle({...article, summary: response.data.summary});
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className = "mt-16 w-full max-w-xl">
      <div className = "flex flex-col w-full gap-2">
        <form 
        className = "justify-center items-center"
        onSubmit = {handleSubmit}>
            <input 
              type = "url"
              placeholder = "Enter a URL to summarize!"
              defaultValue=""
              onChange = {(e) => {setArticle({...article, url: e.target.value})}}
              required
              className = "input peer" />
            <button type = "submit" className = "submit_button ms-60 my-6">Click me!</button>
        </form>
      </div>
        <div>
          {buttonSubmitted ? (
            article.summary !== "" ? (
              <div className="summary_box">
                <h2 className = "relative flex justify-start items-center font-bold">Summary:</h2>
                <p dangerouslySetInnerHTML={{__html: replaceWithBr(article.summary)}} />
              </div>
            ) : (
              <div className = "loader m">
                <SyncLoader
                  color="aqua"
                  loading = {loading}
                />
              </div>
            )
          ) : ""}
      </div>
    </section>
  )
}

export default Summarizer
