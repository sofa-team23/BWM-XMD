const _0x486ebc=_0x5bdc;(function(_0x477e38,_0x26b49c){const _0x705f75=_0x5bdc,_0x4b0134=_0x477e38();while(!![]){try{const _0x2d1913=-parseInt(_0x705f75(0x192))/0x1+parseInt(_0x705f75(0x18f))/0x2*(-parseInt(_0x705f75(0x191))/0x3)+parseInt(_0x705f75(0x185))/0x4*(parseInt(_0x705f75(0x183))/0x5)+parseInt(_0x705f75(0x190))/0x6*(-parseInt(_0x705f75(0x180))/0x7)+-parseInt(_0x705f75(0x189))/0x8+parseInt(_0x705f75(0x18e))/0x9+parseInt(_0x705f75(0x182))/0xa;if(_0x2d1913===_0x26b49c)break;else _0x4b0134['push'](_0x4b0134['shift']());}catch(_0x3787e2){_0x4b0134['push'](_0x4b0134['shift']());}}}(_0x3b41,0xeffbf));const fs=require('fs'),path=require(_0x486ebc(0x186)),filePath=path['join'](__dirname,'../xmd/antilien.json');function loadAntilienData(){const _0x4a8a65=_0x486ebc;try{const _0x10ffea=fs['readFileSync'](filePath,_0x4a8a65(0x17f));return JSON[_0x4a8a65(0x181)](_0x10ffea);}catch(_0x2cc61b){return{};}}function saveAntilienData(_0x1178b9){fs['writeFileSync'](filePath,JSON['stringify'](_0x1178b9,null,0x2));}function _0x3b41(){const _0x2ae222=['3515752aoCyyx','7072998nMJNDe','3jofnow','797995WohqdI','oui','log','action','utf8','7LyeCDF','parse','39107080uDobIZ','5FtHUjW','non','7651256TnRJbK','path','supp','exports','14396224QtOWzK','Action\x20updated\x20for\x20JID\x20','\x20in\x20the\x20\x27antilien\x27\x20table.','etat','JID\x20','6243165UxAnuV'];_0x3b41=function(){return _0x2ae222;};return _0x3b41();}const antilienData=loadAntilienData();async function ajouterOuMettreAJourJid(_0x2bfc4e,_0x303b44){const _0x1c93ec=_0x486ebc;antilienData[_0x2bfc4e]={'etat':_0x303b44,'action':antilienData[_0x2bfc4e]?.[_0x1c93ec(0x195)]||_0x1c93ec(0x187)},saveAntilienData(antilienData),console[_0x1c93ec(0x194)](_0x1c93ec(0x18d)+_0x2bfc4e+'\x20added\x20or\x20updated\x20in\x20the\x20\x27antilien\x27\x20table.');}function _0x5bdc(_0x2b42cd,_0x190e10){const _0x3b41c8=_0x3b41();return _0x5bdc=function(_0x5bdc55,_0x5d0c7a){_0x5bdc55=_0x5bdc55-0x17f;let _0x448453=_0x3b41c8[_0x5bdc55];return _0x448453;},_0x5bdc(_0x2b42cd,_0x190e10);}async function mettreAJourAction(_0x1c5281,_0x592d4a){const _0x588aab=_0x486ebc;antilienData[_0x1c5281]?antilienData[_0x1c5281]['action']=_0x592d4a:antilienData[_0x1c5281]={'etat':_0x588aab(0x184),'action':_0x592d4a},saveAntilienData(antilienData),console[_0x588aab(0x194)](_0x588aab(0x18a)+_0x1c5281+_0x588aab(0x18b));}async function verifierEtatJid(_0x3566ab){const _0x3c51ba=_0x486ebc;return antilienData[_0x3566ab]?.[_0x3c51ba(0x18c)]===_0x3c51ba(0x193);}async function recupererActionJid(_0x7bae35){const _0x373513=_0x486ebc;return antilienData[_0x7bae35]?.[_0x373513(0x195)]||'supp';}module[_0x486ebc(0x188)]={'ajouterOuMettreAJourJid':ajouterOuMettreAJourJid,'mettreAJourAction':mettreAJourAction,'verifierEtatJid':verifierEtatJid,'recupererActionJid':recupererActionJid};