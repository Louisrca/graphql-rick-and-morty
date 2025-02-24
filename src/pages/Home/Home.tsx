import { useQuery } from "@apollo/client";
import { graphql } from "../../gql";
import { GetCharactersQuery } from "../../gql/graphql";

const GET_CHARACTERS = graphql(`
  query GetCharacters {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species

        location {
          name
        }
        image
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`);

export default function Home() {
  const { data, loading, error } = useQuery<GetCharactersQuery>(GET_CHARACTERS);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  const characters = data?.characters?.results?.filter(
    (element) => element !== null
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {characters?.map((character) => {
        if (!character || !character.location) return null;
        return (
          <div key={character.id ?? ""} style={{ margin: "1rem" }}>
            <img src={character.image ?? ""} alt={character.name ?? ""} />
            <h2
              style={{
                width: "500px",
                wordBreak: "break-word",
              }}
            >
              {character.name ?? ""}
            </h2>
            <p>{character.status ?? ""}</p>
            <p>{character.species ?? ""}</p>
            <p>{character.location.name ?? ""}</p>
            <p>{character.origin ? character.origin.name : "Unknown"}</p>
            <a href={`/character/${character.id}`}>More</a>
          </div>
        );
      })}
    </div>
  );
}
