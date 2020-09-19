import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import FormSearch from "../components/FormSearch/FormSearch";

export interface ImgData {
  largeImageURL: string;
  pageURL: string;
  user: string;
}

interface resData {
  title: string;
  photos: ImgData[];
}

const Home = () => {
  const [query, setQuery] = useState("video games, tech, sci-fi");
  const [searchResulst, setSearchResulst] = useState<resData[]>([]);

  const urlBuilder = (query: string) => {
    let cleanQuery = query.replace(/ /g, "+");

    const key = process.env.REACT_APP_PIXABAY_KEY;
    const type = "photo";
    const url = `https://pixabay.com/api/?key=${key}&image_type=${type}&q=${cleanQuery}`;

    return url;
  };

  const fetchHelper = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  const handleGetImages = async () => {
    const querys = query
      .split(",")
      .filter((q) => q !== "" && q !== " " && q)
      .map((q) => {
        if (q[0] === " ") {
          return q.slice(1);
        }
        return q;
      });

    const urls = querys.map((query) => urlBuilder(query));
    if (urls.length > 0) {
      Promise.all(urls.map((url) => fetchHelper(url))).then((res) => {
        const data = res.map((item, index) => {
          const album = {
            title: querys[index],
            photos: item.hits,
          };

          return album;
        });

        setSearchResulst(data);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleGetImages();
  };

  useEffect(() => {
    handleGetImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Banner
        title="Welcome to my Galery with Pixabay!"
        description="Get the photos you need thanks to the Pixabay API."
      />
      <Header title="Search in the Pixabay Gallery" />
      <FormSearch
        value={query}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
      <Wrapper>
        <Card
          title="How to use?"
          description='Separate with "," each search. You can query multiple at the same time. Example: "dogs, yellow rose, car red" 🎉'
        />
        {searchResulst.map((item, index) => (
          <Card key={index} slider title={item.title} photos={item.photos} />
        ))}
      </Wrapper>
    </>
  );
};

export default Home;
