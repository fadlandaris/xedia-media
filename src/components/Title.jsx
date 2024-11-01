import React from 'react';

const Title = ({ aboutHeader, aboutTitle, aboutSubTitle, serviceHeader, serviceTitle, serviceSubTitle, clientsHeader, clientsTitle, clientsSubTitle, portofolioTitle, portofolioHeader, portofolioSubTitle, locationHeader, locationTitle, locationSubTitle }) => {
  return (
    <div>
      <p className="text-text uppercase font-medium">/ {aboutHeader}{serviceHeader}{clientsHeader}{portofolioHeader}{locationHeader}</p>
      <div className="text-4xl mt-4 mb-12">
        <h2 className={`font-bold ${serviceTitle || portofolioTitle  ? 'text-lightBlack' : 'text-white'}`}>
          {aboutTitle}{serviceTitle}{clientsTitle}{portofolioTitle}{locationTitle}
        </h2>
        <h2 className={`font-bold ${serviceSubTitle || portofolioSubTitle  ? 'text-lightBlack' : 'text-text'}`}>
          {aboutSubTitle}{serviceSubTitle}{clientsSubTitle}{portofolioSubTitle}{locationSubTitle}
        </h2>
      </div>
    </div>
  );
};

export default Title;
