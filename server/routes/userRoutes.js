import express from 'express';
import { registerUser, loginUser ,deleteUser} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js'; 
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').delete(protect, deleteUser);

export default router;