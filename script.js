TrelloPowerUp.initialize({
  // Botón en la tarjeta
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/16/16427.png',
      text: 'Subir PDF',
      callback: async function(t) {
        // Obtenemos el color de la barra superior configurado por el usuario
        const topBarColor = await t.get('member', 'private', 'topBarColor');
        // Si no hay nada guardado, usamos un color por defecto
        const accent = topBarColor || '#FF9F1C';

        return t.modal({
          url: './modal.html',
          accentColor: accent,   // <-- Cambia la barra superior del modal
          height: 600,          // Más alto para que se vea mejor
          title: 'Subir PDF'
        });
      }
    }];
  },

  // Configuración en modo modal grande
  'show-settings': function(t, options) {
    return t.modal({
      url: './settings.html',
      accentColor: '#FF9F1C',
      height: 600,       // Ajusta la altura para que se vea más grande
      fullscreen: false, // Puedes poner true si lo quieres a pantalla completa
      title: 'Configuración del Power-Up'
    });
  }
});
