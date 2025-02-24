TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/16/16427.png',
      text: 'Subir PDF',
      callback: function(t) {
        return t.modal({
          url: './modal.html',
          accentColor: '#FF9F1C',
          height: 300,
          title: 'Subir PDF'
        });
      }
    }];
  },
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Configuración de Power-Up',
      url: './settings.html',
      height: 300
    });
  }
});
