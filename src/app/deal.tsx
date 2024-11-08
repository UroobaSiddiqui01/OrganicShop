'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Deal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date for the deal expiration
  const targetDate = new Date('2024-12-31T23:59:59');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If the countdown is over, reset it to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="deal" className="relative w-full max-w-screen-2xl mx-auto bg-green-50 py-12">
      <div className="container max-w-screen-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Deal of the Day</h2>
        <Image
          src="/Aloe-Vera-Bundle.jpg"
          alt="Deal Product"
          layout="responsive"
          width={400}
          height={400}
          className="w-full object-cover"
        />
        <p className="mt-4 text-gray-600">Get our exclusive product at a discounted price for a limited time.</p>
        <div className="mt-4 text-green-700 text-lg font-semibold">
          <span>{timeLeft.days} Days</span> : <span>{timeLeft.hours} Hours</span> : <span>{timeLeft.minutes} Mins</span> : <span>{timeLeft.seconds} Secs</span>
        </div>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Deal;
