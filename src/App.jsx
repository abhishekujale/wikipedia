import { useId, useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
  const InputId = useId("input");
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState([]);

  const searchWiki = async () => {
    if (!query) {
      return;
    }

    const url = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${query}`);
    const response = await url.json();
    console.log(response.query.search)
    setPages(response.query.search);
  }

  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  return (
    <div className=' w-full'>
      <div className='flex justify-center mt-6'>
        <h1 className="text-4xl font-sans">Wikipedia</h1>
      </div>
      <div className='flex justify-center m-10'>
        <input 
          type="text" 
          id={InputId}
          placeholder='Search Wikipedia'
          className="border-2 w-1/2 p-1 pl-3 border-zinc-500 rounded mr-5 bg-slate-500"
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          className='bg-cyan-500 w-20 h-10 m-3 border-2 border-zinc-500 mt-5' 
          onClick={searchWiki}
        >
          Submit
        </button>
      </div>
      <div className='flex justify-center'>
        <div>
        {pages.map((page, index) => (
          <div key={index} className='m-5 bg-slate-500  p-5 rounded-2xl'>
            <h1 className='flex justify-center text-2xl'>{page.title}</h1>
            <p className='flex justify-center '>{stripHtml(page.snippet)}</p>
          </div>
        ))}
          </div>
      </div>
    </div>
  );
}

export default App;
