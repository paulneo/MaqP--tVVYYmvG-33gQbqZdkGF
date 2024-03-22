import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { format } from '@formkit/tempo';

const date = new Date();

const searchBlogs = ({ posts }) => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(posts, {
    keys: ['data.title'],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get('q');
    if (searchStr) setInputVal(searchStr);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 5 ? fuse.search(inputVal) : [];
    console.log(inputResult);
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('q', inputVal);
      const newRelativePathQuery =
        window.location.pathname + '?' + searchParams.toString();
      history.pushState(null, '', newRelativePathQuery);
    } else {
      history.pushState(null, '', window.location.pathname);
    }
  }, [inputVal]);

  return (
    <div className="relative">
      <input
        className="
          block rounded-md outline-none border-0 ring-inset ring-1 ring-gray-300 dark:ring-gray-500  py-3 focus:border-primary focus:ring-transparent w-full text-center
          focus:ring-2 focus:border focus:border-amber-600 placeholder:text-gray-400 dark:bg-slate-900 dark:text-slate-300 sticky top-10
        "
        placeholder="Escriba aqui para buscar un blog"
        type="text"
        name="search"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        ref={inputRef}
      />

      {inputVal.length > 1 && (
        <div className="my-6 text-center dark:text-white">
          Se encontró {searchResults?.length}{' '}
          {searchResults?.length && searchResults?.length === 1
            ? 'resultados '
            : 'resultados'}{' '}
          para <span class="text-amber-500">{inputVal}</span>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 mt-10">
        {searchResults.map(({ item }) => (
          <a className="" key={item.id} href={`/blog/${item.slug}`}>
            <div
              class="img-content h-[220px] w-[100%] bg-cover bg-center rounded-xl "
              style={{
                backgroundImage: `url(${item.data?.heroImage})`,
              }}
            ></div>
            <h4 class="text-slate-800 dark:text-slate-50 hover:text-amber-500">
              {item.data.title}
            </h4>
            <p class="text-slate-800  dark:text-slate-50">
              {format(item.data.date, 'medium')}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default searchBlogs;
