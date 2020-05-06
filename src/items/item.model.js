import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
	{
		img:{
			type:String,
			required: true,
		},
		title:{
			type:String,
			required:true
		},
		amount:{
			type:Number,
			required:true
		},
		rating:Number,
		description:String

	},
	{ timestamps: true }
	
)
export const Item = mongoose.model('item', itemSchema)