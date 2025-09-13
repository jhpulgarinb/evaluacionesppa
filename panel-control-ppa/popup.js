// Escucha el evento 'DOMContentLoaded' para asegurarse de que el HTML está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

  // Listener para el botón "Abrir Panel de Control"
  document.getElementById('open-dashboard').addEventListener('click', () => {
    // Abre una nueva pestaña con el archivo index.html
    chrome.tabs.create({ url: 'index.html' });
  });

  // Listener para el botón "Abrir Evaluación Polinización"
  document.getElementById('open-polin-eval').addEventListener('click', () => {
    // Abre una nueva pestaña con el archivo eval polin.html
    chrome.tabs.create({ url: 'eval polin.html' });
  });

  // Listener para el botón "Abrir Formulario"
  document.getElementById('open-form').addEventListener('click', () => {
    // Abre una nueva pestaña con el archivo Formulario.html
    chrome.tabs.create({ url: 'Formulario.html' });
  });
});
