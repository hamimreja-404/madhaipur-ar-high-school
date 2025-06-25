import React from "react";
import Faculty from "../Faculty/Faculty";
import Presidents from "../Presidents/Presidents";
function Faculty_Leadership() {
  return (
    <>
      <section id="faculty">
      {/* Faculty content */}
      <Faculty/>
      </section>

      <section id="presidents">
      {/* Presidents content */}
      <Presidents/>
      </section>
    </>
  );
}

export default Faculty_Leadership;
