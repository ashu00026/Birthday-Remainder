import React from "react";

function People(props) {
  console.log(props);
  const { image, id, name, age } = props;

  return (
    <>
      <section className="people">
        <img src={image} alt={name} className="img" />
      </section>
      <section>
        <h3>{name}</h3>
      </section>
      <section>
        <h5>{age} years old</h5>
      </section>
    </>
  );
}

export default People;
