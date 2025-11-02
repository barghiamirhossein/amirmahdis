import React, {useState} from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import ResultScreen from './components/ResultScreen'
import questions from './data/questions'

export default function App(){
  const [stage, setStage] = useState('welcome')
  const [names, setNames] = useState({a:'امیرحسین', b:'مهدیس'})
  const [answers, setAnswers] = useState({a:[], b:[]})

  const start = (n) => {
    setNames(n)
    setStage('questions')
    setAnswers({a:[], b:[]})
  }

  const finish = (aAnswers, bAnswers) => {
    setAnswers({a:aAnswers, b:bAnswers})
    setStage('result')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-vazir">
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hearts-layer"></div>
          <div className="sparkles-layer"></div>
        </div>
        {stage === 'welcome' && <WelcomeScreen onStart={start} defaultNames={names} />}
        {stage === 'questions' && <QuestionCard questions={questions} names={names} onFinish={finish} />}
        {stage === 'result' && <ResultScreen names={names} answers={answers} onRestart={()=>setStage('welcome')} />}
      </div>
    </div>
  )
}
