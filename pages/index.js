import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();

  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();

  const handleClick = (id, title, thumbnail) => {
    router.push(
      {
        pathname: `movies/${id}`,
        query: {
          id,
          title,
          thumbnail,
        },
      },
      `movies/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}

      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() =>
            handleClick(movie.id, movie.original_title, movie.poster_path)
          }
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 20px;
          gap: 20px;
        }
        @media all and (max-width: 500px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media all and (max-width: 380px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(255, 255, 255, 0.2) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          padding: 10px 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      results,
    },
  };
};
