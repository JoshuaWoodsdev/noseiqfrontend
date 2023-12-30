import React from "react";

// will need to change state on click image may change or something
// this will receive props
const SuperMenu = () => {
  return (
    <>
    <div className="bg-blue h-500">
      <div className="flex">
        <article className="mw5 mw5-ns center pt4">
          <div className="aspect-ratio aspect-ratio--4x3 mb4">
            <div className="b--blue bg-light-pink aspect-ratio--object cover glow center"></div>
          </div>
        </article>

        <article className="mw5 mw5-ns center pt4">
          <div className="aspect-ratio aspect-ratio--4x3 mb4">
            <div className="b--blue bg-light-pink aspect-ratio--object cover glow center"></div>
          </div>
        </article>

        <article className="mw5 mw5-ns center pt4">
          <div className="aspect-ratio aspect-ratio--4x3 mb4">
            <div className="b--blue bg-light-pink aspect-ratio--object cover glow center"></div>
          </div>
        </article>
      </div>
    </div>
    </>
  );
};

export default SuperMenu;



