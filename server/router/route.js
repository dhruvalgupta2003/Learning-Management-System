import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/appController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app
router.route('/courses').post(controller.createCourse); // create a new course
router.route('/teachers').post(controller.createTeacher);// Create a new teacher



/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables
router.route('/courses').get(controller.getCourses) // get all courses
router.route('/courses/:id').get(controller.getCourseById) // get a course by ID
router.route('/teachers').get(controller.getTeachers);// Get all teachers
router.route('/teachers/:id').get(controller.getTeacherById);// Get a teacher by ID



/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password
router.route('/courses/:id').put(controller.updateCourseById) // update an existing course by ID
router.route('/teachers/:id').put(controller.updateTeacherById);// Update an existing teacher by ID

/**DELETE Methods */
router.route('/courses/:id').delete(controller.deleteCourseById); // delete an existing course by ID
router.route('/teachers/:id').delete(controller.deleteTeacherById);// Delete an existing teacher by ID

export default router;