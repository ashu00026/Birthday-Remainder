import React, { useState } from "react";
import data from "./data";
import People from "./components/People";

const App = () => {
  const [countNoOfPeople, setCountNoOfPeople] = useState(data.length);
  const [people, setPeople] = useState(data);
  // console.log(countNoOfPeople);
  const clearAllOnClick = () => {
    setPeople([]);
    setCountNoOfPeople(0);
  };

  return (
    <main>
      <section className="container">
        <h1>{countNoOfPeople} birthdays Today!!</h1>
        {people.map((particularData) => {
          return (
            <section key={particularData.id}>
              <People {...particularData} />
            </section>
          );
        })}
        <section>
          <button type="button" className="btn" onClick={clearAllOnClick}>
            Clear all
          </button>
        </section>
      </section>
    </main>
  );
};
export default App;
