import { useEffect, useState } from "react";

const { useRouter } = require("next/router");

const MovieDetail = () => {
  const router = useRouter();
  const { id, title, thumbnail } = router.query;

  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await (await fetch(`/api/movie/${id}`)).json();
      setDetailInfo(response);
    })();
  }, []);

  return (
    <div className="movie_detail">
      <figure>
        <img src={`https://image.tmdb.org/t/p/w500${thumbnail}`} />

        <figcaption>{title}</figcaption>
      </figure>

      {!detailInfo ? (
        <div>Loading...</div>
      ) : (
        <div className="movie_info">
          <ul className="tags">
            {detailInfo.genres.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>

          <p className="desc">{detailInfo.overview}</p>
        </div>
      )}
      <style jsx>{`
        .movie_detail {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .movie_detail figure {
          text-align: center;
        }

        .movie_detail figure img {
          border-radius: 8px;
        }

        .movie_detail figure figcaption {
          padding: 20px 0;
          font-size: 1.4rem;
        }

        .movie_info .tags {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 10px;
        }

        .movie_info .tags li {
          padding: 8px 12px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.8);
          color: royalblue;
        }

        .movie_info .desc {
          font-size: 1rem;
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default MovieDetail;

// export const getServerSideProps = async () => {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movie/:${id}`)
//   ).json();

//   return {
//     props: {
//       results,
//     },
//   };
// };
