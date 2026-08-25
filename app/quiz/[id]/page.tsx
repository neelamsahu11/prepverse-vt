import QuizClient from "../quiz";
import quizData from "../quiz.json";

interface QuizPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;

  const quiz = quizData.quizzes[id as keyof typeof quizData.quizzes];

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Quiz not found
        </h1>
      </div>
    );
  }

  return (
    <QuizClient
      module={quiz.module}
      questions={quiz.questions}
    />
  );
}