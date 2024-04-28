import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    timestamp:Number,
    humidity:Number,
    temperature_in_f:Number,
    temperature_in_c:Number,
    heat_index_in_c:Number,
    heat_index_in_c:Number,

})

const DataModel = mongoose.model('sensor_readings',DataSchema);

export default DataModel;