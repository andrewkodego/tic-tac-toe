var express = require("express");
var router = express.Router();

const winCombination = [
    [1,2,3],[4,5,6],[7,8,9], 
    [1,4,7],[2,5,8],[3,6,9], 
    [1,5,9],[3,5,7], 
];

router.post("/checkmoves", (req,res) =>{

    let status = '';

    winCombination.forEach(function(item){

        let combi_1 = req.body['box_' + item[0]];
        let combi_2 = req.body['box_' + item[1]];
        let combi_3 = req.body['box_' + item[2]];

        total = combi_1 + combi_2 + combi_3;
        console.log(total);
        if(total == 3){
            status = "Player O win!"
        }else if(total == - 3){
            status = "Player X win!"
        }
    });


    res.status(200).send({message:status});

});

module.exports = router;