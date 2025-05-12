export const signosData = {
  aries: {
    emoji: "♈",
    predicciones: [
      "Tu energía está en su punto más alto. Es momento de nuevos comienzos.",
      "Una oportunidad única se presenta en el horizonte.",
      "Tu determinación te llevará al éxito."
    ]
  },
  tauro: {
    emoji: "♉",
    predicciones: [
      "La estabilidad financiera está a tu favor. Buen momento para inversiones.",
      "Tu perseverancia dará frutos en el ámbito laboral.",
      "Una sorpresa agradable llegará de alguien cercano."
    ]
  },
  geminis: {
    emoji: "♊",
    predicciones: [
      "Tu creatividad está en su mejor momento. Úsala en tu beneficio.",
      "Es tiempo de resolver conflictos pendientes con amigos.",
      "Un viaje inesperado podría cambiar tu perspectiva."
    ]
  },
  cancer: {
    emoji: "♋",
    predicciones: [
      "Tu intuición será tu mejor guía en decisiones importantes.",
      "Cambios positivos en tu vida familiar se acercan.",
      "Es momento de cuidar más tu salud emocional."
    ]
  },
  leo: {
    emoji: "♌",
    predicciones: [
      "Tu carisma natural atraerá nuevas oportunidades.",
      "Un reconocimiento laboral está en camino.",
      "Es tiempo de brillar en proyectos creativos."
    ]
  },
  virgo: {
    emoji: "♍",
    predicciones: [
      "Tu atención al detalle te llevará al éxito en un proyecto importante.",
      "Es momento de organizar y planificar tu futuro.",
      "Una amistad verdadera se fortalecerá."
    ]
  },
  libra: {
    emoji: "♎",
    predicciones: [
      "El equilibrio en tus relaciones será clave esta semana.",
      "Nuevas oportunidades de colaboración se presentarán.",
      "Es tiempo de tomar decisiones sobre tu vida personal."
    ]
  },
  escorpio: {
    emoji: "♏",
    predicciones: [
      "Tu intensidad emocional te ayudará a resolver un conflicto.",
      "Secretos importantes saldrán a la luz.",
      "Es momento de transformar aspectos de tu vida."
    ]
  },
  sagitario: {
    emoji: "♐",
    predicciones: [
      "La aventura y el aprendizaje serán tus mejores aliados.",
      "Un viaje importante está en tu horizonte.",
      "Nuevas experiencias expandirán tu mente."
    ]
  },
  capricornio: {
    emoji: "♑",
    predicciones: [
      "Tu disciplina te llevará a alcanzar metas importantes.",
      "Es momento de consolidar proyectos laborales.",
      "La paciencia será tu mejor virtud esta semana."
    ]
  },
  acuario: {
    emoji: "♒",
    predicciones: [
      "Ideas innovadoras te abrirán nuevas puertas.",
      "Es tiempo de romper con la rutina.",
      "Un cambio inesperado traerá beneficios."
    ]
  },
  piscis: {
    emoji: "♓",
    predicciones: [
      "Tu sensibilidad te ayudará a conectar con otros.",
      "Es momento de confiar en tus sueños.",
      "Una revelación importante llegará en sueños."
    ]
  }
};

export const validarFecha = (fecha) => {
  if (!fecha) return false;
  const fechaObj = new Date(fecha);
  return fechaObj instanceof Date && !isNaN(fechaObj);
};

export const obtenerSigno = (fecha) => {
  const fechaObj = new Date(fecha);
  const mes = fechaObj.getMonth() + 1;
  const dia = fechaObj.getDate();

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "geminis";
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "leo";
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "virgo";
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "libra";
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "escorpio";
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "sagitario";
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "capricornio";
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "acuario";
  if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "piscis";

  return "aries";
};

export const obtenerPrediccionAleatoria = (signo) => {
  if (!signosData[signo]) return null;
  const predicciones = signosData[signo].predicciones;
  const indiceAleatorio = Math.floor(Math.random() * predicciones.length);
  return {
    prediccion: predicciones[indiceAleatorio],
    emoji: signosData[signo].emoji
  };
};
