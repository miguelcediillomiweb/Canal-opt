/* Canal OPT — comportamiento
   Modifica aquí el saludo, fecha/hora y enlace de WhatsApp.
   Los estilos están en style.css; la estructura está en index.html. */
(() => {
  const greeting = document.getElementById('greeting');
  const mood = document.getElementById('mood');
  const mood2 = document.getElementById('mood2');
  const datetime = document.getElementById('datetime');

  function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      greeting.textContent = '¡Buenos días!';
      mood.textContent = '🌞';
      mood2.textContent = '☕';
    } else if (hour >= 12 && hour < 19) {
      greeting.textContent = '¡Buenas tardes!';
      mood.textContent = '🌤️';
      mood2.textContent = '🥤';
    } else {
      greeting.textContent = '¡Buenas noches!';
      mood.textContent = '🌙';
      mood2.textContent = '✨';
    }

    const date = new Intl.DateTimeFormat('es-MX', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }).format(now);
    const time = new Intl.DateTimeFormat('es-MX', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    }).format(now);

    datetime.textContent = date.charAt(0).toLocaleUpperCase('es-MX') +
      date.slice(1) + ' · ' + time;
  }

  updateDateTime();
  window.setInterval(updateDateTime, 1000);
})();