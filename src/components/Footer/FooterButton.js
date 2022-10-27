import { forwardRef } from "react";
const FooterButton = (props, ref) => {
  // const isPopulationShown = () => {
  //   setShowPopulationChart(true);
  //   }
  // const isLanguageShown = () => {
  //   setShowLanguagesChart(true);
  //   }

  return (
    <div align="center" style={{ margin: "4vh" }}>
      <button ref={ref} id="population" type="button" onClick={props.onClick}>
        POPULATION{props.children}
      </button>
      <button id="languages" type="button" onClick={props.onClick}>
        LANGUAGES{props.children}
      </button>
    </div>
  );
};

export default forwardRef(FooterButton);
