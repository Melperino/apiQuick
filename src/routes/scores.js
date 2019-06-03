const {Router} = require ('express');
const router = Router();

const srcscore = require('../sample.json');

router.get('/', (req,res) => {
    res.json(srcscore);
});

router.post('/', (req,res) => {
   const {name,score,total } = req.body; 
   if (name && score && total){
       const newScore = {...req.body};
       srcscore.push(newScore);
       res.send('saved successfully');
   } else{
       res.send ('wrong formatting');
   }
});

module.exports = router;