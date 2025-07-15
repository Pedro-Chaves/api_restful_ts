import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

class MovieController{
    async createMovie(req: Request, res: Response){
        try {
            const movie = req.body;
            const added_movie = await MovieModel.create(movie);

            return res.status(200).send(added_movie);
        } catch (error: any) {
            Logger.error(`Erro no sistema: ${error.message}`);
            return res.status(500).send(error.message);
        }
    }

    async findMovieById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const movie = await MovieModel.findById(id);

            if(!movie) return res.status(404).json({ error: "O filme não foi encontrado" });

            return res.status(200).send(movie);
        } catch (error: any) {
            Logger.error(`Erro no sistema: ${error.message}`);
            return res.status(500).send(error.message);
        }
    }

    async getAllMovies(req: Request, res: Response){
        try {
            const movies = await MovieModel.find();

            return res.status(200).send(movies);
        } catch (error: any) {
            Logger.error(`Erro no sistema: ${error.message}`);
            return res.status(500).send(error.message);
        }
    }

    async removeMovie(req: Request, res: Response){
        try {
            const { id } = req.params;
            const movie = await MovieModel.findById(id);

            if(!movie) return res.status(404).json({ error: "O filme não foi encontrado" });

            await movie.deleteOne();

            return res.status(200).send({ msg: "Filme apagado com sucesso" });
        } catch (error: any) {
            Logger.error(`Erro no sistema: ${error.message}`);
            return res.status(500).send(error.message);
        }
    }

    async updateMovie(req: Request, res: Response){
        try {
            const { id } = req.params;
            const body  = req.body;
            const movie = await MovieModel.findById(id);

            if(!movie) return res.status(404).json({ error: "O filme não foi encontrado" });

            await MovieModel.updateOne({_id: id}, body);
            const updatedMovie = await MovieModel.findById(id);

            return res.status(200).send(updatedMovie);
        } catch (error: any) {
            Logger.error(`Erro no sistema: ${error.message}`);
            return res.status(500).send(error.message);
        }
    }
}

export default MovieController;