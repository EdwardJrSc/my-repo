import React from "react";

function Testimonio () {
  return (
    <div className="container-testimonio">
      <img 
        className="imagen-tesimonio"
        src={require("../images/img1.png")}
        alt="imagen del chino"
      />
      <div className="container-text">
        <p className="nombre-testimonio">Chino Chang</p>
        <p className="cargo-testimonio">Ingeniero de software</p>
        <p className="texto-testimonio">QUe lo que</p>
      </div>
    </div>
  );
}

export default Testimonio;