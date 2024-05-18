import { useEffect, useState } from "react";

export default function Relogio() {
   function getTime() {
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
      return {
         hours,
         minutes,
         seconds,
      };
   }

   const [time, setTime] = useState(getTime());

   useEffect(() => {
      const interval = setInterval(() => {
         const currentTime = getTime();
         setTime(currentTime);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <div>
            {time.hours}:{time.minutes}:{time.seconds}
         </div>
      </>
   );
}
