// import React from "react";
// import background from "../../images/stock_roller.jpg"

// const Home = () => {
//   const navbarHeight = 0; // Replace with the actual height of your navbar
//   const containerHeight = 480 - navbarHeight; // Adjust for the space occupied by the navbar

//   const containerStyle = {
//     backgroundImage: `url(${background})`,
//     backgroundSize: "cover",
//     height: `${containerHeight}px`, // Adjusted height
//     paddingTop: `${navbarHeight}px`, // Adjusted paddingTop for the navbar
//     display: "flex",
//     justifyContent: "center", // Horizontal centering
//     alignItems: "center",    // Vertical centering within the image
//     color: "white",         // Text color
//     fontSize: "24px",       // Adjust the font size as needed
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for readability
//     position: "relative",
//   };

//   const textStyle = {
//     top: `12.75rem`, // Vertically center the text within the container
//     position: "absolute",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={textStyle}>DID THIS WORK</div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import background from "../../images/stock_roller.jpg"

const Home = () => {
  const navbarHeight = 0; // Replace with the actual height of your navbar
  const containerHeight = 480 - navbarHeight; // Adjust for the space occupied by the navbar

  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "contain", // Scale the image to fit within the container
    backgroundRepeat: "no-repeat", // Prevent tiling
    backgroundPosition: "center", // Center the image within the container
    height: `${containerHeight}px`, // Adjusted height
    paddingTop: `${navbarHeight}px`, // Adjusted paddingTop for the navbar
    display: "flex",
    justifyContent: "center", // Horizontal centering
    alignItems: "center",    // Vertical centering within the image
    color: "white",         // Text color
    fontSize: "24px",       // Adjust the font size as needed
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for readability
    position: "relative",
  };

  const textStyle = {
    position: "absolute",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>DID THIS WORK</div>
    </div>
  );
}

export default Home;

