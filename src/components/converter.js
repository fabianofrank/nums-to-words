import React, { useState } from 'react';
import '../index.css';

const Converter = () => {
  /* eslint-disable consistent-return */

  function convert(num) {
    const result = [];
    let l = num.length;

    if (l === 0) {
      const result = 'empty string';
      return result;
    }

    if (l > 4) {
      const result = 'Length more than 4 is not supported';
      return result;
    }

    const singleDigits = ['zero', 'one', 'two', 'three',
      'four', 'five', 'six', 'seven',
      'eight', 'nine'];

    const twoDigits = ['', 'ten', 'eleven', 'twelve',
      'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen',
      'nineteen'];

    const tensMultiple = ['', '', 'twenty', 'thirty', 'forty',
      'fifty', 'sixty', 'seventy', 'eighty',
      'ninety'];

    const tensPower = ['hundred', 'thousand'];

    if (l === 1) {
      const result = singleDigits[num.charCodeAt(0) - 48];
      return result;
    }

    let x = 0;
    while (x < num.length) {
      if (l >= 3) {
        if (num.charCodeAt(x) - 48 !== 0) {
          result.push(singleDigits[num.charCodeAt(x) - 48], ' ');
          result.push(tensPower[l - 3], ' ');
        }

        l -= 1;
      } else {
        if (num.charCodeAt(x) - 48 === 1) {
          const sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x + 1) - 48);
          result.push(twoDigits[sum]);
          return result;
        }

        if (num.charCodeAt(x) - 48 === 2
          && num.charCodeAt(x + 1) - 48 === 0) {
          result.push('twenty');
          return result;
        }

        const i = num.charCodeAt(x) - 48;
        if (i > 0) result.push(tensMultiple[i], ' ');
        else result.push('', '');
        x += 1;
        if (num.charCodeAt(x) - 48 !== 0) result.push(singleDigits[num.charCodeAt(x) - 48]);
      }
      x += 1;
    }

    return result.join(' ');
  }

  const [number, setNumber] = useState();

  const handleEvent = (e) => {
    const number = convert(e.target.value);
    setNumber(number);
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full min-w-[360px] p-30">
      <div className="text-center pb-24">
        <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans">TRANSFORM</h2>
        <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">NUMBERS</h2>
        <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans ">INTO</h2>
        <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">WORDS</h2>
      </div>
      <input onChange={handleEvent} className="pt-24 ml-13 max-w-[500px] active:text-start text-5xl focus:placeholder-transparent text-purple-200 bg-transparent outline-none" id="number" placeholder="please enter a number" />
      <p id="words" className="pt-24 ml-13 max-w-[500px] text-start text-5xl text-purple-200">{number}</p>
    </section>
  );
};

export default Converter;
