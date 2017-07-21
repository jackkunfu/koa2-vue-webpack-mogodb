import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

// schema
// import { userSchema } from '../schema.js'

const UserComment = new Schema({
	id: ObjectId,
	name: { type: String, default: 'no name' },
	password: String,
	image: { type: String, default: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1500617475&di=a10680a1084ac6db31f65abd5df39a50&src=http://pic.58pic.com/58pic/16/53/58/08358PICSbi_1024.jpg' },
	desc: { type: String, default: 'no desc' },
	createTime: { type: Date, default: Date.now }
});

// middleware 
UserComment.pre('save', function (next) {
  notify(this.get('email'));
  next();
});

var userModel = mongoose.model(UserComment);

module.exports = userModel;