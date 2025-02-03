import { useEffect } from "react";

const GoogleReview = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-b92ae155-c987-432a-b3f4-bcc694c6eabd" data-elfsight-app-lazy></div>
  );
};

export default GoogleReview;
// AIzaSyDWwgwwsrXzX7lFhHl72l_9n1L8i2m1quM  key
// ChIJb9oEOrplUjoR_qbwj1inkr0 id