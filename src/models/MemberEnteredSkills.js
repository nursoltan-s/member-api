/**
 * This defines Member Skill model.
 */

const dynamoose = require('dynamoose')

const Schema = dynamoose.Schema

const schema = new Schema({
  userId: {
    type: Number,
    hashKey: true,
    required: true
  },
  userHandle: {
    type: String,
    required: false
  },
  handleLower: {
    type: String,
    required: false
  },
  skills: {
    type: String,
    required: false
  },
  createdAt: {
    type: Number,
    required: false
  },
  updatedAt: {
    type: Number,
    required: false
  },
  createdBy: {
    type: String,
    required: false
  },
  updatedBy: {
    type: String,
    required: false
  }
},
{
  throughput: { read: 4, write: 2 }
})

module.exports = schema
