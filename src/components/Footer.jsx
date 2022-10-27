import React from 'react';

const Footer = () => {
  const date = new Date();
  const yearFour = date.getFullYear();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        Copyright © Kate {yearFour}
      </p>
    </div>
  );
};
export default Footer;
