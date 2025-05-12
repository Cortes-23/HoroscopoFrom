export const predicciones = {
  aries: [
    "Grandes oportunidades laborales se acercan",
    "Es momento de tomar decisiones importantes",
    "Tu energía está en su punto más alto"
  ],
  tauro: [
    "La estabilidad financiera está en tu horizonte",
    "Un encuentro especial cambiará tu perspectiva",
    "Es tiempo de renovar tus espacios"
  ],
  // ...más signos y predicciones...
};

export const getSignoByDate = (fecha) => {
  const date = new Date(fecha);
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
  // ...más condiciones...
  
  return "aries"; // default
};
