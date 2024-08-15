function TableHead() {
  const headContent = ['Company', 'Contact', 'Country', 'Action'];

  const testMap = headContent.map((head) => <th>{head}</th>);
  return (
    <thead>
      <tr>{testMap}</tr>
    </thead>
  );
}

export default TableHead;
