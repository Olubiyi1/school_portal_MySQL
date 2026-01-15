const rbac = (allowedRoles)=>{
    // this returns the actual middleware
    return (req,res,next) =>{

        // check if user is authenticated
        if(!req.user){
            return res.status(401).json({
                message:"Unauthorized, please log in"
            })
        }
        const userRole = req.user.role
        // extract role from the jwt payload
        if(!allowedRoles.includes(userRole)){
            return res.status(403).json({
                message:"forbidden:you do not have access to this route"
            })
        }
        // user has the permission
        next();

    }
}
module.exports = rbac