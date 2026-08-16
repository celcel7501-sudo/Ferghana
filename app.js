/*
 * Révèle chaque lecteur Apple Podcasts une fois son iframe chargée. Tant que
 * l'événement `load` n'est pas arrivé, le message de repli reste visible.
 *
 * Limite connue : une iframe tierce est opaque au JavaScript de la page. Si
 * Apple répond une page d'erreur, le navigateur déclenche quand même `load` et
 * affiche sa propre erreur — on ne peut pas l'intercepter. Le repli couvre donc
 * les cas où rien n'arrive : hors ligne, réseau filtré, requête sans réponse.
 */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var players = [].slice.call(document.querySelectorAll('.player'));

  players.forEach(function (player) {
    var frame = player.querySelector('iframe');
    if (!frame) {
      player.classList.add('is-loaded');
      return;
    }
    frame.addEventListener('load', function () {
      player.classList.add('is-loaded');
    });
  });

  // Filet de sécurité : si une iframe a fini de charger avant que ce script
  // n'attache son écouteur, l'événement est perdu. Au chargement complet de la
  // page, on révèle ce qui resterait masqué — un lecteur fonctionnel caché
  // derrière un repli serait pire qu'un repli manquant.
  window.addEventListener('load', function () {
    players.forEach(function (player) {
      player.classList.add('is-loaded');
    });
  });
})();
