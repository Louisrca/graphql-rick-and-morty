import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql", // URL de l'API Rick and Morty
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "graphql",
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true, // Utile pendant le développement
};

export default config;
