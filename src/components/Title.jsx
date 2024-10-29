import React from 'react';

const Title = ({ aboutHeader, aboutTitle, aboutSubTitle, serviceHeader, serviceTitle, serviceSubTitle, clientsHeader, clientsTitle, clientsSubTitle }) => {
  return (
    <div>
      <p className="text-text uppercase font-medium">/ {aboutHeader}{serviceHeader}{clientsHeader}</p>
      <div className="text-4xl mt-4 mb-16">
        <h2 className={`font-semibold ${serviceTitle ? 'text-lightBlack' : 'text-white'}`}>
          {aboutTitle}{serviceTitle}{clientsTitle}
        </h2>
        <h2 className={`font-semibold ${serviceSubTitle ? 'text-lightBlack' : 'text-text'}`}>
          {aboutSubTitle}{serviceSubTitle}{clientsSubTitle}
        </h2>
      </div>
    </div>
  );
};

export default Title;
