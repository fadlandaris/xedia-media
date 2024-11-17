import React from 'react';
import CountUp from 'react-countup';
import styles from '../styles';

const ProjectStats = ({ data, isFirst }) => {
  let className = "";
  let imageClassName = "";

  // Conditional styling for the main container
  if (data.title === 'Nilai Perusahaan') {
    className = "bg-re-700 border-4 border-yellow-600 col-span-2";
    imageClassName = "absolute -right-14 -bottom-36 w-52 md:w-72  ";
  } else if (data.title === 'Visi') {
    className = "bg-ambr-700 text-w border-4 border-fuchsia-500";
    imageClassName = "opacity-0 sm:opacity-100 absolute -right-36 -bottom-10 w-80";
  } else if (data.title === 'Misi') {
    className = " bg-re-950 border-4 border-lime-500 text-white ";
    imageClassName = "opacity-0 sm:opacity-100 absolute w-60 -right-36 -bottom-20";
  }

  return (
    <main className={`p-4 sm:p-10  rounded-2xl flex relative overflow-hidden ${className}`}>
      {data.img && (
        <img 
          src={data.img} 
          alt={data.title} 
          className={imageClassName}
        />
      )}
      <div className="q z-20">
        <h2 className="font-bold text-2xl mb-4 ">{data.title}</h2>
        {/* <p className="text-xl md:text-5xl font-bold my-4">
          <CountUp end={parseFloat(data.data)} duration={20} suffix="%" />
        </p> */}
        <p className={`${data.title === 'Nilai Perusahaan' ? 'w-[50%]' : ''} font-medium text-[14px]`}>{data.desc}</p>
      </div>
    </main>
  );
};

export default ProjectStats;
