const express = require("express");
const cors = require("cors");
const app = express();


app.get("/:selectedElevator/:recommendedElevators", cors(), function(req, res){
	var elevatorPrice;
	var installationPrice;
	var totalPrice;
	
	if(req.params.selectedElevator === "standard"){
		elevatorPrice = parseInt(req.params.recommendedElevators) * 7565;
		installationPrice = elevatorPrice * 0.1;
		totalPrice = elevatorPrice + installationPrice;
	}else if(req.params.selectedElevator === "premium"){
		elevatorPrice = parseInt(req.params.recommendedElevators) * 12345;
		installationPrice = elevatorPrice * 0.13;
		totalPrice = elevatorPrice + installationPrice;
	}else {
		elevatorPrice = parseInt(req.params.recommendedElevators) * 15400;
		installationPrice = elevatorPrice * 0.16;
		totalPrice = elevatorPrice + installationPrice;
	}
	
	var myQuote = {
		"price": elevatorPrice.toFixed(2),
		"installation": installationPrice.toFixed(2),
		"total": totalPrice.toFixed(2)
	};
	
	res.status(200).send(myQuote);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
