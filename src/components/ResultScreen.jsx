import React from 'react'
import HeartCouple from '../icons/HeartCouple'

const messages = [
  {min:0, max:40, title:'نیاز به گفت‌وگوی بیشتر', text:'ممکنه تفاهم کمتری بین شما باشه — وقت بذارید و صادقانه صحبت کنید.'},
  {min:40, max:70, title:'تعادل خوب', text:'شما نقاط مشترک قابل‌توجهی دارید؛ با کمی تلاش می‌تونید نزدیک‌تر بشید.'},
  {min:70, max:100, title:'روح‌هاتون یکیه 💞', text:'ارتباط قوی و هم‌افزایی احساس و منطق وجود داره — حفظش کنین!'}
]

function computeScore(a,b){
  if (!a || !b) return 0
  let total=0, maxTotal= a.length * 3
  for (let i=0;i<a.length;i++){
    const diff = Math.abs((a[i]||0) - (b[i]||0))
    total += (3 - diff)
  }
  const percent = Math.round((total / maxTotal) * 100)
  return percent
}

export default function ResultScreen({names, answers, onRestart}){
  const percent = computeScore(answers.a, answers.b)
  const msg = messages.find(m=>percent>=m.min && percent<=m.max) || messages[0]

  return (
    <div className="text-center relative z-10">
      <div className="flex items-center justify-center mb-4">
        <HeartCouple className="w-36 h-36" />
      </div>

      <h2 className="text-3xl font-extrabold mb-2 title-fancy">نتیجهٔ شناخت</h2>
      <p className="mb-4 text-lg text-gray-700">{names.a} و {names.b} — میزان شباهت: <span className="font-semibold text-3xl percent-glow">{percent}%</span></p>

      <div className="p-6 rounded-2xl bg-white/80 shadow-lg mb-4 result-card">
        <h3 className="text-2xl font-semibold mb-2">{msg.title}</h3>
        <p>{msg.text}</p>
      </div>

      <div className="flex gap-3 justify-center">
        <button onClick={onRestart} className="px-5 py-2 rounded-full border start-btn">بازی دوباره</button>
      </div>
    </div>
  )
}
