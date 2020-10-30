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

// workoutSchema.virtual('totalDuration').get(function() { 
//     var result = 0;
//     for (var i = 0; i < exercises.length; i++) {
//         result += this.exercises[i].duration;
//     }
//     this.totalDuration = result;
//     // return this.totalDuration; 
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;