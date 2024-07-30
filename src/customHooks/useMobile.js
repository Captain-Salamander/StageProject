import { useEffect, useState } from "react";
export default  function useMobile(){
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 1200);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    return isMobile
    
}