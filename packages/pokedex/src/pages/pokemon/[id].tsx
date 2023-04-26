import * as React from "react";
import { PokemonCard } from "components";
import { useSelector } from "react-redux";
import { fetchPokemon } from "utils";
import {
  fetchDetailsName,
  pokemonDetailsState,
} from "../../store/pokemonDetailsSlice";
import { PokemonData } from "../../store/pokemonSlice";
import { ReduxWrapper } from "../../store/store";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
const Pokemon: React.FC<any> = () => {
  const router = useRouter();
  const obj = useSelector(pokemonDetailsState);

  return (
    <div>
      {obj && <PokemonCard {...obj} />} <br />
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchPokemon({ page: 0, limit: 20 });
  const paths = response.results.map((pokemon: PokemonData) => ({
    params: { id: pokemon.name },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = ReduxWrapper.getStaticProps(
  (store) => async (context) => {
    const data: any = await store.dispatch<any>(
      fetchDetailsName(context?.params?.id as string)
    );

    if (!data) {
      return {
        props: {},
        notFound: true,
      };
    }
    return {
      props: {},
    };
  }
);

export default Pokemon;
