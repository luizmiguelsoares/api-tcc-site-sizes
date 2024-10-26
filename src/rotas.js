import feedback from './controller/feedbackController.js'


export default function adicionarRotas(servidor) {
   
    servidor.use(feedback);
}