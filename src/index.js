import react from "react";
import ReactDom from "react-dom";
import Card from "./component/Card";
import "./index.css";
import Sdata from "./component/Sdata";

function Netflixcard(val) {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

ReactDom.render(
  <>
    <h3 className="heading__style">Top Five Netflix Series In 2020</h3>
    {Sdata.map(Netflixcard)}
  </>,
  document.getElementById("root")
);
