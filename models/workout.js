const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    day:  {
        type: Date,
        default: Date.now,
      },
    exercises: [{
        type: {
            type: String,
         enum: ["cardio", "resistance"],
         lowercase: true,
         required: true,
         trim: true
        },
        name: {
        type: String,
        required: true,
        trim: true 
        },
        duration: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]
});

// userSchema.virtual('totalduration').get(function() {  
//     return this.duration + ' ' + this.last;
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;