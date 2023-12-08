import { defineComponent as Kt, ref as O, createVNode as z, createTextVNode as Zn, openBlock as M, createElementBlock as U, shallowRef as Rt, isVNode as zn, watch as an, nextTick as zt, resolveComponent as sn, normalizeClass as Xt, createElementVNode as Z, toDisplayString as nr, watchEffect as tr, readonly as rr, getCurrentInstance as Nn, useSlots as er, inject as or, computed as sr, reactive as cr, onMounted as Nt, onUnmounted as ir, unref as vn, withDirectives as ar, renderSlot as It, vShow as lr, createCommentVNode as ur, provide as pr, withCtx as K, Fragment as fr, renderList as hr } from "vue";
const dr = /* @__PURE__ */ Kt({
  name: "dssDemoFor",
  setup() {
    const r = O(0), n = () => {
      r.value++;
    };
    return () => z("div", null, [z("p", null, [Zn("Count: "), r.value]), z("button", {
      onClick: n
    }, [Zn("Increment")])]);
  }
});
function mr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function gr(r) {
  if (r.__esModule)
    return r;
  var n = r.default;
  if (typeof n == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(e) {
    var s = Object.getOwnPropertyDescriptor(r, e);
    Object.defineProperty(t, e, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[e];
      }
    });
  }), t;
}
var E = {};
const _r = "Á", br = "á", kr = "Ă", vr = "ă", xr = "∾", yr = "∿", wr = "∾̳", Cr = "Â", Ar = "â", Er = "´", Dr = "А", qr = "а", Sr = "Æ", Fr = "æ", Tr = "⁡", Lr = "𝔄", Rr = "𝔞", zr = "À", Nr = "à", Ir = "ℵ", Br = "ℵ", Pr = "Α", Or = "α", Mr = "Ā", Ur = "ā", $r = "⨿", Vr = "&", jr = "&", Gr = "⩕", Hr = "⩓", Zr = "∧", Jr = "⩜", Wr = "⩘", Yr = "⩚", Qr = "∠", Kr = "⦤", Xr = "∠", ne = "⦨", te = "⦩", re = "⦪", ee = "⦫", oe = "⦬", se = "⦭", ce = "⦮", ie = "⦯", ae = "∡", le = "∟", ue = "⊾", pe = "⦝", fe = "∢", he = "Å", de = "⍼", me = "Ą", ge = "ą", _e = "𝔸", be = "𝕒", ke = "⩯", ve = "≈", xe = "⩰", ye = "≊", we = "≋", Ce = "'", Ae = "⁡", Ee = "≈", De = "≊", qe = "Å", Se = "å", Fe = "𝒜", Te = "𝒶", Le = "≔", Re = "*", ze = "≈", Ne = "≍", Ie = "Ã", Be = "ã", Pe = "Ä", Oe = "ä", Me = "∳", Ue = "⨑", $e = "≌", Ve = "϶", je = "‵", Ge = "∽", He = "⋍", Ze = "∖", Je = "⫧", We = "⊽", Ye = "⌅", Qe = "⌆", Ke = "⌅", Xe = "⎵", no = "⎶", to = "≌", ro = "Б", eo = "б", oo = "„", so = "∵", co = "∵", io = "∵", ao = "⦰", lo = "϶", uo = "ℬ", po = "ℬ", fo = "Β", ho = "β", mo = "ℶ", go = "≬", _o = "𝔅", bo = "𝔟", ko = "⋂", vo = "◯", xo = "⋃", yo = "⨀", wo = "⨁", Co = "⨂", Ao = "⨆", Eo = "★", Do = "▽", qo = "△", So = "⨄", Fo = "⋁", To = "⋀", Lo = "⤍", Ro = "⧫", zo = "▪", No = "▴", Io = "▾", Bo = "◂", Po = "▸", Oo = "␣", Mo = "▒", Uo = "░", $o = "▓", Vo = "█", jo = "=⃥", Go = "≡⃥", Ho = "⫭", Zo = "⌐", Jo = "𝔹", Wo = "𝕓", Yo = "⊥", Qo = "⊥", Ko = "⋈", Xo = "⧉", ns = "┐", ts = "╕", rs = "╖", es = "╗", os = "┌", ss = "╒", cs = "╓", is = "╔", as = "─", ls = "═", us = "┬", ps = "╤", fs = "╥", hs = "╦", ds = "┴", ms = "╧", gs = "╨", _s = "╩", bs = "⊟", ks = "⊞", vs = "⊠", xs = "┘", ys = "╛", ws = "╜", Cs = "╝", As = "└", Es = "╘", Ds = "╙", qs = "╚", Ss = "│", Fs = "║", Ts = "┼", Ls = "╪", Rs = "╫", zs = "╬", Ns = "┤", Is = "╡", Bs = "╢", Ps = "╣", Os = "├", Ms = "╞", Us = "╟", $s = "╠", Vs = "‵", js = "˘", Gs = "˘", Hs = "¦", Zs = "𝒷", Js = "ℬ", Ws = "⁏", Ys = "∽", Qs = "⋍", Ks = "⧅", Xs = "\\", nc = "⟈", tc = "•", rc = "•", ec = "≎", oc = "⪮", sc = "≏", cc = "≎", ic = "≏", ac = "Ć", lc = "ć", uc = "⩄", pc = "⩉", fc = "⩋", hc = "∩", dc = "⋒", mc = "⩇", gc = "⩀", _c = "ⅅ", bc = "∩︀", kc = "⁁", vc = "ˇ", xc = "ℭ", yc = "⩍", wc = "Č", Cc = "č", Ac = "Ç", Ec = "ç", Dc = "Ĉ", qc = "ĉ", Sc = "∰", Fc = "⩌", Tc = "⩐", Lc = "Ċ", Rc = "ċ", zc = "¸", Nc = "¸", Ic = "⦲", Bc = "¢", Pc = "·", Oc = "·", Mc = "𝔠", Uc = "ℭ", $c = "Ч", Vc = "ч", jc = "✓", Gc = "✓", Hc = "Χ", Zc = "χ", Jc = "ˆ", Wc = "≗", Yc = "↺", Qc = "↻", Kc = "⊛", Xc = "⊚", ni = "⊝", ti = "⊙", ri = "®", ei = "Ⓢ", oi = "⊖", si = "⊕", ci = "⊗", ii = "○", ai = "⧃", li = "≗", ui = "⨐", pi = "⫯", fi = "⧂", hi = "∲", di = "”", mi = "’", gi = "♣", _i = "♣", bi = ":", ki = "∷", vi = "⩴", xi = "≔", yi = "≔", wi = ",", Ci = "@", Ai = "∁", Ei = "∘", Di = "∁", qi = "ℂ", Si = "≅", Fi = "⩭", Ti = "≡", Li = "∮", Ri = "∯", zi = "∮", Ni = "𝕔", Ii = "ℂ", Bi = "∐", Pi = "∐", Oi = "©", Mi = "©", Ui = "℗", $i = "∳", Vi = "↵", ji = "✗", Gi = "⨯", Hi = "𝒞", Zi = "𝒸", Ji = "⫏", Wi = "⫑", Yi = "⫐", Qi = "⫒", Ki = "⋯", Xi = "⤸", na = "⤵", ta = "⋞", ra = "⋟", ea = "↶", oa = "⤽", sa = "⩈", ca = "⩆", ia = "≍", aa = "∪", la = "⋓", ua = "⩊", pa = "⊍", fa = "⩅", ha = "∪︀", da = "↷", ma = "⤼", ga = "⋞", _a = "⋟", ba = "⋎", ka = "⋏", va = "¤", xa = "↶", ya = "↷", wa = "⋎", Ca = "⋏", Aa = "∲", Ea = "∱", Da = "⌭", qa = "†", Sa = "‡", Fa = "ℸ", Ta = "↓", La = "↡", Ra = "⇓", za = "‐", Na = "⫤", Ia = "⊣", Ba = "⤏", Pa = "˝", Oa = "Ď", Ma = "ď", Ua = "Д", $a = "д", Va = "‡", ja = "⇊", Ga = "ⅅ", Ha = "ⅆ", Za = "⤑", Ja = "⩷", Wa = "°", Ya = "∇", Qa = "Δ", Ka = "δ", Xa = "⦱", nl = "⥿", tl = "𝔇", rl = "𝔡", el = "⥥", ol = "⇃", sl = "⇂", cl = "´", il = "˙", al = "˝", ll = "`", ul = "˜", pl = "⋄", fl = "⋄", hl = "⋄", dl = "♦", ml = "♦", gl = "¨", _l = "ⅆ", bl = "ϝ", kl = "⋲", vl = "÷", xl = "÷", yl = "⋇", wl = "⋇", Cl = "Ђ", Al = "ђ", El = "⌞", Dl = "⌍", ql = "$", Sl = "𝔻", Fl = "𝕕", Tl = "¨", Ll = "˙", Rl = "⃜", zl = "≐", Nl = "≑", Il = "≐", Bl = "∸", Pl = "∔", Ol = "⊡", Ml = "⌆", Ul = "∯", $l = "¨", Vl = "⇓", jl = "⇐", Gl = "⇔", Hl = "⫤", Zl = "⟸", Jl = "⟺", Wl = "⟹", Yl = "⇒", Ql = "⊨", Kl = "⇑", Xl = "⇕", nu = "∥", tu = "⤓", ru = "↓", eu = "↓", ou = "⇓", su = "⇵", cu = "̑", iu = "⇊", au = "⇃", lu = "⇂", uu = "⥐", pu = "⥞", fu = "⥖", hu = "↽", du = "⥟", mu = "⥗", gu = "⇁", _u = "↧", bu = "⊤", ku = "⤐", vu = "⌟", xu = "⌌", yu = "𝒟", wu = "𝒹", Cu = "Ѕ", Au = "ѕ", Eu = "⧶", Du = "Đ", qu = "đ", Su = "⋱", Fu = "▿", Tu = "▾", Lu = "⇵", Ru = "⥯", zu = "⦦", Nu = "Џ", Iu = "џ", Bu = "⟿", Pu = "É", Ou = "é", Mu = "⩮", Uu = "Ě", $u = "ě", Vu = "Ê", ju = "ê", Gu = "≖", Hu = "≕", Zu = "Э", Ju = "э", Wu = "⩷", Yu = "Ė", Qu = "ė", Ku = "≑", Xu = "ⅇ", np = "≒", tp = "𝔈", rp = "𝔢", ep = "⪚", op = "È", sp = "è", cp = "⪖", ip = "⪘", ap = "⪙", lp = "∈", up = "⏧", pp = "ℓ", fp = "⪕", hp = "⪗", dp = "Ē", mp = "ē", gp = "∅", _p = "∅", bp = "◻", kp = "∅", vp = "▫", xp = " ", yp = " ", wp = " ", Cp = "Ŋ", Ap = "ŋ", Ep = " ", Dp = "Ę", qp = "ę", Sp = "𝔼", Fp = "𝕖", Tp = "⋕", Lp = "⧣", Rp = "⩱", zp = "ε", Np = "Ε", Ip = "ε", Bp = "ϵ", Pp = "≖", Op = "≕", Mp = "≂", Up = "⪖", $p = "⪕", Vp = "⩵", jp = "=", Gp = "≂", Hp = "≟", Zp = "⇌", Jp = "≡", Wp = "⩸", Yp = "⧥", Qp = "⥱", Kp = "≓", Xp = "ℯ", nf = "ℰ", tf = "≐", rf = "⩳", ef = "≂", of = "Η", sf = "η", cf = "Ð", af = "ð", lf = "Ë", uf = "ë", pf = "€", ff = "!", hf = "∃", df = "∃", mf = "ℰ", gf = "ⅇ", _f = "ⅇ", bf = "≒", kf = "Ф", vf = "ф", xf = "♀", yf = "ﬃ", wf = "ﬀ", Cf = "ﬄ", Af = "𝔉", Ef = "𝔣", Df = "ﬁ", qf = "◼", Sf = "▪", Ff = "fj", Tf = "♭", Lf = "ﬂ", Rf = "▱", zf = "ƒ", Nf = "𝔽", If = "𝕗", Bf = "∀", Pf = "∀", Of = "⋔", Mf = "⫙", Uf = "ℱ", $f = "⨍", Vf = "½", jf = "⅓", Gf = "¼", Hf = "⅕", Zf = "⅙", Jf = "⅛", Wf = "⅔", Yf = "⅖", Qf = "¾", Kf = "⅗", Xf = "⅜", nh = "⅘", th = "⅚", rh = "⅝", eh = "⅞", oh = "⁄", sh = "⌢", ch = "𝒻", ih = "ℱ", ah = "ǵ", lh = "Γ", uh = "γ", ph = "Ϝ", fh = "ϝ", hh = "⪆", dh = "Ğ", mh = "ğ", gh = "Ģ", _h = "Ĝ", bh = "ĝ", kh = "Г", vh = "г", xh = "Ġ", yh = "ġ", wh = "≥", Ch = "≧", Ah = "⪌", Eh = "⋛", Dh = "≥", qh = "≧", Sh = "⩾", Fh = "⪩", Th = "⩾", Lh = "⪀", Rh = "⪂", zh = "⪄", Nh = "⋛︀", Ih = "⪔", Bh = "𝔊", Ph = "𝔤", Oh = "≫", Mh = "⋙", Uh = "⋙", $h = "ℷ", Vh = "Ѓ", jh = "ѓ", Gh = "⪥", Hh = "≷", Zh = "⪒", Jh = "⪤", Wh = "⪊", Yh = "⪊", Qh = "⪈", Kh = "≩", Xh = "⪈", nd = "≩", td = "⋧", rd = "𝔾", ed = "𝕘", od = "`", sd = "≥", cd = "⋛", id = "≧", ad = "⪢", ld = "≷", ud = "⩾", pd = "≳", fd = "𝒢", hd = "ℊ", dd = "≳", md = "⪎", gd = "⪐", _d = "⪧", bd = "⩺", kd = ">", vd = ">", xd = "≫", yd = "⋗", wd = "⦕", Cd = "⩼", Ad = "⪆", Ed = "⥸", Dd = "⋗", qd = "⋛", Sd = "⪌", Fd = "≷", Td = "≳", Ld = "≩︀", Rd = "≩︀", zd = "ˇ", Nd = " ", Id = "½", Bd = "ℋ", Pd = "Ъ", Od = "ъ", Md = "⥈", Ud = "↔", $d = "⇔", Vd = "↭", jd = "^", Gd = "ℏ", Hd = "Ĥ", Zd = "ĥ", Jd = "♥", Wd = "♥", Yd = "…", Qd = "⊹", Kd = "𝔥", Xd = "ℌ", nm = "ℋ", tm = "⤥", rm = "⤦", em = "⇿", om = "∻", sm = "↩", cm = "↪", im = "𝕙", am = "ℍ", lm = "―", um = "─", pm = "𝒽", fm = "ℋ", hm = "ℏ", dm = "Ħ", mm = "ħ", gm = "≎", _m = "≏", bm = "⁃", km = "‐", vm = "Í", xm = "í", ym = "⁣", wm = "Î", Cm = "î", Am = "И", Em = "и", Dm = "İ", qm = "Е", Sm = "е", Fm = "¡", Tm = "⇔", Lm = "𝔦", Rm = "ℑ", zm = "Ì", Nm = "ì", Im = "ⅈ", Bm = "⨌", Pm = "∭", Om = "⧜", Mm = "℩", Um = "Ĳ", $m = "ĳ", Vm = "Ī", jm = "ī", Gm = "ℑ", Hm = "ⅈ", Zm = "ℐ", Jm = "ℑ", Wm = "ı", Ym = "ℑ", Qm = "⊷", Km = "Ƶ", Xm = "⇒", ng = "℅", tg = "∞", rg = "⧝", eg = "ı", og = "⊺", sg = "∫", cg = "∬", ig = "ℤ", ag = "∫", lg = "⊺", ug = "⋂", pg = "⨗", fg = "⨼", hg = "⁣", dg = "⁢", mg = "Ё", gg = "ё", _g = "Į", bg = "į", kg = "𝕀", vg = "𝕚", xg = "Ι", yg = "ι", wg = "⨼", Cg = "¿", Ag = "𝒾", Eg = "ℐ", Dg = "∈", qg = "⋵", Sg = "⋹", Fg = "⋴", Tg = "⋳", Lg = "∈", Rg = "⁢", zg = "Ĩ", Ng = "ĩ", Ig = "І", Bg = "і", Pg = "Ï", Og = "ï", Mg = "Ĵ", Ug = "ĵ", $g = "Й", Vg = "й", jg = "𝔍", Gg = "𝔧", Hg = "ȷ", Zg = "𝕁", Jg = "𝕛", Wg = "𝒥", Yg = "𝒿", Qg = "Ј", Kg = "ј", Xg = "Є", n_ = "є", t_ = "Κ", r_ = "κ", e_ = "ϰ", o_ = "Ķ", s_ = "ķ", c_ = "К", i_ = "к", a_ = "𝔎", l_ = "𝔨", u_ = "ĸ", p_ = "Х", f_ = "х", h_ = "Ќ", d_ = "ќ", m_ = "𝕂", g_ = "𝕜", __ = "𝒦", b_ = "𝓀", k_ = "⇚", v_ = "Ĺ", x_ = "ĺ", y_ = "⦴", w_ = "ℒ", C_ = "Λ", A_ = "λ", E_ = "⟨", D_ = "⟪", q_ = "⦑", S_ = "⟨", F_ = "⪅", T_ = "ℒ", L_ = "«", R_ = "⇤", z_ = "⤟", N_ = "←", I_ = "↞", B_ = "⇐", P_ = "⤝", O_ = "↩", M_ = "↫", U_ = "⤹", $_ = "⥳", V_ = "↢", j_ = "⤙", G_ = "⤛", H_ = "⪫", Z_ = "⪭", J_ = "⪭︀", W_ = "⤌", Y_ = "⤎", Q_ = "❲", K_ = "{", X_ = "[", n0 = "⦋", t0 = "⦏", r0 = "⦍", e0 = "Ľ", o0 = "ľ", s0 = "Ļ", c0 = "ļ", i0 = "⌈", a0 = "{", l0 = "Л", u0 = "л", p0 = "⤶", f0 = "“", h0 = "„", d0 = "⥧", m0 = "⥋", g0 = "↲", _0 = "≤", b0 = "≦", k0 = "⟨", v0 = "⇤", x0 = "←", y0 = "←", w0 = "⇐", C0 = "⇆", A0 = "↢", E0 = "⌈", D0 = "⟦", q0 = "⥡", S0 = "⥙", F0 = "⇃", T0 = "⌊", L0 = "↽", R0 = "↼", z0 = "⇇", N0 = "↔", I0 = "↔", B0 = "⇔", P0 = "⇆", O0 = "⇋", M0 = "↭", U0 = "⥎", $0 = "↤", V0 = "⊣", j0 = "⥚", G0 = "⋋", H0 = "⧏", Z0 = "⊲", J0 = "⊴", W0 = "⥑", Y0 = "⥠", Q0 = "⥘", K0 = "↿", X0 = "⥒", nb = "↼", tb = "⪋", rb = "⋚", eb = "≤", ob = "≦", sb = "⩽", cb = "⪨", ib = "⩽", ab = "⩿", lb = "⪁", ub = "⪃", pb = "⋚︀", fb = "⪓", hb = "⪅", db = "⋖", mb = "⋚", gb = "⪋", _b = "⋚", bb = "≦", kb = "≶", vb = "≶", xb = "⪡", yb = "≲", wb = "⩽", Cb = "≲", Ab = "⥼", Eb = "⌊", Db = "𝔏", qb = "𝔩", Sb = "≶", Fb = "⪑", Tb = "⥢", Lb = "↽", Rb = "↼", zb = "⥪", Nb = "▄", Ib = "Љ", Bb = "љ", Pb = "⇇", Ob = "≪", Mb = "⋘", Ub = "⌞", $b = "⇚", Vb = "⥫", jb = "◺", Gb = "Ŀ", Hb = "ŀ", Zb = "⎰", Jb = "⎰", Wb = "⪉", Yb = "⪉", Qb = "⪇", Kb = "≨", Xb = "⪇", nk = "≨", tk = "⋦", rk = "⟬", ek = "⇽", ok = "⟦", sk = "⟵", ck = "⟵", ik = "⟸", ak = "⟷", lk = "⟷", uk = "⟺", pk = "⟼", fk = "⟶", hk = "⟶", dk = "⟹", mk = "↫", gk = "↬", _k = "⦅", bk = "𝕃", kk = "𝕝", vk = "⨭", xk = "⨴", yk = "∗", wk = "_", Ck = "↙", Ak = "↘", Ek = "◊", Dk = "◊", qk = "⧫", Sk = "(", Fk = "⦓", Tk = "⇆", Lk = "⌟", Rk = "⇋", zk = "⥭", Nk = "‎", Ik = "⊿", Bk = "‹", Pk = "𝓁", Ok = "ℒ", Mk = "↰", Uk = "↰", $k = "≲", Vk = "⪍", jk = "⪏", Gk = "[", Hk = "‘", Zk = "‚", Jk = "Ł", Wk = "ł", Yk = "⪦", Qk = "⩹", Kk = "<", Xk = "<", nv = "≪", tv = "⋖", rv = "⋋", ev = "⋉", ov = "⥶", sv = "⩻", cv = "◃", iv = "⊴", av = "◂", lv = "⦖", uv = "⥊", pv = "⥦", fv = "≨︀", hv = "≨︀", dv = "¯", mv = "♂", gv = "✠", _v = "✠", bv = "↦", kv = "↦", vv = "↧", xv = "↤", yv = "↥", wv = "▮", Cv = "⨩", Av = "М", Ev = "м", Dv = "—", qv = "∺", Sv = "∡", Fv = " ", Tv = "ℳ", Lv = "𝔐", Rv = "𝔪", zv = "℧", Nv = "µ", Iv = "*", Bv = "⫰", Pv = "∣", Ov = "·", Mv = "⊟", Uv = "−", $v = "∸", Vv = "⨪", jv = "∓", Gv = "⫛", Hv = "…", Zv = "∓", Jv = "⊧", Wv = "𝕄", Yv = "𝕞", Qv = "∓", Kv = "𝓂", Xv = "ℳ", nx = "∾", tx = "Μ", rx = "μ", ex = "⊸", ox = "⊸", sx = "∇", cx = "Ń", ix = "ń", ax = "∠⃒", lx = "≉", ux = "⩰̸", px = "≋̸", fx = "ŉ", hx = "≉", dx = "♮", mx = "ℕ", gx = "♮", _x = " ", bx = "≎̸", kx = "≏̸", vx = "⩃", xx = "Ň", yx = "ň", wx = "Ņ", Cx = "ņ", Ax = "≇", Ex = "⩭̸", Dx = "⩂", qx = "Н", Sx = "н", Fx = "–", Tx = "⤤", Lx = "↗", Rx = "⇗", zx = "↗", Nx = "≠", Ix = "≐̸", Bx = "​", Px = "​", Ox = "​", Mx = "​", Ux = "≢", $x = "⤨", Vx = "≂̸", jx = "≫", Gx = "≪", Hx = `
`, Zx = "∄", Jx = "∄", Wx = "𝔑", Yx = "𝔫", Qx = "≧̸", Kx = "≱", Xx = "≱", ny = "≧̸", ty = "⩾̸", ry = "⩾̸", ey = "⋙̸", oy = "≵", sy = "≫⃒", cy = "≯", iy = "≯", ay = "≫̸", ly = "↮", uy = "⇎", py = "⫲", fy = "∋", hy = "⋼", dy = "⋺", my = "∋", gy = "Њ", _y = "њ", by = "↚", ky = "⇍", vy = "‥", xy = "≦̸", yy = "≰", wy = "↚", Cy = "⇍", Ay = "↮", Ey = "⇎", Dy = "≰", qy = "≦̸", Sy = "⩽̸", Fy = "⩽̸", Ty = "≮", Ly = "⋘̸", Ry = "≴", zy = "≪⃒", Ny = "≮", Iy = "⋪", By = "⋬", Py = "≪̸", Oy = "∤", My = "⁠", Uy = " ", $y = "𝕟", Vy = "ℕ", jy = "⫬", Gy = "¬", Hy = "≢", Zy = "≭", Jy = "∦", Wy = "∉", Yy = "≠", Qy = "≂̸", Ky = "∄", Xy = "≯", nw = "≱", tw = "≧̸", rw = "≫̸", ew = "≹", ow = "⩾̸", sw = "≵", cw = "≎̸", iw = "≏̸", aw = "∉", lw = "⋵̸", uw = "⋹̸", pw = "∉", fw = "⋷", hw = "⋶", dw = "⧏̸", mw = "⋪", gw = "⋬", _w = "≮", bw = "≰", kw = "≸", vw = "≪̸", xw = "⩽̸", yw = "≴", ww = "⪢̸", Cw = "⪡̸", Aw = "∌", Ew = "∌", Dw = "⋾", qw = "⋽", Sw = "⊀", Fw = "⪯̸", Tw = "⋠", Lw = "∌", Rw = "⧐̸", zw = "⋫", Nw = "⋭", Iw = "⊏̸", Bw = "⋢", Pw = "⊐̸", Ow = "⋣", Mw = "⊂⃒", Uw = "⊈", $w = "⊁", Vw = "⪰̸", jw = "⋡", Gw = "≿̸", Hw = "⊃⃒", Zw = "⊉", Jw = "≁", Ww = "≄", Yw = "≇", Qw = "≉", Kw = "∤", Xw = "∦", nC = "∦", tC = "⫽⃥", rC = "∂̸", eC = "⨔", oC = "⊀", sC = "⋠", cC = "⊀", iC = "⪯̸", aC = "⪯̸", lC = "⤳̸", uC = "↛", pC = "⇏", fC = "↝̸", hC = "↛", dC = "⇏", mC = "⋫", gC = "⋭", _C = "⊁", bC = "⋡", kC = "⪰̸", vC = "𝒩", xC = "𝓃", yC = "∤", wC = "∦", CC = "≁", AC = "≄", EC = "≄", DC = "∤", qC = "∦", SC = "⋢", FC = "⋣", TC = "⊄", LC = "⫅̸", RC = "⊈", zC = "⊂⃒", NC = "⊈", IC = "⫅̸", BC = "⊁", PC = "⪰̸", OC = "⊅", MC = "⫆̸", UC = "⊉", $C = "⊃⃒", VC = "⊉", jC = "⫆̸", GC = "≹", HC = "Ñ", ZC = "ñ", JC = "≸", WC = "⋪", YC = "⋬", QC = "⋫", KC = "⋭", XC = "Ν", nA = "ν", tA = "#", rA = "№", eA = " ", oA = "≍⃒", sA = "⊬", cA = "⊭", iA = "⊮", aA = "⊯", lA = "≥⃒", uA = ">⃒", pA = "⤄", fA = "⧞", hA = "⤂", dA = "≤⃒", mA = "<⃒", gA = "⊴⃒", _A = "⤃", bA = "⊵⃒", kA = "∼⃒", vA = "⤣", xA = "↖", yA = "⇖", wA = "↖", CA = "⤧", AA = "Ó", EA = "ó", DA = "⊛", qA = "Ô", SA = "ô", FA = "⊚", TA = "О", LA = "о", RA = "⊝", zA = "Ő", NA = "ő", IA = "⨸", BA = "⊙", PA = "⦼", OA = "Œ", MA = "œ", UA = "⦿", $A = "𝔒", VA = "𝔬", jA = "˛", GA = "Ò", HA = "ò", ZA = "⧁", JA = "⦵", WA = "Ω", YA = "∮", QA = "↺", KA = "⦾", XA = "⦻", n1 = "‾", t1 = "⧀", r1 = "Ō", e1 = "ō", o1 = "Ω", s1 = "ω", c1 = "Ο", i1 = "ο", a1 = "⦶", l1 = "⊖", u1 = "𝕆", p1 = "𝕠", f1 = "⦷", h1 = "“", d1 = "‘", m1 = "⦹", g1 = "⊕", _1 = "↻", b1 = "⩔", k1 = "∨", v1 = "⩝", x1 = "ℴ", y1 = "ℴ", w1 = "ª", C1 = "º", A1 = "⊶", E1 = "⩖", D1 = "⩗", q1 = "⩛", S1 = "Ⓢ", F1 = "𝒪", T1 = "ℴ", L1 = "Ø", R1 = "ø", z1 = "⊘", N1 = "Õ", I1 = "õ", B1 = "⨶", P1 = "⨷", O1 = "⊗", M1 = "Ö", U1 = "ö", $1 = "⌽", V1 = "‾", j1 = "⏞", G1 = "⎴", H1 = "⏜", Z1 = "¶", J1 = "∥", W1 = "∥", Y1 = "⫳", Q1 = "⫽", K1 = "∂", X1 = "∂", nE = "П", tE = "п", rE = "%", eE = ".", oE = "‰", sE = "⊥", cE = "‱", iE = "𝔓", aE = "𝔭", lE = "Φ", uE = "φ", pE = "ϕ", fE = "ℳ", hE = "☎", dE = "Π", mE = "π", gE = "⋔", _E = "ϖ", bE = "ℏ", kE = "ℎ", vE = "ℏ", xE = "⨣", yE = "⊞", wE = "⨢", CE = "+", AE = "∔", EE = "⨥", DE = "⩲", qE = "±", SE = "±", FE = "⨦", TE = "⨧", LE = "±", RE = "ℌ", zE = "⨕", NE = "𝕡", IE = "ℙ", BE = "£", PE = "⪷", OE = "⪻", ME = "≺", UE = "≼", $E = "⪷", VE = "≺", jE = "≼", GE = "≺", HE = "⪯", ZE = "≼", JE = "≾", WE = "⪯", YE = "⪹", QE = "⪵", KE = "⋨", XE = "⪯", nD = "⪳", tD = "≾", rD = "′", eD = "″", oD = "ℙ", sD = "⪹", cD = "⪵", iD = "⋨", aD = "∏", lD = "∏", uD = "⌮", pD = "⌒", fD = "⌓", hD = "∝", dD = "∝", mD = "∷", gD = "∝", _D = "≾", bD = "⊰", kD = "𝒫", vD = "𝓅", xD = "Ψ", yD = "ψ", wD = " ", CD = "𝔔", AD = "𝔮", ED = "⨌", DD = "𝕢", qD = "ℚ", SD = "⁗", FD = "𝒬", TD = "𝓆", LD = "ℍ", RD = "⨖", zD = "?", ND = "≟", ID = '"', BD = '"', PD = "⇛", OD = "∽̱", MD = "Ŕ", UD = "ŕ", $D = "√", VD = "⦳", jD = "⟩", GD = "⟫", HD = "⦒", ZD = "⦥", JD = "⟩", WD = "»", YD = "⥵", QD = "⇥", KD = "⤠", XD = "⤳", nq = "→", tq = "↠", rq = "⇒", eq = "⤞", oq = "↪", sq = "↬", cq = "⥅", iq = "⥴", aq = "⤖", lq = "↣", uq = "↝", pq = "⤚", fq = "⤜", hq = "∶", dq = "ℚ", mq = "⤍", gq = "⤏", _q = "⤐", bq = "❳", kq = "}", vq = "]", xq = "⦌", yq = "⦎", wq = "⦐", Cq = "Ř", Aq = "ř", Eq = "Ŗ", Dq = "ŗ", qq = "⌉", Sq = "}", Fq = "Р", Tq = "р", Lq = "⤷", Rq = "⥩", zq = "”", Nq = "”", Iq = "↳", Bq = "ℜ", Pq = "ℛ", Oq = "ℜ", Mq = "ℝ", Uq = "ℜ", $q = "▭", Vq = "®", jq = "®", Gq = "∋", Hq = "⇋", Zq = "⥯", Jq = "⥽", Wq = "⌋", Yq = "𝔯", Qq = "ℜ", Kq = "⥤", Xq = "⇁", nS = "⇀", tS = "⥬", rS = "Ρ", eS = "ρ", oS = "ϱ", sS = "⟩", cS = "⇥", iS = "→", aS = "→", lS = "⇒", uS = "⇄", pS = "↣", fS = "⌉", hS = "⟧", dS = "⥝", mS = "⥕", gS = "⇂", _S = "⌋", bS = "⇁", kS = "⇀", vS = "⇄", xS = "⇌", yS = "⇉", wS = "↝", CS = "↦", AS = "⊢", ES = "⥛", DS = "⋌", qS = "⧐", SS = "⊳", FS = "⊵", TS = "⥏", LS = "⥜", RS = "⥔", zS = "↾", NS = "⥓", IS = "⇀", BS = "˚", PS = "≓", OS = "⇄", MS = "⇌", US = "‏", $S = "⎱", VS = "⎱", jS = "⫮", GS = "⟭", HS = "⇾", ZS = "⟧", JS = "⦆", WS = "𝕣", YS = "ℝ", QS = "⨮", KS = "⨵", XS = "⥰", nF = ")", tF = "⦔", rF = "⨒", eF = "⇉", oF = "⇛", sF = "›", cF = "𝓇", iF = "ℛ", aF = "↱", lF = "↱", uF = "]", pF = "’", fF = "’", hF = "⋌", dF = "⋊", mF = "▹", gF = "⊵", _F = "▸", bF = "⧎", kF = "⧴", vF = "⥨", xF = "℞", yF = "Ś", wF = "ś", CF = "‚", AF = "⪸", EF = "Š", DF = "š", qF = "⪼", SF = "≻", FF = "≽", TF = "⪰", LF = "⪴", RF = "Ş", zF = "ş", NF = "Ŝ", IF = "ŝ", BF = "⪺", PF = "⪶", OF = "⋩", MF = "⨓", UF = "≿", $F = "С", VF = "с", jF = "⊡", GF = "⋅", HF = "⩦", ZF = "⤥", JF = "↘", WF = "⇘", YF = "↘", QF = "§", KF = ";", XF = "⤩", nT = "∖", tT = "∖", rT = "✶", eT = "𝔖", oT = "𝔰", sT = "⌢", cT = "♯", iT = "Щ", aT = "щ", lT = "Ш", uT = "ш", pT = "↓", fT = "←", hT = "∣", dT = "∥", mT = "→", gT = "↑", _T = "­", bT = "Σ", kT = "σ", vT = "ς", xT = "ς", yT = "∼", wT = "⩪", CT = "≃", AT = "≃", ET = "⪞", DT = "⪠", qT = "⪝", ST = "⪟", FT = "≆", TT = "⨤", LT = "⥲", RT = "←", zT = "∘", NT = "∖", IT = "⨳", BT = "⧤", PT = "∣", OT = "⌣", MT = "⪪", UT = "⪬", $T = "⪬︀", VT = "Ь", jT = "ь", GT = "⌿", HT = "⧄", ZT = "/", JT = "𝕊", WT = "𝕤", YT = "♠", QT = "♠", KT = "∥", XT = "⊓", nL = "⊓︀", tL = "⊔", rL = "⊔︀", eL = "√", oL = "⊏", sL = "⊑", cL = "⊏", iL = "⊑", aL = "⊐", lL = "⊒", uL = "⊐", pL = "⊒", fL = "□", hL = "□", dL = "⊓", mL = "⊏", gL = "⊑", _L = "⊐", bL = "⊒", kL = "⊔", vL = "▪", xL = "□", yL = "▪", wL = "→", CL = "𝒮", AL = "𝓈", EL = "∖", DL = "⌣", qL = "⋆", SL = "⋆", FL = "☆", TL = "★", LL = "ϵ", RL = "ϕ", zL = "¯", NL = "⊂", IL = "⋐", BL = "⪽", PL = "⫅", OL = "⊆", ML = "⫃", UL = "⫁", $L = "⫋", VL = "⊊", jL = "⪿", GL = "⥹", HL = "⊂", ZL = "⋐", JL = "⊆", WL = "⫅", YL = "⊆", QL = "⊊", KL = "⫋", XL = "⫇", n2 = "⫕", t2 = "⫓", r2 = "⪸", e2 = "≻", o2 = "≽", s2 = "≻", c2 = "⪰", i2 = "≽", a2 = "≿", l2 = "⪰", u2 = "⪺", p2 = "⪶", f2 = "⋩", h2 = "≿", d2 = "∋", m2 = "∑", g2 = "∑", _2 = "♪", b2 = "¹", k2 = "²", v2 = "³", x2 = "⊃", y2 = "⋑", w2 = "⪾", C2 = "⫘", A2 = "⫆", E2 = "⊇", D2 = "⫄", q2 = "⊃", S2 = "⊇", F2 = "⟉", T2 = "⫗", L2 = "⥻", R2 = "⫂", z2 = "⫌", N2 = "⊋", I2 = "⫀", B2 = "⊃", P2 = "⋑", O2 = "⊇", M2 = "⫆", U2 = "⊋", $2 = "⫌", V2 = "⫈", j2 = "⫔", G2 = "⫖", H2 = "⤦", Z2 = "↙", J2 = "⇙", W2 = "↙", Y2 = "⤪", Q2 = "ß", K2 = "	", X2 = "⌖", nR = "Τ", tR = "τ", rR = "⎴", eR = "Ť", oR = "ť", sR = "Ţ", cR = "ţ", iR = "Т", aR = "т", lR = "⃛", uR = "⌕", pR = "𝔗", fR = "𝔱", hR = "∴", dR = "∴", mR = "∴", gR = "Θ", _R = "θ", bR = "ϑ", kR = "ϑ", vR = "≈", xR = "∼", yR = "  ", wR = " ", CR = " ", AR = "≈", ER = "∼", DR = "Þ", qR = "þ", SR = "˜", FR = "∼", TR = "≃", LR = "≅", RR = "≈", zR = "⨱", NR = "⊠", IR = "×", BR = "⨰", PR = "∭", OR = "⤨", MR = "⌶", UR = "⫱", $R = "⊤", VR = "𝕋", jR = "𝕥", GR = "⫚", HR = "⤩", ZR = "‴", JR = "™", WR = "™", YR = "▵", QR = "▿", KR = "◃", XR = "⊴", nz = "≜", tz = "▹", rz = "⊵", ez = "◬", oz = "≜", sz = "⨺", cz = "⃛", iz = "⨹", az = "⧍", lz = "⨻", uz = "⏢", pz = "𝒯", fz = "𝓉", hz = "Ц", dz = "ц", mz = "Ћ", gz = "ћ", _z = "Ŧ", bz = "ŧ", kz = "≬", vz = "↞", xz = "↠", yz = "Ú", wz = "ú", Cz = "↑", Az = "↟", Ez = "⇑", Dz = "⥉", qz = "Ў", Sz = "ў", Fz = "Ŭ", Tz = "ŭ", Lz = "Û", Rz = "û", zz = "У", Nz = "у", Iz = "⇅", Bz = "Ű", Pz = "ű", Oz = "⥮", Mz = "⥾", Uz = "𝔘", $z = "𝔲", Vz = "Ù", jz = "ù", Gz = "⥣", Hz = "↿", Zz = "↾", Jz = "▀", Wz = "⌜", Yz = "⌜", Qz = "⌏", Kz = "◸", Xz = "Ū", nN = "ū", tN = "¨", rN = "_", eN = "⏟", oN = "⎵", sN = "⏝", cN = "⋃", iN = "⊎", aN = "Ų", lN = "ų", uN = "𝕌", pN = "𝕦", fN = "⤒", hN = "↑", dN = "↑", mN = "⇑", gN = "⇅", _N = "↕", bN = "↕", kN = "⇕", vN = "⥮", xN = "↿", yN = "↾", wN = "⊎", CN = "↖", AN = "↗", EN = "υ", DN = "ϒ", qN = "ϒ", SN = "Υ", FN = "υ", TN = "↥", LN = "⊥", RN = "⇈", zN = "⌝", NN = "⌝", IN = "⌎", BN = "Ů", PN = "ů", ON = "◹", MN = "𝒰", UN = "𝓊", $N = "⋰", VN = "Ũ", jN = "ũ", GN = "▵", HN = "▴", ZN = "⇈", JN = "Ü", WN = "ü", YN = "⦧", QN = "⦜", KN = "ϵ", XN = "ϰ", nI = "∅", tI = "ϕ", rI = "ϖ", eI = "∝", oI = "↕", sI = "⇕", cI = "ϱ", iI = "ς", aI = "⊊︀", lI = "⫋︀", uI = "⊋︀", pI = "⫌︀", fI = "ϑ", hI = "⊲", dI = "⊳", mI = "⫨", gI = "⫫", _I = "⫩", bI = "В", kI = "в", vI = "⊢", xI = "⊨", yI = "⊩", wI = "⊫", CI = "⫦", AI = "⊻", EI = "∨", DI = "⋁", qI = "≚", SI = "⋮", FI = "|", TI = "‖", LI = "|", RI = "‖", zI = "∣", NI = "|", II = "❘", BI = "≀", PI = " ", OI = "𝔙", MI = "𝔳", UI = "⊲", $I = "⊂⃒", VI = "⊃⃒", jI = "𝕍", GI = "𝕧", HI = "∝", ZI = "⊳", JI = "𝒱", WI = "𝓋", YI = "⫋︀", QI = "⊊︀", KI = "⫌︀", XI = "⊋︀", nB = "⊪", tB = "⦚", rB = "Ŵ", eB = "ŵ", oB = "⩟", sB = "∧", cB = "⋀", iB = "≙", aB = "℘", lB = "𝔚", uB = "𝔴", pB = "𝕎", fB = "𝕨", hB = "℘", dB = "≀", mB = "≀", gB = "𝒲", _B = "𝓌", bB = "⋂", kB = "◯", vB = "⋃", xB = "▽", yB = "𝔛", wB = "𝔵", CB = "⟷", AB = "⟺", EB = "Ξ", DB = "ξ", qB = "⟵", SB = "⟸", FB = "⟼", TB = "⋻", LB = "⨀", RB = "𝕏", zB = "𝕩", NB = "⨁", IB = "⨂", BB = "⟶", PB = "⟹", OB = "𝒳", MB = "𝓍", UB = "⨆", $B = "⨄", VB = "△", jB = "⋁", GB = "⋀", HB = "Ý", ZB = "ý", JB = "Я", WB = "я", YB = "Ŷ", QB = "ŷ", KB = "Ы", XB = "ы", nP = "¥", tP = "𝔜", rP = "𝔶", eP = "Ї", oP = "ї", sP = "𝕐", cP = "𝕪", iP = "𝒴", aP = "𝓎", lP = "Ю", uP = "ю", pP = "ÿ", fP = "Ÿ", hP = "Ź", dP = "ź", mP = "Ž", gP = "ž", _P = "З", bP = "з", kP = "Ż", vP = "ż", xP = "ℨ", yP = "​", wP = "Ζ", CP = "ζ", AP = "𝔷", EP = "ℨ", DP = "Ж", qP = "ж", SP = "⇝", FP = "𝕫", TP = "ℤ", LP = "𝒵", RP = "𝓏", zP = "‍", NP = "‌", IP = {
  Aacute: _r,
  aacute: br,
  Abreve: kr,
  abreve: vr,
  ac: xr,
  acd: yr,
  acE: wr,
  Acirc: Cr,
  acirc: Ar,
  acute: Er,
  Acy: Dr,
  acy: qr,
  AElig: Sr,
  aelig: Fr,
  af: Tr,
  Afr: Lr,
  afr: Rr,
  Agrave: zr,
  agrave: Nr,
  alefsym: Ir,
  aleph: Br,
  Alpha: Pr,
  alpha: Or,
  Amacr: Mr,
  amacr: Ur,
  amalg: $r,
  amp: Vr,
  AMP: jr,
  andand: Gr,
  And: Hr,
  and: Zr,
  andd: Jr,
  andslope: Wr,
  andv: Yr,
  ang: Qr,
  ange: Kr,
  angle: Xr,
  angmsdaa: ne,
  angmsdab: te,
  angmsdac: re,
  angmsdad: ee,
  angmsdae: oe,
  angmsdaf: se,
  angmsdag: ce,
  angmsdah: ie,
  angmsd: ae,
  angrt: le,
  angrtvb: ue,
  angrtvbd: pe,
  angsph: fe,
  angst: he,
  angzarr: de,
  Aogon: me,
  aogon: ge,
  Aopf: _e,
  aopf: be,
  apacir: ke,
  ap: ve,
  apE: xe,
  ape: ye,
  apid: we,
  apos: Ce,
  ApplyFunction: Ae,
  approx: Ee,
  approxeq: De,
  Aring: qe,
  aring: Se,
  Ascr: Fe,
  ascr: Te,
  Assign: Le,
  ast: Re,
  asymp: ze,
  asympeq: Ne,
  Atilde: Ie,
  atilde: Be,
  Auml: Pe,
  auml: Oe,
  awconint: Me,
  awint: Ue,
  backcong: $e,
  backepsilon: Ve,
  backprime: je,
  backsim: Ge,
  backsimeq: He,
  Backslash: Ze,
  Barv: Je,
  barvee: We,
  barwed: Ye,
  Barwed: Qe,
  barwedge: Ke,
  bbrk: Xe,
  bbrktbrk: no,
  bcong: to,
  Bcy: ro,
  bcy: eo,
  bdquo: oo,
  becaus: so,
  because: co,
  Because: io,
  bemptyv: ao,
  bepsi: lo,
  bernou: uo,
  Bernoullis: po,
  Beta: fo,
  beta: ho,
  beth: mo,
  between: go,
  Bfr: _o,
  bfr: bo,
  bigcap: ko,
  bigcirc: vo,
  bigcup: xo,
  bigodot: yo,
  bigoplus: wo,
  bigotimes: Co,
  bigsqcup: Ao,
  bigstar: Eo,
  bigtriangledown: Do,
  bigtriangleup: qo,
  biguplus: So,
  bigvee: Fo,
  bigwedge: To,
  bkarow: Lo,
  blacklozenge: Ro,
  blacksquare: zo,
  blacktriangle: No,
  blacktriangledown: Io,
  blacktriangleleft: Bo,
  blacktriangleright: Po,
  blank: Oo,
  blk12: Mo,
  blk14: Uo,
  blk34: $o,
  block: Vo,
  bne: jo,
  bnequiv: Go,
  bNot: Ho,
  bnot: Zo,
  Bopf: Jo,
  bopf: Wo,
  bot: Yo,
  bottom: Qo,
  bowtie: Ko,
  boxbox: Xo,
  boxdl: ns,
  boxdL: ts,
  boxDl: rs,
  boxDL: es,
  boxdr: os,
  boxdR: ss,
  boxDr: cs,
  boxDR: is,
  boxh: as,
  boxH: ls,
  boxhd: us,
  boxHd: ps,
  boxhD: fs,
  boxHD: hs,
  boxhu: ds,
  boxHu: ms,
  boxhU: gs,
  boxHU: _s,
  boxminus: bs,
  boxplus: ks,
  boxtimes: vs,
  boxul: xs,
  boxuL: ys,
  boxUl: ws,
  boxUL: Cs,
  boxur: As,
  boxuR: Es,
  boxUr: Ds,
  boxUR: qs,
  boxv: Ss,
  boxV: Fs,
  boxvh: Ts,
  boxvH: Ls,
  boxVh: Rs,
  boxVH: zs,
  boxvl: Ns,
  boxvL: Is,
  boxVl: Bs,
  boxVL: Ps,
  boxvr: Os,
  boxvR: Ms,
  boxVr: Us,
  boxVR: $s,
  bprime: Vs,
  breve: js,
  Breve: Gs,
  brvbar: Hs,
  bscr: Zs,
  Bscr: Js,
  bsemi: Ws,
  bsim: Ys,
  bsime: Qs,
  bsolb: Ks,
  bsol: Xs,
  bsolhsub: nc,
  bull: tc,
  bullet: rc,
  bump: ec,
  bumpE: oc,
  bumpe: sc,
  Bumpeq: cc,
  bumpeq: ic,
  Cacute: ac,
  cacute: lc,
  capand: uc,
  capbrcup: pc,
  capcap: fc,
  cap: hc,
  Cap: dc,
  capcup: mc,
  capdot: gc,
  CapitalDifferentialD: _c,
  caps: bc,
  caret: kc,
  caron: vc,
  Cayleys: xc,
  ccaps: yc,
  Ccaron: wc,
  ccaron: Cc,
  Ccedil: Ac,
  ccedil: Ec,
  Ccirc: Dc,
  ccirc: qc,
  Cconint: Sc,
  ccups: Fc,
  ccupssm: Tc,
  Cdot: Lc,
  cdot: Rc,
  cedil: zc,
  Cedilla: Nc,
  cemptyv: Ic,
  cent: Bc,
  centerdot: Pc,
  CenterDot: Oc,
  cfr: Mc,
  Cfr: Uc,
  CHcy: $c,
  chcy: Vc,
  check: jc,
  checkmark: Gc,
  Chi: Hc,
  chi: Zc,
  circ: Jc,
  circeq: Wc,
  circlearrowleft: Yc,
  circlearrowright: Qc,
  circledast: Kc,
  circledcirc: Xc,
  circleddash: ni,
  CircleDot: ti,
  circledR: ri,
  circledS: ei,
  CircleMinus: oi,
  CirclePlus: si,
  CircleTimes: ci,
  cir: ii,
  cirE: ai,
  cire: li,
  cirfnint: ui,
  cirmid: pi,
  cirscir: fi,
  ClockwiseContourIntegral: hi,
  CloseCurlyDoubleQuote: di,
  CloseCurlyQuote: mi,
  clubs: gi,
  clubsuit: _i,
  colon: bi,
  Colon: ki,
  Colone: vi,
  colone: xi,
  coloneq: yi,
  comma: wi,
  commat: Ci,
  comp: Ai,
  compfn: Ei,
  complement: Di,
  complexes: qi,
  cong: Si,
  congdot: Fi,
  Congruent: Ti,
  conint: Li,
  Conint: Ri,
  ContourIntegral: zi,
  copf: Ni,
  Copf: Ii,
  coprod: Bi,
  Coproduct: Pi,
  copy: Oi,
  COPY: Mi,
  copysr: Ui,
  CounterClockwiseContourIntegral: $i,
  crarr: Vi,
  cross: ji,
  Cross: Gi,
  Cscr: Hi,
  cscr: Zi,
  csub: Ji,
  csube: Wi,
  csup: Yi,
  csupe: Qi,
  ctdot: Ki,
  cudarrl: Xi,
  cudarrr: na,
  cuepr: ta,
  cuesc: ra,
  cularr: ea,
  cularrp: oa,
  cupbrcap: sa,
  cupcap: ca,
  CupCap: ia,
  cup: aa,
  Cup: la,
  cupcup: ua,
  cupdot: pa,
  cupor: fa,
  cups: ha,
  curarr: da,
  curarrm: ma,
  curlyeqprec: ga,
  curlyeqsucc: _a,
  curlyvee: ba,
  curlywedge: ka,
  curren: va,
  curvearrowleft: xa,
  curvearrowright: ya,
  cuvee: wa,
  cuwed: Ca,
  cwconint: Aa,
  cwint: Ea,
  cylcty: Da,
  dagger: qa,
  Dagger: Sa,
  daleth: Fa,
  darr: Ta,
  Darr: La,
  dArr: Ra,
  dash: za,
  Dashv: Na,
  dashv: Ia,
  dbkarow: Ba,
  dblac: Pa,
  Dcaron: Oa,
  dcaron: Ma,
  Dcy: Ua,
  dcy: $a,
  ddagger: Va,
  ddarr: ja,
  DD: Ga,
  dd: Ha,
  DDotrahd: Za,
  ddotseq: Ja,
  deg: Wa,
  Del: Ya,
  Delta: Qa,
  delta: Ka,
  demptyv: Xa,
  dfisht: nl,
  Dfr: tl,
  dfr: rl,
  dHar: el,
  dharl: ol,
  dharr: sl,
  DiacriticalAcute: cl,
  DiacriticalDot: il,
  DiacriticalDoubleAcute: al,
  DiacriticalGrave: ll,
  DiacriticalTilde: ul,
  diam: pl,
  diamond: fl,
  Diamond: hl,
  diamondsuit: dl,
  diams: ml,
  die: gl,
  DifferentialD: _l,
  digamma: bl,
  disin: kl,
  div: vl,
  divide: xl,
  divideontimes: yl,
  divonx: wl,
  DJcy: Cl,
  djcy: Al,
  dlcorn: El,
  dlcrop: Dl,
  dollar: ql,
  Dopf: Sl,
  dopf: Fl,
  Dot: Tl,
  dot: Ll,
  DotDot: Rl,
  doteq: zl,
  doteqdot: Nl,
  DotEqual: Il,
  dotminus: Bl,
  dotplus: Pl,
  dotsquare: Ol,
  doublebarwedge: Ml,
  DoubleContourIntegral: Ul,
  DoubleDot: $l,
  DoubleDownArrow: Vl,
  DoubleLeftArrow: jl,
  DoubleLeftRightArrow: Gl,
  DoubleLeftTee: Hl,
  DoubleLongLeftArrow: Zl,
  DoubleLongLeftRightArrow: Jl,
  DoubleLongRightArrow: Wl,
  DoubleRightArrow: Yl,
  DoubleRightTee: Ql,
  DoubleUpArrow: Kl,
  DoubleUpDownArrow: Xl,
  DoubleVerticalBar: nu,
  DownArrowBar: tu,
  downarrow: ru,
  DownArrow: eu,
  Downarrow: ou,
  DownArrowUpArrow: su,
  DownBreve: cu,
  downdownarrows: iu,
  downharpoonleft: au,
  downharpoonright: lu,
  DownLeftRightVector: uu,
  DownLeftTeeVector: pu,
  DownLeftVectorBar: fu,
  DownLeftVector: hu,
  DownRightTeeVector: du,
  DownRightVectorBar: mu,
  DownRightVector: gu,
  DownTeeArrow: _u,
  DownTee: bu,
  drbkarow: ku,
  drcorn: vu,
  drcrop: xu,
  Dscr: yu,
  dscr: wu,
  DScy: Cu,
  dscy: Au,
  dsol: Eu,
  Dstrok: Du,
  dstrok: qu,
  dtdot: Su,
  dtri: Fu,
  dtrif: Tu,
  duarr: Lu,
  duhar: Ru,
  dwangle: zu,
  DZcy: Nu,
  dzcy: Iu,
  dzigrarr: Bu,
  Eacute: Pu,
  eacute: Ou,
  easter: Mu,
  Ecaron: Uu,
  ecaron: $u,
  Ecirc: Vu,
  ecirc: ju,
  ecir: Gu,
  ecolon: Hu,
  Ecy: Zu,
  ecy: Ju,
  eDDot: Wu,
  Edot: Yu,
  edot: Qu,
  eDot: Ku,
  ee: Xu,
  efDot: np,
  Efr: tp,
  efr: rp,
  eg: ep,
  Egrave: op,
  egrave: sp,
  egs: cp,
  egsdot: ip,
  el: ap,
  Element: lp,
  elinters: up,
  ell: pp,
  els: fp,
  elsdot: hp,
  Emacr: dp,
  emacr: mp,
  empty: gp,
  emptyset: _p,
  EmptySmallSquare: bp,
  emptyv: kp,
  EmptyVerySmallSquare: vp,
  emsp13: xp,
  emsp14: yp,
  emsp: wp,
  ENG: Cp,
  eng: Ap,
  ensp: Ep,
  Eogon: Dp,
  eogon: qp,
  Eopf: Sp,
  eopf: Fp,
  epar: Tp,
  eparsl: Lp,
  eplus: Rp,
  epsi: zp,
  Epsilon: Np,
  epsilon: Ip,
  epsiv: Bp,
  eqcirc: Pp,
  eqcolon: Op,
  eqsim: Mp,
  eqslantgtr: Up,
  eqslantless: $p,
  Equal: Vp,
  equals: jp,
  EqualTilde: Gp,
  equest: Hp,
  Equilibrium: Zp,
  equiv: Jp,
  equivDD: Wp,
  eqvparsl: Yp,
  erarr: Qp,
  erDot: Kp,
  escr: Xp,
  Escr: nf,
  esdot: tf,
  Esim: rf,
  esim: ef,
  Eta: of,
  eta: sf,
  ETH: cf,
  eth: af,
  Euml: lf,
  euml: uf,
  euro: pf,
  excl: ff,
  exist: hf,
  Exists: df,
  expectation: mf,
  exponentiale: gf,
  ExponentialE: _f,
  fallingdotseq: bf,
  Fcy: kf,
  fcy: vf,
  female: xf,
  ffilig: yf,
  fflig: wf,
  ffllig: Cf,
  Ffr: Af,
  ffr: Ef,
  filig: Df,
  FilledSmallSquare: qf,
  FilledVerySmallSquare: Sf,
  fjlig: Ff,
  flat: Tf,
  fllig: Lf,
  fltns: Rf,
  fnof: zf,
  Fopf: Nf,
  fopf: If,
  forall: Bf,
  ForAll: Pf,
  fork: Of,
  forkv: Mf,
  Fouriertrf: Uf,
  fpartint: $f,
  frac12: Vf,
  frac13: jf,
  frac14: Gf,
  frac15: Hf,
  frac16: Zf,
  frac18: Jf,
  frac23: Wf,
  frac25: Yf,
  frac34: Qf,
  frac35: Kf,
  frac38: Xf,
  frac45: nh,
  frac56: th,
  frac58: rh,
  frac78: eh,
  frasl: oh,
  frown: sh,
  fscr: ch,
  Fscr: ih,
  gacute: ah,
  Gamma: lh,
  gamma: uh,
  Gammad: ph,
  gammad: fh,
  gap: hh,
  Gbreve: dh,
  gbreve: mh,
  Gcedil: gh,
  Gcirc: _h,
  gcirc: bh,
  Gcy: kh,
  gcy: vh,
  Gdot: xh,
  gdot: yh,
  ge: wh,
  gE: Ch,
  gEl: Ah,
  gel: Eh,
  geq: Dh,
  geqq: qh,
  geqslant: Sh,
  gescc: Fh,
  ges: Th,
  gesdot: Lh,
  gesdoto: Rh,
  gesdotol: zh,
  gesl: Nh,
  gesles: Ih,
  Gfr: Bh,
  gfr: Ph,
  gg: Oh,
  Gg: Mh,
  ggg: Uh,
  gimel: $h,
  GJcy: Vh,
  gjcy: jh,
  gla: Gh,
  gl: Hh,
  glE: Zh,
  glj: Jh,
  gnap: Wh,
  gnapprox: Yh,
  gne: Qh,
  gnE: Kh,
  gneq: Xh,
  gneqq: nd,
  gnsim: td,
  Gopf: rd,
  gopf: ed,
  grave: od,
  GreaterEqual: sd,
  GreaterEqualLess: cd,
  GreaterFullEqual: id,
  GreaterGreater: ad,
  GreaterLess: ld,
  GreaterSlantEqual: ud,
  GreaterTilde: pd,
  Gscr: fd,
  gscr: hd,
  gsim: dd,
  gsime: md,
  gsiml: gd,
  gtcc: _d,
  gtcir: bd,
  gt: kd,
  GT: vd,
  Gt: xd,
  gtdot: yd,
  gtlPar: wd,
  gtquest: Cd,
  gtrapprox: Ad,
  gtrarr: Ed,
  gtrdot: Dd,
  gtreqless: qd,
  gtreqqless: Sd,
  gtrless: Fd,
  gtrsim: Td,
  gvertneqq: Ld,
  gvnE: Rd,
  Hacek: zd,
  hairsp: Nd,
  half: Id,
  hamilt: Bd,
  HARDcy: Pd,
  hardcy: Od,
  harrcir: Md,
  harr: Ud,
  hArr: $d,
  harrw: Vd,
  Hat: jd,
  hbar: Gd,
  Hcirc: Hd,
  hcirc: Zd,
  hearts: Jd,
  heartsuit: Wd,
  hellip: Yd,
  hercon: Qd,
  hfr: Kd,
  Hfr: Xd,
  HilbertSpace: nm,
  hksearow: tm,
  hkswarow: rm,
  hoarr: em,
  homtht: om,
  hookleftarrow: sm,
  hookrightarrow: cm,
  hopf: im,
  Hopf: am,
  horbar: lm,
  HorizontalLine: um,
  hscr: pm,
  Hscr: fm,
  hslash: hm,
  Hstrok: dm,
  hstrok: mm,
  HumpDownHump: gm,
  HumpEqual: _m,
  hybull: bm,
  hyphen: km,
  Iacute: vm,
  iacute: xm,
  ic: ym,
  Icirc: wm,
  icirc: Cm,
  Icy: Am,
  icy: Em,
  Idot: Dm,
  IEcy: qm,
  iecy: Sm,
  iexcl: Fm,
  iff: Tm,
  ifr: Lm,
  Ifr: Rm,
  Igrave: zm,
  igrave: Nm,
  ii: Im,
  iiiint: Bm,
  iiint: Pm,
  iinfin: Om,
  iiota: Mm,
  IJlig: Um,
  ijlig: $m,
  Imacr: Vm,
  imacr: jm,
  image: Gm,
  ImaginaryI: Hm,
  imagline: Zm,
  imagpart: Jm,
  imath: Wm,
  Im: Ym,
  imof: Qm,
  imped: Km,
  Implies: Xm,
  incare: ng,
  in: "∈",
  infin: tg,
  infintie: rg,
  inodot: eg,
  intcal: og,
  int: sg,
  Int: cg,
  integers: ig,
  Integral: ag,
  intercal: lg,
  Intersection: ug,
  intlarhk: pg,
  intprod: fg,
  InvisibleComma: hg,
  InvisibleTimes: dg,
  IOcy: mg,
  iocy: gg,
  Iogon: _g,
  iogon: bg,
  Iopf: kg,
  iopf: vg,
  Iota: xg,
  iota: yg,
  iprod: wg,
  iquest: Cg,
  iscr: Ag,
  Iscr: Eg,
  isin: Dg,
  isindot: qg,
  isinE: Sg,
  isins: Fg,
  isinsv: Tg,
  isinv: Lg,
  it: Rg,
  Itilde: zg,
  itilde: Ng,
  Iukcy: Ig,
  iukcy: Bg,
  Iuml: Pg,
  iuml: Og,
  Jcirc: Mg,
  jcirc: Ug,
  Jcy: $g,
  jcy: Vg,
  Jfr: jg,
  jfr: Gg,
  jmath: Hg,
  Jopf: Zg,
  jopf: Jg,
  Jscr: Wg,
  jscr: Yg,
  Jsercy: Qg,
  jsercy: Kg,
  Jukcy: Xg,
  jukcy: n_,
  Kappa: t_,
  kappa: r_,
  kappav: e_,
  Kcedil: o_,
  kcedil: s_,
  Kcy: c_,
  kcy: i_,
  Kfr: a_,
  kfr: l_,
  kgreen: u_,
  KHcy: p_,
  khcy: f_,
  KJcy: h_,
  kjcy: d_,
  Kopf: m_,
  kopf: g_,
  Kscr: __,
  kscr: b_,
  lAarr: k_,
  Lacute: v_,
  lacute: x_,
  laemptyv: y_,
  lagran: w_,
  Lambda: C_,
  lambda: A_,
  lang: E_,
  Lang: D_,
  langd: q_,
  langle: S_,
  lap: F_,
  Laplacetrf: T_,
  laquo: L_,
  larrb: R_,
  larrbfs: z_,
  larr: N_,
  Larr: I_,
  lArr: B_,
  larrfs: P_,
  larrhk: O_,
  larrlp: M_,
  larrpl: U_,
  larrsim: $_,
  larrtl: V_,
  latail: j_,
  lAtail: G_,
  lat: H_,
  late: Z_,
  lates: J_,
  lbarr: W_,
  lBarr: Y_,
  lbbrk: Q_,
  lbrace: K_,
  lbrack: X_,
  lbrke: n0,
  lbrksld: t0,
  lbrkslu: r0,
  Lcaron: e0,
  lcaron: o0,
  Lcedil: s0,
  lcedil: c0,
  lceil: i0,
  lcub: a0,
  Lcy: l0,
  lcy: u0,
  ldca: p0,
  ldquo: f0,
  ldquor: h0,
  ldrdhar: d0,
  ldrushar: m0,
  ldsh: g0,
  le: _0,
  lE: b0,
  LeftAngleBracket: k0,
  LeftArrowBar: v0,
  leftarrow: x0,
  LeftArrow: y0,
  Leftarrow: w0,
  LeftArrowRightArrow: C0,
  leftarrowtail: A0,
  LeftCeiling: E0,
  LeftDoubleBracket: D0,
  LeftDownTeeVector: q0,
  LeftDownVectorBar: S0,
  LeftDownVector: F0,
  LeftFloor: T0,
  leftharpoondown: L0,
  leftharpoonup: R0,
  leftleftarrows: z0,
  leftrightarrow: N0,
  LeftRightArrow: I0,
  Leftrightarrow: B0,
  leftrightarrows: P0,
  leftrightharpoons: O0,
  leftrightsquigarrow: M0,
  LeftRightVector: U0,
  LeftTeeArrow: $0,
  LeftTee: V0,
  LeftTeeVector: j0,
  leftthreetimes: G0,
  LeftTriangleBar: H0,
  LeftTriangle: Z0,
  LeftTriangleEqual: J0,
  LeftUpDownVector: W0,
  LeftUpTeeVector: Y0,
  LeftUpVectorBar: Q0,
  LeftUpVector: K0,
  LeftVectorBar: X0,
  LeftVector: nb,
  lEg: tb,
  leg: rb,
  leq: eb,
  leqq: ob,
  leqslant: sb,
  lescc: cb,
  les: ib,
  lesdot: ab,
  lesdoto: lb,
  lesdotor: ub,
  lesg: pb,
  lesges: fb,
  lessapprox: hb,
  lessdot: db,
  lesseqgtr: mb,
  lesseqqgtr: gb,
  LessEqualGreater: _b,
  LessFullEqual: bb,
  LessGreater: kb,
  lessgtr: vb,
  LessLess: xb,
  lesssim: yb,
  LessSlantEqual: wb,
  LessTilde: Cb,
  lfisht: Ab,
  lfloor: Eb,
  Lfr: Db,
  lfr: qb,
  lg: Sb,
  lgE: Fb,
  lHar: Tb,
  lhard: Lb,
  lharu: Rb,
  lharul: zb,
  lhblk: Nb,
  LJcy: Ib,
  ljcy: Bb,
  llarr: Pb,
  ll: Ob,
  Ll: Mb,
  llcorner: Ub,
  Lleftarrow: $b,
  llhard: Vb,
  lltri: jb,
  Lmidot: Gb,
  lmidot: Hb,
  lmoustache: Zb,
  lmoust: Jb,
  lnap: Wb,
  lnapprox: Yb,
  lne: Qb,
  lnE: Kb,
  lneq: Xb,
  lneqq: nk,
  lnsim: tk,
  loang: rk,
  loarr: ek,
  lobrk: ok,
  longleftarrow: sk,
  LongLeftArrow: ck,
  Longleftarrow: ik,
  longleftrightarrow: ak,
  LongLeftRightArrow: lk,
  Longleftrightarrow: uk,
  longmapsto: pk,
  longrightarrow: fk,
  LongRightArrow: hk,
  Longrightarrow: dk,
  looparrowleft: mk,
  looparrowright: gk,
  lopar: _k,
  Lopf: bk,
  lopf: kk,
  loplus: vk,
  lotimes: xk,
  lowast: yk,
  lowbar: wk,
  LowerLeftArrow: Ck,
  LowerRightArrow: Ak,
  loz: Ek,
  lozenge: Dk,
  lozf: qk,
  lpar: Sk,
  lparlt: Fk,
  lrarr: Tk,
  lrcorner: Lk,
  lrhar: Rk,
  lrhard: zk,
  lrm: Nk,
  lrtri: Ik,
  lsaquo: Bk,
  lscr: Pk,
  Lscr: Ok,
  lsh: Mk,
  Lsh: Uk,
  lsim: $k,
  lsime: Vk,
  lsimg: jk,
  lsqb: Gk,
  lsquo: Hk,
  lsquor: Zk,
  Lstrok: Jk,
  lstrok: Wk,
  ltcc: Yk,
  ltcir: Qk,
  lt: Kk,
  LT: Xk,
  Lt: nv,
  ltdot: tv,
  lthree: rv,
  ltimes: ev,
  ltlarr: ov,
  ltquest: sv,
  ltri: cv,
  ltrie: iv,
  ltrif: av,
  ltrPar: lv,
  lurdshar: uv,
  luruhar: pv,
  lvertneqq: fv,
  lvnE: hv,
  macr: dv,
  male: mv,
  malt: gv,
  maltese: _v,
  Map: "⤅",
  map: bv,
  mapsto: kv,
  mapstodown: vv,
  mapstoleft: xv,
  mapstoup: yv,
  marker: wv,
  mcomma: Cv,
  Mcy: Av,
  mcy: Ev,
  mdash: Dv,
  mDDot: qv,
  measuredangle: Sv,
  MediumSpace: Fv,
  Mellintrf: Tv,
  Mfr: Lv,
  mfr: Rv,
  mho: zv,
  micro: Nv,
  midast: Iv,
  midcir: Bv,
  mid: Pv,
  middot: Ov,
  minusb: Mv,
  minus: Uv,
  minusd: $v,
  minusdu: Vv,
  MinusPlus: jv,
  mlcp: Gv,
  mldr: Hv,
  mnplus: Zv,
  models: Jv,
  Mopf: Wv,
  mopf: Yv,
  mp: Qv,
  mscr: Kv,
  Mscr: Xv,
  mstpos: nx,
  Mu: tx,
  mu: rx,
  multimap: ex,
  mumap: ox,
  nabla: sx,
  Nacute: cx,
  nacute: ix,
  nang: ax,
  nap: lx,
  napE: ux,
  napid: px,
  napos: fx,
  napprox: hx,
  natural: dx,
  naturals: mx,
  natur: gx,
  nbsp: _x,
  nbump: bx,
  nbumpe: kx,
  ncap: vx,
  Ncaron: xx,
  ncaron: yx,
  Ncedil: wx,
  ncedil: Cx,
  ncong: Ax,
  ncongdot: Ex,
  ncup: Dx,
  Ncy: qx,
  ncy: Sx,
  ndash: Fx,
  nearhk: Tx,
  nearr: Lx,
  neArr: Rx,
  nearrow: zx,
  ne: Nx,
  nedot: Ix,
  NegativeMediumSpace: Bx,
  NegativeThickSpace: Px,
  NegativeThinSpace: Ox,
  NegativeVeryThinSpace: Mx,
  nequiv: Ux,
  nesear: $x,
  nesim: Vx,
  NestedGreaterGreater: jx,
  NestedLessLess: Gx,
  NewLine: Hx,
  nexist: Zx,
  nexists: Jx,
  Nfr: Wx,
  nfr: Yx,
  ngE: Qx,
  nge: Kx,
  ngeq: Xx,
  ngeqq: ny,
  ngeqslant: ty,
  nges: ry,
  nGg: ey,
  ngsim: oy,
  nGt: sy,
  ngt: cy,
  ngtr: iy,
  nGtv: ay,
  nharr: ly,
  nhArr: uy,
  nhpar: py,
  ni: fy,
  nis: hy,
  nisd: dy,
  niv: my,
  NJcy: gy,
  njcy: _y,
  nlarr: by,
  nlArr: ky,
  nldr: vy,
  nlE: xy,
  nle: yy,
  nleftarrow: wy,
  nLeftarrow: Cy,
  nleftrightarrow: Ay,
  nLeftrightarrow: Ey,
  nleq: Dy,
  nleqq: qy,
  nleqslant: Sy,
  nles: Fy,
  nless: Ty,
  nLl: Ly,
  nlsim: Ry,
  nLt: zy,
  nlt: Ny,
  nltri: Iy,
  nltrie: By,
  nLtv: Py,
  nmid: Oy,
  NoBreak: My,
  NonBreakingSpace: Uy,
  nopf: $y,
  Nopf: Vy,
  Not: jy,
  not: Gy,
  NotCongruent: Hy,
  NotCupCap: Zy,
  NotDoubleVerticalBar: Jy,
  NotElement: Wy,
  NotEqual: Yy,
  NotEqualTilde: Qy,
  NotExists: Ky,
  NotGreater: Xy,
  NotGreaterEqual: nw,
  NotGreaterFullEqual: tw,
  NotGreaterGreater: rw,
  NotGreaterLess: ew,
  NotGreaterSlantEqual: ow,
  NotGreaterTilde: sw,
  NotHumpDownHump: cw,
  NotHumpEqual: iw,
  notin: aw,
  notindot: lw,
  notinE: uw,
  notinva: pw,
  notinvb: fw,
  notinvc: hw,
  NotLeftTriangleBar: dw,
  NotLeftTriangle: mw,
  NotLeftTriangleEqual: gw,
  NotLess: _w,
  NotLessEqual: bw,
  NotLessGreater: kw,
  NotLessLess: vw,
  NotLessSlantEqual: xw,
  NotLessTilde: yw,
  NotNestedGreaterGreater: ww,
  NotNestedLessLess: Cw,
  notni: Aw,
  notniva: Ew,
  notnivb: Dw,
  notnivc: qw,
  NotPrecedes: Sw,
  NotPrecedesEqual: Fw,
  NotPrecedesSlantEqual: Tw,
  NotReverseElement: Lw,
  NotRightTriangleBar: Rw,
  NotRightTriangle: zw,
  NotRightTriangleEqual: Nw,
  NotSquareSubset: Iw,
  NotSquareSubsetEqual: Bw,
  NotSquareSuperset: Pw,
  NotSquareSupersetEqual: Ow,
  NotSubset: Mw,
  NotSubsetEqual: Uw,
  NotSucceeds: $w,
  NotSucceedsEqual: Vw,
  NotSucceedsSlantEqual: jw,
  NotSucceedsTilde: Gw,
  NotSuperset: Hw,
  NotSupersetEqual: Zw,
  NotTilde: Jw,
  NotTildeEqual: Ww,
  NotTildeFullEqual: Yw,
  NotTildeTilde: Qw,
  NotVerticalBar: Kw,
  nparallel: Xw,
  npar: nC,
  nparsl: tC,
  npart: rC,
  npolint: eC,
  npr: oC,
  nprcue: sC,
  nprec: cC,
  npreceq: iC,
  npre: aC,
  nrarrc: lC,
  nrarr: uC,
  nrArr: pC,
  nrarrw: fC,
  nrightarrow: hC,
  nRightarrow: dC,
  nrtri: mC,
  nrtrie: gC,
  nsc: _C,
  nsccue: bC,
  nsce: kC,
  Nscr: vC,
  nscr: xC,
  nshortmid: yC,
  nshortparallel: wC,
  nsim: CC,
  nsime: AC,
  nsimeq: EC,
  nsmid: DC,
  nspar: qC,
  nsqsube: SC,
  nsqsupe: FC,
  nsub: TC,
  nsubE: LC,
  nsube: RC,
  nsubset: zC,
  nsubseteq: NC,
  nsubseteqq: IC,
  nsucc: BC,
  nsucceq: PC,
  nsup: OC,
  nsupE: MC,
  nsupe: UC,
  nsupset: $C,
  nsupseteq: VC,
  nsupseteqq: jC,
  ntgl: GC,
  Ntilde: HC,
  ntilde: ZC,
  ntlg: JC,
  ntriangleleft: WC,
  ntrianglelefteq: YC,
  ntriangleright: QC,
  ntrianglerighteq: KC,
  Nu: XC,
  nu: nA,
  num: tA,
  numero: rA,
  numsp: eA,
  nvap: oA,
  nvdash: sA,
  nvDash: cA,
  nVdash: iA,
  nVDash: aA,
  nvge: lA,
  nvgt: uA,
  nvHarr: pA,
  nvinfin: fA,
  nvlArr: hA,
  nvle: dA,
  nvlt: mA,
  nvltrie: gA,
  nvrArr: _A,
  nvrtrie: bA,
  nvsim: kA,
  nwarhk: vA,
  nwarr: xA,
  nwArr: yA,
  nwarrow: wA,
  nwnear: CA,
  Oacute: AA,
  oacute: EA,
  oast: DA,
  Ocirc: qA,
  ocirc: SA,
  ocir: FA,
  Ocy: TA,
  ocy: LA,
  odash: RA,
  Odblac: zA,
  odblac: NA,
  odiv: IA,
  odot: BA,
  odsold: PA,
  OElig: OA,
  oelig: MA,
  ofcir: UA,
  Ofr: $A,
  ofr: VA,
  ogon: jA,
  Ograve: GA,
  ograve: HA,
  ogt: ZA,
  ohbar: JA,
  ohm: WA,
  oint: YA,
  olarr: QA,
  olcir: KA,
  olcross: XA,
  oline: n1,
  olt: t1,
  Omacr: r1,
  omacr: e1,
  Omega: o1,
  omega: s1,
  Omicron: c1,
  omicron: i1,
  omid: a1,
  ominus: l1,
  Oopf: u1,
  oopf: p1,
  opar: f1,
  OpenCurlyDoubleQuote: h1,
  OpenCurlyQuote: d1,
  operp: m1,
  oplus: g1,
  orarr: _1,
  Or: b1,
  or: k1,
  ord: v1,
  order: x1,
  orderof: y1,
  ordf: w1,
  ordm: C1,
  origof: A1,
  oror: E1,
  orslope: D1,
  orv: q1,
  oS: S1,
  Oscr: F1,
  oscr: T1,
  Oslash: L1,
  oslash: R1,
  osol: z1,
  Otilde: N1,
  otilde: I1,
  otimesas: B1,
  Otimes: P1,
  otimes: O1,
  Ouml: M1,
  ouml: U1,
  ovbar: $1,
  OverBar: V1,
  OverBrace: j1,
  OverBracket: G1,
  OverParenthesis: H1,
  para: Z1,
  parallel: J1,
  par: W1,
  parsim: Y1,
  parsl: Q1,
  part: K1,
  PartialD: X1,
  Pcy: nE,
  pcy: tE,
  percnt: rE,
  period: eE,
  permil: oE,
  perp: sE,
  pertenk: cE,
  Pfr: iE,
  pfr: aE,
  Phi: lE,
  phi: uE,
  phiv: pE,
  phmmat: fE,
  phone: hE,
  Pi: dE,
  pi: mE,
  pitchfork: gE,
  piv: _E,
  planck: bE,
  planckh: kE,
  plankv: vE,
  plusacir: xE,
  plusb: yE,
  pluscir: wE,
  plus: CE,
  plusdo: AE,
  plusdu: EE,
  pluse: DE,
  PlusMinus: qE,
  plusmn: SE,
  plussim: FE,
  plustwo: TE,
  pm: LE,
  Poincareplane: RE,
  pointint: zE,
  popf: NE,
  Popf: IE,
  pound: BE,
  prap: PE,
  Pr: OE,
  pr: ME,
  prcue: UE,
  precapprox: $E,
  prec: VE,
  preccurlyeq: jE,
  Precedes: GE,
  PrecedesEqual: HE,
  PrecedesSlantEqual: ZE,
  PrecedesTilde: JE,
  preceq: WE,
  precnapprox: YE,
  precneqq: QE,
  precnsim: KE,
  pre: XE,
  prE: nD,
  precsim: tD,
  prime: rD,
  Prime: eD,
  primes: oD,
  prnap: sD,
  prnE: cD,
  prnsim: iD,
  prod: aD,
  Product: lD,
  profalar: uD,
  profline: pD,
  profsurf: fD,
  prop: hD,
  Proportional: dD,
  Proportion: mD,
  propto: gD,
  prsim: _D,
  prurel: bD,
  Pscr: kD,
  pscr: vD,
  Psi: xD,
  psi: yD,
  puncsp: wD,
  Qfr: CD,
  qfr: AD,
  qint: ED,
  qopf: DD,
  Qopf: qD,
  qprime: SD,
  Qscr: FD,
  qscr: TD,
  quaternions: LD,
  quatint: RD,
  quest: zD,
  questeq: ND,
  quot: ID,
  QUOT: BD,
  rAarr: PD,
  race: OD,
  Racute: MD,
  racute: UD,
  radic: $D,
  raemptyv: VD,
  rang: jD,
  Rang: GD,
  rangd: HD,
  range: ZD,
  rangle: JD,
  raquo: WD,
  rarrap: YD,
  rarrb: QD,
  rarrbfs: KD,
  rarrc: XD,
  rarr: nq,
  Rarr: tq,
  rArr: rq,
  rarrfs: eq,
  rarrhk: oq,
  rarrlp: sq,
  rarrpl: cq,
  rarrsim: iq,
  Rarrtl: aq,
  rarrtl: lq,
  rarrw: uq,
  ratail: pq,
  rAtail: fq,
  ratio: hq,
  rationals: dq,
  rbarr: mq,
  rBarr: gq,
  RBarr: _q,
  rbbrk: bq,
  rbrace: kq,
  rbrack: vq,
  rbrke: xq,
  rbrksld: yq,
  rbrkslu: wq,
  Rcaron: Cq,
  rcaron: Aq,
  Rcedil: Eq,
  rcedil: Dq,
  rceil: qq,
  rcub: Sq,
  Rcy: Fq,
  rcy: Tq,
  rdca: Lq,
  rdldhar: Rq,
  rdquo: zq,
  rdquor: Nq,
  rdsh: Iq,
  real: Bq,
  realine: Pq,
  realpart: Oq,
  reals: Mq,
  Re: Uq,
  rect: $q,
  reg: Vq,
  REG: jq,
  ReverseElement: Gq,
  ReverseEquilibrium: Hq,
  ReverseUpEquilibrium: Zq,
  rfisht: Jq,
  rfloor: Wq,
  rfr: Yq,
  Rfr: Qq,
  rHar: Kq,
  rhard: Xq,
  rharu: nS,
  rharul: tS,
  Rho: rS,
  rho: eS,
  rhov: oS,
  RightAngleBracket: sS,
  RightArrowBar: cS,
  rightarrow: iS,
  RightArrow: aS,
  Rightarrow: lS,
  RightArrowLeftArrow: uS,
  rightarrowtail: pS,
  RightCeiling: fS,
  RightDoubleBracket: hS,
  RightDownTeeVector: dS,
  RightDownVectorBar: mS,
  RightDownVector: gS,
  RightFloor: _S,
  rightharpoondown: bS,
  rightharpoonup: kS,
  rightleftarrows: vS,
  rightleftharpoons: xS,
  rightrightarrows: yS,
  rightsquigarrow: wS,
  RightTeeArrow: CS,
  RightTee: AS,
  RightTeeVector: ES,
  rightthreetimes: DS,
  RightTriangleBar: qS,
  RightTriangle: SS,
  RightTriangleEqual: FS,
  RightUpDownVector: TS,
  RightUpTeeVector: LS,
  RightUpVectorBar: RS,
  RightUpVector: zS,
  RightVectorBar: NS,
  RightVector: IS,
  ring: BS,
  risingdotseq: PS,
  rlarr: OS,
  rlhar: MS,
  rlm: US,
  rmoustache: $S,
  rmoust: VS,
  rnmid: jS,
  roang: GS,
  roarr: HS,
  robrk: ZS,
  ropar: JS,
  ropf: WS,
  Ropf: YS,
  roplus: QS,
  rotimes: KS,
  RoundImplies: XS,
  rpar: nF,
  rpargt: tF,
  rppolint: rF,
  rrarr: eF,
  Rrightarrow: oF,
  rsaquo: sF,
  rscr: cF,
  Rscr: iF,
  rsh: aF,
  Rsh: lF,
  rsqb: uF,
  rsquo: pF,
  rsquor: fF,
  rthree: hF,
  rtimes: dF,
  rtri: mF,
  rtrie: gF,
  rtrif: _F,
  rtriltri: bF,
  RuleDelayed: kF,
  ruluhar: vF,
  rx: xF,
  Sacute: yF,
  sacute: wF,
  sbquo: CF,
  scap: AF,
  Scaron: EF,
  scaron: DF,
  Sc: qF,
  sc: SF,
  sccue: FF,
  sce: TF,
  scE: LF,
  Scedil: RF,
  scedil: zF,
  Scirc: NF,
  scirc: IF,
  scnap: BF,
  scnE: PF,
  scnsim: OF,
  scpolint: MF,
  scsim: UF,
  Scy: $F,
  scy: VF,
  sdotb: jF,
  sdot: GF,
  sdote: HF,
  searhk: ZF,
  searr: JF,
  seArr: WF,
  searrow: YF,
  sect: QF,
  semi: KF,
  seswar: XF,
  setminus: nT,
  setmn: tT,
  sext: rT,
  Sfr: eT,
  sfr: oT,
  sfrown: sT,
  sharp: cT,
  SHCHcy: iT,
  shchcy: aT,
  SHcy: lT,
  shcy: uT,
  ShortDownArrow: pT,
  ShortLeftArrow: fT,
  shortmid: hT,
  shortparallel: dT,
  ShortRightArrow: mT,
  ShortUpArrow: gT,
  shy: _T,
  Sigma: bT,
  sigma: kT,
  sigmaf: vT,
  sigmav: xT,
  sim: yT,
  simdot: wT,
  sime: CT,
  simeq: AT,
  simg: ET,
  simgE: DT,
  siml: qT,
  simlE: ST,
  simne: FT,
  simplus: TT,
  simrarr: LT,
  slarr: RT,
  SmallCircle: zT,
  smallsetminus: NT,
  smashp: IT,
  smeparsl: BT,
  smid: PT,
  smile: OT,
  smt: MT,
  smte: UT,
  smtes: $T,
  SOFTcy: VT,
  softcy: jT,
  solbar: GT,
  solb: HT,
  sol: ZT,
  Sopf: JT,
  sopf: WT,
  spades: YT,
  spadesuit: QT,
  spar: KT,
  sqcap: XT,
  sqcaps: nL,
  sqcup: tL,
  sqcups: rL,
  Sqrt: eL,
  sqsub: oL,
  sqsube: sL,
  sqsubset: cL,
  sqsubseteq: iL,
  sqsup: aL,
  sqsupe: lL,
  sqsupset: uL,
  sqsupseteq: pL,
  square: fL,
  Square: hL,
  SquareIntersection: dL,
  SquareSubset: mL,
  SquareSubsetEqual: gL,
  SquareSuperset: _L,
  SquareSupersetEqual: bL,
  SquareUnion: kL,
  squarf: vL,
  squ: xL,
  squf: yL,
  srarr: wL,
  Sscr: CL,
  sscr: AL,
  ssetmn: EL,
  ssmile: DL,
  sstarf: qL,
  Star: SL,
  star: FL,
  starf: TL,
  straightepsilon: LL,
  straightphi: RL,
  strns: zL,
  sub: NL,
  Sub: IL,
  subdot: BL,
  subE: PL,
  sube: OL,
  subedot: ML,
  submult: UL,
  subnE: $L,
  subne: VL,
  subplus: jL,
  subrarr: GL,
  subset: HL,
  Subset: ZL,
  subseteq: JL,
  subseteqq: WL,
  SubsetEqual: YL,
  subsetneq: QL,
  subsetneqq: KL,
  subsim: XL,
  subsub: n2,
  subsup: t2,
  succapprox: r2,
  succ: e2,
  succcurlyeq: o2,
  Succeeds: s2,
  SucceedsEqual: c2,
  SucceedsSlantEqual: i2,
  SucceedsTilde: a2,
  succeq: l2,
  succnapprox: u2,
  succneqq: p2,
  succnsim: f2,
  succsim: h2,
  SuchThat: d2,
  sum: m2,
  Sum: g2,
  sung: _2,
  sup1: b2,
  sup2: k2,
  sup3: v2,
  sup: x2,
  Sup: y2,
  supdot: w2,
  supdsub: C2,
  supE: A2,
  supe: E2,
  supedot: D2,
  Superset: q2,
  SupersetEqual: S2,
  suphsol: F2,
  suphsub: T2,
  suplarr: L2,
  supmult: R2,
  supnE: z2,
  supne: N2,
  supplus: I2,
  supset: B2,
  Supset: P2,
  supseteq: O2,
  supseteqq: M2,
  supsetneq: U2,
  supsetneqq: $2,
  supsim: V2,
  supsub: j2,
  supsup: G2,
  swarhk: H2,
  swarr: Z2,
  swArr: J2,
  swarrow: W2,
  swnwar: Y2,
  szlig: Q2,
  Tab: K2,
  target: X2,
  Tau: nR,
  tau: tR,
  tbrk: rR,
  Tcaron: eR,
  tcaron: oR,
  Tcedil: sR,
  tcedil: cR,
  Tcy: iR,
  tcy: aR,
  tdot: lR,
  telrec: uR,
  Tfr: pR,
  tfr: fR,
  there4: hR,
  therefore: dR,
  Therefore: mR,
  Theta: gR,
  theta: _R,
  thetasym: bR,
  thetav: kR,
  thickapprox: vR,
  thicksim: xR,
  ThickSpace: yR,
  ThinSpace: wR,
  thinsp: CR,
  thkap: AR,
  thksim: ER,
  THORN: DR,
  thorn: qR,
  tilde: SR,
  Tilde: FR,
  TildeEqual: TR,
  TildeFullEqual: LR,
  TildeTilde: RR,
  timesbar: zR,
  timesb: NR,
  times: IR,
  timesd: BR,
  tint: PR,
  toea: OR,
  topbot: MR,
  topcir: UR,
  top: $R,
  Topf: VR,
  topf: jR,
  topfork: GR,
  tosa: HR,
  tprime: ZR,
  trade: JR,
  TRADE: WR,
  triangle: YR,
  triangledown: QR,
  triangleleft: KR,
  trianglelefteq: XR,
  triangleq: nz,
  triangleright: tz,
  trianglerighteq: rz,
  tridot: ez,
  trie: oz,
  triminus: sz,
  TripleDot: cz,
  triplus: iz,
  trisb: az,
  tritime: lz,
  trpezium: uz,
  Tscr: pz,
  tscr: fz,
  TScy: hz,
  tscy: dz,
  TSHcy: mz,
  tshcy: gz,
  Tstrok: _z,
  tstrok: bz,
  twixt: kz,
  twoheadleftarrow: vz,
  twoheadrightarrow: xz,
  Uacute: yz,
  uacute: wz,
  uarr: Cz,
  Uarr: Az,
  uArr: Ez,
  Uarrocir: Dz,
  Ubrcy: qz,
  ubrcy: Sz,
  Ubreve: Fz,
  ubreve: Tz,
  Ucirc: Lz,
  ucirc: Rz,
  Ucy: zz,
  ucy: Nz,
  udarr: Iz,
  Udblac: Bz,
  udblac: Pz,
  udhar: Oz,
  ufisht: Mz,
  Ufr: Uz,
  ufr: $z,
  Ugrave: Vz,
  ugrave: jz,
  uHar: Gz,
  uharl: Hz,
  uharr: Zz,
  uhblk: Jz,
  ulcorn: Wz,
  ulcorner: Yz,
  ulcrop: Qz,
  ultri: Kz,
  Umacr: Xz,
  umacr: nN,
  uml: tN,
  UnderBar: rN,
  UnderBrace: eN,
  UnderBracket: oN,
  UnderParenthesis: sN,
  Union: cN,
  UnionPlus: iN,
  Uogon: aN,
  uogon: lN,
  Uopf: uN,
  uopf: pN,
  UpArrowBar: fN,
  uparrow: hN,
  UpArrow: dN,
  Uparrow: mN,
  UpArrowDownArrow: gN,
  updownarrow: _N,
  UpDownArrow: bN,
  Updownarrow: kN,
  UpEquilibrium: vN,
  upharpoonleft: xN,
  upharpoonright: yN,
  uplus: wN,
  UpperLeftArrow: CN,
  UpperRightArrow: AN,
  upsi: EN,
  Upsi: DN,
  upsih: qN,
  Upsilon: SN,
  upsilon: FN,
  UpTeeArrow: TN,
  UpTee: LN,
  upuparrows: RN,
  urcorn: zN,
  urcorner: NN,
  urcrop: IN,
  Uring: BN,
  uring: PN,
  urtri: ON,
  Uscr: MN,
  uscr: UN,
  utdot: $N,
  Utilde: VN,
  utilde: jN,
  utri: GN,
  utrif: HN,
  uuarr: ZN,
  Uuml: JN,
  uuml: WN,
  uwangle: YN,
  vangrt: QN,
  varepsilon: KN,
  varkappa: XN,
  varnothing: nI,
  varphi: tI,
  varpi: rI,
  varpropto: eI,
  varr: oI,
  vArr: sI,
  varrho: cI,
  varsigma: iI,
  varsubsetneq: aI,
  varsubsetneqq: lI,
  varsupsetneq: uI,
  varsupsetneqq: pI,
  vartheta: fI,
  vartriangleleft: hI,
  vartriangleright: dI,
  vBar: mI,
  Vbar: gI,
  vBarv: _I,
  Vcy: bI,
  vcy: kI,
  vdash: vI,
  vDash: xI,
  Vdash: yI,
  VDash: wI,
  Vdashl: CI,
  veebar: AI,
  vee: EI,
  Vee: DI,
  veeeq: qI,
  vellip: SI,
  verbar: FI,
  Verbar: TI,
  vert: LI,
  Vert: RI,
  VerticalBar: zI,
  VerticalLine: NI,
  VerticalSeparator: II,
  VerticalTilde: BI,
  VeryThinSpace: PI,
  Vfr: OI,
  vfr: MI,
  vltri: UI,
  vnsub: $I,
  vnsup: VI,
  Vopf: jI,
  vopf: GI,
  vprop: HI,
  vrtri: ZI,
  Vscr: JI,
  vscr: WI,
  vsubnE: YI,
  vsubne: QI,
  vsupnE: KI,
  vsupne: XI,
  Vvdash: nB,
  vzigzag: tB,
  Wcirc: rB,
  wcirc: eB,
  wedbar: oB,
  wedge: sB,
  Wedge: cB,
  wedgeq: iB,
  weierp: aB,
  Wfr: lB,
  wfr: uB,
  Wopf: pB,
  wopf: fB,
  wp: hB,
  wr: dB,
  wreath: mB,
  Wscr: gB,
  wscr: _B,
  xcap: bB,
  xcirc: kB,
  xcup: vB,
  xdtri: xB,
  Xfr: yB,
  xfr: wB,
  xharr: CB,
  xhArr: AB,
  Xi: EB,
  xi: DB,
  xlarr: qB,
  xlArr: SB,
  xmap: FB,
  xnis: TB,
  xodot: LB,
  Xopf: RB,
  xopf: zB,
  xoplus: NB,
  xotime: IB,
  xrarr: BB,
  xrArr: PB,
  Xscr: OB,
  xscr: MB,
  xsqcup: UB,
  xuplus: $B,
  xutri: VB,
  xvee: jB,
  xwedge: GB,
  Yacute: HB,
  yacute: ZB,
  YAcy: JB,
  yacy: WB,
  Ycirc: YB,
  ycirc: QB,
  Ycy: KB,
  ycy: XB,
  yen: nP,
  Yfr: tP,
  yfr: rP,
  YIcy: eP,
  yicy: oP,
  Yopf: sP,
  yopf: cP,
  Yscr: iP,
  yscr: aP,
  YUcy: lP,
  yucy: uP,
  yuml: pP,
  Yuml: fP,
  Zacute: hP,
  zacute: dP,
  Zcaron: mP,
  zcaron: gP,
  Zcy: _P,
  zcy: bP,
  Zdot: kP,
  zdot: vP,
  zeetrf: xP,
  ZeroWidthSpace: yP,
  Zeta: wP,
  zeta: CP,
  zfr: AP,
  Zfr: EP,
  ZHcy: DP,
  zhcy: qP,
  zigrarr: SP,
  zopf: FP,
  Zopf: TP,
  Zscr: LP,
  zscr: RP,
  zwj: zP,
  zwnj: NP
};
var Bt = IP, Pn = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, J = {}, Jn = {};
function BP(r) {
  var n, t, e = Jn[r];
  if (e)
    return e;
  for (e = Jn[r] = [], n = 0; n < 128; n++)
    t = String.fromCharCode(n), /^[0-9a-z]$/i.test(t) ? e.push(t) : e.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  for (n = 0; n < r.length; n++)
    e[r.charCodeAt(n)] = r[n];
  return e;
}
function pn(r, n, t) {
  var e, s, o, c, i, a = "";
  for (typeof n != "string" && (t = n, n = pn.defaultChars), typeof t > "u" && (t = !0), i = BP(n), e = 0, s = r.length; e < s; e++) {
    if (o = r.charCodeAt(e), t && o === 37 && e + 2 < s && /^[0-9a-f]{2}$/i.test(r.slice(e + 1, e + 3))) {
      a += r.slice(e, e + 3), e += 2;
      continue;
    }
    if (o < 128) {
      a += i[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && e + 1 < s && (c = r.charCodeAt(e + 1), c >= 56320 && c <= 57343)) {
        a += encodeURIComponent(r[e] + r[e + 1]), e++;
        continue;
      }
      a += "%EF%BF%BD";
      continue;
    }
    a += encodeURIComponent(r[e]);
  }
  return a;
}
pn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
pn.componentChars = "-_.!~*'()";
var PP = pn, Wn = {};
function OP(r) {
  var n, t, e = Wn[r];
  if (e)
    return e;
  for (e = Wn[r] = [], n = 0; n < 128; n++)
    t = String.fromCharCode(n), e.push(t);
  for (n = 0; n < r.length; n++)
    t = r.charCodeAt(n), e[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
  return e;
}
function fn(r, n) {
  var t;
  return typeof n != "string" && (n = fn.defaultChars), t = OP(n), r.replace(/(%[a-f0-9]{2})+/gi, function(e) {
    var s, o, c, i, a, l, u, p = "";
    for (s = 0, o = e.length; s < o; s += 3) {
      if (c = parseInt(e.slice(s + 1, s + 3), 16), c < 128) {
        p += t[c];
        continue;
      }
      if ((c & 224) === 192 && s + 3 < o && (i = parseInt(e.slice(s + 4, s + 6), 16), (i & 192) === 128)) {
        u = c << 6 & 1984 | i & 63, u < 128 ? p += "��" : p += String.fromCharCode(u), s += 3;
        continue;
      }
      if ((c & 240) === 224 && s + 6 < o && (i = parseInt(e.slice(s + 4, s + 6), 16), a = parseInt(e.slice(s + 7, s + 9), 16), (i & 192) === 128 && (a & 192) === 128)) {
        u = c << 12 & 61440 | i << 6 & 4032 | a & 63, u < 2048 || u >= 55296 && u <= 57343 ? p += "���" : p += String.fromCharCode(u), s += 6;
        continue;
      }
      if ((c & 248) === 240 && s + 9 < o && (i = parseInt(e.slice(s + 4, s + 6), 16), a = parseInt(e.slice(s + 7, s + 9), 16), l = parseInt(e.slice(s + 10, s + 12), 16), (i & 192) === 128 && (a & 192) === 128 && (l & 192) === 128)) {
        u = c << 18 & 1835008 | i << 12 & 258048 | a << 6 & 4032 | l & 63, u < 65536 || u > 1114111 ? p += "����" : (u -= 65536, p += String.fromCharCode(55296 + (u >> 10), 56320 + (u & 1023))), s += 9;
        continue;
      }
      p += "�";
    }
    return p;
  });
}
fn.defaultChars = ";/?:@&=+$,#";
fn.componentChars = "";
var MP = fn, UP = function(n) {
  var t = "";
  return t += n.protocol || "", t += n.slashes ? "//" : "", t += n.auth ? n.auth + "@" : "", n.hostname && n.hostname.indexOf(":") !== -1 ? t += "[" + n.hostname + "]" : t += n.hostname || "", t += n.port ? ":" + n.port : "", t += n.pathname || "", t += n.search || "", t += n.hash || "", t;
};
function ln() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var $P = /^([a-z0-9.+-]+:)/i, VP = /:[0-9]*$/, jP = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, GP = ["<", ">", '"', "`", " ", "\r", `
`, "	"], HP = ["{", "}", "|", "\\", "^", "`"].concat(GP), ZP = ["'"].concat(HP), Yn = ["%", "/", "?", ";", "#"].concat(ZP), Qn = ["/", "?", "#"], JP = 255, Kn = /^[+a-z0-9A-Z_-]{0,63}$/, WP = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Xn = {
  javascript: !0,
  "javascript:": !0
}, nt = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function YP(r, n) {
  if (r && r instanceof ln)
    return r;
  var t = new ln();
  return t.parse(r, n), t;
}
ln.prototype.parse = function(r, n) {
  var t, e, s, o, c, i = r;
  if (i = i.trim(), !n && r.split("#").length === 1) {
    var a = jP.exec(i);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var l = $P.exec(i);
  if (l && (l = l[0], s = l.toLowerCase(), this.protocol = l, i = i.substr(l.length)), (n || l || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (c = i.substr(0, 2) === "//", c && !(l && Xn[l]) && (i = i.substr(2), this.slashes = !0)), !Xn[l] && (c || l && !nt[l])) {
    var u = -1;
    for (t = 0; t < Qn.length; t++)
      o = i.indexOf(Qn[t]), o !== -1 && (u === -1 || o < u) && (u = o);
    var p, f;
    for (u === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", u), f !== -1 && (p = i.slice(0, f), i = i.slice(f + 1), this.auth = p), u = -1, t = 0; t < Yn.length; t++)
      o = i.indexOf(Yn[t]), o !== -1 && (u === -1 || o < u) && (u = o);
    u === -1 && (u = i.length), i[u - 1] === ":" && u--;
    var h = i.slice(0, u);
    i = i.slice(u), this.parseHost(h), this.hostname = this.hostname || "";
    var b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      var _ = this.hostname.split(/\./);
      for (t = 0, e = _.length; t < e; t++) {
        var x = _[t];
        if (x && !x.match(Kn)) {
          for (var k = "", m = 0, y = x.length; m < y; m++)
            x.charCodeAt(m) > 127 ? k += "x" : k += x[m];
          if (!k.match(Kn)) {
            var w = _.slice(0, t), C = _.slice(t + 1), g = x.match(WP);
            g && (w.push(g[1]), C.unshift(g[2])), C.length && (i = C.join(".") + i), this.hostname = w.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > JP && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var q = i.indexOf("#");
  q !== -1 && (this.hash = i.substr(q), i = i.slice(0, q));
  var S = i.indexOf("?");
  return S !== -1 && (this.search = i.substr(S), i = i.slice(0, S)), i && (this.pathname = i), nt[s] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
ln.prototype.parseHost = function(r) {
  var n = VP.exec(r);
  n && (n = n[0], n !== ":" && (this.port = n.substr(1)), r = r.substr(0, r.length - n.length)), r && (this.hostname = r);
};
var QP = YP;
J.encode = PP;
J.decode = MP;
J.format = UP;
J.parse = QP;
var $ = {}, xn, tt;
function Pt() {
  return tt || (tt = 1, xn = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), xn;
}
var yn, rt;
function Ot() {
  return rt || (rt = 1, yn = /[\0-\x1F\x7F-\x9F]/), yn;
}
var wn, et;
function KP() {
  return et || (et = 1, wn = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), wn;
}
var Cn, ot;
function Mt() {
  return ot || (ot = 1, Cn = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Cn;
}
var st;
function XP() {
  return st || (st = 1, $.Any = Pt(), $.Cc = Ot(), $.Cf = KP(), $.P = Pn, $.Z = Mt()), $;
}
(function(r) {
  function n(d) {
    return Object.prototype.toString.call(d);
  }
  function t(d) {
    return n(d) === "[object String]";
  }
  var e = Object.prototype.hasOwnProperty;
  function s(d, A) {
    return e.call(d, A);
  }
  function o(d) {
    var A = Array.prototype.slice.call(arguments, 1);
    return A.forEach(function(v) {
      if (v) {
        if (typeof v != "object")
          throw new TypeError(v + "must be object");
        Object.keys(v).forEach(function(P) {
          d[P] = v[P];
        });
      }
    }), d;
  }
  function c(d, A, v) {
    return [].concat(d.slice(0, A), v, d.slice(A + 1));
  }
  function i(d) {
    return !(d >= 55296 && d <= 57343 || d >= 64976 && d <= 65007 || (d & 65535) === 65535 || (d & 65535) === 65534 || d >= 0 && d <= 8 || d === 11 || d >= 14 && d <= 31 || d >= 127 && d <= 159 || d > 1114111);
  }
  function a(d) {
    if (d > 65535) {
      d -= 65536;
      var A = 55296 + (d >> 10), v = 56320 + (d & 1023);
      return String.fromCharCode(A, v);
    }
    return String.fromCharCode(d);
  }
  var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, p = new RegExp(l.source + "|" + u.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, h = Bt;
  function b(d, A) {
    var v;
    return s(h, A) ? h[A] : A.charCodeAt(0) === 35 && f.test(A) && (v = A[1].toLowerCase() === "x" ? parseInt(A.slice(2), 16) : parseInt(A.slice(1), 10), i(v)) ? a(v) : d;
  }
  function _(d) {
    return d.indexOf("\\") < 0 ? d : d.replace(l, "$1");
  }
  function x(d) {
    return d.indexOf("\\") < 0 && d.indexOf("&") < 0 ? d : d.replace(p, function(A, v, P) {
      return v || b(A, P);
    });
  }
  var k = /[&<>"]/, m = /[&<>"]/g, y = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function w(d) {
    return y[d];
  }
  function C(d) {
    return k.test(d) ? d.replace(m, w) : d;
  }
  var g = /[.?*+^$[\]\\(){}|-]/g;
  function q(d) {
    return d.replace(g, "\\$&");
  }
  function S(d) {
    switch (d) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function B(d) {
    if (d >= 8192 && d <= 8202)
      return !0;
    switch (d) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var D = Pn;
  function R(d) {
    return D.test(d);
  }
  function G(d) {
    switch (d) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function Q(d) {
    return d = d.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (d = d.replace(/ẞ/g, "ß")), d.toLowerCase().toUpperCase();
  }
  r.lib = {}, r.lib.mdurl = J, r.lib.ucmicro = XP(), r.assign = o, r.isString = t, r.has = s, r.unescapeMd = _, r.unescapeAll = x, r.isValidEntityCode = i, r.fromCodePoint = a, r.escapeHtml = C, r.arrayReplaceAt = c, r.isSpace = S, r.isWhiteSpace = B, r.isMdAsciiPunct = G, r.isPunctChar = R, r.escapeRE = q, r.normalizeReference = Q;
})(E);
var hn = {}, n3 = function(n, t, e) {
  var s, o, c, i, a = -1, l = n.posMax, u = n.pos;
  for (n.pos = t + 1, s = 1; n.pos < l; ) {
    if (c = n.src.charCodeAt(n.pos), c === 93 && (s--, s === 0)) {
      o = !0;
      break;
    }
    if (i = n.pos, n.md.inline.skipToken(n), c === 91) {
      if (i === n.pos - 1)
        s++;
      else if (e)
        return n.pos = u, -1;
    }
  }
  return o && (a = n.pos), n.pos = u, a;
}, ct = E.unescapeAll, t3 = function(n, t, e) {
  var s, o, c = t, i = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n.charCodeAt(c) === 60) {
    for (c++; c < e; ) {
      if (s = n.charCodeAt(c), s === 10 || s === 60)
        return i;
      if (s === 62)
        return i.pos = c + 1, i.str = ct(n.slice(t + 1, c)), i.ok = !0, i;
      if (s === 92 && c + 1 < e) {
        c += 2;
        continue;
      }
      c++;
    }
    return i;
  }
  for (o = 0; c < e && (s = n.charCodeAt(c), !(s === 32 || s < 32 || s === 127)); ) {
    if (s === 92 && c + 1 < e) {
      if (n.charCodeAt(c + 1) === 32)
        break;
      c += 2;
      continue;
    }
    if (s === 40 && (o++, o > 32))
      return i;
    if (s === 41) {
      if (o === 0)
        break;
      o--;
    }
    c++;
  }
  return t === c || o !== 0 || (i.str = ct(n.slice(t, c)), i.pos = c, i.ok = !0), i;
}, r3 = E.unescapeAll, e3 = function(n, t, e) {
  var s, o, c = 0, i = t, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (i >= e || (o = n.charCodeAt(i), o !== 34 && o !== 39 && o !== 40))
    return a;
  for (i++, o === 40 && (o = 41); i < e; ) {
    if (s = n.charCodeAt(i), s === o)
      return a.pos = i + 1, a.lines = c, a.str = r3(n.slice(t + 1, i)), a.ok = !0, a;
    if (s === 40 && o === 41)
      return a;
    s === 10 ? c++ : s === 92 && i + 1 < e && (i++, n.charCodeAt(i) === 10 && c++), i++;
  }
  return a;
};
hn.parseLinkLabel = n3;
hn.parseLinkDestination = t3;
hn.parseLinkTitle = e3;
var o3 = E.assign, s3 = E.unescapeAll, j = E.escapeHtml, N = {};
N.code_inline = function(r, n, t, e, s) {
  var o = r[n];
  return "<code" + s.renderAttrs(o) + ">" + j(o.content) + "</code>";
};
N.code_block = function(r, n, t, e, s) {
  var o = r[n];
  return "<pre" + s.renderAttrs(o) + "><code>" + j(r[n].content) + `</code></pre>
`;
};
N.fence = function(r, n, t, e, s) {
  var o = r[n], c = o.info ? s3(o.info).trim() : "", i = "", a = "", l, u, p, f, h;
  return c && (p = c.split(/(\s+)/g), i = p[0], a = p.slice(2).join("")), t.highlight ? l = t.highlight(o.content, i, a) || j(o.content) : l = j(o.content), l.indexOf("<pre") === 0 ? l + `
` : c ? (u = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [], u < 0 ? f.push(["class", t.langPrefix + i]) : (f[u] = f[u].slice(), f[u][1] += " " + t.langPrefix + i), h = {
    attrs: f
  }, "<pre><code" + s.renderAttrs(h) + ">" + l + `</code></pre>
`) : "<pre><code" + s.renderAttrs(o) + ">" + l + `</code></pre>
`;
};
N.image = function(r, n, t, e, s) {
  var o = r[n];
  return o.attrs[o.attrIndex("alt")][1] = s.renderInlineAsText(o.children, t, e), s.renderToken(r, n, t);
};
N.hardbreak = function(r, n, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
N.softbreak = function(r, n, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
N.text = function(r, n) {
  return j(r[n].content);
};
N.html_block = function(r, n) {
  return r[n].content;
};
N.html_inline = function(r, n) {
  return r[n].content;
};
function W() {
  this.rules = o3({}, N);
}
W.prototype.renderAttrs = function(n) {
  var t, e, s;
  if (!n.attrs)
    return "";
  for (s = "", t = 0, e = n.attrs.length; t < e; t++)
    s += " " + j(n.attrs[t][0]) + '="' + j(n.attrs[t][1]) + '"';
  return s;
};
W.prototype.renderToken = function(n, t, e) {
  var s, o = "", c = !1, i = n[t];
  return i.hidden ? "" : (i.block && i.nesting !== -1 && t && n[t - 1].hidden && (o += `
`), o += (i.nesting === -1 ? "</" : "<") + i.tag, o += this.renderAttrs(i), i.nesting === 0 && e.xhtmlOut && (o += " /"), i.block && (c = !0, i.nesting === 1 && t + 1 < n.length && (s = n[t + 1], (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === i.tag) && (c = !1))), o += c ? `>
` : ">", o);
};
W.prototype.renderInline = function(r, n, t) {
  for (var e, s = "", o = this.rules, c = 0, i = r.length; c < i; c++)
    e = r[c].type, typeof o[e] < "u" ? s += o[e](r, c, n, t, this) : s += this.renderToken(r, c, n);
  return s;
};
W.prototype.renderInlineAsText = function(r, n, t) {
  for (var e = "", s = 0, o = r.length; s < o; s++)
    r[s].type === "text" ? e += r[s].content : r[s].type === "image" ? e += this.renderInlineAsText(r[s].children, n, t) : r[s].type === "softbreak" && (e += `
`);
  return e;
};
W.prototype.render = function(r, n, t) {
  var e, s, o, c = "", i = this.rules;
  for (e = 0, s = r.length; e < s; e++)
    o = r[e].type, o === "inline" ? c += this.renderInline(r[e].children, n, t) : typeof i[o] < "u" ? c += i[o](r, e, n, t, this) : c += this.renderToken(r, e, n, t);
  return c;
};
var c3 = W;
function L() {
  this.__rules__ = [], this.__cache__ = null;
}
L.prototype.__find__ = function(r) {
  for (var n = 0; n < this.__rules__.length; n++)
    if (this.__rules__[n].name === r)
      return n;
  return -1;
};
L.prototype.__compile__ = function() {
  var r = this, n = [""];
  r.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(e) {
      n.indexOf(e) < 0 && n.push(e);
    });
  }), r.__cache__ = {}, n.forEach(function(t) {
    r.__cache__[t] = [], r.__rules__.forEach(function(e) {
      e.enabled && (t && e.alt.indexOf(t) < 0 || r.__cache__[t].push(e.fn));
    });
  });
};
L.prototype.at = function(r, n, t) {
  var e = this.__find__(r), s = t || {};
  if (e === -1)
    throw new Error("Parser rule not found: " + r);
  this.__rules__[e].fn = n, this.__rules__[e].alt = s.alt || [], this.__cache__ = null;
};
L.prototype.before = function(r, n, t, e) {
  var s = this.__find__(r), o = e || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(s, 0, {
    name: n,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
L.prototype.after = function(r, n, t, e) {
  var s = this.__find__(r), o = e || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(s + 1, 0, {
    name: n,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
L.prototype.push = function(r, n, t) {
  var e = t || {};
  this.__rules__.push({
    name: r,
    enabled: !0,
    fn: n,
    alt: e.alt || []
  }), this.__cache__ = null;
};
L.prototype.enable = function(r, n) {
  Array.isArray(r) || (r = [r]);
  var t = [];
  return r.forEach(function(e) {
    var s = this.__find__(e);
    if (s < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + e);
    }
    this.__rules__[s].enabled = !0, t.push(e);
  }, this), this.__cache__ = null, t;
};
L.prototype.enableOnly = function(r, n) {
  Array.isArray(r) || (r = [r]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(r, n);
};
L.prototype.disable = function(r, n) {
  Array.isArray(r) || (r = [r]);
  var t = [];
  return r.forEach(function(e) {
    var s = this.__find__(e);
    if (s < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + e);
    }
    this.__rules__[s].enabled = !1, t.push(e);
  }, this), this.__cache__ = null, t;
};
L.prototype.getRules = function(r) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[r] || [];
};
var On = L, i3 = /\r\n?|\n/g, a3 = /\0/g, l3 = function(n) {
  var t;
  t = n.src.replace(i3, `
`), t = t.replace(a3, "�"), n.src = t;
}, u3 = function(n) {
  var t;
  n.inlineMode ? (t = new n.Token("inline", "", 0), t.content = n.src, t.map = [0, 1], t.children = [], n.tokens.push(t)) : n.md.block.parse(n.src, n.md, n.env, n.tokens);
}, p3 = function(n) {
  var t = n.tokens, e, s, o;
  for (s = 0, o = t.length; s < o; s++)
    e = t[s], e.type === "inline" && n.md.inline.parse(e.content, n.md, n.env, e.children);
}, f3 = E.arrayReplaceAt;
function h3(r) {
  return /^<a[>\s]/i.test(r);
}
function d3(r) {
  return /^<\/a\s*>/i.test(r);
}
var m3 = function(n) {
  var t, e, s, o, c, i, a, l, u, p, f, h, b, _, x, k, m = n.tokens, y;
  if (n.md.options.linkify) {
    for (e = 0, s = m.length; e < s; e++)
      if (!(m[e].type !== "inline" || !n.md.linkify.pretest(m[e].content)))
        for (o = m[e].children, b = 0, t = o.length - 1; t >= 0; t--) {
          if (i = o[t], i.type === "link_close") {
            for (t--; o[t].level !== i.level && o[t].type !== "link_open"; )
              t--;
            continue;
          }
          if (i.type === "html_inline" && (h3(i.content) && b > 0 && b--, d3(i.content) && b++), !(b > 0) && i.type === "text" && n.md.linkify.test(i.content)) {
            for (u = i.content, y = n.md.linkify.match(u), a = [], h = i.level, f = 0, y.length > 0 && y[0].index === 0 && t > 0 && o[t - 1].type === "text_special" && (y = y.slice(1)), l = 0; l < y.length; l++)
              _ = y[l].url, x = n.md.normalizeLink(_), n.md.validateLink(x) && (k = y[l].text, y[l].schema ? y[l].schema === "mailto:" && !/^mailto:/i.test(k) ? k = n.md.normalizeLinkText("mailto:" + k).replace(/^mailto:/, "") : k = n.md.normalizeLinkText(k) : k = n.md.normalizeLinkText("http://" + k).replace(/^http:\/\//, ""), p = y[l].index, p > f && (c = new n.Token("text", "", 0), c.content = u.slice(f, p), c.level = h, a.push(c)), c = new n.Token("link_open", "a", 1), c.attrs = [["href", x]], c.level = h++, c.markup = "linkify", c.info = "auto", a.push(c), c = new n.Token("text", "", 0), c.content = k, c.level = h, a.push(c), c = new n.Token("link_close", "a", -1), c.level = --h, c.markup = "linkify", c.info = "auto", a.push(c), f = y[l].lastIndex);
            f < u.length && (c = new n.Token("text", "", 0), c.content = u.slice(f), c.level = h, a.push(c)), m[e].children = o = f3(o, t, a);
          }
        }
  }
}, Ut = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, g3 = /\((c|tm|r)\)/i, _3 = /\((c|tm|r)\)/ig, b3 = {
  c: "©",
  r: "®",
  tm: "™"
};
function k3(r, n) {
  return b3[n.toLowerCase()];
}
function v3(r) {
  var n, t, e = 0;
  for (n = r.length - 1; n >= 0; n--)
    t = r[n], t.type === "text" && !e && (t.content = t.content.replace(_3, k3)), t.type === "link_open" && t.info === "auto" && e--, t.type === "link_close" && t.info === "auto" && e++;
}
function x3(r) {
  var n, t, e = 0;
  for (n = r.length - 1; n >= 0; n--)
    t = r[n], t.type === "text" && !e && Ut.test(t.content) && (t.content = t.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), t.type === "link_open" && t.info === "auto" && e--, t.type === "link_close" && t.info === "auto" && e++;
}
var y3 = function(n) {
  var t;
  if (n.md.options.typographer)
    for (t = n.tokens.length - 1; t >= 0; t--)
      n.tokens[t].type === "inline" && (g3.test(n.tokens[t].content) && v3(n.tokens[t].children), Ut.test(n.tokens[t].content) && x3(n.tokens[t].children));
}, it = E.isWhiteSpace, at = E.isPunctChar, lt = E.isMdAsciiPunct, w3 = /['"]/, ut = /['"]/g, pt = "’";
function rn(r, n, t) {
  return r.slice(0, n) + t + r.slice(n + 1);
}
function C3(r, n) {
  var t, e, s, o, c, i, a, l, u, p, f, h, b, _, x, k, m, y, w, C, g;
  for (w = [], t = 0; t < r.length; t++) {
    for (e = r[t], a = r[t].level, m = w.length - 1; m >= 0 && !(w[m].level <= a); m--)
      ;
    if (w.length = m + 1, e.type === "text") {
      s = e.content, c = 0, i = s.length;
      n:
        for (; c < i && (ut.lastIndex = c, o = ut.exec(s), !!o); ) {
          if (x = k = !0, c = o.index + 1, y = o[0] === "'", u = 32, o.index - 1 >= 0)
            u = s.charCodeAt(o.index - 1);
          else
            for (m = t - 1; m >= 0 && !(r[m].type === "softbreak" || r[m].type === "hardbreak"); m--)
              if (r[m].content) {
                u = r[m].content.charCodeAt(r[m].content.length - 1);
                break;
              }
          if (p = 32, c < i)
            p = s.charCodeAt(c);
          else
            for (m = t + 1; m < r.length && !(r[m].type === "softbreak" || r[m].type === "hardbreak"); m++)
              if (r[m].content) {
                p = r[m].content.charCodeAt(0);
                break;
              }
          if (f = lt(u) || at(String.fromCharCode(u)), h = lt(p) || at(String.fromCharCode(p)), b = it(u), _ = it(p), _ ? x = !1 : h && (b || f || (x = !1)), b ? k = !1 : f && (_ || h || (k = !1)), p === 34 && o[0] === '"' && u >= 48 && u <= 57 && (k = x = !1), x && k && (x = f, k = h), !x && !k) {
            y && (e.content = rn(e.content, o.index, pt));
            continue;
          }
          if (k) {
            for (m = w.length - 1; m >= 0 && (l = w[m], !(w[m].level < a)); m--)
              if (l.single === y && w[m].level === a) {
                l = w[m], y ? (C = n.md.options.quotes[2], g = n.md.options.quotes[3]) : (C = n.md.options.quotes[0], g = n.md.options.quotes[1]), e.content = rn(e.content, o.index, g), r[l.token].content = rn(
                  r[l.token].content,
                  l.pos,
                  C
                ), c += g.length - 1, l.token === t && (c += C.length - 1), s = e.content, i = s.length, w.length = m;
                continue n;
              }
          }
          x ? w.push({
            token: t,
            pos: o.index,
            single: y,
            level: a
          }) : k && y && (e.content = rn(e.content, o.index, pt));
        }
    }
  }
}
var A3 = function(n) {
  var t;
  if (n.md.options.typographer)
    for (t = n.tokens.length - 1; t >= 0; t--)
      n.tokens[t].type !== "inline" || !w3.test(n.tokens[t].content) || C3(n.tokens[t].children, n);
}, E3 = function(n) {
  var t, e, s, o, c, i, a = n.tokens;
  for (t = 0, e = a.length; t < e; t++)
    if (a[t].type === "inline") {
      for (s = a[t].children, c = s.length, o = 0; o < c; o++)
        s[o].type === "text_special" && (s[o].type = "text");
      for (o = i = 0; o < c; o++)
        s[o].type === "text" && o + 1 < c && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== i && (s[i] = s[o]), i++);
      o !== i && (s.length = i);
    }
};
function Y(r, n, t) {
  this.type = r, this.tag = n, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Y.prototype.attrIndex = function(n) {
  var t, e, s;
  if (!this.attrs)
    return -1;
  for (t = this.attrs, e = 0, s = t.length; e < s; e++)
    if (t[e][0] === n)
      return e;
  return -1;
};
Y.prototype.attrPush = function(n) {
  this.attrs ? this.attrs.push(n) : this.attrs = [n];
};
Y.prototype.attrSet = function(n, t) {
  var e = this.attrIndex(n), s = [n, t];
  e < 0 ? this.attrPush(s) : this.attrs[e] = s;
};
Y.prototype.attrGet = function(n) {
  var t = this.attrIndex(n), e = null;
  return t >= 0 && (e = this.attrs[t][1]), e;
};
Y.prototype.attrJoin = function(n, t) {
  var e = this.attrIndex(n);
  e < 0 ? this.attrPush([n, t]) : this.attrs[e][1] = this.attrs[e][1] + " " + t;
};
var Mn = Y, D3 = Mn;
function $t(r, n, t) {
  this.src = r, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = n;
}
$t.prototype.Token = D3;
var q3 = $t, S3 = On, An = [
  ["normalize", l3],
  ["block", u3],
  ["inline", p3],
  ["linkify", m3],
  ["replacements", y3],
  ["smartquotes", A3],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", E3]
];
function Un() {
  this.ruler = new S3();
  for (var r = 0; r < An.length; r++)
    this.ruler.push(An[r][0], An[r][1]);
}
Un.prototype.process = function(r) {
  var n, t, e;
  for (e = this.ruler.getRules(""), n = 0, t = e.length; n < t; n++)
    e[n](r);
};
Un.prototype.State = q3;
var F3 = Un, En = E.isSpace;
function Dn(r, n) {
  var t = r.bMarks[n] + r.tShift[n], e = r.eMarks[n];
  return r.src.slice(t, e);
}
function ft(r) {
  var n = [], t = 0, e = r.length, s, o = !1, c = 0, i = "";
  for (s = r.charCodeAt(t); t < e; )
    s === 124 && (o ? (i += r.substring(c, t - 1), c = t) : (n.push(i + r.substring(c, t)), i = "", c = t + 1)), o = s === 92, t++, s = r.charCodeAt(t);
  return n.push(i + r.substring(c)), n;
}
var T3 = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f, h, b, _, x, k, m, y, w, C, g;
  if (t + 2 > e || (u = t + 1, n.sCount[u] < n.blkIndent) || n.sCount[u] - n.blkIndent >= 4 || (i = n.bMarks[u] + n.tShift[u], i >= n.eMarks[u]) || (C = n.src.charCodeAt(i++), C !== 124 && C !== 45 && C !== 58) || i >= n.eMarks[u] || (g = n.src.charCodeAt(i++), g !== 124 && g !== 45 && g !== 58 && !En(g)) || C === 45 && En(g))
    return !1;
  for (; i < n.eMarks[u]; ) {
    if (o = n.src.charCodeAt(i), o !== 124 && o !== 45 && o !== 58 && !En(o))
      return !1;
    i++;
  }
  for (c = Dn(n, t + 1), p = c.split("|"), b = [], a = 0; a < p.length; a++) {
    if (_ = p[a].trim(), !_) {
      if (a === 0 || a === p.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(_))
      return !1;
    _.charCodeAt(_.length - 1) === 58 ? b.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? b.push("left") : b.push("");
  }
  if (c = Dn(n, t).trim(), c.indexOf("|") === -1 || n.sCount[t] - n.blkIndent >= 4 || (p = ft(c), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), f = p.length, f === 0 || f !== b.length))
    return !1;
  if (s)
    return !0;
  for (m = n.parentType, n.parentType = "table", w = n.md.block.ruler.getRules("blockquote"), h = n.push("table_open", "table", 1), h.map = x = [t, 0], h = n.push("thead_open", "thead", 1), h.map = [t, t + 1], h = n.push("tr_open", "tr", 1), h.map = [t, t + 1], a = 0; a < p.length; a++)
    h = n.push("th_open", "th", 1), b[a] && (h.attrs = [["style", "text-align:" + b[a]]]), h = n.push("inline", "", 0), h.content = p[a].trim(), h.children = [], h = n.push("th_close", "th", -1);
  for (h = n.push("tr_close", "tr", -1), h = n.push("thead_close", "thead", -1), u = t + 2; u < e && !(n.sCount[u] < n.blkIndent); u++) {
    for (y = !1, a = 0, l = w.length; a < l; a++)
      if (w[a](n, u, e, !0)) {
        y = !0;
        break;
      }
    if (y || (c = Dn(n, u).trim(), !c) || n.sCount[u] - n.blkIndent >= 4)
      break;
    for (p = ft(c), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), u === t + 2 && (h = n.push("tbody_open", "tbody", 1), h.map = k = [t + 2, 0]), h = n.push("tr_open", "tr", 1), h.map = [u, u + 1], a = 0; a < f; a++)
      h = n.push("td_open", "td", 1), b[a] && (h.attrs = [["style", "text-align:" + b[a]]]), h = n.push("inline", "", 0), h.content = p[a] ? p[a].trim() : "", h.children = [], h = n.push("td_close", "td", -1);
    h = n.push("tr_close", "tr", -1);
  }
  return k && (h = n.push("tbody_close", "tbody", -1), k[1] = u), h = n.push("table_close", "table", -1), x[1] = u, n.parentType = m, n.line = u, !0;
}, L3 = function(n, t, e) {
  var s, o, c;
  if (n.sCount[t] - n.blkIndent < 4)
    return !1;
  for (o = s = t + 1; s < e; ) {
    if (n.isEmpty(s)) {
      s++;
      continue;
    }
    if (n.sCount[s] - n.blkIndent >= 4) {
      s++, o = s;
      continue;
    }
    break;
  }
  return n.line = o, c = n.push("code_block", "code", 0), c.content = n.getLines(t, o, 4 + n.blkIndent, !1) + `
`, c.map = [t, n.line], !0;
}, R3 = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f = !1, h = n.bMarks[t] + n.tShift[t], b = n.eMarks[t];
  if (n.sCount[t] - n.blkIndent >= 4 || h + 3 > b || (o = n.src.charCodeAt(h), o !== 126 && o !== 96) || (l = h, h = n.skipChars(h, o), c = h - l, c < 3) || (p = n.src.slice(l, h), i = n.src.slice(h, b), o === 96 && i.indexOf(String.fromCharCode(o)) >= 0))
    return !1;
  if (s)
    return !0;
  for (a = t; a++, !(a >= e || (h = l = n.bMarks[a] + n.tShift[a], b = n.eMarks[a], h < b && n.sCount[a] < n.blkIndent)); )
    if (n.src.charCodeAt(h) === o && !(n.sCount[a] - n.blkIndent >= 4) && (h = n.skipChars(h, o), !(h - l < c) && (h = n.skipSpaces(h), !(h < b)))) {
      f = !0;
      break;
    }
  return c = n.sCount[t], n.line = a + (f ? 1 : 0), u = n.push("fence", "code", 0), u.info = i, u.content = n.getLines(t + 1, a, c, !0), u.markup = p, u.map = [t, n.line], !0;
}, z3 = E.isSpace, N3 = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f, h, b, _, x, k, m, y, w, C, g, q, S, B = n.lineMax, D = n.bMarks[t] + n.tShift[t], R = n.eMarks[t];
  if (n.sCount[t] - n.blkIndent >= 4 || n.src.charCodeAt(D) !== 62)
    return !1;
  if (s)
    return !0;
  for (b = [], _ = [], m = [], y = [], g = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", f = t; f < e && (S = n.sCount[f] < n.blkIndent, D = n.bMarks[f] + n.tShift[f], R = n.eMarks[f], !(D >= R)); f++) {
    if (n.src.charCodeAt(D++) === 62 && !S) {
      for (a = n.sCount[f] + 1, n.src.charCodeAt(D) === 32 ? (D++, a++, o = !1, w = !0) : n.src.charCodeAt(D) === 9 ? (w = !0, (n.bsCount[f] + a) % 4 === 3 ? (D++, a++, o = !1) : o = !0) : w = !1, h = a, b.push(n.bMarks[f]), n.bMarks[f] = D; D < R && (c = n.src.charCodeAt(D), z3(c)); ) {
        c === 9 ? h += 4 - (h + n.bsCount[f] + (o ? 1 : 0)) % 4 : h++;
        D++;
      }
      u = D >= R, _.push(n.bsCount[f]), n.bsCount[f] = n.sCount[f] + 1 + (w ? 1 : 0), m.push(n.sCount[f]), n.sCount[f] = h - a, y.push(n.tShift[f]), n.tShift[f] = D - n.bMarks[f];
      continue;
    }
    if (u)
      break;
    for (C = !1, i = 0, l = g.length; i < l; i++)
      if (g[i](n, f, e, !0)) {
        C = !0;
        break;
      }
    if (C) {
      n.lineMax = f, n.blkIndent !== 0 && (b.push(n.bMarks[f]), _.push(n.bsCount[f]), y.push(n.tShift[f]), m.push(n.sCount[f]), n.sCount[f] -= n.blkIndent);
      break;
    }
    b.push(n.bMarks[f]), _.push(n.bsCount[f]), y.push(n.tShift[f]), m.push(n.sCount[f]), n.sCount[f] = -1;
  }
  for (x = n.blkIndent, n.blkIndent = 0, q = n.push("blockquote_open", "blockquote", 1), q.markup = ">", q.map = p = [t, 0], n.md.block.tokenize(n, t, f), q = n.push("blockquote_close", "blockquote", -1), q.markup = ">", n.lineMax = B, n.parentType = k, p[1] = n.line, i = 0; i < y.length; i++)
    n.bMarks[i + t] = b[i], n.tShift[i + t] = y[i], n.sCount[i + t] = m[i], n.bsCount[i + t] = _[i];
  return n.blkIndent = x, !0;
}, I3 = E.isSpace, B3 = function(n, t, e, s) {
  var o, c, i, a, l = n.bMarks[t] + n.tShift[t], u = n.eMarks[t];
  if (n.sCount[t] - n.blkIndent >= 4 || (o = n.src.charCodeAt(l++), o !== 42 && o !== 45 && o !== 95))
    return !1;
  for (c = 1; l < u; ) {
    if (i = n.src.charCodeAt(l++), i !== o && !I3(i))
      return !1;
    i === o && c++;
  }
  return c < 3 ? !1 : (s || (n.line = t + 1, a = n.push("hr", "hr", 0), a.map = [t, n.line], a.markup = Array(c + 1).join(String.fromCharCode(o))), !0);
}, Vt = E.isSpace;
function ht(r, n) {
  var t, e, s, o;
  return e = r.bMarks[n] + r.tShift[n], s = r.eMarks[n], t = r.src.charCodeAt(e++), t !== 42 && t !== 45 && t !== 43 || e < s && (o = r.src.charCodeAt(e), !Vt(o)) ? -1 : e;
}
function dt(r, n) {
  var t, e = r.bMarks[n] + r.tShift[n], s = e, o = r.eMarks[n];
  if (s + 1 >= o || (t = r.src.charCodeAt(s++), t < 48 || t > 57))
    return -1;
  for (; ; ) {
    if (s >= o)
      return -1;
    if (t = r.src.charCodeAt(s++), t >= 48 && t <= 57) {
      if (s - e >= 10)
        return -1;
      continue;
    }
    if (t === 41 || t === 46)
      break;
    return -1;
  }
  return s < o && (t = r.src.charCodeAt(s), !Vt(t)) ? -1 : s;
}
function P3(r, n) {
  var t, e, s = r.level + 2;
  for (t = n + 2, e = r.tokens.length - 2; t < e; t++)
    r.tokens[t].level === s && r.tokens[t].type === "paragraph_open" && (r.tokens[t + 2].hidden = !0, r.tokens[t].hidden = !0, t += 2);
}
var O3 = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f, h, b, _, x, k, m, y, w, C, g, q, S, B, D, R, G, Q, d, A, v = t, P = !1, Hn = !0;
  if (n.sCount[v] - n.blkIndent >= 4 || n.listIndent >= 0 && n.sCount[v] - n.listIndent >= 4 && n.sCount[v] < n.blkIndent)
    return !1;
  if (s && n.parentType === "paragraph" && n.sCount[v] >= n.blkIndent && (P = !0), (D = dt(n, v)) >= 0) {
    if (p = !0, G = n.bMarks[v] + n.tShift[v], k = Number(n.src.slice(G, D - 1)), P && k !== 1)
      return !1;
  } else if ((D = ht(n, v)) >= 0)
    p = !1;
  else
    return !1;
  if (P && n.skipSpaces(D) >= n.eMarks[v])
    return !1;
  if (s)
    return !0;
  for (x = n.src.charCodeAt(D - 1), _ = n.tokens.length, p ? (A = n.push("ordered_list_open", "ol", 1), k !== 1 && (A.attrs = [["start", k]])) : A = n.push("bullet_list_open", "ul", 1), A.map = b = [v, 0], A.markup = String.fromCharCode(x), R = !1, d = n.md.block.ruler.getRules("list"), C = n.parentType, n.parentType = "list"; v < e; ) {
    for (B = D, m = n.eMarks[v], u = y = n.sCount[v] + D - (n.bMarks[v] + n.tShift[v]); B < m; ) {
      if (o = n.src.charCodeAt(B), o === 9)
        y += 4 - (y + n.bsCount[v]) % 4;
      else if (o === 32)
        y++;
      else
        break;
      B++;
    }
    if (c = B, c >= m ? l = 1 : l = y - u, l > 4 && (l = 1), a = u + l, A = n.push("list_item_open", "li", 1), A.markup = String.fromCharCode(x), A.map = f = [v, 0], p && (A.info = n.src.slice(G, D - 1)), S = n.tight, q = n.tShift[v], g = n.sCount[v], w = n.listIndent, n.listIndent = n.blkIndent, n.blkIndent = a, n.tight = !0, n.tShift[v] = c - n.bMarks[v], n.sCount[v] = y, c >= m && n.isEmpty(v + 1) ? n.line = Math.min(n.line + 2, e) : n.md.block.tokenize(n, v, e, !0), (!n.tight || R) && (Hn = !1), R = n.line - v > 1 && n.isEmpty(n.line - 1), n.blkIndent = n.listIndent, n.listIndent = w, n.tShift[v] = q, n.sCount[v] = g, n.tight = S, A = n.push("list_item_close", "li", -1), A.markup = String.fromCharCode(x), v = n.line, f[1] = v, v >= e || n.sCount[v] < n.blkIndent || n.sCount[v] - n.blkIndent >= 4)
      break;
    for (Q = !1, i = 0, h = d.length; i < h; i++)
      if (d[i](n, v, e, !0)) {
        Q = !0;
        break;
      }
    if (Q)
      break;
    if (p) {
      if (D = dt(n, v), D < 0)
        break;
      G = n.bMarks[v] + n.tShift[v];
    } else if (D = ht(n, v), D < 0)
      break;
    if (x !== n.src.charCodeAt(D - 1))
      break;
  }
  return p ? A = n.push("ordered_list_close", "ol", -1) : A = n.push("bullet_list_close", "ul", -1), A.markup = String.fromCharCode(x), b[1] = v, n.line = v, n.parentType = C, Hn && P3(n, _), !0;
}, M3 = E.normalizeReference, en = E.isSpace, U3 = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f, h, b, _, x, k, m, y, w, C = 0, g = n.bMarks[t] + n.tShift[t], q = n.eMarks[t], S = t + 1;
  if (n.sCount[t] - n.blkIndent >= 4 || n.src.charCodeAt(g) !== 91)
    return !1;
  for (; ++g < q; )
    if (n.src.charCodeAt(g) === 93 && n.src.charCodeAt(g - 1) !== 92) {
      if (g + 1 === q || n.src.charCodeAt(g + 1) !== 58)
        return !1;
      break;
    }
  for (a = n.lineMax, y = n.md.block.ruler.getRules("reference"), b = n.parentType, n.parentType = "reference"; S < a && !n.isEmpty(S); S++)
    if (!(n.sCount[S] - n.blkIndent > 3) && !(n.sCount[S] < 0)) {
      for (m = !1, u = 0, p = y.length; u < p; u++)
        if (y[u](n, S, a, !0)) {
          m = !0;
          break;
        }
      if (m)
        break;
    }
  for (k = n.getLines(t, S, n.blkIndent, !1).trim(), q = k.length, g = 1; g < q; g++) {
    if (o = k.charCodeAt(g), o === 91)
      return !1;
    if (o === 93) {
      h = g;
      break;
    } else
      o === 10 ? C++ : o === 92 && (g++, g < q && k.charCodeAt(g) === 10 && C++);
  }
  if (h < 0 || k.charCodeAt(h + 1) !== 58)
    return !1;
  for (g = h + 2; g < q; g++)
    if (o = k.charCodeAt(g), o === 10)
      C++;
    else if (!en(o))
      break;
  if (_ = n.md.helpers.parseLinkDestination(k, g, q), !_.ok || (l = n.md.normalizeLink(_.str), !n.md.validateLink(l)))
    return !1;
  for (g = _.pos, C += _.lines, c = g, i = C, x = g; g < q; g++)
    if (o = k.charCodeAt(g), o === 10)
      C++;
    else if (!en(o))
      break;
  for (_ = n.md.helpers.parseLinkTitle(k, g, q), g < q && x !== g && _.ok ? (w = _.str, g = _.pos, C += _.lines) : (w = "", g = c, C = i); g < q && (o = k.charCodeAt(g), !!en(o)); )
    g++;
  if (g < q && k.charCodeAt(g) !== 10 && w)
    for (w = "", g = c, C = i; g < q && (o = k.charCodeAt(g), !!en(o)); )
      g++;
  return g < q && k.charCodeAt(g) !== 10 || (f = M3(k.slice(1, h)), !f) ? !1 : (s || (typeof n.env.references > "u" && (n.env.references = {}), typeof n.env.references[f] > "u" && (n.env.references[f] = { title: w, href: l }), n.parentType = b, n.line = t + C + 1), !0);
}, $3 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], dn = {}, V3 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", j3 = "[^\"'=<>`\\x00-\\x20]+", G3 = "'[^']*'", H3 = '"[^"]*"', Z3 = "(?:" + j3 + "|" + G3 + "|" + H3 + ")", J3 = "(?:\\s+" + V3 + "(?:\\s*=\\s*" + Z3 + ")?)", jt = "<[A-Za-z][A-Za-z0-9\\-]*" + J3 + "*\\s*\\/?>", Gt = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", W3 = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Y3 = "<[?][\\s\\S]*?[?]>", Q3 = "<![A-Z]+\\s+[^>]*>", K3 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", X3 = new RegExp("^(?:" + jt + "|" + Gt + "|" + W3 + "|" + Y3 + "|" + Q3 + "|" + K3 + ")"), nO = new RegExp("^(?:" + jt + "|" + Gt + ")");
dn.HTML_TAG_RE = X3;
dn.HTML_OPEN_CLOSE_TAG_RE = nO;
var tO = $3, rO = dn.HTML_OPEN_CLOSE_TAG_RE, H = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + tO.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(rO.source + "\\s*$"), /^$/, !1]
], eO = function(n, t, e, s) {
  var o, c, i, a, l = n.bMarks[t] + n.tShift[t], u = n.eMarks[t];
  if (n.sCount[t] - n.blkIndent >= 4 || !n.md.options.html || n.src.charCodeAt(l) !== 60)
    return !1;
  for (a = n.src.slice(l, u), o = 0; o < H.length && !H[o][0].test(a); o++)
    ;
  if (o === H.length)
    return !1;
  if (s)
    return H[o][2];
  if (c = t + 1, !H[o][1].test(a)) {
    for (; c < e && !(n.sCount[c] < n.blkIndent); c++)
      if (l = n.bMarks[c] + n.tShift[c], u = n.eMarks[c], a = n.src.slice(l, u), H[o][1].test(a)) {
        a.length !== 0 && c++;
        break;
      }
  }
  return n.line = c, i = n.push("html_block", "", 0), i.map = [t, c], i.content = n.getLines(t, c, n.blkIndent, !0), !0;
}, mt = E.isSpace, oO = function(n, t, e, s) {
  var o, c, i, a, l = n.bMarks[t] + n.tShift[t], u = n.eMarks[t];
  if (n.sCount[t] - n.blkIndent >= 4 || (o = n.src.charCodeAt(l), o !== 35 || l >= u))
    return !1;
  for (c = 1, o = n.src.charCodeAt(++l); o === 35 && l < u && c <= 6; )
    c++, o = n.src.charCodeAt(++l);
  return c > 6 || l < u && !mt(o) ? !1 : (s || (u = n.skipSpacesBack(u, l), i = n.skipCharsBack(u, 35, l), i > l && mt(n.src.charCodeAt(i - 1)) && (u = i), n.line = t + 1, a = n.push("heading_open", "h" + String(c), 1), a.markup = "########".slice(0, c), a.map = [t, n.line], a = n.push("inline", "", 0), a.content = n.src.slice(l, u).trim(), a.map = [t, n.line], a.children = [], a = n.push("heading_close", "h" + String(c), -1), a.markup = "########".slice(0, c)), !0);
}, sO = function(n, t, e) {
  var s, o, c, i, a, l, u, p, f, h = t + 1, b, _ = n.md.block.ruler.getRules("paragraph");
  if (n.sCount[t] - n.blkIndent >= 4)
    return !1;
  for (b = n.parentType, n.parentType = "paragraph"; h < e && !n.isEmpty(h); h++)
    if (!(n.sCount[h] - n.blkIndent > 3)) {
      if (n.sCount[h] >= n.blkIndent && (l = n.bMarks[h] + n.tShift[h], u = n.eMarks[h], l < u && (f = n.src.charCodeAt(l), (f === 45 || f === 61) && (l = n.skipChars(l, f), l = n.skipSpaces(l), l >= u)))) {
        p = f === 61 ? 1 : 2;
        break;
      }
      if (!(n.sCount[h] < 0)) {
        for (o = !1, c = 0, i = _.length; c < i; c++)
          if (_[c](n, h, e, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    }
  return p ? (s = n.getLines(t, h, n.blkIndent, !1).trim(), n.line = h + 1, a = n.push("heading_open", "h" + String(p), 1), a.markup = String.fromCharCode(f), a.map = [t, n.line], a = n.push("inline", "", 0), a.content = s, a.map = [t, n.line - 1], a.children = [], a = n.push("heading_close", "h" + String(p), -1), a.markup = String.fromCharCode(f), n.parentType = b, !0) : !1;
}, cO = function(n, t, e) {
  var s, o, c, i, a, l, u = t + 1, p = n.md.block.ruler.getRules("paragraph");
  for (l = n.parentType, n.parentType = "paragraph"; u < e && !n.isEmpty(u); u++)
    if (!(n.sCount[u] - n.blkIndent > 3) && !(n.sCount[u] < 0)) {
      for (o = !1, c = 0, i = p.length; c < i; c++)
        if (p[c](n, u, e, !0)) {
          o = !0;
          break;
        }
      if (o)
        break;
    }
  return s = n.getLines(t, u, n.blkIndent, !1).trim(), n.line = u, a = n.push("paragraph_open", "p", 1), a.map = [t, n.line], a = n.push("inline", "", 0), a.content = s, a.map = [t, n.line], a.children = [], a = n.push("paragraph_close", "p", -1), n.parentType = l, !0;
}, Ht = Mn, mn = E.isSpace;
function I(r, n, t, e) {
  var s, o, c, i, a, l, u, p;
  for (this.src = r, this.md = n, this.env = t, this.tokens = e, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, p = !1, c = i = l = u = 0, a = o.length; i < a; i++) {
    if (s = o.charCodeAt(i), !p)
      if (mn(s)) {
        l++, s === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        p = !0;
    (s === 10 || i === a - 1) && (s !== 10 && i++, this.bMarks.push(c), this.eMarks.push(i), this.tShift.push(l), this.sCount.push(u), this.bsCount.push(0), p = !1, l = 0, u = 0, c = i + 1);
  }
  this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
I.prototype.push = function(r, n, t) {
  var e = new Ht(r, n, t);
  return e.block = !0, t < 0 && this.level--, e.level = this.level, t > 0 && this.level++, this.tokens.push(e), e;
};
I.prototype.isEmpty = function(n) {
  return this.bMarks[n] + this.tShift[n] >= this.eMarks[n];
};
I.prototype.skipEmptyLines = function(n) {
  for (var t = this.lineMax; n < t && !(this.bMarks[n] + this.tShift[n] < this.eMarks[n]); n++)
    ;
  return n;
};
I.prototype.skipSpaces = function(n) {
  for (var t, e = this.src.length; n < e && (t = this.src.charCodeAt(n), !!mn(t)); n++)
    ;
  return n;
};
I.prototype.skipSpacesBack = function(n, t) {
  if (n <= t)
    return n;
  for (; n > t; )
    if (!mn(this.src.charCodeAt(--n)))
      return n + 1;
  return n;
};
I.prototype.skipChars = function(n, t) {
  for (var e = this.src.length; n < e && this.src.charCodeAt(n) === t; n++)
    ;
  return n;
};
I.prototype.skipCharsBack = function(n, t, e) {
  if (n <= e)
    return n;
  for (; n > e; )
    if (t !== this.src.charCodeAt(--n))
      return n + 1;
  return n;
};
I.prototype.getLines = function(n, t, e, s) {
  var o, c, i, a, l, u, p, f = n;
  if (n >= t)
    return "";
  for (u = new Array(t - n), o = 0; f < t; f++, o++) {
    for (c = 0, p = a = this.bMarks[f], f + 1 < t || s ? l = this.eMarks[f] + 1 : l = this.eMarks[f]; a < l && c < e; ) {
      if (i = this.src.charCodeAt(a), mn(i))
        i === 9 ? c += 4 - (c + this.bsCount[f]) % 4 : c++;
      else if (a - p < this.tShift[f])
        c++;
      else
        break;
      a++;
    }
    c > e ? u[o] = new Array(c - e + 1).join(" ") + this.src.slice(a, l) : u[o] = this.src.slice(a, l);
  }
  return u.join("");
};
I.prototype.Token = Ht;
var iO = I, aO = On, on = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", T3, ["paragraph", "reference"]],
  ["code", L3],
  ["fence", R3, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", N3, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", B3, ["paragraph", "reference", "blockquote", "list"]],
  ["list", O3, ["paragraph", "reference", "blockquote"]],
  ["reference", U3],
  ["html_block", eO, ["paragraph", "reference", "blockquote"]],
  ["heading", oO, ["paragraph", "reference", "blockquote"]],
  ["lheading", sO],
  ["paragraph", cO]
];
function gn() {
  this.ruler = new aO();
  for (var r = 0; r < on.length; r++)
    this.ruler.push(on[r][0], on[r][1], { alt: (on[r][2] || []).slice() });
}
gn.prototype.tokenize = function(r, n, t) {
  for (var e, s, o, c = this.ruler.getRules(""), i = c.length, a = n, l = !1, u = r.md.options.maxNesting; a < t && (r.line = a = r.skipEmptyLines(a), !(a >= t || r.sCount[a] < r.blkIndent)); ) {
    if (r.level >= u) {
      r.line = t;
      break;
    }
    for (o = r.line, s = 0; s < i; s++)
      if (e = c[s](r, a, t, !1), e) {
        if (o >= r.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!e)
      throw new Error("none of the block rules matched");
    r.tight = !l, r.isEmpty(r.line - 1) && (l = !0), a = r.line, a < t && r.isEmpty(a) && (l = !0, a++, r.line = a);
  }
};
gn.prototype.parse = function(r, n, t, e) {
  var s;
  r && (s = new this.State(r, n, t, e), this.tokenize(s, s.line, s.lineMax));
};
gn.prototype.State = iO;
var lO = gn;
function uO(r) {
  switch (r) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
var pO = function(n, t) {
  for (var e = n.pos; e < n.posMax && !uO(n.src.charCodeAt(e)); )
    e++;
  return e === n.pos ? !1 : (t || (n.pending += n.src.slice(n.pos, e)), n.pos = e, !0);
}, fO = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, hO = function(n, t) {
  var e, s, o, c, i, a, l, u;
  return !n.md.options.linkify || n.linkLevel > 0 || (e = n.pos, s = n.posMax, e + 3 > s) || n.src.charCodeAt(e) !== 58 || n.src.charCodeAt(e + 1) !== 47 || n.src.charCodeAt(e + 2) !== 47 || (o = n.pending.match(fO), !o) || (c = o[1], i = n.md.linkify.matchAtStart(n.src.slice(e - c.length)), !i) || (a = i.url, a.length <= c.length) || (a = a.replace(/\*+$/, ""), l = n.md.normalizeLink(a), !n.md.validateLink(l)) ? !1 : (t || (n.pending = n.pending.slice(0, -c.length), u = n.push("link_open", "a", 1), u.attrs = [["href", l]], u.markup = "linkify", u.info = "auto", u = n.push("text", "", 0), u.content = n.md.normalizeLinkText(a), u = n.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), n.pos += a.length - c.length, !0);
}, dO = E.isSpace, mO = function(n, t) {
  var e, s, o, c = n.pos;
  if (n.src.charCodeAt(c) !== 10)
    return !1;
  if (e = n.pending.length - 1, s = n.posMax, !t)
    if (e >= 0 && n.pending.charCodeAt(e) === 32)
      if (e >= 1 && n.pending.charCodeAt(e - 1) === 32) {
        for (o = e - 1; o >= 1 && n.pending.charCodeAt(o - 1) === 32; )
          o--;
        n.pending = n.pending.slice(0, o), n.push("hardbreak", "br", 0);
      } else
        n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
    else
      n.push("softbreak", "br", 0);
  for (c++; c < s && dO(n.src.charCodeAt(c)); )
    c++;
  return n.pos = c, !0;
}, gO = E.isSpace, $n = [];
for (var gt = 0; gt < 256; gt++)
  $n.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
  $n[r.charCodeAt(0)] = 1;
});
var _O = function(n, t) {
  var e, s, o, c, i, a = n.pos, l = n.posMax;
  if (n.src.charCodeAt(a) !== 92 || (a++, a >= l))
    return !1;
  if (e = n.src.charCodeAt(a), e === 10) {
    for (t || n.push("hardbreak", "br", 0), a++; a < l && (e = n.src.charCodeAt(a), !!gO(e)); )
      a++;
    return n.pos = a, !0;
  }
  return c = n.src[a], e >= 55296 && e <= 56319 && a + 1 < l && (s = n.src.charCodeAt(a + 1), s >= 56320 && s <= 57343 && (c += n.src[a + 1], a++)), o = "\\" + c, t || (i = n.push("text_special", "", 0), e < 256 && $n[e] !== 0 ? i.content = c : i.content = o, i.markup = o, i.info = "escape"), n.pos = a + 1, !0;
}, bO = function(n, t) {
  var e, s, o, c, i, a, l, u, p = n.pos, f = n.src.charCodeAt(p);
  if (f !== 96)
    return !1;
  for (e = p, p++, s = n.posMax; p < s && n.src.charCodeAt(p) === 96; )
    p++;
  if (o = n.src.slice(e, p), l = o.length, n.backticksScanned && (n.backticks[l] || 0) <= e)
    return t || (n.pending += o), n.pos += l, !0;
  for (a = p; (i = n.src.indexOf("`", a)) !== -1; ) {
    for (a = i + 1; a < s && n.src.charCodeAt(a) === 96; )
      a++;
    if (u = a - i, u === l)
      return t || (c = n.push("code_inline", "code", 0), c.markup = o, c.content = n.src.slice(p, i).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), n.pos = a, !0;
    n.backticks[u] = i;
  }
  return n.backticksScanned = !0, t || (n.pending += o), n.pos += l, !0;
}, _n = {};
_n.tokenize = function(n, t) {
  var e, s, o, c, i, a = n.pos, l = n.src.charCodeAt(a);
  if (t || l !== 126 || (s = n.scanDelims(n.pos, !0), c = s.length, i = String.fromCharCode(l), c < 2))
    return !1;
  for (c % 2 && (o = n.push("text", "", 0), o.content = i, c--), e = 0; e < c; e += 2)
    o = n.push("text", "", 0), o.content = i + i, n.delimiters.push({
      marker: l,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: n.tokens.length - 1,
      end: -1,
      open: s.can_open,
      close: s.can_close
    });
  return n.pos += s.length, !0;
};
function _t(r, n) {
  var t, e, s, o, c, i = [], a = n.length;
  for (t = 0; t < a; t++)
    s = n[t], s.marker === 126 && s.end !== -1 && (o = n[s.end], c = r.tokens[s.token], c.type = "s_open", c.tag = "s", c.nesting = 1, c.markup = "~~", c.content = "", c = r.tokens[o.token], c.type = "s_close", c.tag = "s", c.nesting = -1, c.markup = "~~", c.content = "", r.tokens[o.token - 1].type === "text" && r.tokens[o.token - 1].content === "~" && i.push(o.token - 1));
  for (; i.length; ) {
    for (t = i.pop(), e = t + 1; e < r.tokens.length && r.tokens[e].type === "s_close"; )
      e++;
    e--, t !== e && (c = r.tokens[e], r.tokens[e] = r.tokens[t], r.tokens[t] = c);
  }
}
_n.postProcess = function(n) {
  var t, e = n.tokens_meta, s = n.tokens_meta.length;
  for (_t(n, n.delimiters), t = 0; t < s; t++)
    e[t] && e[t].delimiters && _t(n, e[t].delimiters);
};
var bn = {};
bn.tokenize = function(n, t) {
  var e, s, o, c = n.pos, i = n.src.charCodeAt(c);
  if (t || i !== 95 && i !== 42)
    return !1;
  for (s = n.scanDelims(n.pos, i === 42), e = 0; e < s.length; e++)
    o = n.push("text", "", 0), o.content = String.fromCharCode(i), n.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: i,
      // Total length of these series of delimiters.
      //
      length: s.length,
      // A position of the token this delimiter corresponds to.
      //
      token: n.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: s.can_open,
      close: s.can_close
    });
  return n.pos += s.length, !0;
};
function bt(r, n) {
  var t, e, s, o, c, i, a = n.length;
  for (t = a - 1; t >= 0; t--)
    e = n[t], !(e.marker !== 95 && e.marker !== 42) && e.end !== -1 && (s = n[e.end], i = t > 0 && n[t - 1].end === e.end + 1 && // check that first two markers match and adjacent
    n[t - 1].marker === e.marker && n[t - 1].token === e.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    n[e.end + 1].token === s.token + 1, c = String.fromCharCode(e.marker), o = r.tokens[e.token], o.type = i ? "strong_open" : "em_open", o.tag = i ? "strong" : "em", o.nesting = 1, o.markup = i ? c + c : c, o.content = "", o = r.tokens[s.token], o.type = i ? "strong_close" : "em_close", o.tag = i ? "strong" : "em", o.nesting = -1, o.markup = i ? c + c : c, o.content = "", i && (r.tokens[n[t - 1].token].content = "", r.tokens[n[e.end + 1].token].content = "", t--));
}
bn.postProcess = function(n) {
  var t, e = n.tokens_meta, s = n.tokens_meta.length;
  for (bt(n, n.delimiters), t = 0; t < s; t++)
    e[t] && e[t].delimiters && bt(n, e[t].delimiters);
};
var kO = E.normalizeReference, qn = E.isSpace, vO = function(n, t) {
  var e, s, o, c, i, a, l, u, p, f = "", h = "", b = n.pos, _ = n.posMax, x = n.pos, k = !0;
  if (n.src.charCodeAt(n.pos) !== 91 || (i = n.pos + 1, c = n.md.helpers.parseLinkLabel(n, n.pos, !0), c < 0))
    return !1;
  if (a = c + 1, a < _ && n.src.charCodeAt(a) === 40) {
    for (k = !1, a++; a < _ && (s = n.src.charCodeAt(a), !(!qn(s) && s !== 10)); a++)
      ;
    if (a >= _)
      return !1;
    if (x = a, l = n.md.helpers.parseLinkDestination(n.src, a, n.posMax), l.ok) {
      for (f = n.md.normalizeLink(l.str), n.md.validateLink(f) ? a = l.pos : f = "", x = a; a < _ && (s = n.src.charCodeAt(a), !(!qn(s) && s !== 10)); a++)
        ;
      if (l = n.md.helpers.parseLinkTitle(n.src, a, n.posMax), a < _ && x !== a && l.ok)
        for (h = l.str, a = l.pos; a < _ && (s = n.src.charCodeAt(a), !(!qn(s) && s !== 10)); a++)
          ;
    }
    (a >= _ || n.src.charCodeAt(a) !== 41) && (k = !0), a++;
  }
  if (k) {
    if (typeof n.env.references > "u")
      return !1;
    if (a < _ && n.src.charCodeAt(a) === 91 ? (x = a + 1, a = n.md.helpers.parseLinkLabel(n, a), a >= 0 ? o = n.src.slice(x, a++) : a = c + 1) : a = c + 1, o || (o = n.src.slice(i, c)), u = n.env.references[kO(o)], !u)
      return n.pos = b, !1;
    f = u.href, h = u.title;
  }
  return t || (n.pos = i, n.posMax = c, p = n.push("link_open", "a", 1), p.attrs = e = [["href", f]], h && e.push(["title", h]), n.linkLevel++, n.md.inline.tokenize(n), n.linkLevel--, p = n.push("link_close", "a", -1)), n.pos = a, n.posMax = _, !0;
}, xO = E.normalizeReference, Sn = E.isSpace, yO = function(n, t) {
  var e, s, o, c, i, a, l, u, p, f, h, b, _, x = "", k = n.pos, m = n.posMax;
  if (n.src.charCodeAt(n.pos) !== 33 || n.src.charCodeAt(n.pos + 1) !== 91 || (a = n.pos + 2, i = n.md.helpers.parseLinkLabel(n, n.pos + 1, !1), i < 0))
    return !1;
  if (l = i + 1, l < m && n.src.charCodeAt(l) === 40) {
    for (l++; l < m && (s = n.src.charCodeAt(l), !(!Sn(s) && s !== 10)); l++)
      ;
    if (l >= m)
      return !1;
    for (_ = l, p = n.md.helpers.parseLinkDestination(n.src, l, n.posMax), p.ok && (x = n.md.normalizeLink(p.str), n.md.validateLink(x) ? l = p.pos : x = ""), _ = l; l < m && (s = n.src.charCodeAt(l), !(!Sn(s) && s !== 10)); l++)
      ;
    if (p = n.md.helpers.parseLinkTitle(n.src, l, n.posMax), l < m && _ !== l && p.ok)
      for (f = p.str, l = p.pos; l < m && (s = n.src.charCodeAt(l), !(!Sn(s) && s !== 10)); l++)
        ;
    else
      f = "";
    if (l >= m || n.src.charCodeAt(l) !== 41)
      return n.pos = k, !1;
    l++;
  } else {
    if (typeof n.env.references > "u")
      return !1;
    if (l < m && n.src.charCodeAt(l) === 91 ? (_ = l + 1, l = n.md.helpers.parseLinkLabel(n, l), l >= 0 ? c = n.src.slice(_, l++) : l = i + 1) : l = i + 1, c || (c = n.src.slice(a, i)), u = n.env.references[xO(c)], !u)
      return n.pos = k, !1;
    x = u.href, f = u.title;
  }
  return t || (o = n.src.slice(a, i), n.md.inline.parse(
    o,
    n.md,
    n.env,
    b = []
  ), h = n.push("image", "img", 0), h.attrs = e = [["src", x], ["alt", ""]], h.children = b, h.content = o, f && e.push(["title", f])), n.pos = l, n.posMax = m, !0;
}, wO = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, CO = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, AO = function(n, t) {
  var e, s, o, c, i, a, l = n.pos;
  if (n.src.charCodeAt(l) !== 60)
    return !1;
  for (i = n.pos, a = n.posMax; ; ) {
    if (++l >= a || (c = n.src.charCodeAt(l), c === 60))
      return !1;
    if (c === 62)
      break;
  }
  return e = n.src.slice(i + 1, l), CO.test(e) ? (s = n.md.normalizeLink(e), n.md.validateLink(s) ? (t || (o = n.push("link_open", "a", 1), o.attrs = [["href", s]], o.markup = "autolink", o.info = "auto", o = n.push("text", "", 0), o.content = n.md.normalizeLinkText(e), o = n.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), n.pos += e.length + 2, !0) : !1) : wO.test(e) ? (s = n.md.normalizeLink("mailto:" + e), n.md.validateLink(s) ? (t || (o = n.push("link_open", "a", 1), o.attrs = [["href", s]], o.markup = "autolink", o.info = "auto", o = n.push("text", "", 0), o.content = n.md.normalizeLinkText(e), o = n.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), n.pos += e.length + 2, !0) : !1) : !1;
}, EO = dn.HTML_TAG_RE;
function DO(r) {
  return /^<a[>\s]/i.test(r);
}
function qO(r) {
  return /^<\/a\s*>/i.test(r);
}
function SO(r) {
  var n = r | 32;
  return n >= 97 && n <= 122;
}
var FO = function(n, t) {
  var e, s, o, c, i = n.pos;
  return !n.md.options.html || (o = n.posMax, n.src.charCodeAt(i) !== 60 || i + 2 >= o) || (e = n.src.charCodeAt(i + 1), e !== 33 && e !== 63 && e !== 47 && !SO(e)) || (s = n.src.slice(i).match(EO), !s) ? !1 : (t || (c = n.push("html_inline", "", 0), c.content = s[0], DO(c.content) && n.linkLevel++, qO(c.content) && n.linkLevel--), n.pos += s[0].length, !0);
}, kt = Bt, TO = E.has, LO = E.isValidEntityCode, vt = E.fromCodePoint, RO = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, zO = /^&([a-z][a-z0-9]{1,31});/i, NO = function(n, t) {
  var e, s, o, c, i = n.pos, a = n.posMax;
  if (n.src.charCodeAt(i) !== 38 || i + 1 >= a)
    return !1;
  if (e = n.src.charCodeAt(i + 1), e === 35) {
    if (o = n.src.slice(i).match(RO), o)
      return t || (s = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), c = n.push("text_special", "", 0), c.content = LO(s) ? vt(s) : vt(65533), c.markup = o[0], c.info = "entity"), n.pos += o[0].length, !0;
  } else if (o = n.src.slice(i).match(zO), o && TO(kt, o[1]))
    return t || (c = n.push("text_special", "", 0), c.content = kt[o[1]], c.markup = o[0], c.info = "entity"), n.pos += o[0].length, !0;
  return !1;
};
function xt(r) {
  var n, t, e, s, o, c, i, a, l = {}, u = r.length;
  if (u) {
    var p = 0, f = -2, h = [];
    for (n = 0; n < u; n++)
      if (e = r[n], h.push(0), (r[p].marker !== e.marker || f !== e.token - 1) && (p = n), f = e.token, e.length = e.length || 0, !!e.close) {
        for (l.hasOwnProperty(e.marker) || (l[e.marker] = [-1, -1, -1, -1, -1, -1]), o = l[e.marker][(e.open ? 3 : 0) + e.length % 3], t = p - h[p] - 1, c = t; t > o; t -= h[t] + 1)
          if (s = r[t], s.marker === e.marker && s.open && s.end < 0 && (i = !1, (s.close || e.open) && (s.length + e.length) % 3 === 0 && (s.length % 3 !== 0 || e.length % 3 !== 0) && (i = !0), !i)) {
            a = t > 0 && !r[t - 1].open ? h[t - 1] + 1 : 0, h[n] = n - t + a, h[t] = a, e.open = !1, s.end = n, s.close = !1, c = -1, f = -2;
            break;
          }
        c !== -1 && (l[e.marker][(e.open ? 3 : 0) + (e.length || 0) % 3] = c);
      }
  }
}
var IO = function(n) {
  var t, e = n.tokens_meta, s = n.tokens_meta.length;
  for (xt(n.delimiters), t = 0; t < s; t++)
    e[t] && e[t].delimiters && xt(e[t].delimiters);
}, BO = function(n) {
  var t, e, s = 0, o = n.tokens, c = n.tokens.length;
  for (t = e = 0; t < c; t++)
    o[t].nesting < 0 && s--, o[t].level = s, o[t].nesting > 0 && s++, o[t].type === "text" && t + 1 < c && o[t + 1].type === "text" ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== e && (o[e] = o[t]), e++);
  t !== e && (o.length = e);
}, Vn = Mn, yt = E.isWhiteSpace, wt = E.isPunctChar, Ct = E.isMdAsciiPunct;
function nn(r, n, t, e) {
  this.src = r, this.env = t, this.md = n, this.tokens = e, this.tokens_meta = Array(e.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
nn.prototype.pushPending = function() {
  var r = new Vn("text", "", 0);
  return r.content = this.pending, r.level = this.pendingLevel, this.tokens.push(r), this.pending = "", r;
};
nn.prototype.push = function(r, n, t) {
  this.pending && this.pushPending();
  var e = new Vn(r, n, t), s = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), e.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(e), this.tokens_meta.push(s), e;
};
nn.prototype.scanDelims = function(r, n) {
  var t = r, e, s, o, c, i, a, l, u, p, f = !0, h = !0, b = this.posMax, _ = this.src.charCodeAt(r);
  for (e = r > 0 ? this.src.charCodeAt(r - 1) : 32; t < b && this.src.charCodeAt(t) === _; )
    t++;
  return o = t - r, s = t < b ? this.src.charCodeAt(t) : 32, l = Ct(e) || wt(String.fromCharCode(e)), p = Ct(s) || wt(String.fromCharCode(s)), a = yt(e), u = yt(s), u ? f = !1 : p && (a || l || (f = !1)), a ? h = !1 : l && (u || p || (h = !1)), n ? (c = f, i = h) : (c = f && (!h || l), i = h && (!f || p)), {
    can_open: c,
    can_close: i,
    length: o
  };
};
nn.prototype.Token = Vn;
var PO = nn, At = On, Fn = [
  ["text", pO],
  ["linkify", hO],
  ["newline", mO],
  ["escape", _O],
  ["backticks", bO],
  ["strikethrough", _n.tokenize],
  ["emphasis", bn.tokenize],
  ["link", vO],
  ["image", yO],
  ["autolink", AO],
  ["html_inline", FO],
  ["entity", NO]
], Tn = [
  ["balance_pairs", IO],
  ["strikethrough", _n.postProcess],
  ["emphasis", bn.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", BO]
];
function tn() {
  var r;
  for (this.ruler = new At(), r = 0; r < Fn.length; r++)
    this.ruler.push(Fn[r][0], Fn[r][1]);
  for (this.ruler2 = new At(), r = 0; r < Tn.length; r++)
    this.ruler2.push(Tn[r][0], Tn[r][1]);
}
tn.prototype.skipToken = function(r) {
  var n, t, e = r.pos, s = this.ruler.getRules(""), o = s.length, c = r.md.options.maxNesting, i = r.cache;
  if (typeof i[e] < "u") {
    r.pos = i[e];
    return;
  }
  if (r.level < c) {
    for (t = 0; t < o; t++)
      if (r.level++, n = s[t](r, !0), r.level--, n) {
        if (e >= r.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    r.pos = r.posMax;
  n || r.pos++, i[e] = r.pos;
};
tn.prototype.tokenize = function(r) {
  for (var n, t, e, s = this.ruler.getRules(""), o = s.length, c = r.posMax, i = r.md.options.maxNesting; r.pos < c; ) {
    if (e = r.pos, r.level < i) {
      for (t = 0; t < o; t++)
        if (n = s[t](r, !1), n) {
          if (e >= r.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (n) {
      if (r.pos >= c)
        break;
      continue;
    }
    r.pending += r.src[r.pos++];
  }
  r.pending && r.pushPending();
};
tn.prototype.parse = function(r, n, t, e) {
  var s, o, c, i = new this.State(r, n, t, e);
  for (this.tokenize(i), o = this.ruler2.getRules(""), c = o.length, s = 0; s < c; s++)
    o[s](i);
};
tn.prototype.State = PO;
var OO = tn, Ln, Et;
function MO() {
  return Et || (Et = 1, Ln = function(r) {
    var n = {};
    r = r || {}, n.src_Any = Pt().source, n.src_Cc = Ot().source, n.src_Z = Mt().source, n.src_P = Pn.source, n.src_ZPCc = [n.src_Z, n.src_P, n.src_Cc].join("|"), n.src_ZCc = [n.src_Z, n.src_Cc].join("|");
    var t = "[><｜]";
    return n.src_pseudo_letter = "(?:(?!" + t + "|" + n.src_ZPCc + ")" + n.src_Any + ")", n.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", n.src_auth = "(?:(?:(?!" + n.src_ZCc + "|[@/\\[\\]()]).)+@)?", n.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", n.src_host_terminator = "(?=$|" + t + "|" + n.src_ZPCc + ")(?!" + (r["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + n.src_ZPCc + "))", n.src_path = "(?:[/?#](?:(?!" + n.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + n.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + n.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + n.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + n.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + n.src_ZCc + "|[']).)+\\'|\\'(?=" + n.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + n.src_ZCc + "|[.]|$)|" + (r["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + n.src_ZCc + "|$)|;(?!" + n.src_ZCc + "|$)|\\!+(?!" + n.src_ZCc + "|[!]|$)|\\?(?!" + n.src_ZCc + "|[?]|$))+|\\/)?", n.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', n.src_xn = "xn--[a-z0-9\\-]{1,59}", n.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + n.src_xn + "|" + n.src_pseudo_letter + "{1,63})", n.src_domain = "(?:" + n.src_xn + "|(?:" + n.src_pseudo_letter + ")|(?:" + n.src_pseudo_letter + "(?:-|" + n.src_pseudo_letter + "){0,61}" + n.src_pseudo_letter + "))", n.src_host = "(?:(?:(?:(?:" + n.src_domain + ")\\.)*" + n.src_domain + "))", n.tpl_host_fuzzy = "(?:" + n.src_ip4 + "|(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%)))", n.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%))", n.src_host_strict = n.src_host + n.src_host_terminator, n.tpl_host_fuzzy_strict = n.tpl_host_fuzzy + n.src_host_terminator, n.src_host_port_strict = n.src_host + n.src_port + n.src_host_terminator, n.tpl_host_port_fuzzy_strict = n.tpl_host_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_port_no_ip_fuzzy_strict = n.tpl_host_no_ip_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + n.src_ZPCc + "|>|$))", n.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + n.src_ZCc + ")(" + n.src_email_name + "@" + n.tpl_host_fuzzy_strict + ")", n.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_fuzzy_strict + n.src_path + ")", n.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_no_ip_fuzzy_strict + n.src_path + ")", n;
  }), Ln;
}
function In(r) {
  var n = Array.prototype.slice.call(arguments, 1);
  return n.forEach(function(t) {
    t && Object.keys(t).forEach(function(e) {
      r[e] = t[e];
    });
  }), r;
}
function kn(r) {
  return Object.prototype.toString.call(r);
}
function UO(r) {
  return kn(r) === "[object String]";
}
function $O(r) {
  return kn(r) === "[object Object]";
}
function VO(r) {
  return kn(r) === "[object RegExp]";
}
function Dt(r) {
  return kn(r) === "[object Function]";
}
function jO(r) {
  return r.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Zt = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function GO(r) {
  return Object.keys(r || {}).reduce(function(n, t) {
    return n || Zt.hasOwnProperty(t);
  }, !1);
}
var HO = {
  "http:": {
    validate: function(r, n, t) {
      var e = r.slice(n);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(e) ? e.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(r, n, t) {
      var e = r.slice(n);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(e) ? n >= 3 && r[n - 3] === ":" || n >= 3 && r[n - 3] === "/" ? 0 : e.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(r, n, t) {
      var e = r.slice(n);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(e) ? e.match(t.re.mailto)[0].length : 0;
    }
  }
}, ZO = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", JO = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function WO(r) {
  r.__index__ = -1, r.__text_cache__ = "";
}
function YO(r) {
  return function(n, t) {
    var e = n.slice(t);
    return r.test(e) ? e.match(r)[0].length : 0;
  };
}
function qt() {
  return function(r, n) {
    n.normalize(r);
  };
}
function un(r) {
  var n = r.re = MO()(r.__opts__), t = r.__tlds__.slice();
  r.onCompile(), r.__tlds_replaced__ || t.push(ZO), t.push(n.src_xn), n.src_tlds = t.join("|");
  function e(i) {
    return i.replace("%TLDS%", n.src_tlds);
  }
  n.email_fuzzy = RegExp(e(n.tpl_email_fuzzy), "i"), n.link_fuzzy = RegExp(e(n.tpl_link_fuzzy), "i"), n.link_no_ip_fuzzy = RegExp(e(n.tpl_link_no_ip_fuzzy), "i"), n.host_fuzzy_test = RegExp(e(n.tpl_host_fuzzy_test), "i");
  var s = [];
  r.__compiled__ = {};
  function o(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(r.__schemas__).forEach(function(i) {
    var a = r.__schemas__[i];
    if (a !== null) {
      var l = { validate: null, link: null };
      if (r.__compiled__[i] = l, $O(a)) {
        VO(a.validate) ? l.validate = YO(a.validate) : Dt(a.validate) ? l.validate = a.validate : o(i, a), Dt(a.normalize) ? l.normalize = a.normalize : a.normalize ? o(i, a) : l.normalize = qt();
        return;
      }
      if (UO(a)) {
        s.push(i);
        return;
      }
      o(i, a);
    }
  }), s.forEach(function(i) {
    r.__compiled__[r.__schemas__[i]] && (r.__compiled__[i].validate = r.__compiled__[r.__schemas__[i]].validate, r.__compiled__[i].normalize = r.__compiled__[r.__schemas__[i]].normalize);
  }), r.__compiled__[""] = { validate: null, normalize: qt() };
  var c = Object.keys(r.__compiled__).filter(function(i) {
    return i.length > 0 && r.__compiled__[i];
  }).map(jO).join("|");
  r.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + c + ")", "i"), r.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + c + ")", "ig"), r.re.schema_at_start = RegExp("^" + r.re.schema_search.source, "i"), r.re.pretest = RegExp(
    "(" + r.re.schema_test.source + ")|(" + r.re.host_fuzzy_test.source + ")|@",
    "i"
  ), WO(r);
}
function QO(r, n) {
  var t = r.__index__, e = r.__last_index__, s = r.__text_cache__.slice(t, e);
  this.schema = r.__schema__.toLowerCase(), this.index = t + n, this.lastIndex = e + n, this.raw = s, this.text = s, this.url = s;
}
function Bn(r, n) {
  var t = new QO(r, n);
  return r.__compiled__[t.schema].normalize(t, r), t;
}
function F(r, n) {
  if (!(this instanceof F))
    return new F(r, n);
  n || GO(r) && (n = r, r = {}), this.__opts__ = In({}, Zt, n), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = In({}, HO, r), this.__compiled__ = {}, this.__tlds__ = JO, this.__tlds_replaced__ = !1, this.re = {}, un(this);
}
F.prototype.add = function(n, t) {
  return this.__schemas__[n] = t, un(this), this;
};
F.prototype.set = function(n) {
  return this.__opts__ = In(this.__opts__, n), this;
};
F.prototype.test = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return !1;
  var t, e, s, o, c, i, a, l, u;
  if (this.re.schema_test.test(n)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(n)) !== null; )
      if (o = this.testSchemaAt(n, t[2], a.lastIndex), o) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = n.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (e = n.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (c = e.index + e[1].length, (this.__index__ < 0 || c < this.__index__) && (this.__schema__ = "", this.__index__ = c, this.__last_index__ = e.index + e[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = n.indexOf("@"), u >= 0 && (s = n.match(this.re.email_fuzzy)) !== null && (c = s.index + s[1].length, i = s.index + s[0].length, (this.__index__ < 0 || c < this.__index__ || c === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = c, this.__last_index__ = i))), this.__index__ >= 0;
};
F.prototype.pretest = function(n) {
  return this.re.pretest.test(n);
};
F.prototype.testSchemaAt = function(n, t, e) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(n, e, this) : 0;
};
F.prototype.match = function(n) {
  var t = 0, e = [];
  this.__index__ >= 0 && this.__text_cache__ === n && (e.push(Bn(this, t)), t = this.__last_index__);
  for (var s = t ? n.slice(t) : n; this.test(s); )
    e.push(Bn(this, t)), s = s.slice(this.__last_index__), t += this.__last_index__;
  return e.length ? e : null;
};
F.prototype.matchAtStart = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return null;
  var t = this.re.schema_at_start.exec(n);
  if (!t)
    return null;
  var e = this.testSchemaAt(n, t[2], t[0].length);
  return e ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + e, Bn(this, 0)) : null;
};
F.prototype.tlds = function(n, t) {
  return n = Array.isArray(n) ? n : [n], t ? (this.__tlds__ = this.__tlds__.concat(n).sort().filter(function(e, s, o) {
    return e !== o[s - 1];
  }).reverse(), un(this), this) : (this.__tlds__ = n.slice(), this.__tlds_replaced__ = !0, un(this), this);
};
F.prototype.normalize = function(n) {
  n.schema || (n.url = "http://" + n.url), n.schema === "mailto:" && !/^mailto:/i.test(n.url) && (n.url = "mailto:" + n.url);
};
F.prototype.onCompile = function() {
};
var KO = F;
const XO = {}, nM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: XO
}, Symbol.toStringTag, { value: "Module" })), tM = /* @__PURE__ */ gr(nM);
var rM = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, eM = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, oM = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, X = E, sM = hn, cM = c3, iM = F3, aM = lO, lM = OO, uM = KO, V = J, Jt = tM, pM = {
  default: rM,
  zero: eM,
  commonmark: oM
}, fM = /^(vbscript|javascript|file|data):/, hM = /^data:image\/(gif|png|jpeg|webp);/;
function dM(r) {
  var n = r.trim().toLowerCase();
  return fM.test(n) ? !!hM.test(n) : !0;
}
var Wt = ["http:", "https:", "mailto:"];
function mM(r) {
  var n = V.parse(r, !0);
  if (n.hostname && (!n.protocol || Wt.indexOf(n.protocol) >= 0))
    try {
      n.hostname = Jt.toASCII(n.hostname);
    } catch {
    }
  return V.encode(V.format(n));
}
function gM(r) {
  var n = V.parse(r, !0);
  if (n.hostname && (!n.protocol || Wt.indexOf(n.protocol) >= 0))
    try {
      n.hostname = Jt.toUnicode(n.hostname);
    } catch {
    }
  return V.decode(V.format(n), V.decode.defaultChars + "%");
}
function T(r, n) {
  if (!(this instanceof T))
    return new T(r, n);
  n || X.isString(r) || (n = r || {}, r = "default"), this.inline = new lM(), this.block = new aM(), this.core = new iM(), this.renderer = new cM(), this.linkify = new uM(), this.validateLink = dM, this.normalizeLink = mM, this.normalizeLinkText = gM, this.utils = X, this.helpers = X.assign({}, sM), this.options = {}, this.configure(r), n && this.set(n);
}
T.prototype.set = function(r) {
  return X.assign(this.options, r), this;
};
T.prototype.configure = function(r) {
  var n = this, t;
  if (X.isString(r) && (t = r, r = pM[t], !r))
    throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  if (!r)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return r.options && n.set(r.options), r.components && Object.keys(r.components).forEach(function(e) {
    r.components[e].rules && n[e].ruler.enableOnly(r.components[e].rules), r.components[e].rules2 && n[e].ruler2.enableOnly(r.components[e].rules2);
  }), this;
};
T.prototype.enable = function(r, n) {
  var t = [];
  Array.isArray(r) || (r = [r]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.enable(r, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(r, !0));
  var e = r.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (e.length && !n)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + e);
  return this;
};
T.prototype.disable = function(r, n) {
  var t = [];
  Array.isArray(r) || (r = [r]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.disable(r, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(r, !0));
  var e = r.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (e.length && !n)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + e);
  return this;
};
T.prototype.use = function(r) {
  var n = [this].concat(Array.prototype.slice.call(arguments, 1));
  return r.apply(r, n), this;
};
T.prototype.parse = function(r, n) {
  if (typeof r != "string")
    throw new Error("Input data should be a String");
  var t = new this.core.State(r, this, n);
  return this.core.process(t), t.tokens;
};
T.prototype.render = function(r, n) {
  return n = n || {}, this.renderer.render(this.parse(r, n), this.options, n);
};
T.prototype.parseInline = function(r, n) {
  var t = new this.core.State(r, this, n);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
T.prototype.renderInline = function(r, n) {
  return n = n || {}, this.renderer.render(this.parseInline(r, n), this.options, n);
};
var _M = T, bM = _M;
const kM = /* @__PURE__ */ mr(bM), vM = (r, n) => {
  const t = r.__vccOpts || r;
  for (const [e, s] of n)
    t[e] = s;
  return t;
}, xM = {
  name: "dssMark",
  data() {
    return {
      renderedMarkdown: ""
    };
  },
  setup(r) {
    async function n(t) {
      try {
        const e = await fetch(t);
        if (!e.ok)
          throw new Error(`Failed to fetch Markdown file: ${e.statusText}`);
        console.log(e.body);
        const s = e.body, o = new TextDecoder("utf-8"), c = [], i = s.getReader();
        for (; ; ) {
          const { done: u, value: p } = await i.read();
          if (u)
            break;
          console.log(p), c.push(p);
        }
        console.log(c), console.log(o.decode(c[0]));
        const a = o.decode(c[0]), l = new kM();
        this.renderedMarkdown = l.render(a), console.log(a);
      } catch (e) {
        console.error("Error fetching or reading the Markdown file:", e);
      }
    }
    return {
      fetchAndReadMarkdown: n
    };
  },
  mounted() {
    this.fetchAndReadMarkdown("/src/components/demo/README.md");
  }
}, yM = ["innerHTML"];
function wM(r, n, t, e, s, o) {
  return M(), U("div", {
    style: { width: "100%", height: "100%" },
    innerHTML: s.renderedMarkdown
  }, null, 8, yM);
}
const CM = /* @__PURE__ */ vM(xM, [["render", wM]]);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const AM = () => {
}, Rn = Array.isArray, jn = (r, n) => {
  if (r.install = (t) => {
    for (const e of [r, ...Object.values(n ?? {})])
      t.component(e.name, e);
  }, n)
    for (const [t, e] of Object.entries(n))
      r[t] = e;
  return r;
}, Yt = (r) => (r.install = AM, r), cn = (r) => {
  const n = Rn(r) ? r : [r], t = [];
  return n.forEach((e) => {
    var s;
    Rn(e) ? t.push(...cn(e)) : zn(e) && Rn(e.children) ? t.push(...cn(e.children)) : (t.push(e), zn(e) && ((s = e.component) != null && s.subTree) && t.push(...cn(e.component.subTree)));
  }), t;
}, EM = (r, n, t) => cn(r.subTree).filter(
  (o) => {
    var c;
    return zn(o) && ((c = o.type) == null ? void 0 : c.name) === n && !!o.component;
  }
).map((o) => [null, void 0].includes(o.component) || o.component.uid).map((o) => t[o]).filter((o) => !!o), DM = (r, n) => {
  const t = {}, e = Rt([]);
  return {
    children: e,
    addChild: (c) => {
      t[c.uid] = c, e.value = EM(r, n, t);
    },
    removeChild: (c) => {
      delete t[c], e.value = e.value.filter(
        (i) => i.uid !== c
      );
    }
  };
}, qM = jn(dr), SM = jn(CM);
const FM = ["src"], TM = ["src"], LM = { class: "title" }, Gn = /* @__PURE__ */ Object.assign({
  name: "dssNav"
}, {
  __name: "Nav",
  props: {
    active: String,
    tabOption: JSON,
    label: String,
    count: Number,
    icon: String,
    activeIcon: String
  },
  emits: ["itemClick"],
  setup(r, { emit: n }) {
    const t = r, e = O(t.active);
    return an(t, async (s) => {
      await zt(), console.log(s.active), e.value = s.active;
    }), (s, o) => {
      const c = sn("el-badge");
      return M(), U("div", {
        class: Xt(["item", { active: e.value == r.tabOption.paneName }]),
        onClick: o[0] || (o[0] = (i) => n("itemClick", t.tabOption.paneName))
      }, [
        e.value != r.tabOption.paneName ? (M(), U("img", {
          key: 0,
          src: t.icon,
          alt: ""
        }, null, 8, FM)) : (M(), U("img", {
          key: 1,
          src: t.activeIcon,
          alt: ""
        }, null, 8, TM)),
        Z("span", LM, nr(t.label), 1),
        z(c, {
          value: t.count,
          max: 99,
          class: "badge-item"
        }, null, 8, ["value"])
      ], 2);
    };
  }
});
var RM = Object.defineProperty, zM = Object.defineProperties, NM = Object.getOwnPropertyDescriptors, St = Object.getOwnPropertySymbols, IM = Object.prototype.hasOwnProperty, BM = Object.prototype.propertyIsEnumerable, Ft = (r, n, t) => n in r ? RM(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t, PM = (r, n) => {
  for (var t in n || (n = {}))
    IM.call(n, t) && Ft(r, t, n[t]);
  if (St)
    for (var t of St(n))
      BM.call(n, t) && Ft(r, t, n[t]);
  return r;
}, OM = (r, n) => zM(r, NM(n));
function Tt(r, n) {
  var t;
  const e = Rt();
  return tr(() => {
    e.value = r();
  }, OM(PM({}, n), {
    flush: (t = n == null ? void 0 : n.flush) != null ? t : "sync"
  })), rr(e);
}
var Lt;
const MM = typeof window < "u";
MM && ((Lt = window == null ? void 0 : window.navigator) != null && Lt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
const UM = ["id", "aria-hidden", "aria-labelledby"], Qt = /* @__PURE__ */ Object.assign({
  name: "dssNavChild"
}, {
  __name: "NavChild",
  props: {
    name: String,
    label: String,
    count: Number,
    icon: String,
    activeIcon: String
  },
  setup(r) {
    const n = r, t = Nn(), e = er(), s = or("nav"), o = Tt(
      () => s.active.value === n.name
    ), c = O(o.value), i = sr(() => n.name), a = Tt(
      () => !n.lazy || c.value || o.value
    );
    an(o, (u) => {
      u && (c.value = !0);
    });
    const l = cr({
      uid: t.uid,
      slots: e,
      props: n,
      paneName: i,
      active: o
    });
    return Nt(() => {
      s.setCurrent(l);
    }), ir(() => {
    }), (u, p) => vn(a) ? ar((M(), U("div", {
      key: 0,
      class: "dss-nav-content",
      id: `pane-${i.value}`,
      role: "tabpanel",
      "aria-hidden": !vn(o),
      "aria-labelledby": `tab-${i.value}`
    }, [
      It(u.$slots, "default")
    ], 8, UM)), [
      [lr, vn(o)]
    ]) : ur("", !0);
  }
});
const $M = { class: "dss-nav-tab" }, VM = { class: "border content" }, jM = { class: "border insert" }, GM = { class: "imgBox top" }, HM = ["src"], ZM = { class: "navBox" }, JM = /* @__PURE__ */ Object.assign({
  name: "dssTab"
}, {
  __name: "Tab",
  props: {
    tabActive: String,
    header: String
  },
  emits: ["update:tabActive"],
  setup(r, { emit: n }) {
    const t = r, e = O("1"), s = Nn(), o = O([]);
    console.log(s.slots);
    const c = (l) => {
      console.log(l), n("update:tabActive", l), e.value = l;
    };
    DM(Nn(), "ElTabPane"), O("a1"), O(
      t.modelValue || t.activeName || "0"
    ), O([
      { title: "我的帖子", tabKey: "a1", id: "11" },
      { title: "评论", tabKey: "a2", id: "12" },
      { title: "我的回复", tabKey: "a3", id: "13" }
    ]), an(t, async (l) => {
      await zt(), console.log(l.tabActive), e.value = l.tabActive;
    });
    const i = (l) => {
      console.log(l);
      const u = o.value.findIndex((f) => f.paneName == l);
      console.log(u), document.documentElement.style.setProperty("--active-background", "0 " + u * 56 + "px");
    };
    return an(e, (l) => {
      i(l);
    }), Nt(() => {
    }), pr("nav", {
      props: t,
      active: e,
      setCurrent: (l) => {
        console.log(l.paneName), o.value.push(l), t.tabActive == null ? e.value = o.value[0].paneName : (e.value = t.tabActive, i(l));
      }
    }), (l, u) => {
      const p = sn("el-aside"), f = sn("el-main"), h = sn("el-container");
      return M(), U("div", $M, [
        z(h, null, {
          default: K(() => [
            z(f, null, {
              default: K(() => [
                Z("div", VM, [
                  z(h, null, {
                    default: K(() => [
                      z(p, { width: "180px" }, {
                        default: K(() => [
                          Z("div", jM, [
                            Z("div", GM, [
                              Z("img", {
                                width: "60",
                                src: t.header,
                                alt: ""
                              }, null, 8, HM)
                            ]),
                            Z("div", ZM, [
                              (M(!0), U(fr, null, hr(o.value, (b) => (M(), U("div", {
                                key: o.value.uid
                              }, [
                                z(Gn, {
                                  "tab-option": b,
                                  onItemClick: c,
                                  count: b.props.count,
                                  active: e.value,
                                  label: b.props.label,
                                  icon: b.props.icon,
                                  "active-icon": b.props.activeIcon
                                }, null, 8, ["tab-option", "count", "active", "label", "icon", "active-icon"])
                              ]))), 128))
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      z(f, null, {
                        default: K(() => [
                          It(l.$slots, "default")
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]);
    };
  }
}), WM = jn(JM, { Nav: Gn, NavChild: Qt }), YM = Yt(Gn), QM = Yt(Qt), KM = [
  qM,
  SM,
  WM,
  YM,
  QM
], XM = (r) => {
  Object.values(KM).forEach((n) => {
    console.log(n);
    const t = n.name;
    r.component(t, n);
  });
}, tU = {
  install: XM,
  version: "1.1.1"
};
export {
  tU as default
};
