import { Schema, model, models } from 'mongoose';

//const geocoder = require('../utils/geocoder');
const opts = { toJSON: { virtuals: true } };

const attractionSchema = new Schema(
	{
		//_id: Schema.Types.ObjectId,
		place: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: String,
		address: String,
		post_code: String,
		geometry: {
			//GeoJSON
			type: {
				type: String,
				enum: ['Point'],
			},
			coordinates: {
				type: [Number],
				default: [0, 0],
			},
			formattedAddress: String,
			street: String,
			city: String,
			post_code: String,
			country: String,
		},
		opening_time: {
			type: String,
		},
		closing_time: { type: String },
		last_entry: { type: String },
		adult_ticket: {
			type: Number,
			get: (v) => (v / 100).toFixed(2), //take Number var, divide by 100 return the result to 2 decimal places
			set: (v) => v * 100, //multiply var by 100 and return the result
		},
		child_ticket: {
			type: Number,
			get: (v) => (v / 100).toFixed(2),
			set: (v) => v * 100,
		},
		visit_duration: Number,
		cafe: { type: String },
		// date: {
		//   type: Date,
		//   default: new Date(),
		// },
		imgUrl: String,
		restaurant: String,
		itinerary: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Itinerary',
				required: [true, 'Itinerary must belong to an attraction!'],
			},
		],
	},
	opts
);

attractionSchema.virtual('properties.popUpMarkup').get(function () {
	return `
  <img class="map-img" img src="${this.imgUrl}"/>
  <h5>${this.place}</h5>
  <p>${this.category}</p>
  <h3><a href="${this.city}/${this._id}">More Details</a></h3>
  `;
});

attractionSchema.virtual('properties.popUpDetailMap').get(function () {
	return `
  <img class="map-img" img src="${this.imgUrl}"/>
  <h5>${this.place}</h5>
  <p>${this.category}</p>
  <h3><a href="${this._id}">Add to Itinerary</a></h3>
  `;
});

// Geocode & create location address fields
attractionSchema.pre('save', async function (next) {
	const locate = await geocoder.geocode(this.address);
	this.geometry = {
		type: 'Point',
		coordinates: [locate[0].longitude, locate[0].latitude],
		formattedAddress: locate[0].formattedAddress,
		street: locate[0].street,
		city: locate[0].city,
		post_code: locate[0].zipcode,
		country: locate[0].countryCode,
	};

	//Do not save address in DB
	this.address = undefined;
	next();
});

const London = models.London || model('London', attractionSchema, 'London');
const Belfast = models.Belfast || model('Belfast', attractionSchema, 'Belfast');
const Paris = models.Paris || model('Paris', attractionSchema, 'Paris');


export { London, Belfast, Paris };
