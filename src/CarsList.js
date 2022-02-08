// export default function CarsList({ numbers }) {
//   return (
//     <ul>
//       {numbers.map((number) => (
//         <li key={number}>{number}</li>
//       ))}
//     </ul>
//   );
// }

export default function CarsList({ cars }) {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car}>{car}</li>
      ))}
    </ul>
  );
}
