import React, {useState, useEffect} from 'react'

const options = [
  {label:'کاملاً موافقم', value:3},
  {label:'تا حدی موافقم', value:2},
  {label:'تا حدی مخالفم', value:1},
  {label:'کاملاً مخالفم', value:0},
]

export default function QuestionCard({questions, names, onFinish}){
  const [index, setIndex] = useState(0)
  const [aAnswers, setAAnswers] = useState([])
  const [bAnswers, setBAnswers] = useState([])
  const [fade, setFade] = useState(true)

  useEffect(()=>{
    setFade(true)
    const t = setTimeout(()=>setFade(false),300)
    return ()=>clearTimeout(t)
  },[index])

  // shuffle questions once at start
  useEffect(()=>{
    // noop: we assume questions are pre-shuffled if needed
  },[])

  const saveAndNext = () => {
    if (aAnswers.length <= index || bAnswers.length <= index) return
    if (index+1 < questions.length){
      setIndex(index+1)
    } else {
      onFinish(aAnswers, bAnswers)
    }
  }

  const setAnswer = (who, val) => {
    if (who === 'a'){
      const arr = [...aAnswers]
      arr[index] = val
      setAAnswers(arr)
    } else {
      const arr = [...bAnswers]
      arr[index] = val
      setBAnswers(arr)
    }
  }

  const q = questions[index]

  return (
    <div className="text-right relative z-10">
      <div className="mb-4">
        <div className="text-sm text-gray-600">سوال {index+1} از {questions.length}</div>
        <div className={`question-card transition-opacity duration-300 ${fade? 'opacity-0 translate-y-3':'opacity-100 translate-y-0'}`}>
          <h2 className="text-2xl font-semibold my-2">{q.q}</h2>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full progress-bar" style={{width: `${Math.round(((index+1)/questions.length)*100)}%`}}></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-2xl border bg-white/60">
          <div className="font-medium mb-2 text-center text-pink-600">{names.a} <span className="inline-block ml-2">💗</span></div>
          {options.map((op,i)=>(
            <label key={i} className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${aAnswers[index]===op.value? 'bg-pink-50':''}`}>
              <input type="radio" name={'a-'+index} checked={aAnswers[index]===op.value} onChange={()=>setAnswer('a', op.value)} />
              <span>{op.label}</span>
            </label>
          ))}
        </div>

        <div className="p-4 rounded-2xl border bg-white/60">
          <div className="font-medium mb-2 text-center text-purple-600">{names.b} <span className="inline-block ml-2">💜</span></div>
          {options.map((op,i)=>(
            <label key={i} className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${bAnswers[index]===op.value? 'bg-purple-50':''}`}>
              <input type="radio" name={'b-'+index} checked={bAnswers[index]===op.value} onChange={()=>setAnswer('b', op.value)} />
              <span>{op.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={()=>{ setIndex(Math.max(0,index-1)) }} className="px-3 py-2 rounded-md border">قبلی</button>
        <button onClick={saveAndNext} className="px-4 py-2 rounded-full start-btn">بعدی</button>
      </div>
    </div>
  )
}
