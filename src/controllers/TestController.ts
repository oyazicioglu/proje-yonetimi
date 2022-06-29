import { Request, Response, Router } from 'express';
import { TestModel } from '../models/TestModel';

const testController = Router();

testController.get('/test', (req: Request, res: Response) => {
    const newDataModel = new TestModel('1', 'Omer', 42);
    res.json({ user: newDataModel });
});

export { testController };
