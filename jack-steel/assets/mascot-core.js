"use strict";var MascotCore=(()=>{var h=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var k=(t,e)=>{for(var o in e)h(t,o,{get:e[o],enumerable:!0})},E=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!w.call(t,r)&&r!==o&&h(t,r,{get:()=>e[r],enumerable:!(a=v(e,r))||a.enumerable});return t};var L=t=>E(h({},"__esModule",{value:!0}),t);var N={};k(N,{AMP_CAP:()=>u,BURST:()=>_,CELE_ORDER:()=>Y,CELE_STAGGER_MS:()=>H,COLLAPSE:()=>B,DIP:()=>S,END:()=>G,FB:()=>l,FILL_BLOBS:()=>f,FILL_HEAD:()=>s,FILL_SWEEP:()=>p,FRONT_G_OF:()=>O,FS:()=>j,FX_PROXY:()=>R,GKEYS:()=>m,GROUPS:()=>n,MUSCLES:()=>g,N:()=>i,REAR_G_OF:()=>M,REAR_MUSCLES:()=>F,RISE:()=>C,ROAR_MS:()=>I,SPLIT_OPTS:()=>b,STAGE_HEADROOM:()=>d,VS:()=>$,fillBlobs:()=>T,fillExtent:()=>D,splitLabels:()=>A});var g=[{c:[225,330],r:130,a:.525},{c:[719,330],r:130,a:.525},{c:[205,240],r:110,a:.35},{c:[739,240],r:110,a:.35},{c:[472,425],r:160,a:.325},{c:[472,570],r:130,a:.275},{c:[395,870],r:120,a:.375},{c:[549,870],r:120,a:.375},{c:[400,995],r:90,a:.375},{c:[544,995],r:90,a:.375}],F=[{c:[238,255],r:95,a:.42},{c:[706,255],r:95,a:.42},{c:[312,335],r:85,a:.28},{c:[632,335],r:85,a:.28},{c:[385,490],r:200,a:.3},{c:[559,490],r:200,a:.3},{c:[400,830],r:110,a:.3},{c:[544,830],r:110,a:.3},{c:[400,990],r:90,a:.3},{c:[544,990],r:90,a:.3}],i=g.length,u=.55,d=150,p={top:100,bot:1025},s={cx:472,cy:150,rx:150,ry:150},n={arms:{label:"Arms",fidx:[0,1,2,3],ridx:[0,1,2,3]},chest:{label:"Chest",fidx:[4],ridx:[]},back:{label:"Back",fidx:[],ridx:[4,5]},core:{label:"Core",fidx:[5],ridx:[]},thighs:{label:"Thighs",fidx:[6,7],ridx:[6,7]},calves:{label:"Calves",fidx:[8,9],ridx:[8,9]}},m=Object.keys(n),b=[{key:"arms",label:"Arms",groups:["arms"]},{key:"chest",label:"Chest",groups:["chest"]},{key:"back",label:"Back",groups:["back"]},{key:"core",label:"Core",groups:["core"]},{key:"legs",label:"Legs",groups:["thighs","calves"]}];function A(t){return b.filter(e=>e.groups.some(o=>t.includes(o))).map(e=>e.label)}var x=t=>{let e=new Array(i).fill("");return m.forEach(o=>t(o).forEach(a=>{e[a]=o})),e},O=x(t=>n[t].fidx),M=x(t=>n[t].ridx),R={front:{back:[{c:[352,495],r:95},{c:[592,495],r:95}]},rear:{chest:[{c:[380,320],r:85},{c:[564,320],r:85}],core:[{c:[472,585],r:90}]}},l=22,f={front:{arms:[{c:[225,330],r:130},{c:[719,330],r:130},{c:[168,405],r:82},{c:[776,405],r:82}],chest:[{c:[472,425],r:155},{c:[350,350],r:95},{c:[594,350],r:95},{c:[472,350],r:80}],back:[],core:[{c:[472,578],r:108},{c:[395,592],r:82},{c:[549,592],r:82}],thighs:[{c:[395,870],r:120},{c:[549,870],r:120}],calves:[{c:[400,965],r:75},{c:[544,965],r:75}]},rear:{arms:[{c:[190,315],r:85},{c:[754,315],r:85},{c:[250,365],r:92},{c:[694,365],r:92},{c:[300,340],r:76},{c:[644,340],r:76}],back:[{c:[472,300],r:110},{c:[370,330],r:105},{c:[574,330],r:105},{c:[352,425],r:105},{c:[592,425],r:105},{c:[380,525],r:95},{c:[564,525],r:95},{c:[422,615],r:95},{c:[522,615],r:95},{c:[472,480],r:105}],chest:[],core:[],thighs:[{c:[396,845],r:88},{c:[548,845],r:88},{c:[400,915],r:82},{c:[544,915],r:82}],calves:[{c:[400,950],r:70},{c:[544,950],r:70}]}};function T(t){let e=[];for(let o of m)for(let a of f[t][o]||[])e.push({c:a.c,r:a.r,g:o});for(;e.length<l;)e.push({c:[0,0],r:0,g:""});return e}function D(t,e){let o=1/0,a=-1/0;for(let r of e)for(let c of f[t][r]||[])o=Math.min(o,c.c[1]-c.r),a=Math.max(a,c.c[1]+c.r);return a<o?{top:0,bot:1133}:{top:o,bot:a}}var S=.04,C=.14,_=.2,B=.36,G=.82,I=1200,Y=["calves","thighs","core","back","chest","arms"],H=22,$=`
attribute vec2 p; varying vec2 uv;
void main(){ uv = p*0.5+0.5; uv.y = 1.0-uv.y; gl_Position = vec4(p,0.0,1.0); }`,j=`
precision highp float;
varying vec2 uv;
uniform sampler2D tex; uniform vec2 dim;
uniform sampler2D bgTex; uniform float time; // backdrop image (flag OR gym art, bound per frame)
uniform float bgDim; // 0..1 celebration contrast: dim+desaturate the backdrop so fire pops
uniform float bgKind; // 0 = plain colour, 1 = waving flag, 2 = gym interior (user setting)
uniform vec3 bgColor; // the plain-colour choice (bgKind 0)
uniform vec4 stage;   // mascot rect inside the view, in view px: (x, y, w, h)
uniform vec2 view;    // GL view size in px \u2014 the backdrop fills ALL of it
uniform float bgAspect; // backdrop texture w/h, so it COVER-fits instead of stretching
uniform vec2 centers[${i}]; uniform float radii[${i}]; uniform float amps[${i}];
uniform vec4 pose; // x: sx scale, y: sy scale, z: shear px at head, w: lift px
uniform vec3 fx;   // x/y: shake px, z: flash 0..1
uniform float mirror; // legacy (rear now has a dedicated texture); kept for compatibility
uniform float fill;   // 0..1 of the daily goal \u2014 gates the waterline on/off
uniform float fillY;  // px (image space) of the ONE whole-body waterline
uniform float motion; // 1 = normal, 0 = reduce-motion (freezes the Tier C liquid animation)
uniform float fillMode; // 0 = whole-body silhouette, 1 = per-muscle (dev A/B toggle)
uniform float rearG;  // 0 = front (band faceGuard), 1 = rear (column guard frees the raised arms)
uniform vec2 fillC[${l}]; uniform float fillR[${l}]; // FILL_BLOBS: anatomy-shaped fill union, decoupled from the growth circles
uniform float fillSel[${l}]; // per fill blob: 1.0 if its group is trained today (muscle mode mask)
uniform float sweepTop; // px: active waterline TOP (fists in body mode; muscle-extent top in muscle mode)
void main(){
  // canvas rows span image y in [-HEADROOM, 1133]: pose lifts/stretches rise into
  // the headroom instead of clipping at the view edge (see STAGE_HEADROOM)
  // The view fills the hero; the MASCOT occupies the aspect-locked stage rect
  // inside it, so the backdrop can cover the whole area behind him (Joseph,
  // 2026-07-27). stageUv is 0..1 across that rect; outside it he is masked off below
  // so the pose maths can never smear him into the margins.
  vec2 stageUv = (uv * view - stage.xy) / stage.zw;
  vec2 px = vec2(stageUv.x * dim.x, stageUv.y * (dim.y + ${d.toFixed(1)}) - ${d.toFixed(1)});
  vec2 bulge = vec2(0.0);
  for(int i=0;i<${i};i++){
    vec2 d = px - centers[i];
    float amp = min(amps[i], ${u.toFixed(2)});
    float f = amp*exp(-dot(d,d)/(radii[i]*radii[i]));
    bulge -= d*f;
  }
  // head anchor: the face is drawn detail, not a muscle. The chest (r=160, on
  // the centerline directly below the face) otherwise drags face pixels on
  // every breath/poke \u2014 a fast poke reads as a sloppy "jump" and warps the
  // jaw/chin (chin sits at y~230-260). Damp the bulge to a 10% floor through
  // the whole head+jaw+neck, ramping to full displacement only once we're into
  // the pecs (y=380) so the chest still bulges fully.
  // FRONT: horizontal band \u2014 the face/jaw is drawn detail, damp all bulge above
  // the pecs. REAR: that band also killed the RAISED ARMS (triceps live at y~255),
  // so the guard becomes a COLUMN around the head/hair (|x-472| < ~110px core):
  // hair stays still, arms get full strength. rearG blends the two per side.
  float bandDamp = 1.0 - clamp((px.y - 270.0) / 110.0, 0.0, 1.0);
  float colDamp = bandDamp * (1.0 - smoothstep(110.0, 170.0, abs(px.x - 472.0)));
  float faceGuard = 1.0 - 0.90 * mix(bandDamp, colDamp, rearG);
  vec2 src = px + bulge * faceGuard;
  // GROWTH WIDTH (2026-07-26): the whole torso/limbs broaden with the day's progress,
  // on top of the per-muscle bulges \u2014 the gaussians alone only moved the arm line ~3%.
  // WIDTH ONLY (no sy): a uniform upscale would clip his head, which sits 4px from the
  // top of the art. Damped by the SAME faceGuard the bulge uses, so the head keeps its
  // drawn proportions (+0.8pt instead of +5pt) while the body widens. Reuses the
  // existing fill uniform (daily %) so this needs no new plumbing, and it previews
  // correctly under the pump slider / gains scrubber, which already drive fill.
  // (NB: no backticks in here \u2014 this whole shader is a JS template literal.)
  float growW = 1.0 + 0.03 * fill * faceGuard;
  // whole-body pose, anchored at the feet (y=1100) and body centerline (x=472):
  // squash/stretch, weight-shift shear (head moves most), lift, screen shake
  float hf = clamp((1100.0 - src.y) / 1100.0, 0.0, 1.0);
  src.x = 472.0 + (src.x - 472.0) / (pose.x * growW) - pose.z * pow(hf, 1.3);
  src.y = 1100.0 + (src.y - 1100.0) / pose.y + pose.w;
  src += fx.xy;
  src.x = mix(src.x, dim.x - src.x, mirror);
  vec4 c = texture2D(tex, src/dim);
  c.a *= step(0.0, stageUv.x) * step(stageUv.x, 1.0) * step(0.0, stageUv.y) * step(stageUv.y, 1.0); // never paint him outside his own rect
  // placeholder rear art is the mirrored (symmetric!) front \u2014 tint it cooler
  // and darker so the flip is unmistakable until the real rear art lands
  c.rgb = mix(c.rgb, c.rgb * vec3(0.62, 0.72, 0.92), mirror);
  // Waterllama-style rising FILL: ONE whole-body waterline (fillY) rises the full
  // silhouette shin->fists as a molten-gold gauge \u2014 a pure daily-%, nothing per-muscle.
  // Mask = the opaque body (texture alpha) minus the shoes (below the floor) and the head
  // (so the face stays natural). Treated as liquid METAL, not a flat tint: luminance-
  // preserving so muscle form survives, a vertical hot->deep gradient for volume, and a
  // crisp meniscus (tight core + hairline highlight + dark lip) for a real liquid surface.
  float body = smoothstep(0.35, 0.60, c.a);                           // the opaque silhouette
  float aboveShoe = 1.0 - smoothstep(${p.bot.toFixed(1)} - 16.0, ${p.bot.toFixed(1)} + 16.0, px.y); // drop the shoes
  vec2 hd = (px - vec2(${s.cx.toFixed(1)}, ${s.cy.toFixed(1)})) / vec2(${s.rx.toFixed(1)}, ${s.ry.toFixed(1)});
  float noHead = smoothstep(1.0, 1.25, length(hd));                   // 0 inside head -> 1 outside
  float bodyMask = body * aboveShoe * noHead;
  // per-muscle mode: union of the trained-muscle blobs (loop var j so it never collides
  // with the bulge loop's i in main scope). fillMode blends whole-body silhouette <-> muscle blobs.
  // COMPACT support (soft-edged disk, zero past each blob's radius) over the FILL_BLOBS
  // union \u2014 anatomy-shaped fill decoupled from the growth circles (chest climbs through
  // traps + delts instead of sitting as a pec oval; gaussian tails used to spill onto the
  // pecs). Head/neck + shoes are guarded in BOTH modes.
  float selMask = 0.0;
  for(int j=0;j<${l};j++){ vec2 sd = px - fillC[j];
    selMask = max(selMask, fillSel[j] * (1.0 - smoothstep(0.75, 1.0, length(sd) / max(fillR[j], 1.0)))); }
  selMask *= aboveShoe * noHead; // fill never paints the face/neck or the shoes, either mode
  float selFill = smoothstep(0.05, 0.18, selMask); // tighten the soft edge a touch for the FILL; rim keeps raw selMask for continuity
  float mask = mix(bodyMask, selFill, fillMode);
  float gate = step(0.02, fill);
  float topFade = smoothstep(sweepTop, sweepTop + 70.0, fillY); // calm the surface near the sweep top (fists / muscle-extent top)
  // TIER C \u2014 living liquid surface: the waterline undulates along its length (two crossed
  // sines drifting apart), stilled toward the top and frozen entirely under reduce-motion.
  float rippleY = fillY + (sin(px.x * 0.045 + time * 3.2) * 3.4
                         + sin(px.x * 0.021 - time * 2.1) * 2.0) * gate * topFade * motion;
  float below = smoothstep(rippleY - 16.0, rippleY + 16.0, px.y);      // 1 below the rippling line
  float denim = smoothstep(0.02, 0.12, c.b - c.r);                    // keep the shorts reading as denim, not skin
  float fillMask = mask * below * (1.0 - denim * mix(0.40, 1.0, fillMode)); // whole-body keeps the deliberate khaki damp; per-muscle CLIPS at the denim so thigh blobs can't smear the shorts (final pass)
  float bodyLuma = dot(c.rgb, vec3(0.299, 0.587, 0.114));             // the mascot's own shading, preserved
  // molten body: hot surface gold near the line -> deep richer amber at the base, then
  // modulated by luma so abs / muscle separation survive the flood (no flat paint-fill).
  // The /380 ramp is scaled for the ~925px WHOLE-BODY sweep; a single muscle group's
  // extent is a third of that, so in per-muscle mode the same ramp buried the bottom of
  // tall groups (the elbow end of the arms, y~430 at depth 0.6) in deep amber \u2014 which,
  // luma-multiplied over the art's darkest shadow, is nearly the same colour as shaded
  // skin. "The gold doesn't reach the elbow" (Joseph, 2026-08-13, device) was this, not
  // coverage: those pixels were gilded and invisible. Muscle mode compresses the ramp
  // so every group stays recognisably GOLD to its bottom edge; whole-body is untouched.
  float depth = clamp((px.y - rippleY) / 380.0, 0.0, 1.0) * mix(1.0, 0.55, fillMode);
  vec3 gold = mix(vec3(1.0, 0.87, 0.58), vec3(1.0, 0.64, 0.15), depth); // lighter hot surface -> deep amber base; reads as metal, not a flat costume
  c.rgb = mix(c.rgb, gold * (0.30 + 1.00 * bodyLuma), fillMask * 0.92);  // higher luma gain sculpts delts/abs (metal over muscle, more contrast)
  c.rgb += denim * mask * below * gate * vec3(1.0, 0.74, 0.34) * 0.14 * (1.0 - fillMode); // gold sheen so the denim sits in the same light (whole-body only \u2014 per-muscle leaves the shorts denim)
  // crisp meniscus tracks the rippling line: a HAIRLINE bright edge (not a fat glowing belt) +
  // a darker shadow lip beneath so the surface reads as a real waterline, not a highlighter bar.
  // Fades near the very top so the fists don't blow out.
  float core = mask * exp(-((px.y - rippleY)*(px.y - rippleY)) / (6.0*6.0)) * gate * topFade;
  float hi   = mask * exp(-((px.y - rippleY)*(px.y - rippleY)) / (2.0*2.0)) * gate * topFade;
  float lip  = mask * below * exp(-((px.y - (rippleY + 11.0))*(px.y - (rippleY + 11.0))) / (9.0*9.0)) * gate;
  c.rgb += core * vec3(1.0, 0.80, 0.42) * 0.5;
  c.rgb += hi * vec3(1.0, 0.93, 0.72) * 0.6; // hot-GOLD hairline (warmed off white so the surface reads molten, not a white edge)
  c.rgb *= (1.0 - lip * 0.30);
  // TIER C \u2014 effervescent sparkles hugging the surface: cell the band into ~22px cells and give
  // each ONE hash-jittered glint with a hash-random twinkle rate/phase, so the field scatters
  // organically (a plain sine lattice reads as a cheap screen-door). Off under reduce-motion.
  float surf = exp(-((px.y - (rippleY + 8.0))*(px.y - (rippleY + 8.0))) / (26.0*26.0)); // glints sit in the gold just BELOW the line, not inside the bright surface
  vec2 cell = px / 22.0; vec2 cid = floor(cell); vec2 cfr = fract(cell);
  float h1 = fract(sin(dot(cid, vec2(41.3, 289.1))) * 43758.5453);
  float h2 = fract(sin(dot(cid, vec2(97.1, 13.7))) * 24634.6345);
  float dg = length(cfr - vec2(0.25 + 0.5 * h1, 0.25 + 0.5 * h2));
  float tw = 0.5 + 0.5 * sin(time * (3.0 + 4.0 * h1) + h2 * 6.2832);
  float hero = step(0.85, h1); // top ~15% of cells throw a slightly larger, more frequent "hero" glint
  float sp = smoothstep(0.11 + hero * 0.02, 0.0, dg) * smoothstep(0.72 - hero * 0.04, 1.0, tw); // sparse points, a few pop
  c.rgb += mask * surf * sp * gate * topFade * motion * vec3(1.0, 0.98, 0.86) * 1.1; // cooler so they pop off the orange gold
  // TIER C \u2014 rim-glow: warm light licks the silhouette edge of the CHARGED (filled) body. A
  // Laplacian of the texture alpha finds the outline with no derivative extension (expo-gl may
  // lack OES_standard_derivatives). Steady base with a gentle motion-only breathing pulse.
  float e = 3.0;
  float aE = clamp(4.0 * c.a
           - texture2D(tex, (src + vec2(-e, 0.0)) / dim).a
           - texture2D(tex, (src + vec2( e, 0.0)) / dim).a
           - texture2D(tex, (src + vec2(0.0, -e)) / dim).a
           - texture2D(tex, (src + vec2(0.0,  e)) / dim).a, 0.0, 1.0);
  float rim = aE * mix(aboveShoe * noHead, selMask, fillMode) * below * gate; // silhouette edge in body mode, trained-blob edge in muscle mode
  c.rgb += rim * (1.0 - motion * 0.15 + motion * 0.15 * sin(time * 2.4)) * vec3(1.0, 0.78, 0.40) * (1.15 + 0.2 * fill); // stronger at high fill so it isn't swallowed by the all-gold body
  // stage the un-charged body slightly cool + muted so the gold reads as "charged"
  float aboveL = mask * (1.0 - below) * gate * 0.12;
  c.rgb = mix(c.rgb, vec3(bodyLuma) * vec3(0.92, 0.96, 1.04), aboveL);
  // warm underglow: the charged body throws light up onto the jaw so the head reads lit (body mode only)
  float jaw = (1.0 - noHead) * body * smoothstep(${s.cy.toFixed(1)} + 60.0, ${s.cy.toFixed(1)} + 150.0, px.y) * fill * (1.0 - fillMode);
  c.rgb += jaw * vec3(1.0, 0.55, 0.20) * 0.22;
  c.rgb = clamp(c.rgb, 0.0, 1.0);
  // ---- waving American-flag backdrop (Blake) ----
  // sample the flag with a gentle, time-driven cloth ripple (two crossed sines),
  // add fold shading so the crests/troughs read as moving cloth, then a soft
  // center scrim so the neon mascot stays the hero. #121212 shows through only
  // where the flag texture is transparent (it isn't), keeping the dark stack.
  // CLOTH warp is flag-only: the gym art is architecture, and rippling its
  // straight lines reads as a bad video filter. isFlag gates the wave AND the
  // fold banding; everything after (scrim, celebration dim) is shared.
  float isFlag = step(0.5, bgKind) * step(bgKind, 1.5);
  float viewAspect = view.x / max(view.y, 1.0);
  vec2 cover = viewAspect > bgAspect ? vec2(1.0, bgAspect / viewAspect) : vec2(viewAspect / bgAspect, 1.0);
  vec2 fuv = (uv - 0.5) * cover + 0.5; // crop, never stretch: a squashed flag has oval stars
  float flagT = time * motion; // reduce-motion freezes the cloth: folds stay, waving stops (final pass)
  float wave = sin(fuv.x * 11.0 + flagT * 1.6) * 0.010 + sin(fuv.y * 7.0 - flagT * 1.1) * 0.006;
  fuv.y += wave * isFlag;
  fuv.x += sin(fuv.y * 9.0 + flagT * 1.3) * 0.006 * isFlag;
  vec4 fg = texture2D(bgTex, clamp(fuv, 0.0, 1.0));
  vec3 img = mix(vec3(0.0706), fg.rgb, fg.a);
  img *= mix(1.0, 0.60 + 0.16 * cos(fuv.x * 11.0 + flagT * 1.6), isFlag); // fold light/shadow (cloth only)
  float d2 = distance(uv, vec2(0.5, 0.60));
  img *= mix(0.42, 1.0, clamp(d2 * 1.7, 0.0, 1.0));           // center-bottom scrim: the mascot stays the hero
  // celebration contrast: desaturate + darken + deepen the vignette so the fire
  // is the brightest, hottest thing on screen ("the world dims, HE ignites")
  float luma = dot(img, vec3(0.299, 0.587, 0.114));
  img = mix(img, vec3(luma * 0.5), bgDim * 0.6);
  img *= 1.0 - bgDim * 0.5;
  img *= mix(1.0, mix(0.3, 1.0, clamp(d2 * 1.7, 0.0, 1.0)), bgDim);
  // plain colour takes the same celebration dim (minus the desaturate \u2014 a flat
  // hue has nothing to desaturate into) so every backdrop reacts to the pop
  // plain colour is NOT flat: a single dead value behind a heavy-ink cel character
  // reads as a cutout on a slide (worse on OLED). A two-stop radial glow of the
  // SAME hue, a few points lighter behind his chest, fakes a light source so he
  // looks staged instead of stickered \u2014 no asset, no second colour to manage.
  vec3 plainBg = bgColor * (1.0 + 0.55 * (1.0 - smoothstep(0.05, 0.62, d2)))
               * (1.0 - bgDim * 0.5) * mix(1.0, mix(0.55, 1.0, clamp(d2 * 1.7, 0.0, 1.0)), bgDim);
  vec3 bg = mix(plainBg, img, step(0.5, bgKind)); // 0 = plain colour, 1/2 = image backdrop
  gl_FragColor = vec4(mix(bg, c.rgb + fx.z * 0.85, c.a), 1.0);
}`;return L(N);})();
