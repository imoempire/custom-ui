import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./table";
import { TableCaption } from "@chakra-ui/react";
import "./table/styles.css";
interface Props {
  data: { name: string; required: string; type: string; default: string }[];
  caption?: string;
}
export default function PropsTable({ data, caption }: Props) {
  return (
    <Table colorScheme="blue" size="sm">
      <TableCaption>{caption}</TableCaption>
      <Thead>
        <Tr>
          <Th>Prop Name</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((item) => {
          return (
            <>
              <Tr>
                <Td style={{ color: "red" }}>{item?.name}</Td>
                <Td>{item?.type}</Td>
                <Td>{item?.required}</Td>
                <Td>{item?.default}</Td>
              </Tr>
            </>
          );
        })}
      </Tbody>
    </Table>
  );
}
