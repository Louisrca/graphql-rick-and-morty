import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { graphql } from "../../gql/";
import { GetCharacterQuery } from "../../gql/graphql";

const GET_CHARACTER = graphql(`
  query GetCharacter($id: ID!) {
    character(id: $id) {
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
`);

export default function Character() {
  const goBack = () => {
    window.history.back();
  };
  const { id } = useParams();
  const { data, loading, error } = useQuery<GetCharacterQuery>(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  if (!data?.character || !data.character.location) {
    return <h1>Character not found</h1>;
  }

  return (
    <div>
      <button onClick={goBack} style={{ margin: "4rem" }}>
        Go Back
      </button>
      {data?.character && (
        <div>
          <img
            src={data.character.image ?? ""}
            alt={data.character.name ?? ""}
          />
          <h1>{data.character.name}</h1>
          <p>{data.character.status}</p>
          <p>{data.character.species}</p>
          <p>
            {data.character.origin ? data.character.origin.name : "Unknown"}
          </p>
          <p>{data.character.location.name ?? ""}</p>
        </div>
      )}
    </div>
  );
}
