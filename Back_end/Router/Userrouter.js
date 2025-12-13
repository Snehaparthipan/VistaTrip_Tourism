const express=require("express")
const {postUser,getuser,deleteuser,putUser,userPackage,userBooking,flight,postflight,genToken,verifyToken,getToken}=require("../Controller/Usercontroller")
const router=express.Router()
router.post("/users",postUser)
router.get("/all",getuser)
router.delete("/del/:id",deleteuser)
router.put("/new/:id",putUser)


router.get("/package",userPackage)
router.post("/booking",userBooking)

router.post("/postflight",postflight)
router.get("/flight",flight)

router.post('/login',genToken)
router.get('/dash',verifyToken,getToken)
module.exports=router