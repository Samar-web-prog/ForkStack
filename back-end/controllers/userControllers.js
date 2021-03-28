var user=require('../model/user');
var userController={}


userController.getAll=async (req, res, next)=>{
    res.render('index', { title: 'Express' });
  };
userController.postUser=async(req,res)=>{
var user=new User(
    {FirstName:"Samar",LastName:"Romdhani",Country:"Tunisia",Email:"samar.romdhani1@esprit.tn",
    sex:"women",phone:21
    
}
);
user.save();
res.send("added");
};

//Register User
/*router.post('/addU',function(req,res,next) {
    var user = new User(
        {FirstName: req.body.FirstName,
            LastName:req.body.LastName,
            Country:req.body.Country,
            Password:req.body.Password,
            Email:req.body.Email,
            sex:req.body.sex,
            BirthDate:req.body.BirthDate,
            phone: req.body.phone}
    )
    user.save();
    res.send("added");
})*/


module.exports=userControllers;