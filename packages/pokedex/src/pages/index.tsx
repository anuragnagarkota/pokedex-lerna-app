import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../store/pokemonSlice";
import { pokemonState } from "../store/pokemonSlice";
import { AppStore, ReduxWrapper } from "../store/store";
const PageSize = 10;
export default () => {
  const { pokemonList, pokemonCount, currentPage } = useSelector(pokemonState);
  const dispatch = useDispatch() as any;

  const CustomPagination = () => {
    return (
      <Pagination
        variant="text"
        color="primary"
        shape="rounded"
        data-testid="pagination"
        count={Math.ceil(pokemonCount / PageSize)}
        page={currentPage}
        onChange={(e, p) => {
          dispatch(fetchPokemonData(p));
        }}
      />
    );
  };
  const handleRowClick = (row: any) => {
    Router.push(`/pokemon/${row.row.name}`);
  };
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "url", headerName: "URL", width: 400 },
  ];
  return (
    <div>
      <h2 style={{ fontFamily:'Arial',background: "#eee", padding: 10 }}>PokeDex</h2>

      <DataGrid
        rowHeight={40}
        autoHeight={true}
        rows={pokemonList[`page${currentPage}`]}
        columns={columns}
        getRowId={(row) => row.name}
        pageSize={PageSize}
        rowCount={pokemonCount}
        onRowClick={(row: any) => handleRowClick(row)}
        hideFooter
      />
      <br />
      <CustomPagination />
    </div>
  );
};

export const getServerSideProps = ReduxWrapper.getServerSideProps(
  (store: AppStore) =>
    async ({}) => {
      await store.dispatch<any>(fetchPokemonData(1));
      return {
        props: {},
      };
    }
);
