(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{24:function(e,t,l){"use strict";l.r(t);var i=l(25),a=l.n(i);for(var r in i)"default"!==r&&function(e){l.d(t,e,(function(){return i[e]}))}(r);t.default=a.a},25:function(e,t,l){"use strict";t.__esModule=!0,t.default={props:{id:String,data:{type:Array,required:!0},columns:{type:Array,required:!0}}}},26:function(e,t,l){},34:function(e,t,l){"use strict";var i=l(26);l.n(i).a},57:function(e,t,l){"use strict";l.r(t);var i=l(58),a=l.n(i);for(var r in i)"default"!==r&&function(e){l.d(t,e,(function(){return i[e]}))}(r);t.default=a.a},58:function(e,t,l){"use strict";t.__esModule=!0;var i=l(61),a=l(76).columns,r=l(77).qualities;t.default={components:{DataTable:i.default},data:function(){return{qualities:r,columns:a}}}},60:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return a}));var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",[l("b-field",{staticClass:"column-toggles",attrs:{grouped:"","group-multiline":""}},e._l(e.columns,(function(t,i){return l("div",{key:i,staticClass:"control"},[l("b-checkbox",{model:{value:t.visible,callback:function(l){e.$set(t,"visible",l)},expression:"column.visible"}},[e._v("\n                "+e._s(t.title)+"\n            ")])],1)})),0),e._v(" "),l("b-table",{attrs:{id:e.id||"",data:e.data,bordered:!0,striped:!0,narrowed:!1,hoverable:!0,focusable:!0,"sticky-header":!0},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.columns,(function(i,a){return l("b-table-column",{key:a,attrs:{label:i.title+":",visible:i.visible,numeric:i.numeric,centered:i.centered,sticky:i.sticky,"cell-class":i["cell-class"]}},[i.meta&&"latexImage"===i.meta.type?l("div",{staticClass:"field-type-latex-image"},[l("Latex",{attrs:{src:t.row[i.field][0]}}),e._v(" "),l("Img",{attrs:{path:t.row[i.field][1]}})],1):i.meta&&"latex"===i.meta.type?l("div",[l("Latex",{attrs:{src:t.row[i.field]}})],1):l("div",[e._v("\n                    "+e._s(null===t.row[i.field]?"-":t.row[i.field])+"\n                ")])])}))}}])})],1)},a=[]},61:function(e,t,l){"use strict";l.r(t);var i=l(60),a=l(24);for(var r in a)"default"!==r&&function(e){l.d(t,e,(function(){return a[e]}))}(r);l(34);var n=l(2),u=Object(n.a)(a.default,i.a,i.b,!1,null,null,null);t.default=u.exports},76:function(e){e.exports=JSON.parse('{"columns":[{"title":"איכות","field":"quality","visible":true,"sticky":true,"cell-class":"bold"},{"title":"ספירה","field":"sphere","visible":true,"centered":true,"meta":{"type":"latex"}},{"title":"אות","field":"hebrew-letter","visible":true,"centered":true},{"title":"ערך מספרי","field":"numerical-value","visible":true,"centered":true,"meta":{"type":"latex"}},{"title":"משוואה מתמטית","field":"mathematical-equation","visible":true,"centered":true,"meta":{"type":"latex"}},{"title":"ערך גאומטרי","field":"geometrical-value","visible":true,"centered":true,"meta":{"type":"latexImage"}},{"title":"מרכיבי האיכות","field":"quality-constructs","visible":true,"centered":true,"meta":{"type":"latex"}},{"title":"עולם","field":"space","visible":true,"centered":true},{"title":"שנה","field":"time","visible":true,"centered":true},{"title":"נפש","field":"heart","visible":true,"centered":true},{"title":"תיאור","field":"description","visible":true,"cell-class":"right-aligned"},{"title":"Letter","field":"english-letter","visible":true,"centered":true},{"title":"Roman","field":"roman-number","visible":true,"centered":true}]}')},77:function(e){e.exports=JSON.parse('{"qualities":[{"quality":"פעימה","sphere":"12","hebrew-letter":"x","numerical-value":"-1","mathematical-equation":"\\\\infty = \\\\frac{-1}{1}","geometrical-value":["עיגול \\\\land חיים","ndd/Pulse.svg"],"quality-constructs":"חיים \\\\times שלום","space":"כדור הארץ","time":"גלגל","heart":"אדם","description":"הכל זה הכל. הכלום מכסהו וכלול בתוכו.","english-letter":"Sign","roman-number":"="},{"quality":"חיים","sphere":"1","hebrew-letter":"ב","numerical-value":"3","mathematical-equation":"3 = z_1 + (x_2 \\\\times y_2)","geometrical-value":["נקודה","ndd/Dot.svg"],"quality-constructs":"\\\\sqrt{אוויר \\\\times מים \\\\times אש}","space":"שבתאי","time":"שבת","heart":"פה","description":"שורש מכפלת שלוש היסודות הוא הבינה. מרכז החיים.","english-letter":"i","roman-number":"Ⅰ"},{"quality":"אוויר","sphere":"2","hebrew-letter":"א","numerical-value":"2","mathematical-equation":"2 = z_1 + (x - y) + z_2","geometrical-value":[" ","ndd/Air.svg"],"quality-constructs":"רוח","space":"אוויר","time":"רוויה","heart":"גוויה","description":"אוויר הוא מקור ואחרית הדברים. הוא ההתפתחות.","english-letter":"A","roman-number":"Ⅱ"},{"quality":"מים","sphere":"3","hebrew-letter":"מ","numerical-value":"0","mathematical-equation":"0 = (x_1 - x_2) + \\\\\\\\(y_1 - y_2) + (z_1 - z_2)","geometrical-value":[" ","ndd/Water.svg"],"quality-constructs":"שקט","space":"ארץ","time":"קור","heart":"בטן","description":"מים הם יסוד הבריאה מתוך השקט.","english-letter":"B","roman-number":"Ⅲ"},{"quality":"אש","sphere":"4","hebrew-letter":"ש","numerical-value":"1","mathematical-equation":"1 = M^N","geometrical-value":[" ","ndd/Fire.svg"],"quality-constructs":"מים","space":"שמים","time":"חום","heart":"ראש","description":"אש היא השראה מתרחבת לעד ולאחדות.","english-letter":"C","roman-number":"Ⅳ"},{"quality":"כתר","sphere":"5","hebrew-letter":null,"numerical-value":"1","mathematical-equation":"י = ה - ו","geometrical-value":["תלי \\\\gets גלגל \\\\gets לב","ndd/5.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"רום","time":"הווה","heart":"קודקוד","description":"כדי להגיע לאהבה אדם צריך דרך.","english-letter":null,"roman-number":"Ⅴ"},{"quality":"מלכות","sphere":"6","hebrew-letter":null,"numerical-value":"1 \\\\impliedby 10","mathematical-equation":"י + ו = ה","geometrical-value":["גלגל \\\\gets תלי \\\\gets לב","ndd/6.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"תחת","time":"הווה","heart":"נקודת המפגש עם הקרקע","description":"אדם עם דרך אוהב עולם.","english-letter":null,"roman-number":"Ⅵ"},{"quality":"חכמה","sphere":"7","hebrew-letter":null,"numerical-value":"2","mathematical-equation":"ה = ו + י","geometrical-value":["לב \\\\gets תלי \\\\gets גלגל","ndd/7.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"מזרח","time":"הווה","heart":"כתף ימין","description":"אהבה היא אדם ההולך בדרך.","english-letter":null,"roman-number":"Ⅶ"},{"quality":"הוד","sphere":"8","hebrew-letter":null,"numerical-value":"8","mathematical-equation":"ה = י + ו","geometrical-value":["תלי \\\\gets לב \\\\gets גלגל","ndd/8.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"מערב","time":"הווה","heart":"כף יד שמאל","description":"על האדם לאהוב את דרכו.","english-letter":null,"roman-number":"Ⅷ"},{"quality":"נצח","sphere":"9","hebrew-letter":null,"numerical-value":"7","mathematical-equation":"ו + י = ה","geometrical-value":["גלגל \\\\gets לב \\\\gets תלי","ndd/9.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"דרום","time":"הווה","heart":"כף יד ימין","description":"דרך היא דרכו של האדם לייצר אהבה.","english-letter":null,"roman-number":"Ⅸ"},{"quality":"בינה","sphere":"10","hebrew-letter":null,"numerical-value":"3","mathematical-equation":"ו = ה - י","geometrical-value":["לב \\\\gets גלגל \\\\gets תלי","ndd/10.svg"],"quality-constructs":"מעשה \\\\times ראייה \\\\times שמיעה","space":"צפון","time":"הווה","heart":"כתף שמאל","description":"דרך היא אדם ההולך אחרי אהבתו.","english-letter":null,"roman-number":"Ⅹ"},{"quality":"דעת","sphere":"0","hebrew-letter":"𓏲","numerical-value":"0","mathematical-equation":"N = ((6+i)\\\\phi)^{n}","geometrical-value":["שלדה","ndd/Insight.svg"],"quality-constructs":"הרהור \\\\times ריח \\\\times שיחה \\\\times חיים","space":"פנימה","time":"אתמול","heart":"מוח הלב","description":"השלמת דרך עץ החיים מתנתה דעת שהיא חכמת הלב.","english-letter":"U","roman-number":"ↁ"},{"quality":"אהבה","sphere":"11","hebrew-letter":"𐤀","numerical-value":"4 \\\\impliedby 13","mathematical-equation":"M = (12\\\\Phi)^{n}","geometrical-value":["עיגול + נקודה","ndd/Love.svg"],"quality-constructs":"אוויר \\\\times מים \\\\times ממשלה","space":"החוצה","time":"מחר","heart":"לב","description":"אהבה היא האמת של הקיום.","english-letter":"O","roman-number":"ↂ"},{"quality":"שלום-מלחמה","sphere":null,"hebrew-letter":"ג","numerical-value":"0  \\\\impliedby 1 \\\\times 0","mathematical-equation":null,"geometrical-value":["z_2","ndd/ג.svg"],"quality-constructs":"אש \\\\times מים","space":"צדק","time":"ראשון","heart":"עין ימין","description":"סיכום הדברים הוא מים ואש כלומר אהבה. כלומר שלום בין השלום למלחמה.","english-letter":"D","roman-number":null},{"quality":"חוכמה-איוולת","sphere":null,"hebrew-letter":"ד","numerical-value":"4","mathematical-equation":null,"geometrical-value":["z_1","ndd/ד.svg"],"quality-constructs":"אוויר \\\\times אוויר","space":"מאדים","time":"שני","heart":"עין שמאל","description":"מקור הדברים הוא רוח מרוח, המבדיל בין חוכמה לאיוולת.","english-letter":"T","roman-number":null},{"quality":"עושר-עוני","sphere":null,"hebrew-letter":"כ","numerical-value":"1 \\\\impliedby 1 \\\\times 1","mathematical-equation":null,"geometrical-value":["y_2","ndd/כ.svg"],"quality-constructs":"אש \\\\times אש","space":"חמה","time":"שלישי","heart":"אף ימין","description":"אש כפולה היא גחלת האמת הבוערת לעד. היא האושר.","english-letter":"Q","roman-number":null},{"quality":"זרע-שממה","sphere":null,"hebrew-letter":"פ","numerical-value":"0 \\\\impliedby 2 \\\\times 0","mathematical-equation":null,"geometrical-value":["y_1","ndd/פ.svg"],"quality-constructs":"מים \\\\times אוויר","space":"נגה","time":"רביעי","heart":"אף שמאל","description":"רוח אלוהים על פני המים - מקור האמת עד להווה בו הוא זרע.","english-letter":"P","roman-number":null},{"quality":"חן-כיעור","sphere":null,"hebrew-letter":"ר","numerical-value":"0 \\\\impliedby 0 \\\\times 0","mathematical-equation":null,"geometrical-value":["x_2","ndd/ר.svg"],"quality-constructs":"מים \\\\times מים","space":"כוכב","time":"חמישי","heart":"אוזן ימין","description":"מים בתוך מים הם ״וחי לעולם״ וקיים. זה החן.","english-letter":"F","roman-number":null},{"quality":"ממשלה-עבדות","sphere":null,"hebrew-letter":"ת","numerical-value":"2 \\\\impliedby 2 \\\\times 1","mathematical-equation":null,"geometrical-value":["x_1","ndd/ת.svg"],"quality-constructs":"אוויר \\\\times אש","space":"לבנה","time":"שישי","heart":"אוזן שמאל","description":"אש עם חמצן - מציאות נדחסת ומתלהטת לעבדות או לחירות?","english-letter":"S","roman-number":null},{"quality":"מעשה","sphere":null,"hebrew-letter":"י","numerical-value":"0 \\\\impliedby 4 \\\\times 0","mathematical-equation":null,"geometrical-value":["z_1 \\\\times x_2","ndd/י.svg"],"quality-constructs":"חן \\\\times חוכמה","space":"בתולה","time":"אלול","heart":"כליה שמאל","description":"סוף מעשה במחשבה תחילה - יופייה של החוכמה.","english-letter":"K","roman-number":null},{"quality":"ראייה","sphere":null,"hebrew-letter":"ה","numerical-value":"0 \\\\impliedby 1 \\\\times 0","mathematical-equation":null,"geometrical-value":["x_2 \\\\times y_2","ndd/ה.svg"],"quality-constructs":"עושר \\\\times חן","space":"טלה","time":"ניסן","heart":"כבד","description":"ראייה רחבה היא עושר היופי.","english-letter":"R","roman-number":null},{"quality":"שמיעה","sphere":null,"hebrew-letter":"ו","numerical-value":"0 \\\\impliedby 0 \\\\times 1","mathematical-equation":null,"geometrical-value":["y_2 \\\\times z_2","ndd/ו.svg"],"quality-constructs":"שלום \\\\times עושר","space":"שור","time":"אייר","heart":"מרה","description":"באחרית הימים, הקשבה בשלווה היא שפע.","english-letter":"V","roman-number":null},{"quality":"רוגז","sphere":null,"hebrew-letter":"ס","numerical-value":"0 \\\\impliedby 4 \\\\times 0","mathematical-equation":null,"geometrical-value":["y_1 \\\\times z_1","ndd/ס.svg"],"quality-constructs":"חכמה \\\\times זרע","space":"קשת","time":"כסלו","heart":"יד ימין","description":"זרע החוכמה הקדמון, נע אל ההווה בקושי רב, אך מגיע.","english-letter":"X","roman-number":null},{"quality":"שינה","sphere":null,"hebrew-letter":"ק","numerical-value":"8 \\\\impliedby 2 \\\\times 4","mathematical-equation":null,"geometrical-value":["z_1 \\\\times x_1","ndd/ק.svg"],"quality-constructs":"ממשלה \\\\times חוכמה","space":"דגים","time":"אדר","heart":"רגל שמאל","description":"חכמת הממשלה היא ערות עד היום.","english-letter":"L","roman-number":null},{"quality":"תשמיש","sphere":null,"hebrew-letter":"ל","numerical-value":"0 \\\\impliedby 2 \\\\times 0","mathematical-equation":null,"geometrical-value":["y_1 \\\\times x_1","ndd/ל.svg"],"quality-constructs":"ממשלה \\\\times זרע","space":"מאזניים","time":"תשרי","heart":"קורקבן","description":"זרע הממשלה הוא במיניות - להתאים בין האמת למציאות ברגע.","english-letter":"W","roman-number":null},{"quality":"הרהור","sphere":null,"hebrew-letter":"צ","numerical-value":"0 \\\\impliedby 0 \\\\times 2","mathematical-equation":null,"geometrical-value":["x_1 \\\\times z_2","ndd/צ.svg"],"quality-constructs":"שלום \\\\times ממשלה","space":"דלי","time":"שבט","heart":"רגל ימין","description":"על ידי ממשלה בשלום - קיים הרהור לב ההופך מציאות לאהבה.","english-letter":"Z","roman-number":null},{"quality":"צחוק","sphere":null,"hebrew-letter":"ע","numerical-value":"2 \\\\impliedby 1 \\\\times 2","mathematical-equation":null,"geometrical-value":["x_1 \\\\times y_2","ndd/ע.svg"],"quality-constructs":"עושר \\\\times ממשלה","space":"גדי","time":"טבת","heart":"יד שמאל","description":"בניית המציאות בעבודה וכלכלה, הופכת בקלות לאמת מצחיקה.","english-letter":"Y","roman-number":null},{"quality":"ריח","sphere":null,"hebrew-letter":"ז","numerical-value":"4 \\\\impliedby 1 \\\\times 4","mathematical-equation":null,"geometrical-value":["z_1 \\\\times y_2","ndd/ז.svg"],"quality-constructs":"עושר \\\\times חוכמה","space":"תאומים","time":"סיוון","heart":"טחול","description":"באחרית הימים, החכם מתפרנס על פי התחושה.","english-letter":"G","roman-number":null},{"quality":"שיחה","sphere":null,"hebrew-letter":"ח","numerical-value":"0 \\\\impliedby 0 \\\\times 1","mathematical-equation":null,"geometrical-value":["y_1 \\\\times x_2","ndd/ח.svg"],"quality-constructs":"חן \\\\times זרע","space":"סרטן","time":"תמוז","heart":"לבלב","description":"שיחה היא אמת נכנסת ומציאות יוצאת - זרע היופי.","english-letter":"J","roman-number":null},{"quality":"תנועה","sphere":null,"hebrew-letter":"נ","numerical-value":"0 \\\\impliedby 0 \\\\times 0","mathematical-equation":null,"geometrical-value":["y_1 \\\\times z_2","ndd/נ.svg"],"quality-constructs":"שלום \\\\times זרע","space":"עקרב","time":"חשוון","heart":"קיבה","description":"התנועה היא אל האמת בהווה - שהיא זרע השלום.","english-letter":"H","roman-number":null},{"quality":"הזנה","sphere":null,"hebrew-letter":"ט","numerical-value":"0 \\\\impliedby 0 \\\\times 0","mathematical-equation":null,"geometrical-value":["z_2 \\\\times x_2","ndd/ט.svg"],"quality-constructs":"חן \\\\times שלום","space":"אריה","time":"אב","heart":"כליה ימין","description":"אחרית הימים היא הזנה טבעית מחן ושלווה.","english-letter":"E","roman-number":null},{"quality":"נצחיות","sphere":"-1","hebrew-letter":"+","numerical-value":"12","mathematical-equation":"\\\\bigoplus = \\\\infty - 0","geometrical-value":["חלל \\\\lor מוות","ndd/Eternity.svg"],"quality-constructs":"מוות - פעימה","space":"כאן","time":"עכשיו","heart":"בלוטת האצטרובל","description":"בהווה ולעד החיים פועמים חיים.","english-letter":"Symbol","roman-number":"‖"}]}')},86:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return a}));var i=function(){var e=this.$createElement;return(this._self._c||e)("DataTable",{staticClass:"regular-layout",attrs:{data:this.qualities,columns:this.columns,id:"table-of-qualities"}})},a=[]},95:function(e,t,l){"use strict";l.r(t);var i=l(86),a=l(57);for(var r in a)"default"!==r&&function(e){l.d(t,e,(function(){return a[e]}))}(r);var n=l(2),u=Object(n.a)(a.default,i.a,i.b,!1,null,null,null);t.default=u.exports}}]);