import { model, Schema } from "mongoose";

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        rating: {type: Number, required: true},
        description: {type: String, required: true},
        director: {type: String, required: true},
        stars: {type: [String], required: true, default: []},
        poster: {type: String, required: true},
    },{
        timestamps: true
    }
);

export const MovieModel = model("Movie", movieSchema);