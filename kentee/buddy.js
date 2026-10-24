// おいもくん（茶色のトイプードル）・マシュマロくん（白いプードル）。家計簿ケンティーと伸びしろ診断で共通
(function () {
  "use strict";
  var INK = "#3D2A22";
  // 円の集まりを、外周だけ縁取りした1つのもこもこ形にする（縁取りを先に描き、塗りを上に重ねる）
  function fluff(circles, fill) {
    var line = "", body = "";
    circles.forEach(function (c) {
      line += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="' + INK + '" stroke="' + INK + '" stroke-width="6"/>';
      body += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="' + fill + '"/>';
    });
    return line + body;
  }
  function ring(cx, cy, rr, r, n, from, to) {
    var out = [], a0 = (from || 0) * Math.PI / 180, a1 = (to == null ? 360 : to) * Math.PI / 180;
    for (var i = 0; i < n; i++) {
      var a = a0 + (a1 - a0) * i / (to == null ? n : n - 1);
      out.push([+(cx + rr * Math.cos(a)).toFixed(1), +(cy + rr * Math.sin(a)).toFixed(1), r]);
    }
    return out;
  }
  function face(mood) {
    var cx = 50, cy = 44, l = 41, r = 59, eyes, mouth;
    if (mood === "happy") {
      eyes = '<path d="M' + (l - 4.5) + ' ' + (cy + 1) + ' q4.5 -6 9 0 M' + (r - 4.5) + ' ' + (cy + 1) + ' q4.5 -6 9 0" fill="none" stroke="' + INK + '" stroke-width="2.8" stroke-linecap="round"/>';
      mouth = '<path d="M44.5 55 q5.5 7 11 0 z" fill="#E08A7E" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/>';
    } else if (mood === "think") {
      eyes = '<ellipse cx="' + l + '" cy="' + cy + '" rx="3.6" ry="4" fill="' + INK + '"/><ellipse cx="' + r + '" cy="' + cy + '" rx="3.6" ry="4" fill="' + INK + '"/>' +
        '<path d="M' + (l - 4) + ' ' + (cy - 7) + ' l7 -2.5 M' + (r + 4) + ' ' + (cy - 7) + ' l-7 -2.5" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/>';
      mouth = '<path d="M46 56.5 h8" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round"/>';
    } else if (mood === "sleep") {
      eyes = '<path d="M' + (l - 4.5) + ' ' + cy + ' q4.5 4 9 0 M' + (r - 4.5) + ' ' + cy + ' q4.5 4 9 0" fill="none" stroke="' + INK + '" stroke-width="2.6" stroke-linecap="round"/>';
      mouth = '<path d="M46 55 q2 2.5 4 0 q2 2.5 4 0" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round"/>' +
        '<text x="70" y="22" font-size="11" font-weight="700" fill="#7AA9C8" font-family="sans-serif">z</text><text x="78" y="13" font-size="8" font-weight="700" fill="#7AA9C8" font-family="sans-serif">z</text>';
    } else {
      eyes = '<ellipse cx="' + l + '" cy="' + cy + '" rx="3.8" ry="4.6" fill="' + INK + '"/><ellipse cx="' + r + '" cy="' + cy + '" rx="3.8" ry="4.6" fill="' + INK + '"/>' +
        '<circle cx="' + (l + 1.3) + '" cy="' + (cy - 1.6) + '" r="1.4" fill="#fff"/><circle cx="' + (r + 1.3) + '" cy="' + (cy - 1.6) + '" r="1.4" fill="#fff"/>';
      mouth = '<path d="M46 54.5 q2 3 4 0 q2 3 4 0" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    var nose = '<ellipse cx="50" cy="51" rx="3" ry="2.3" fill="' + INK + '"/>';
    var blush = '<ellipse cx="34" cy="51" rx="5" ry="3" fill="#F4A3A3" opacity=".8"/><ellipse cx="66" cy="51" rx="5" ry="3" fill="#F4A3A3" opacity=".8"/>';
    return blush + eyes + nose + mouth;
  }
  // プードルの形は共通。色だけ変える
  function poodle(cls, label, size, mood, c) {
    size = size || 64;
    var tail = fluff([[81, 81, 8.5]], c.body);
    var body = fluff([[50, 82, 15]].concat(ring(50, 82, 11, 7, 10)), c.body);
    var feet = '<ellipse cx="42" cy="99" rx="6.5" ry="4.5" fill="' + c.body + '" stroke="' + INK + '" stroke-width="2.6"/><ellipse cx="58" cy="99" rx="6.5" ry="4.5" fill="' + c.body + '" stroke="' + INK + '" stroke-width="2.6"/>';
    var ears = fluff([[23, 42, 7], [21, 52, 7.5], [25, 60, 6.5]], c.ear) + fluff([[77, 42, 7], [79, 52, 7.5], [75, 60, 6.5]], c.ear);
    var head = fluff([[50, 40, 21]].concat(ring(50, 40, 19, 8.5, 13)), c.body);
    return '<svg class="chara ' + cls + '" width="' + size + '" height="' + size + '" viewBox="8 2 92 106" role="img" aria-label="' + label + '">' +
      '<ellipse cx="50" cy="103" rx="26" ry="4" fill="#EBD9BC" opacity=".8"/>' +
      tail + body + feet + ears + head + face(mood) + '</svg>';
  }
  // おいもくん：茶色のトイプードル。コツコツ記録を見守るしっかり者
  function oimo(size, mood) { return poodle("oimo", "おいもくん", size, mood, { body: "#C4633F", ear: "#B3583A" }); }
  // マシュマロくん：白いプードル。ふわっと励ますやさしい子
  function mallow(size, mood) { return poodle("mallow", "マシュマロくん", size, mood, { body: "#FFFEFA", ear: "#ECE7E0" }); }
  function say(who, text, opts) {
    opts = opts || {};
    var art = (who === "oimo" ? oimo : mallow)(opts.size || 56, opts.mood || "normal");
    return '<div class="buddy' + (opts.right ? " right" : "") + '">' + art + '<div class="bubble">' + text + '</div></div>';
  }
  window.Buddy = { oimo: oimo, mallow: mallow, say: say };
})();
