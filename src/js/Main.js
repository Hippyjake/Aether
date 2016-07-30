define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min', 'src/dist/js/inferno-dom.min', './WallpaperSwitcher', './Notifications', './UserSwitcher', './CommandPanel', './LoginPanel', './Clock'], function (exports, _inferno, _infernoComponent, _infernoDom, _WallpaperSwitcher, _Notifications, _UserSwitcher, _CommandPanel, _LoginPanel, _Clock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BACKGROUNDS = undefined;
  exports.default = Main;

  var _inferno2 = _interopRequireDefault(_inferno);

  var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

  var _infernoDom2 = _interopRequireDefault(_infernoDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // For some reason, this loader requires that libraries be loaded here in order for them to work elsewhere.
  var BACKGROUNDS = exports.BACKGROUNDS = ['abstract.jpg', 'boko.jpg', 'car.jpg', 'cavern.jpg', 'dark-grass.jpg', 'frosted.jpg', 'jet.jpg', 'mountains-1.jpg', 'mountains-2.png', 'mountains-3.jpg', 'night.png', 'ocean.jpg', 'paper-lanterns.jpg', 'pier.jpg', 'sanfran.jpg', 'space-1.jpg', 'space-2.jpg', 'space-3.jpg', 'tree.jpg'];

  var bp0 = _inferno2.default.createBlueprint({
    tag: {
      arg: 0
    },
    attrs: {
      arg: 1
    }
  });

  var bp1 = _inferno2.default.createBlueprint({
    tag: {
      arg: 0
    }
  });

  function Main() {
    // Add notifications to the global scope for error handling
    window.notifications = new _Notifications.Notifications();

    if (window.debug === true) {
      window.notifications.generate("Hey there! TIP: Click the logo to switch wallpapers.", 'info', 10000);
    }

    _infernoDom2.default.render(bp0(_CommandPanel.CommandPanel, {
      backgrounds: BACKGROUNDS
    }), document.getElementById("command-panel"));
    _infernoDom2.default.render(bp1(_LoginPanel.LoginPanel), document.getElementById("login-panel"));
  }
});