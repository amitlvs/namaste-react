const heading = React.createElement("h1", { id: "head" }, "My first heading");

const main = React.createElement("div", { id: "main-div" }, [
  React.createElement("div", { id: "heading1" }, [
    React.createElement("h1", { id: "firstHead" }, "Hello Motherfucker1!!"),
    React.createElement(
      "p",
      { id: "firstPara" },
      "Hello gandu is this coding...."
    ),
  ]),
  React.createElement("div", { id: "heading2" }, [
    React.createElement("h2", { id: "secondHead" }, "Hello Motherfucker 2!!"),
    React.createElement(
      "p",
      { id: "secondPara" },
      "Hello gandu is this coding 2...."
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
