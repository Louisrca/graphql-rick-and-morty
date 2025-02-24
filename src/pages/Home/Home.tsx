import { useQuery, gql } from "@apollo/client";
// import { graphql } from "graphql";

export default function Home() {
  const { data, loading, error } = useQuery(gql`
    query Characters {
      characters(page: 1) {
        info {
          count
          pages
          next
        }
        results {
          id
          name
          status
          species
          gender
          origin {
            name
          }
          location {
            name
          }
          image
        }
      }
    }
  `);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.characters.results.map((character: any) => (
          <div key={character.id} style={{ margin: "1rem" }}>
            <img src={character.image} alt={character.name} />
            <h2
              style={{
                width: "500px",
                wordBreak: "break-word",
              }}
            >
              {character.name}
            </h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
            <a href={`/character/${character.id}`}>Voir la fiche</a>
          </div>
        ))
      }
    </div>
  );
}
