export default function Cars({ cars }) {
  return (
    <>
      <h1> Garatge </h1>
      {cars.length > 0 ? (
        <p>You have {cars.length} cars</p>
      ) : (
        <p>The garage is empty</p>
      )}
    </>
  );
}
