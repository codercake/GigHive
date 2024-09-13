import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_date: {
        type: Date,
        default: Date.now
    }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;

//hashing the password
jobSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 8);
        this.cpassword = bcrypt.hash(this.cpassword, 8);
    }
});
export default Job;
