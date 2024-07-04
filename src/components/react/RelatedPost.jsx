import React, { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import { format } from "@formkit/tempo";

const RelatedPost = ({ posts, tags }) => {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(posts, {
    keys: ["data.title"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  // useEffect(() => {
  //   const searchUrl = new URLSearchParams(window.location.search);
  //   const searchStr = searchUrl.get("q");
  //   if (searchStr) setInputVal(searchStr);
  // }, []);

  useEffect(() => {
    let results = [];
    console.log(tags);

    tags.forEach((element) => {
      if (results.length <= 9) {
        let newResult = fuse.search(element);
        console.log(results.length);

        results = results.concat(newResult);
      }
    });
    console.log(results);
    results.splice(9);
    setSearchResults(results);
  }, [tags]);

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-4 mt-10 z-0">
        {searchResults.map(({ item }) => (
          <a className="" key={item.id} href={`/blog/${item.slug}`}>
            <div className="img-content h-[150px] w-[100%] bg-cover bg-center rounded-xl">
              <img
                src={item.data?.heroImage}
                alt={item.data.title}
                class="w-full h-full object-cover	"
              />
            </div>
            <h4 className="font-medium text-base text-slate-800 dark:text-slate-50 hover:text-primary-500">
              {item.data.title}
            </h4>
            <p className="text-base text-slate-800  dark:text-slate-50">
              {format(item.data.pubDate, "medium")}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
