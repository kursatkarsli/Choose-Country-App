import * as React from "react";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/styles";

interface Data {
  name: string;
  code: string;
}

export default function DataTable({
  countries,
}: any): React.ReactElement<Data> {
  return (
    <Stack
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "3rem",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          width: "70%",
          border: "1px solid black",
        }}
        data-testid="DataTable"
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: "#0069f7", color: "white" }}>
                Country Name
              </TableCell>
              <TableCell sx={{ background: "#0069f7", color: "white" }}>
                Country Code
              </TableCell>
            </TableRow>
          </TableHead>
          {countries && (
            <TableBody data-testid="tableBody">
              {countries &&
                countries.map((row: any, index: number) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.code}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Stack>
  );
}
