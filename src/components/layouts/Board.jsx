import React from 'react';
import Placeholder from '../home/placeholder';

const MyComponent = () => {
  // Sample random text
  const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <div className="">
      {/* Left side with random text */}
     

      {/* Right side with images or other content */}
      <div className="max-w-screen h-full">
        {/* Replace the following with your actual images or content */}
        <Placeholder></Placeholder>
      </div>
    </div>
  );
};

export default MyComponent;
