import { useState } from 'react'

const Home = () => {

  const [text, SetText] = useState("");

  const encodedURL = encodeURIComponent(text);

  async function getServerSideProps() {
  // Get API reference https://nextjs-ja-translation-docs.vercel.app/docs/basic-features/data-fetching
  const res = await fetch(``);
  const data = await res.json();
  }

  const InputText = (e) => {
    SetText(e.target.value);
  };

  const TypeURL = () => {
    console.log("Send " + encodedURL)
  }



  return (
    <div>
      <div>
        <h1>ytdlgui</h1>
      </div>

      <div>
        <input type="text" value={text} onChange={InputText}></input>
        <button onClick={TypeURL}>URL</button>
      </div>

    </div>
  )
}

export default Home
