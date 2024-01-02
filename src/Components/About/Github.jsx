// import React from "react";
// import { ThemeContext } from "../../Context/theme";
// import { GithubCalendar } from "react-github-calendar";

// export const Github = () => {
//   const colourTheme = {
//     background: "transparent",
//     text: "#ffffff",
//     grade4: "#8400b8",
//     grade3: "#b22ff4",
//     grade2: "#b265f6",
//     grade1: "#c084f5",
//     grade0: "#ecd9fc"
//   };
//   const [{ themename }] = React.useContext(ThemeContext);

//   return (
//     <>
//       <div className={`section ${colourTheme}`} data-aos="fade-right">
//         <h2 className="section__title different">
//           My Github <span className="pink"> Stats</span>
//         </h2>
        
//         <GithubCalendar
//           username="Naledi-Dikgale"
//           blockSize={15}
//           blockMargin={5}
//           theme={colourTheme}
//           fontSize={16} 
//          />
//       </div>
//     </>
//   );
// };