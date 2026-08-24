import QuizClient from "./quiz";
import { Question } from "./quiz.action";
async function Quiz(){
    const questions=await Question()
return<>
<QuizClient question={questions}/>
</>
}
export default Quiz;