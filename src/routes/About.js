import React from "react";

function Aboout(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows."
      </span>
      <span>- Gerge Orwell, 1984</span>
    </div>
  );
}

export default Aboout;
