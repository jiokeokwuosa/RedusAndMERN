import Auth from './../db/models/auth.model';

class AuthController {
    /* eslint camelcase: 0 */
   
    static async login(req, res) {     
        try {
            const {email, password} =req.body;  
            const user ={
                email,
                password
            }
          // you can use Exercise.findById(id,(err, Exercise)...
          await Auth.find(user,(err, User) => {
            if (err) console.log(err);                           
            if(User.length === 1){
                console.log('verified');
            }else{
                console.log('not verified');
            }
            return res.status(200).json({
                status: 'success',
                data: User
            });
              
          });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error getting exercise'
          });
        }
    } 
 

    static async signUp(req, res) {         
        try {
            const {email, password} =req.body;  
            const newUser ={
                email,
                password
            }
            await Auth.create({...newUser}, (err, createdUser) => {
                if (err) console.log(err);               
                
                return res.status(201).json({
                    status: 'success',
                    data: createdUser
                });
                 
             });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Creating new User'
          });
        }
    }  
   
  }
  export default AuthController;