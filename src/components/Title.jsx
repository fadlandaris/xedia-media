import React from 'react';

const Title = ({ aboutHeader, aboutTitle, aboutSubTitle, serviceHeader, serviceTitle, serviceSubTitle }) => {
  return (
    <div>
      <p className="text-text uppercase font-medium">/ {aboutHeader}{serviceHeader}</p>
      <div className="text-4xl mt-4 mb-16">
        <h2 className={`font-semibold ${serviceTitle ? 'text-lightBlack' : 'text-white'}`}>
          {aboutTitle}{serviceTitle}
        </h2>
        <h2 className={`font-semibold ${serviceSubTitle ? 'text-lightBlack' : 'text-text'}`}>
          {aboutSubTitle}{serviceSubTitle}
        </h2>
      </div>
    </div>
  );
};

export default Title;
