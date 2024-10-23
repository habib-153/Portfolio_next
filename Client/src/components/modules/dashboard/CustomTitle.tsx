import React from 'react';

const CustomTitle = ({title, description} : {title: string, description: string}) => {
    return (
        <div className="text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default CustomTitle;