// おイモくん・マシュマロくん（家計簿ケンティーと伸びしろ診断で共通のキャラクター）
(function () {
  "use strict";
  function face(cx, cy, mood, gap) {
    var l = cx - gap, r = cx + gap, eyes, mouth;
    if (mood === "happy") {
      eyes = '<path d="M' + (l - 4) + ' ' + cy + ' q4 -5 8 0 M' + (r - 4) + ' ' + cy + ' q4 -5 8 0" fill="none" stroke="#3A2A2F" stroke-width="2.6" stroke-linecap="round"/>';
      mouth = '<path d="M' + (cx - 6) + ' ' + (cy + 7) + ' q6 8 12 0 z" fill="#C2455A"/>';
    } else if (mood === "think") {
      eyes = '<circle cx="' + l + '" cy="' + cy + '" r="3.2" fill="#3A2A2F"/><circle cx="' + r + '" cy="' + cy + '" r="3.2" fill="#3A2A2F"/>';
      mouth = '<path d="M' + (cx - 4) + ' ' + (cy + 9) + ' h8" stroke="#3A2A2F" stroke-width="2.4" stroke-linecap="round"/>';
    } else if (mood === "sleep") {
      eyes = '<path d="M' + (l - 4) + ' ' + cy + ' q4 4 8 0 M' + (r - 4) + ' ' + cy + ' q4 4 8 0" fill="none" stroke="#3A2A2F" stroke-width="2.4" stroke-linecap="round"/>';
      mouth = '<ellipse cx="' + cx + '" cy="' + (cy + 9) + '" rx="2.4" ry="2" fill="#3A2A2F"/>';
    } else {
      eyes = '<circle cx="' + l + '" cy="' + cy + '" r="3.4" fill="#3A2A2F"/><circle cx="' + r + '" cy="' + cy + '" r="3.4" fill="#3A2A2F"/>' +
        '<circle cx="' + (l + 1.2) + '" cy="' + (cy - 1.2) + '" r="1.1" fill="#fff"/><circle cx="' + (r + 1.2) + '" cy="' + (cy - 1.2) + '" r="1.1" fill="#fff"/>';
      mouth = '<path d="M' + (cx - 5) + ' ' + (cy + 7) + ' q2.5 4 5 0 q2.5 4 5 0" fill="none" stroke="#3A2A2F" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    var blush = '<ellipse cx="' + (l - 7) + '" cy="' + (cy + 7) + '" rx="5" ry="3.2" fill="#FF8FA8" opacity=".55"/><ellipse cx="' + (r + 7) + '" cy="' + (cy + 7) + '" rx="5" ry="3.2" fill="#FF8FA8" opacity=".55"/>';
    return blush + eyes + mouth;
  }
  // おイモくん：コツコツ記録を見守る、しっかり者のさつまいも
  function oimo(size, mood) {
    size = size || 64;
    return '<svg class="chara oimo" width="' + size + '" height="' + Math.round(size * 0.66) + '" viewBox="0 0 140 92" role="img" aria-label="おイモくん">' +
      '<path d="M120 34 q8 -14 18 -14 q-6 10 -14 16z" fill="#6DBE5A"/><path d="M118 36 q-2 -12 4 -20" fill="none" stroke="#4FA243" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M4 52 C16 30 46 22 72 22 C98 22 122 32 134 48 C124 68 98 78 70 78 C44 78 16 70 4 52 Z" fill="#B4527A"/>' +
      '<path d="M22 64 C40 74 70 78 100 72" fill="none" stroke="#933F63" stroke-width="3" stroke-linecap="round" opacity=".45"/>' +
      '<ellipse cx="40" cy="36" rx="12" ry="4.5" fill="#fff" opacity=".25" transform="rotate(-12 40 36)"/>' +
      '<circle cx="112" cy="54" r="2" fill="#933F63"/><circle cx="24" cy="48" r="1.8" fill="#933F63"/><circle cx="98" cy="68" r="1.8" fill="#933F63"/><circle cx="36" cy="62" r="1.6" fill="#933F63"/>' +
      '<path d="M4 52 q-3 3 -2 7" fill="none" stroke="#933F63" stroke-width="2.2" stroke-linecap="round"/>' +
      face(70, 46, mood, 12) +
      '<ellipse cx="52" cy="82" rx="9" ry="5" fill="#933F63"/><ellipse cx="88" cy="82" rx="9" ry="5" fill="#933F63"/>' +
      '</svg>';
  }
  // マシュマロくん：ふわっと励ます、やさしいマシュマロ
  function mallow(size, mood) {
    size = size || 64;
    return '<svg class="chara mallow" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" role="img" aria-label="マシュマロくん">' +
      '<rect x="14" y="20" width="72" height="70" rx="30" fill="#FFFDF8" stroke="#E6D6C4" stroke-width="2.5"/>' +
      '<path d="M22 40 C26 26 40 21 50 21 C60 21 74 26 78 40" fill="none" stroke="#F3E3CF" stroke-width="6" stroke-linecap="round"/>' +
      '<ellipse cx="30" cy="34" rx="7" ry="4" fill="#fff" transform="rotate(-30 30 34)"/>' +
      face(50, 56, mood, 11) +
      '<ellipse cx="34" cy="92" rx="8" ry="4" fill="#E6D6C4"/><ellipse cx="66" cy="92" rx="8" ry="4" fill="#E6D6C4"/>' +
      '</svg>';
  }
  function say(who, text, opts) {
    opts = opts || {};
    var art = (who === "oimo" ? oimo : mallow)(opts.size || 56, opts.mood || "normal");
    return '<div class="buddy' + (opts.right ? " right" : "") + '">' + art + '<div class="bubble">' + text + '</div></div>';
  }
  window.Buddy = { oimo: oimo, mallow: mallow, say: say };
})();
