const KEY='teslacode-progress-v1';
const defaults={name:'Coder',activeTrack:'fundamentos',completed:[],weak:[],bookmarks:[],quizResults:{},xp:0,lastActive:null,streak:0,practiceCount:0,practiceDaily:{day:null,count:0},activity:[]};
function read(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'{}');return {...defaults,...raw,completed:Array.isArray(raw.completed)?raw.completed:[],weak:Array.isArray(raw.weak)?raw.weak:[],bookmarks:Array.isArray(raw.bookmarks)?raw.bookmarks:[],activity:Array.isArray(raw.activity)?raw.activity:[]};}catch{return {...defaults};}}
let state=read();
const today=()=>new Date().toLocaleDateString('en-CA');
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){console.warn('No se pudo guardar el progreso',e);}}
export function getState(){return structuredClone(state);}
export function update(patch){state={...state,...patch};save();dispatchEvent(new CustomEvent('teslacode:state'));}
function record(type,id,xp=0){const now=today();let streak=state.streak||0;if(state.lastActive!==now){const prev=new Date();prev.setDate(prev.getDate()-1);streak=state.lastActive===prev.toLocaleDateString('en-CA')?streak+1:1;}update({lastActive:now,streak,xp:state.xp+xp,activity:[{type,id,at:new Date().toISOString(),xp},...state.activity].slice(0,30)});}
export function markComplete(id){if(state.completed.includes(id)) return false;update({completed:[...state.completed,id],weak:state.weak.filter(v=>v!==id)});record('completed',id,45);return true;}
export function toggleWeak(id){const has=state.weak.includes(id);update({weak:has?state.weak.filter(v=>v!==id):[...state.weak,id]});return !has;}
export function toggleBookmark(id){const has=state.bookmarks.includes(id);update({bookmarks:has?state.bookmarks.filter(v=>v!==id):[...state.bookmarks,id]});return !has;}
export function submitQuiz(id,correct){const previous=state.quizResults[id]||{tries:0,correct:false};update({quizResults:{...state.quizResults,[id]:{tries:previous.tries+1,correct:previous.correct||correct}}});if(!correct && !state.weak.includes(id))toggleWeak(id);if(correct && !previous.correct)record('quiz',id,20);return correct&&!previous.correct;}
export function recordPractice(){const day=today();const current=state.practiceDaily?.day===day?state.practiceDaily.count:0;if(current>=5)return false;update({practiceCount:state.practiceCount+1,practiceDaily:{day,count:current+1}});record('practice','editor',10);return true;}
export function exportProgress(){return JSON.stringify({version:1,exportedAt:new Date().toISOString(),data:getState()},null,2);}
export function importProgress(text){let payload;try{payload=JSON.parse(text);if(payload.version!==1||!payload.data||!Array.isArray(payload.data.completed))throw Error('Formato inválido');}catch{throw new Error('No es un archivo de progreso TeslaCode válido.');}state={...defaults,...payload.data};save();dispatchEvent(new CustomEvent('teslacode:state'));}
export function resetProgress(){state={...defaults};save();dispatchEvent(new CustomEvent('teslacode:state'));}
