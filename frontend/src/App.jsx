import { useState, useEffect } from 'react'
import './App.css'

const horoscopos = {
  Aries: "Hoy es un buen día para comenzar algo nuevo 🔥",
  Tauro: "Cuida tus recursos y aprecia lo que tienes 🐂",
  Géminis: "La comunicación será tu fuerte hoy 💬",
  Cáncer: "La sensibilidad será tu guía 🦀",
  Leo: "Brillarás con luz propia 🌞",
  Virgo: "El orden traerá paz 📋",
  Libra: "Busca el equilibrio ⚖️",
  Escorpio: "Tu intensidad te llevará lejos 🦂",
  Sagitario: "La aventura está de tu lado 🏹",
  Capricornio: "La disciplina rendirá frutos 🐐",
  Acuario: "Tu originalidad sorprenderá 💡",
  Piscis: "Sigue tu intuición 🌊"
}

function getSign(day, month) {
  const zodiac = [
    { sign: "Capricornio", start: [22, 12], end: [19, 1] },
    { sign: "Acuario", start: [20, 1], end: [18, 2] },
    { sign: "Piscis", start: [19, 2], end: [20, 3] },
    { sign: "Aries", start: [21, 3], end: [19, 4] },
    { sign: "Tauro", start: [20, 4], end: [20, 5] },
    { sign: "Géminis", start: [21, 5], end: [20, 6] },
    { sign: "Cáncer", start: [21, 6], end: [22, 7] },
    { sign: "Leo", start: [23, 7], end: [22, 8] },
    { sign: "Virgo", start: [23, 8], end: [22, 9] },
    { sign: "Libra", start: [23, 9], end: [22, 10] },
    { sign: "Escorpio", start: [23, 10], end: [21, 11] },
    { sign: "Sagitario", start: [22, 11], end: [21, 12] }
  ]

  for (const { sign, start, end } of zodiac) {
    if (
      (month === start[1] && day >= start[0]) ||
      (month === end[1] && day <= end[0])
    ) {
      return sign
    }
  }

  return "Desconocido"
}

function App() {
  const [fecha, setFecha] = useState("")
  const [habilitado, setHabilitado] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [mostrando, setMostrando] = useState(false)

  useEffect(() => {
    const regex = /^\d{2}-\d{2}-\d{4}$/
    setHabilitado(regex.test(fecha))
  }, [fecha])

  const consultar = () => {
    const [dd, mm] = fecha.split("-").map(Number)
    const signo = getSign(dd, mm)
    const horoscopo = horoscopos[signo] || "No se pudo determinar el signo."
    setMensaje(`${signo}: ${horoscopo}`)
    setMostrando(true)
    setHabilitado(false)

    setTimeout(() => {
      setMostrando(false)
      setTimeout(() => {
        setMensaje("")
        setHabilitado(true)
      }, 1000) // fade-out
    }, 15000)
  }

  return (
    <div className="container">
      <h1>Consulta tu Horóscopo</h1>
      <input
        type="text"
        placeholder="DD-MM-AAAA"
        value={fecha}
        onChange={e => setFecha(e.target.value)}
      />
      <button onClick={consultar} disabled={!habilitado}>
        Consultar
      </button>

      {mensaje && (
        <div className={`mensaje ${mostrando ? "fade-in" : "fade-out"}`}>
          {mensaje}
        </div>
      )}
    </div>
  )
}

export default App
