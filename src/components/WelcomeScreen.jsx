import React, {useState} from 'react'
import HeartCouple from '../icons/HeartCouple'

export default function WelcomeScreen({onStart, defaultNames}){
  const [a, setA] = useState(defaultNames.a)
  const [b, setB] = useState(defaultNames.b)

  return (
    <div className="text-center relative z-10">
      <div className="flex items-center justify-center gap-4 mb-6">
        <HeartCouple className="w-28 h-28" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-wide title-fancy">{a} <span className="mx-2">❤️</span> {b}</h1>
      <p className="mb-4 text-sm text-gray-700">به بازی شناخت عاشقانه خوش آمدید — چند دقیقه، کلی لبخند و صمیمیت ✨</p>

      <div className="grid grid-cols-2 gap-4 mb-4 max-w-md mx-auto">
        <input value={a} onChange={e=>setA(e.target.value)} className="p-3 rounded-full border shadow-sm text-center" />
        <input value={b} onChange={e=>setB(e.target.value)} className="p-3 rounded-full border shadow-sm text-center" />
      </div>

      <div className="flex gap-3 justify-center mt-4">
        <button onClick={()=>onStart({a,b})} className="start-btn px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-lg shadow-lg">شروع شناخت</button>
      </div>

      <p className="mt-4 text-xs text-gray-500">پاسخ‌ها خصوصی باقی می‌مونن — راست‌چین و فارسی</p>
    </div>
  )
}
