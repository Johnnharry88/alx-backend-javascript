import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';


const routeMap = (app) => {
  app.get('/', AppController.getHompage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/studdents/:major', StudentsController.getAllStudentsBy Major);
};

export default routeMap;
module.exports = routeMap;
