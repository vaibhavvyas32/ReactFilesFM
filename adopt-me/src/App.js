const Pet = ({name,animal,breed}) => {
    return React.createElement("div",{},[
        React.createElement("h1",{}, name),
        React.createElement("h2",{}, animal),
        React.createElement("h3",{}, breed)        
    ]);
};

const App = () => {
    return React.createElement("div",{ id: "something-important" }, [
        React.createElement("h1",{},"Adopt Me"),
        React.createElement(Pet,{
            name: "Shiba", 
            animal:"Dog", 
            breed: "Shiba Inu"
        }),
        React.createElement(Pet,{
            name: "Alex" , 
            animal:"Dog" , 
            breed: "Shiba Inu"
        }),
        React.createElement(Pet,{
            name: "Drake" , 
            animal:"Dog" , 
            breed: "Shiba Inu"
        }),
        
        ]);
};
ReactDOM.render(React.createElement(App),document.getElementById("root"));