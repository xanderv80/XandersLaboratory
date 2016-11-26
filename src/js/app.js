import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render(){
		return (
			console.log("I am so lost");
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
