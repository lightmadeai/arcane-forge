// Arcane Forge SVG Data — lazy-loaded per type group
// This file is loaded on demand when a user first visits the Visual tab for a type.

METALS=[
  {name:'Silver',    dark:'#707070',mid:'#b0b0b0',light:'#e0e0e0',shine:'#ffffff'},
  {name:'Gold',      dark:'#8B6210',mid:'#C9A84C',light:'#FFD700',shine:'#FFF4AA'},
  {name:'Bronze',    dark:'#5C3010',mid:'#A0622A',light:'#CD853F',shine:'#EEC080'},
  {name:'Black Steel',dark:'#080808',mid:'#222222',light:'#404040',shine:'#686868'},
  {name:'Mithril',   dark:'#2040A0',mid:'#4070C8',light:'#80B0FF',shine:'#C0D8FF'},
  {name:'Obsidian',  dark:'#0A0015',mid:'#2A0840',light:'#501870',shine:'#9040B0'},
  {name:'Bone',      dark:'#8B7050',mid:'#C0A070',light:'#E0C89A',shine:'#FFF8E8'},
];
AURAS=[
  {name:'None',     color:'none',   glow:'none'},
  {name:'Flame',    color:'#FF5500',glow:'#FF2200'},
  {name:'Frost',    color:'#44AAFF',glow:'#0055DD'},
  {name:'Lightning',color:'#FFE844',glow:'#FFAA00'},
  {name:'Shadow',   color:'#7722CC',glow:'#440099'},
  {name:'Holy',     color:'#FFEE99',glow:'#FFD700'},
  {name:'Poison',   color:'#44FF77',glow:'#00AA44'},
  {name:'Blood',    color:'#CC1111',glow:'#880000'},
  {name:'Arcane',   color:'#CC44FF',glow:'#9900CC'},
];
BLADES=[
  {name:'Straight',  svg:m=>`<path d="M80,16 L74,162 L80,176 L86,162 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/><line x1="80" y1="22" x2="80" y2="158" stroke="${m.shine}" stroke-width="0.7" opacity="0.45"/>`},
  {name:'Curved',    svg:m=>`<path d="M80,16 Q94,82 88,160 L80,176 L74,162 Q61,82 80,16 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/><path d="M80,22 Q90,82 85,157" stroke="${m.shine}" stroke-width="0.8" fill="none" opacity="0.4"/>`},
  {name:'Broad',     svg:m=>`<path d="M80,16 L64,158 L80,176 L96,158 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/><line x1="80" y1="20" x2="80" y2="155" stroke="${m.shine}" stroke-width="0.7" opacity="0.45"/>`},
  {name:'Leaf',      svg:m=>`<path d="M80,16 Q97,72 93,140 L80,176 L67,140 Q63,72 80,16 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/><path d="M80,22 Q92,72 89,136" stroke="${m.shine}" stroke-width="0.8" fill="none" opacity="0.38"/>`},
  {name:'Flamberge', svg:m=>`<path d="M80,16 Q87,38 76,58 Q88,78 77,100 Q88,122 77,143 L80,176 L83,143 Q72,122 83,100 Q72,78 84,58 Q73,38 80,16 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Crystal',   svg:m=>`<path d="M80,16 L87,54 L92,96 L87,140 L80,176 L73,140 L68,96 L73,54 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/><line x1="80" y1="16" x2="80" y2="173" stroke="${m.shine}" stroke-width="0.8" opacity="0.55"/>`},
  {name:'Jagged',    svg:m=>`<path d="M80,16 L75,46 L79,54 L73,84 L78,90 L72,120 L77,126 L73,156 L80,176 L87,156 L83,126 L88,120 L82,90 L87,84 L81,54 L85,46 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/>`},
];
GUARDS=[
  {name:'Simple',      svg:m=>`<rect x="57" y="173" width="46" height="8" rx="2" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Swept Down',  svg:m=>`<path d="M57,173 Q59,191 68,193 L80,180 L92,193 Q101,191 103,173 L103,179 Q101,198 92,199 L80,185 L68,199 Q59,198 57,179 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Swept Up',    svg:m=>`<path d="M57,181 Q59,163 68,162 L80,174 L92,162 Q101,163 103,181 L103,175 Q101,157 92,156 L80,169 L68,156 Q59,157 57,175 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Dragon Wings',svg:m=>`<path d="M80,175 Q68,164 54,156 Q49,161 51,170 Q60,176 68,179 L80,182 L92,179 Q100,176 109,170 Q111,161 106,156 Q92,164 80,175 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Cross',       svg:m=>`<rect x="57" y="173" width="46" height="8" rx="1" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><rect x="77" y="162" width="6" height="30" rx="1" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Minimal',     svg:m=>`<ellipse cx="63" cy="176" rx="7" ry="4" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><ellipse cx="97" cy="176" rx="7" ry="4" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Ornate',      svg:m=>`<path d="M56,171 Q58,167 66,167 Q73,170 80,172 Q87,170 94,167 Q102,167 104,171 L104,180 Q102,185 94,185 Q87,183 80,180 Q73,183 66,185 Q58,185 56,180 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><circle cx="55" cy="176" r="5" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><circle cx="105" cy="176" r="5" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
];
GRIPS=[
  {name:'Leather',  svg:()=>`<rect x="76" y="181" width="8" height="63" rx="2" fill="#7B3F1A"/><line x1="76" y1="188" x2="84" y2="182" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="197" x2="84" y2="191" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="206" x2="84" y2="200" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="215" x2="84" y2="209" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="224" x2="84" y2="218" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="233" x2="84" y2="227" stroke="#5a2a0a" stroke-width="1.5"/><line x1="76" y1="242" x2="84" y2="236" stroke="#5a2a0a" stroke-width="1.5"/>`},
  {name:'Wire Wrap',svg:()=>`<rect x="77" y="181" width="6" height="63" rx="1" fill="#3a2a1a"/><line x1="77" y1="187" x2="83" y2="182" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="193" x2="83" y2="188" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="199" x2="83" y2="194" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="205" x2="83" y2="200" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="211" x2="83" y2="206" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="217" x2="83" y2="212" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="223" x2="83" y2="218" stroke="#b0b0b0" stroke-width="1"/><line x1="77" y1="229" x2="83" y2="224" stroke="#b0b0b0" stroke-width="1"/>`},
  {name:'Bone',     svg:()=>`<rect x="76" y="181" width="8" height="63" rx="3" fill="#ddd0b0"/><ellipse cx="80" cy="190" rx="4" ry="3" fill="#c8b090" opacity="0.7"/><ellipse cx="80" cy="203" rx="4" ry="3" fill="#c8b090" opacity="0.7"/><ellipse cx="80" cy="216" rx="4" ry="3" fill="#c8b090" opacity="0.7"/><ellipse cx="80" cy="229" rx="4" ry="3" fill="#c8b090" opacity="0.7"/>`},
  {name:'Crystal',  svg:()=>`<rect x="76" y="181" width="8" height="63" rx="2" fill="rgba(170,215,255,0.55)" stroke="rgba(200,235,255,0.8)" stroke-width="0.8"/><line x1="80" y1="182" x2="80" y2="243" stroke="rgba(255,255,255,0.65)" stroke-width="1"/>`},
  {name:'Ornate',   svg:()=>`<path d="M75,181 Q79,186 75,194 Q79,202 75,210 Q79,218 75,226 Q79,234 75,244 L80,244 L85,244 Q81,234 85,226 Q81,218 85,210 Q81,202 85,194 Q81,186 85,181 Z" fill="#8B6210"/>`},
];
POMMELS=[
  {name:'Round',   svg:m=>`<circle cx="80" cy="254" r="11" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><circle cx="76" cy="251" r="3" fill="${m.shine}" opacity="0.4"/>`},
  {name:'Diamond', svg:m=>`<polygon points="80,243 92,254 80,265 68,254" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Wheel',   svg:m=>`<circle cx="80" cy="253" r="12" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><circle cx="80" cy="253" r="4" fill="${m.dark}"/><line x1="80" y1="241" x2="80" y2="265" stroke="${m.dark}" stroke-width="1.5"/><line x1="68" y1="253" x2="92" y2="253" stroke="${m.dark}" stroke-width="1.5"/>`},
  {name:'Tapered', svg:m=>`<path d="M76,244 L73,264 L80,269 L87,264 L84,244 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Gem',     svg:m=>`<polygon points="80,243 91,249 91,259 80,265 69,259 69,249" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><polygon points="80,243 91,249 80,249 69,249" fill="${m.shine}" opacity="0.35"/>`},
  {name:'Skull',   svg:m=>`<ellipse cx="80" cy="252" rx="11" ry="9" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/><ellipse cx="75" cy="250" rx="2.5" ry="3" fill="${m.dark}" opacity="0.85"/><ellipse cx="85" cy="250" rx="2.5" ry="3" fill="${m.dark}" opacity="0.85"/><path d="M74,258 L76,256 L78,257 L80,256 L82,257 L84,256 L86,258" stroke="${m.dark}" stroke-width="1" fill="none"/>`},
];
POTION_BOTTLES=[
  {name:'Round Flask',svg:(lc,sc)=>`<path d="M72,100 L72,155 Q72,178 80,180 Q88,178 88,155 L88,100 Z" fill="${lc}" opacity="0.8"/><path d="M72,100 L72,155 Q72,178 80,180 Q88,178 88,155 L88,100 Z" fill="none" stroke="${sc}" stroke-width="1.5"/><ellipse cx="80" cy="100" rx="8" ry="5" fill="none" stroke="${sc}" stroke-width="1.5"/><rect x="76" y="75" width="8" height="26" rx="1" fill="${sc}"/><rect x="73" y="73" width="14" height="5" rx="2" fill="${sc}"/><ellipse cx="75" cy="145" rx="4" ry="7" fill="rgba(255,255,255,0.18)"/>`},
  {name:'Teardrop',   svg:(lc,sc)=>`<path d="M80,72 Q100,112 100,152 Q100,184 80,184 Q60,184 60,152 Q60,112 80,72 Z" fill="${lc}" opacity="0.8"/><path d="M80,72 Q100,112 100,152 Q100,184 80,184 Q60,184 60,152 Q60,112 80,72 Z" fill="none" stroke="${sc}" stroke-width="1.5"/><ellipse cx="70" cy="145" rx="5" ry="9" fill="rgba(255,255,255,0.18)"/>`},
  {name:'Tall Vial',  svg:(lc,sc)=>`<rect x="71" y="82" width="18" height="103" rx="9" fill="${lc}" opacity="0.8"/><rect x="71" y="82" width="18" height="103" rx="9" fill="none" stroke="${sc}" stroke-width="1.5"/><rect x="74" y="65" width="12" height="18" rx="3" fill="${sc}"/><rect x="72" y="63" width="16" height="6" rx="2" fill="${sc}"/>`},
  {name:'Skull Flask', svg:(lc,sc)=>`<ellipse cx="80" cy="148" rx="22" ry="25" fill="${lc}" opacity="0.8"/><ellipse cx="80" cy="148" rx="22" ry="25" fill="none" stroke="${sc}" stroke-width="1.5"/><ellipse cx="72" cy="143" rx="5" ry="6" fill="${sc}" opacity="0.55"/><ellipse cx="88" cy="143" rx="5" ry="6" fill="${sc}" opacity="0.55"/><path d="M74,158 L77,156 L80,157 L83,156 L86,158" stroke="${sc}" stroke-width="1.2" fill="none"/><rect x="75" y="110" width="10" height="24" rx="3" fill="${sc}"/><rect x="72" y="108" width="16" height="5" rx="2" fill="${sc}"/>`},
  {name:'Amphora',    svg:(lc,sc)=>`<path d="M65,108 Q58,128 60,155 Q62,178 80,180 Q98,178 100,155 Q102,128 95,108 Q88,95 80,93 Q72,95 65,108 Z" fill="${lc}" opacity="0.8"/><path d="M65,108 Q58,128 60,155 Q62,178 80,180 Q98,178 100,155 Q102,128 95,108 Q88,95 80,93 Q72,95 65,108 Z" fill="none" stroke="${sc}" stroke-width="1.5"/><path d="M62,120 Q54,128 55,140 Q56,145 62,142" fill="none" stroke="${sc}" stroke-width="1.5"/><path d="M98,120 Q106,128 105,140 Q104,145 98,142" fill="none" stroke="${sc}" stroke-width="1.5"/><rect x="76" y="68" width="8" height="26" rx="2" fill="${sc}"/><rect x="73" y="66" width="14" height="5" rx="2" fill="${sc}"/>`},
];
POTION_COLORS=[
  {name:'Crimson',  liq:'#cc2222',stroke:'#8a0000'},{name:'Sapphire', liq:'#2255ee',stroke:'#001a99'},
  {name:'Emerald',  liq:'#22bb44',stroke:'#006622'},{name:'Amethyst', liq:'#9933cc',stroke:'#550088'},
  {name:'Amber',    liq:'#cc8800',stroke:'#885500'},{name:'Midnight', liq:'#1a0a2a',stroke:'#6622aa'},
  {name:'Icy White',liq:'#aaddff',stroke:'#5599cc'},{name:'Gilded',   liq:'#ddaa00',stroke:'#887700'},
];
STOPPERS=[
  {name:'Cork',    svg:()=>`<rect x="76" y="56" width="8" height="12" rx="2" fill="#8B6530"/><rect x="74" y="54" width="12" height="5" rx="1" fill="#a07840"/>`},
  {name:'Crystal', svg:()=>`<polygon points="80,48 86,58 74,58" fill="rgba(180,220,255,0.85)" stroke="rgba(200,240,255,0.9)" stroke-width="1"/>`},
  {name:'Skull',   svg:()=>`<ellipse cx="80" cy="56" rx="7" ry="6" fill="#e0d0b0" stroke="#8B7050" stroke-width="0.8"/><ellipse cx="77" cy="54" rx="2" ry="2.5" fill="#3a2a1a" opacity="0.8"/><ellipse cx="83" cy="54" rx="2" ry="2.5" fill="#3a2a1a" opacity="0.8"/>`},
  {name:'Gem',     svg:()=>`<polygon points="80,48 87,55 80,62 73,55" fill="#cc4444" stroke="#880000" stroke-width="0.8"/>`},
  {name:'Wax Seal',svg:()=>`<circle cx="80" cy="58" r="8" fill="#cc2222" stroke="#880000" stroke-width="0.8"/><text x="80" y="62" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="8" font-family="serif">âœ¦</text>`},
];
RING_BANDS=[
  {name:'Simple',      svg:m=>`<ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="url(#mG)" stroke-width="11"/>`},
  {name:'Braided',     svg:m=>`<ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="url(#mG)" stroke-width="10"/><ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="${m.dark}" stroke-width="2" stroke-dasharray="7,5" opacity="0.7"/>`},
  {name:'Thorned',     svg:m=>`<ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="url(#mG)" stroke-width="9"/><ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="${m.dark}" stroke-width="3.5" stroke-dasharray="2,9" opacity="0.9"/>`},
  {name:'Rune-etched', svg:m=>`<ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="url(#mG)" stroke-width="11"/><ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="${m.shine}" stroke-width="1.5" stroke-dasharray="3,4" opacity="0.5"/>`},
  {name:'Dragon Scale',svg:m=>`<ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="url(#mG)" stroke-width="12"/><ellipse cx="80" cy="175" rx="38" ry="15" fill="none" stroke="${m.dark}" stroke-width="2.5" stroke-dasharray="6,3" opacity="0.7"/>`},
];
RING_STONES=[
  {name:'None',    col:null,hi:null,svg:()=>''},
  {name:'Ruby',    col:'#cc1122',hi:'#ff6677',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#880000" stroke-width="1"/><ellipse cx="75" cy="133" rx="5" ry="4" fill="${h}" opacity="0.35"/>`},
  {name:'Sapphire',col:'#1133cc',hi:'#5577ff',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#000088" stroke-width="1"/><ellipse cx="75" cy="133" rx="5" ry="4" fill="${h}" opacity="0.35"/>`},
  {name:'Emerald', col:'#117722',hi:'#44cc66',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#004400" stroke-width="1"/><ellipse cx="75" cy="133" rx="5" ry="4" fill="${h}" opacity="0.35"/>`},
  {name:'Amethyst',col:'#7722aa',hi:'#cc66ff',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#440066" stroke-width="1"/><ellipse cx="75" cy="133" rx="5" ry="4" fill="${h}" opacity="0.35"/>`},
  {name:'Diamond', col:'#ddeeff',hi:'#ffffff',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#aabbcc" stroke-width="1"/><ellipse cx="75" cy="133" rx="5" ry="4" fill="${h}" opacity="0.6"/>`},
  {name:'Onyx',    col:'#111111',hi:'#555555',svg:(c,h)=>`<ellipse cx="80" cy="136" rx="14" ry="10" fill="${c}" stroke="#000000" stroke-width="1"/><ellipse cx="75" cy="133" rx="4" ry="3" fill="${h}" opacity="0.3"/>`},
];
WAND_SHAFTS=[
  {name:'Straight',  svg:m=>`<rect x="78" y="60" width="4" height="185" rx="2" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Tapered',   svg:m=>`<path d="M77,60 L76,245 L80,248 L84,245 L83,60 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Gnarled',   svg:m=>`<path d="M79,60 Q76,90 80,120 Q83,150 78,180 Q81,210 79,245 L81,245 Q83,210 81,180 Q76,150 82,120 Q77,90 81,60 Z" fill="url(#mG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Faceted',   svg:m=>`<path d="M78,60 L76,120 L77,180 L79,245 L81,245 L83,180 L84,120 L82,60 Z" fill="url(#bG)" stroke="${m.dark}" stroke-width="0.5"/>`},
  {name:'Bone Staff',svg:()=>`<rect x="78" y="60" width="4" height="185" rx="2" fill="#ddd0b0" stroke="#8B7050" stroke-width="0.5"/><ellipse cx="80" cy="100" rx="5" ry="4" fill="#c8b090" opacity="0.8"/><ellipse cx="80" cy="148" rx="5" ry="4" fill="#c8b090" opacity="0.8"/>`},
];
WAND_TIPS=[
  {name:'Crystal Orb',svg:a=>`<circle cx="80" cy="42" r="20" fill="rgba(180,220,255,0.2)" stroke="${a.color==='none'?'#4488aa':a.color}" stroke-width="1.5"/><circle cx="80" cy="42" r="13" fill="rgba(180,220,255,0.35)"/><circle cx="74" cy="36" r="5" fill="rgba(255,255,255,0.28)"/>`},
  {name:'Dragon Claw',svg:a=>`<path d="M80,20 Q86,28 84,40 L80,58 L76,40 Q74,28 80,20 Z" fill="${a.color==='none'?'#8844aa':a.color}" opacity="0.85"/><path d="M72,25 Q75,34 72,43 L70,56 L74,43 Q77,34 76,25 Z" fill="${a.color==='none'?'#8844aa':a.color}" opacity="0.6"/><path d="M88,25 Q85,34 88,43 L90,56 L86,43 Q83,34 84,25 Z" fill="${a.color==='none'?'#8844aa':a.color}" opacity="0.6"/>`},
  {name:'Star Burst', svg:a=>`<polygon points="80,18 83,30 95,30 85,37 89,50 80,42 71,50 75,37 65,30 77,30" fill="${a.color==='none'?'#ddaa44':a.color}" opacity="0.88"/>`},
  {name:'Skull',      svg:_=>`<ellipse cx="80" cy="36" rx="18" ry="16" fill="url(#mG)"/><ellipse cx="72" cy="33" rx="5" ry="6" fill="#1a0a00" opacity="0.85"/><ellipse cx="88" cy="33" rx="5" ry="6" fill="#1a0a00" opacity="0.85"/><path d="M72,46 L75,44 L78,45 L80,44 L82,45 L85,44 L88,46" stroke="#1a0a00" stroke-width="1.2" fill="none"/>`},
  {name:'Flame',      svg:a=>`<path d="M80,15 Q90,25 86,38 Q92,30 88,44 Q86,52 80,56 Q74,52 72,44 Q68,30 74,38 Q70,25 80,15 Z" fill="${a.color==='none'?'#FF5500':a.color}" opacity="0.9"/>`},
];
MISC_FRAMES=[
  {name:'Round',    svg:m=>`<circle cx="80" cy="150" r="62" fill="none" stroke="url(#mG)" stroke-width="6"/><circle cx="80" cy="150" r="54" fill="none" stroke="${m.shine}" stroke-width="0.6" opacity="0.25"/>`},
  {name:'Hexagonal',svg:m=>`<polygon points="80,88 132,118 132,178 80,208 28,178 28,118" fill="none" stroke="url(#mG)" stroke-width="6"/><polygon points="80,96 125,122 125,174 80,200 35,174 35,122" fill="none" stroke="${m.shine}" stroke-width="0.6" opacity="0.25"/>`},
  {name:'Diamond',  svg:m=>`<polygon points="80,85 136,150 80,215 24,150" fill="none" stroke="url(#mG)" stroke-width="6"/><polygon points="80,93 128,150 80,207 32,150" fill="none" stroke="${m.shine}" stroke-width="0.6" opacity="0.25"/>`},
  {name:'Double Ring',svg:m=>`<circle cx="80" cy="150" r="62" fill="none" stroke="url(#mG)" stroke-width="4"/><circle cx="80" cy="150" r="50" fill="none" stroke="url(#mG)" stroke-width="2"/><line x1="80" y1="88" x2="80" y2="212" stroke="${m.mid}" stroke-width="0.7" opacity="0.3"/><line x1="18" y1="150" x2="142" y2="150" stroke="${m.mid}" stroke-width="0.7" opacity="0.3"/><line x1="35" y1="97" x2="125" y2="203" stroke="${m.mid}" stroke-width="0.7" opacity="0.3"/><line x1="125" y1="97" x2="35" y2="203" stroke="${m.mid}" stroke-width="0.7" opacity="0.3"/>`},
];
MISC_CENTERS=[
  {name:'Magic Eye', svg:a=>`<ellipse cx="80" cy="150" rx="28" ry="18" fill="#0a0510"/><ellipse cx="80" cy="150" rx="18" ry="12" fill="${a.color==='none'?'#9944ff':a.color}" opacity="0.6"/><ellipse cx="80" cy="150" rx="10" ry="10" fill="#0a0510"/><circle cx="80" cy="150" r="6" fill="${a.glow==='none'?'#cc66ff':a.glow}" opacity="0.85"/>`},
  {name:'Rune',      svg:a=>`<text x="80" y="165" text-anchor="middle" fill="${a.color==='none'?'#c9a84c':a.color}" font-size="52" font-family="serif" opacity="0.88">áš </text>`},
  {name:'Pentagram', svg:a=>{const col=a.color==='none'?'#9944ff':a.color;return`<circle cx="80" cy="150" r="55" fill="none" stroke="${col}" stroke-width="1" opacity="0.45"/><line x1="80" y1="95" x2="111" y2="192" stroke="${col}" stroke-width="1.4" opacity="0.88"/><line x1="130" y1="134" x2="49" y2="192" stroke="${col}" stroke-width="1.4" opacity="0.88"/><line x1="111" y1="192" x2="31" y2="134" stroke="${col}" stroke-width="1.4" opacity="0.88"/><line x1="49" y1="192" x2="80" y2="95" stroke="${col}" stroke-width="1.4" opacity="0.88"/><line x1="31" y1="134" x2="130" y2="134" stroke="${col}" stroke-width="1.4" opacity="0.88"/><polygon points="92,134 99,156 80,170 61,156 68,134" fill="none" stroke="${col}" stroke-width="0.8" opacity="0.35"/><circle cx="80" cy="150" r="2.5" fill="${col}" opacity="0.65"/><circle cx="80" cy="95" r="2" fill="${col}" opacity="0.55"/><circle cx="130" cy="134" r="2" fill="${col}" opacity="0.55"/><circle cx="111" cy="192" r="2" fill="${col}" opacity="0.55"/><circle cx="49" cy="192" r="2" fill="${col}" opacity="0.55"/><circle cx="31" cy="134" r="2" fill="${col}" opacity="0.55"/>`}},
  {name:'Infinity',  svg:a=>`<path d="M50,150 Q50,126 68,126 Q88,126 80,150 Q72,174 92,174 Q110,174 110,150 Q110,126 92,126 Q72,126 80,150 Q88,174 68,174 Q50,174 50,150 Z" fill="none" stroke="${a.color==='none'?'#9944ff':a.color}" stroke-width="2.5" opacity="0.88"/>`},
  {name:'Dragon Seal',svg:a=>`<circle cx="80" cy="150" r="32" fill="none" stroke="${a.color==='none'?'#c9a84c':a.color}" stroke-width="1.5" opacity="0.7"/><text x="80" y="162" text-anchor="middle" font-size="38" opacity="0.8">ðŸ‰</text>`},
  {name:'Crystal',   svg:a=>`<polygon points="80,112 96,134 96,166 80,188 64,166 64,134" fill="${a.color==='none'?'#9944ff':a.color}" opacity="0.25" stroke="${a.glow==='none'?'#cc66ff':a.glow}" stroke-width="1.5"/>`},
];