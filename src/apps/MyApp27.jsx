import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui 테이블</h3>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>읽기</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <hr />
      <h3>기본 테이블</h3>
      <table>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Consequatur.</th>
            <th>Perferendis?</th>
            <th>Dolorem?</th>
            <th>Culpa!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Necessitatibus.</td>
            <td>Quia.</td>
            <td>Delectus!</td>
            <td>Consequatur.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Dolorum!</td>
            <td>Harum?</td>
            <td>Quasi.</td>
            <td>Suscipit?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Doloribus!</td>
            <td>Vitae.</td>
            <td>Assumenda!</td>
            <td>At?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Incidunt.</td>
            <td>Voluptatem!</td>
            <td>Neque?</td>
            <td>At.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Voluptatem.</td>
            <td>Tempora!</td>
            <td>Tempore!</td>
            <td>Quibusdam.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp27;
