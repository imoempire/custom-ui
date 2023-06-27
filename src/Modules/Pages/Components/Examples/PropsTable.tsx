import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./table";
import { TableCaption } from "@chakra-ui/react";
import "./table/styles.css";

export default function PropsTable() {
  return (
    <Table colorScheme="blue" size="sm">
      <TableCaption>Props</TableCaption>
      <Thead>
        <Tr>
          <Th>Prop Name</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>title</Td>
          <Td>String</Td>
          <Td>false</Td>
          <Td>`{" "}`</Td>
        </Tr>
        <Tr>
          <Td>titltProps</Td>
          <Td>TextStyle</Td>
          <Td>false</Td>
          <Td>
          {"{"} {"}"}
          </Td>
        </Tr>
        <Tr>
          <Td>containerStyles</Td>
          <Td>
            object:
            {`backgroundColor, height, width, borderRadius, borderWidth, borderColor`}
          </Td>
          <Td>false</Td>
          <Td>
            {"{"} {"}"}
          </Td>
        </Tr>
        <Tr>
          <Td>btnType</Td>
          <Td>String (solid/outlined)</Td>
          <Td>false</Td>
          <Td>`solid`</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
