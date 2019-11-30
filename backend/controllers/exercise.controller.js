import Exercise from './../db/models/exercises.model';

class ExerciseController {
    /* eslint camelcase: 0 */
    static async getAllExercises(req, res) {     
      try {
        await Exercise.find((err, Exercises) => {
          if (err) console.log(err);               
          
          return res.status(200).json({
              status: 'success',
              data: Exercises
          });
            
        });
      } catch (err) {
        return res.status(500).json({
          status: '500 Internal server error',
          error: 'Error getting exercises'
        });
      }
    } 

    static async getSingleExercise(req, res) {     
        try {
          const { id } = req.params;
          // you can use Exercise.findById(id,(err, Exercise)...
          await Exercise.find({_id:id},(err, Exercise) => {
            if (err) console.log(err);               
            
            return res.status(200).json({
                status: 'success',
                data: Exercise
            });
              
          });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error getting exercise'
          });
        }
    } 

    static async deleteExercise(req, res) {     
        try {
          const { id } = req.params;          
          await Exercise.findByIdAndDelete(id,(err, Exercise) => {
            if (err) console.log(err);               
            
            return res.status(200).json({
                status: 'success',
                data: 'Exercise deleted Successfully'
            });
              
          });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error getting exercise'
          });
        }
    } 

    static async createExercise(req, res) {         
        try {
            const duration =Number(req.body.duration);  
            const date =Date.parse(req.body.date); 
            const {username, description} =req.body;  
            const newExercise ={
                username,
                description,
                duration,
                date
            }
            await Exercise.create({...newExercise}, (err, createdExercise) => {
                if (err) console.log(err);               
                
                return res.status(201).json({
                    status: 'success',
                    data: createdExercise
                });
                 
             });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Creating new Exercise'
          });
        }
    } 
    
    static async updateExercise(req, res) {         
        try {
            const { id } = req.params; 
            const duration =Number(req.body.duration);  
            const date =Date.parse(req.body.date); 
            const {username, description} =req.body;  
            const newExercise ={
                username,
                description,
                duration,
                date
            }
            await Exercise.findByIdAndUpdate(id,{...newExercise}, (err, updatedExercise) => {
                if (err) console.log(err);               
                
                return res.status(201).json({
                    status: 'success',
                    data: updatedExercise
                });
                 
             });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Updating Exercise'
          });
        }
    }  
   
  }
  export default ExerciseController;