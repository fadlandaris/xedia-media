import React from 'react';

const ClientsRating = ({ data, icon }) => {
  // Function to determine the class based on the id
  const getClassName = (id) => {
    if (id % 3 === 1) {
      return "bg-indigo-950";
    } else if (id % 3 === 2) {
      return "bg-purple-900 ";
    } else {
      return "bg-rose-600";
    }
  };

  // Determine the class based on the id
  const className = getClassName(data.id);

  return (
    <section className={`p-10 rounded-2xl group  ${className} cursor-pointer`}>
      {icon}
      <span className="font-bold text-4xl font-serif">"</span>
      <p className="h-[170px] mb-10 md:mb-4 text-[14px] font-medium">
        {data.desc}
      </p>
      <div className="flex items-center gap-x-4">
        {/* <div className="w-10 h-10 rounded-full bg-white"> */}
          <img src={data.img} alt="" className="w-15 h-10 " />
        {/* </div> */}
        <div>
          <h2 className="text-[14px] sm:text-[14px] font-bold tracking-wide">
            {data.name}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ClientsRating;
