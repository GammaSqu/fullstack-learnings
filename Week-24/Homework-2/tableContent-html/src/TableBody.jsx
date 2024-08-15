function TableBody() {
  const items = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
    },

    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
    },

    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
    },

    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
    },

    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
    },

    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
    },
  ];

  const onClick = () => alert('Yes');

  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td>{item.company}</td>
          <td>{item.contact}</td>
          <td>{item.country}</td>
          <td>
            <button onClick={onClick}>Edit</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
