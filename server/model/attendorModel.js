const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const attendorSchema = new mongoose.Schema({
    firstname: { type: String,
                required: true 
            },
    lastname: { type: String, 
                required: true 
            },
    email: { type: String,
            required: true,
            unique: true 
        },
}, {
    timestamps: true
});

attendorSchema.plugin(AutoIncrement, { inc_field: 'attendorId' });

module.exports = mongoose.model('Attendor', attendorSchema);

