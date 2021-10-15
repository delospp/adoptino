import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const loginSchema = new Schema({
 email: {type: String, required: [true, 'Correo obligatorio']},
 password: String
});
// Convertir a modelo
const Login = mongoose.model('Login', loginSchema);
export default Login;