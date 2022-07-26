import React from 'react';
import moment from "moment";

function MFooter() {
  const currentYear = moment().get("year");

  return (
    <>
      Copyright ©
      <strong>{currentYear}</strong>{' '}
      <span>FFlancer</span>.{' '}
      <span>All right reserved.</span>
    </>
  );
}

export default MFooter;
