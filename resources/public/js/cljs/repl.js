// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27412_27426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27413_27427 = null;
var count__27414_27428 = (0);
var i__27415_27429 = (0);
while(true){
if((i__27415_27429 < count__27414_27428)){
var f_27430 = cljs.core._nth.call(null,chunk__27413_27427,i__27415_27429);
cljs.core.println.call(null,"  ",f_27430);

var G__27431 = seq__27412_27426;
var G__27432 = chunk__27413_27427;
var G__27433 = count__27414_27428;
var G__27434 = (i__27415_27429 + (1));
seq__27412_27426 = G__27431;
chunk__27413_27427 = G__27432;
count__27414_27428 = G__27433;
i__27415_27429 = G__27434;
continue;
} else {
var temp__4425__auto___27435 = cljs.core.seq.call(null,seq__27412_27426);
if(temp__4425__auto___27435){
var seq__27412_27436__$1 = temp__4425__auto___27435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27412_27436__$1)){
var c__17178__auto___27437 = cljs.core.chunk_first.call(null,seq__27412_27436__$1);
var G__27438 = cljs.core.chunk_rest.call(null,seq__27412_27436__$1);
var G__27439 = c__17178__auto___27437;
var G__27440 = cljs.core.count.call(null,c__17178__auto___27437);
var G__27441 = (0);
seq__27412_27426 = G__27438;
chunk__27413_27427 = G__27439;
count__27414_27428 = G__27440;
i__27415_27429 = G__27441;
continue;
} else {
var f_27442 = cljs.core.first.call(null,seq__27412_27436__$1);
cljs.core.println.call(null,"  ",f_27442);

var G__27443 = cljs.core.next.call(null,seq__27412_27436__$1);
var G__27444 = null;
var G__27445 = (0);
var G__27446 = (0);
seq__27412_27426 = G__27443;
chunk__27413_27427 = G__27444;
count__27414_27428 = G__27445;
i__27415_27429 = G__27446;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27447 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16375__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27447);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27447)))?cljs.core.second.call(null,arglists_27447):arglists_27447));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27417 = null;
var count__27418 = (0);
var i__27419 = (0);
while(true){
if((i__27419 < count__27418)){
var vec__27420 = cljs.core._nth.call(null,chunk__27417,i__27419);
var name = cljs.core.nth.call(null,vec__27420,(0),null);
var map__27421 = cljs.core.nth.call(null,vec__27420,(1),null);
var map__27421__$1 = ((((!((map__27421 == null)))?((((map__27421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27421):map__27421);
var doc = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27448 = seq__27416;
var G__27449 = chunk__27417;
var G__27450 = count__27418;
var G__27451 = (i__27419 + (1));
seq__27416 = G__27448;
chunk__27417 = G__27449;
count__27418 = G__27450;
i__27419 = G__27451;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27416);
if(temp__4425__auto__){
var seq__27416__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27416__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27416__$1);
var G__27452 = cljs.core.chunk_rest.call(null,seq__27416__$1);
var G__27453 = c__17178__auto__;
var G__27454 = cljs.core.count.call(null,c__17178__auto__);
var G__27455 = (0);
seq__27416 = G__27452;
chunk__27417 = G__27453;
count__27418 = G__27454;
i__27419 = G__27455;
continue;
} else {
var vec__27423 = cljs.core.first.call(null,seq__27416__$1);
var name = cljs.core.nth.call(null,vec__27423,(0),null);
var map__27424 = cljs.core.nth.call(null,vec__27423,(1),null);
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var doc = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27456 = cljs.core.next.call(null,seq__27416__$1);
var G__27457 = null;
var G__27458 = (0);
var G__27459 = (0);
seq__27416 = G__27456;
chunk__27417 = G__27457;
count__27418 = G__27458;
i__27419 = G__27459;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map