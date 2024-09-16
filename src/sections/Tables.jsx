import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { SiBitcoin } from "react-icons/si";

function ResponsiveExample() {
    const rows = Array.from({ length: 100 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
        <td>{rowIndex + 1}</td>
        {Array.from({ length: 12 }).map((_, cellIndex) => (
           <td key={cellIndex}>
             <SiBitcoin size={"30px"} /> 
           <Badge pill bg="primary">
             Table cell {cellIndex}
           </Badge>
         </td>
        ))}
      </tr>
    ));
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}> Cripto </th>
          ))}
        </tr>
      </thead>
      <tbody>
         {rows}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;