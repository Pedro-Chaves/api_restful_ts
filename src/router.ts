import { Router, Request, Response } from "express";
import MovieController from "./controllers/movieController";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const movieController = new MovieController();

const router = Router();

router.get('/health_check', (req: Request, res: Response) => {
    return res.status(200).send("Funcionou")
});

router.get("/movie", movieController.getAllMovies);
router.get("/movie/:id", movieController.findMovieById);


router.post('/movie', movieCreateValidation(), validate, movieController.createMovie);


router.delete("/movie/:id", movieController.removeMovie);


router.patch("/movie/:id", movieCreateValidation(), validate, movieController.updateMovie);

export default router;