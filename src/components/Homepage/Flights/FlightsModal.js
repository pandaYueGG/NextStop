import React from 'react';
// import flights modal css

const FlightsModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'c-modal c-display-block' : 'c-modal c-display-none';

  return (
    <div className={showHideClassName}>
      <section className="c-modal-main">
        {children}
        <button className="c-modal-button" type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

export default FlightsModal;
