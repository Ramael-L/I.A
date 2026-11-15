import assert from 'node:assert/strict';
import {tracks,lessons,allLessons,allTrackIds} from '../src/data.js';
assert.equal(tracks.length,6);
assert.ok(allLessons.length>=60);
const ids=allLessons.map(l=>l.id);
assert.equal(new Set(ids).size,ids.length,'IDs duplicados');
for(const track of tracks){
 assert.ok(track.chapters.length>=3,`Ruta ${track.id} sin etapas`);
 const tIds=allTrackIds(track);
 assert.equal(tIds.length,new Set(tIds).size,`Lecciones repetidas en ${track.id}`);
 for(const id of tIds)assert.ok(lessons[id],`Falta lección ${id}`);
}
for(const l of allLessons){
 assert.ok(l.body.length>=100,`Contenido insuficiente: ${l.id}`);
 assert.ok(l.challenge.length>=15);
 assert.equal(l.quiz.options.length,3);
 assert.ok(Number.isInteger(l.quiz.answer) && l.quiz.answer>=0 && l.quiz.answer<3);
}
console.log(`✓ ${tracks.length} rutas, ${allLessons.length} lecciones; todas las referencias y preguntas son válidas.`);
