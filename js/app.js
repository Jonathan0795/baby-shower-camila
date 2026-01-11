// js/app.js

document.addEventListener('DOMContentLoaded', () => {

  // FECHA OBJETIVO: 19 de Enero de 2026 a las 18:00:00
  const targetDate = new Date('Jan 31, 2026 18:00:00').getTime();

  // Actualizar la cuenta regresiva cada 1 segundo (1000 milisegundos)
  const timer = setInterval(() => {

    // Obtener fecha y hora actual
    const now = new Date().getTime();

    // Calcular la distancia entre ahora y la fecha objetivo
    const distance = targetDate - now;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en los elementos con ID correspondiente
    // Usamos una función auxiliar para agregar un '0' si el número es menor a 10
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    // Si la cuenta regresiva termina
    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".timer-container").innerHTML = "<div style='font-size:1.5rem; color:#8d6e63;'>¡Ya llegó el día!</div>";
    }

  }, 1000);

  // Función para agregar un cero delante (ej: "5" -> "05")
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
});
