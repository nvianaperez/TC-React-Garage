import Cars from "./Cars";
import CarsList from "./CarsList";
import "./styles.css";

let arrayCars = ["Audi", "BMW"];
// let nums = [1,2,3];

// export default function App() {
//   return (
//     <>
//       <div className="App">
//         <Cars cars={arrayCars} />
//       </div>
//       <div>
//         <CarsList numbers={nums} />
//       </div>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <div className="App">
        <Cars cars={arrayCars} />
        <CarsList cars={arrayCars} />
      </div>
    </>
  );
}
