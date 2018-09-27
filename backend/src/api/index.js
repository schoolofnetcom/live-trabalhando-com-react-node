//http://localhost:9000/api/bills
import bills from './bills';

export default (app) => {
    app.use('/api/bills', bills);   
}