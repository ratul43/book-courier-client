import React from 'react';

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
   hour: '2-digit',
    minute: '2-digit',
    hour12: true
});
const dd_mm_yyyy = formatter.format(date).replace(/\//g, '-');



const useTime = () => {
    return dd_mm_yyyy
};

export default useTime;