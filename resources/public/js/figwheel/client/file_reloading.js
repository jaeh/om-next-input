// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16375__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16375__auto__){
return or__16375__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16375__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27464_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27464_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27469 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27470 = null;
var count__27471 = (0);
var i__27472 = (0);
while(true){
if((i__27472 < count__27471)){
var n = cljs.core._nth.call(null,chunk__27470,i__27472);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27473 = seq__27469;
var G__27474 = chunk__27470;
var G__27475 = count__27471;
var G__27476 = (i__27472 + (1));
seq__27469 = G__27473;
chunk__27470 = G__27474;
count__27471 = G__27475;
i__27472 = G__27476;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27469);
if(temp__4425__auto__){
var seq__27469__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27469__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27469__$1);
var G__27477 = cljs.core.chunk_rest.call(null,seq__27469__$1);
var G__27478 = c__17178__auto__;
var G__27479 = cljs.core.count.call(null,c__17178__auto__);
var G__27480 = (0);
seq__27469 = G__27477;
chunk__27470 = G__27478;
count__27471 = G__27479;
i__27472 = G__27480;
continue;
} else {
var n = cljs.core.first.call(null,seq__27469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27481 = cljs.core.next.call(null,seq__27469__$1);
var G__27482 = null;
var G__27483 = (0);
var G__27484 = (0);
seq__27469 = G__27481;
chunk__27470 = G__27482;
count__27471 = G__27483;
i__27472 = G__27484;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27523_27530 = cljs.core.seq.call(null,deps);
var chunk__27524_27531 = null;
var count__27525_27532 = (0);
var i__27526_27533 = (0);
while(true){
if((i__27526_27533 < count__27525_27532)){
var dep_27534 = cljs.core._nth.call(null,chunk__27524_27531,i__27526_27533);
topo_sort_helper_STAR_.call(null,dep_27534,(depth + (1)),state);

var G__27535 = seq__27523_27530;
var G__27536 = chunk__27524_27531;
var G__27537 = count__27525_27532;
var G__27538 = (i__27526_27533 + (1));
seq__27523_27530 = G__27535;
chunk__27524_27531 = G__27536;
count__27525_27532 = G__27537;
i__27526_27533 = G__27538;
continue;
} else {
var temp__4425__auto___27539 = cljs.core.seq.call(null,seq__27523_27530);
if(temp__4425__auto___27539){
var seq__27523_27540__$1 = temp__4425__auto___27539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27523_27540__$1)){
var c__17178__auto___27541 = cljs.core.chunk_first.call(null,seq__27523_27540__$1);
var G__27542 = cljs.core.chunk_rest.call(null,seq__27523_27540__$1);
var G__27543 = c__17178__auto___27541;
var G__27544 = cljs.core.count.call(null,c__17178__auto___27541);
var G__27545 = (0);
seq__27523_27530 = G__27542;
chunk__27524_27531 = G__27543;
count__27525_27532 = G__27544;
i__27526_27533 = G__27545;
continue;
} else {
var dep_27546 = cljs.core.first.call(null,seq__27523_27540__$1);
topo_sort_helper_STAR_.call(null,dep_27546,(depth + (1)),state);

var G__27547 = cljs.core.next.call(null,seq__27523_27540__$1);
var G__27548 = null;
var G__27549 = (0);
var G__27550 = (0);
seq__27523_27530 = G__27547;
chunk__27524_27531 = G__27548;
count__27525_27532 = G__27549;
i__27526_27533 = G__27550;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27527){
var vec__27529 = p__27527;
var x = cljs.core.nth.call(null,vec__27529,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27529,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27529,x,xs,get_deps__$1){
return (function (p1__27485_SHARP_){
return clojure.set.difference.call(null,p1__27485_SHARP_,x);
});})(vec__27529,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27563 = cljs.core.seq.call(null,provides);
var chunk__27564 = null;
var count__27565 = (0);
var i__27566 = (0);
while(true){
if((i__27566 < count__27565)){
var prov = cljs.core._nth.call(null,chunk__27564,i__27566);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27567_27575 = cljs.core.seq.call(null,requires);
var chunk__27568_27576 = null;
var count__27569_27577 = (0);
var i__27570_27578 = (0);
while(true){
if((i__27570_27578 < count__27569_27577)){
var req_27579 = cljs.core._nth.call(null,chunk__27568_27576,i__27570_27578);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27579,prov);

var G__27580 = seq__27567_27575;
var G__27581 = chunk__27568_27576;
var G__27582 = count__27569_27577;
var G__27583 = (i__27570_27578 + (1));
seq__27567_27575 = G__27580;
chunk__27568_27576 = G__27581;
count__27569_27577 = G__27582;
i__27570_27578 = G__27583;
continue;
} else {
var temp__4425__auto___27584 = cljs.core.seq.call(null,seq__27567_27575);
if(temp__4425__auto___27584){
var seq__27567_27585__$1 = temp__4425__auto___27584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27567_27585__$1)){
var c__17178__auto___27586 = cljs.core.chunk_first.call(null,seq__27567_27585__$1);
var G__27587 = cljs.core.chunk_rest.call(null,seq__27567_27585__$1);
var G__27588 = c__17178__auto___27586;
var G__27589 = cljs.core.count.call(null,c__17178__auto___27586);
var G__27590 = (0);
seq__27567_27575 = G__27587;
chunk__27568_27576 = G__27588;
count__27569_27577 = G__27589;
i__27570_27578 = G__27590;
continue;
} else {
var req_27591 = cljs.core.first.call(null,seq__27567_27585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27591,prov);

var G__27592 = cljs.core.next.call(null,seq__27567_27585__$1);
var G__27593 = null;
var G__27594 = (0);
var G__27595 = (0);
seq__27567_27575 = G__27592;
chunk__27568_27576 = G__27593;
count__27569_27577 = G__27594;
i__27570_27578 = G__27595;
continue;
}
} else {
}
}
break;
}

var G__27596 = seq__27563;
var G__27597 = chunk__27564;
var G__27598 = count__27565;
var G__27599 = (i__27566 + (1));
seq__27563 = G__27596;
chunk__27564 = G__27597;
count__27565 = G__27598;
i__27566 = G__27599;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27563);
if(temp__4425__auto__){
var seq__27563__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27563__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27563__$1);
var G__27600 = cljs.core.chunk_rest.call(null,seq__27563__$1);
var G__27601 = c__17178__auto__;
var G__27602 = cljs.core.count.call(null,c__17178__auto__);
var G__27603 = (0);
seq__27563 = G__27600;
chunk__27564 = G__27601;
count__27565 = G__27602;
i__27566 = G__27603;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27563__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27571_27604 = cljs.core.seq.call(null,requires);
var chunk__27572_27605 = null;
var count__27573_27606 = (0);
var i__27574_27607 = (0);
while(true){
if((i__27574_27607 < count__27573_27606)){
var req_27608 = cljs.core._nth.call(null,chunk__27572_27605,i__27574_27607);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27608,prov);

var G__27609 = seq__27571_27604;
var G__27610 = chunk__27572_27605;
var G__27611 = count__27573_27606;
var G__27612 = (i__27574_27607 + (1));
seq__27571_27604 = G__27609;
chunk__27572_27605 = G__27610;
count__27573_27606 = G__27611;
i__27574_27607 = G__27612;
continue;
} else {
var temp__4425__auto___27613__$1 = cljs.core.seq.call(null,seq__27571_27604);
if(temp__4425__auto___27613__$1){
var seq__27571_27614__$1 = temp__4425__auto___27613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27571_27614__$1)){
var c__17178__auto___27615 = cljs.core.chunk_first.call(null,seq__27571_27614__$1);
var G__27616 = cljs.core.chunk_rest.call(null,seq__27571_27614__$1);
var G__27617 = c__17178__auto___27615;
var G__27618 = cljs.core.count.call(null,c__17178__auto___27615);
var G__27619 = (0);
seq__27571_27604 = G__27616;
chunk__27572_27605 = G__27617;
count__27573_27606 = G__27618;
i__27574_27607 = G__27619;
continue;
} else {
var req_27620 = cljs.core.first.call(null,seq__27571_27614__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27620,prov);

var G__27621 = cljs.core.next.call(null,seq__27571_27614__$1);
var G__27622 = null;
var G__27623 = (0);
var G__27624 = (0);
seq__27571_27604 = G__27621;
chunk__27572_27605 = G__27622;
count__27573_27606 = G__27623;
i__27574_27607 = G__27624;
continue;
}
} else {
}
}
break;
}

var G__27625 = cljs.core.next.call(null,seq__27563__$1);
var G__27626 = null;
var G__27627 = (0);
var G__27628 = (0);
seq__27563 = G__27625;
chunk__27564 = G__27626;
count__27565 = G__27627;
i__27566 = G__27628;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27633_27637 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27634_27638 = null;
var count__27635_27639 = (0);
var i__27636_27640 = (0);
while(true){
if((i__27636_27640 < count__27635_27639)){
var ns_27641 = cljs.core._nth.call(null,chunk__27634_27638,i__27636_27640);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27641);

var G__27642 = seq__27633_27637;
var G__27643 = chunk__27634_27638;
var G__27644 = count__27635_27639;
var G__27645 = (i__27636_27640 + (1));
seq__27633_27637 = G__27642;
chunk__27634_27638 = G__27643;
count__27635_27639 = G__27644;
i__27636_27640 = G__27645;
continue;
} else {
var temp__4425__auto___27646 = cljs.core.seq.call(null,seq__27633_27637);
if(temp__4425__auto___27646){
var seq__27633_27647__$1 = temp__4425__auto___27646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27633_27647__$1)){
var c__17178__auto___27648 = cljs.core.chunk_first.call(null,seq__27633_27647__$1);
var G__27649 = cljs.core.chunk_rest.call(null,seq__27633_27647__$1);
var G__27650 = c__17178__auto___27648;
var G__27651 = cljs.core.count.call(null,c__17178__auto___27648);
var G__27652 = (0);
seq__27633_27637 = G__27649;
chunk__27634_27638 = G__27650;
count__27635_27639 = G__27651;
i__27636_27640 = G__27652;
continue;
} else {
var ns_27653 = cljs.core.first.call(null,seq__27633_27647__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27653);

var G__27654 = cljs.core.next.call(null,seq__27633_27647__$1);
var G__27655 = null;
var G__27656 = (0);
var G__27657 = (0);
seq__27633_27637 = G__27654;
chunk__27634_27638 = G__27655;
count__27635_27639 = G__27656;
i__27636_27640 = G__27657;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16375__auto__ = goog.require__;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27658__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27659__i = 0, G__27659__a = new Array(arguments.length -  0);
while (G__27659__i < G__27659__a.length) {G__27659__a[G__27659__i] = arguments[G__27659__i + 0]; ++G__27659__i;}
  args = new cljs.core.IndexedSeq(G__27659__a,0);
} 
return G__27658__delegate.call(this,args);};
G__27658.cljs$lang$maxFixedArity = 0;
G__27658.cljs$lang$applyTo = (function (arglist__27660){
var args = cljs.core.seq(arglist__27660);
return G__27658__delegate(args);
});
G__27658.cljs$core$IFn$_invoke$arity$variadic = G__27658__delegate;
return G__27658;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27661 = cljs.core._EQ_;
var expr__27662 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27661.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27662))){
return ((function (pred__27661,expr__27662){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27664){if((e27664 instanceof Error)){
var e = e27664;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27664;

}
}})());
});
;})(pred__27661,expr__27662))
} else {
if(cljs.core.truth_(pred__27661.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27662))){
return ((function (pred__27661,expr__27662){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27661,expr__27662){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27661,expr__27662))
);

return deferred.addErrback(((function (deferred,pred__27661,expr__27662){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27661,expr__27662))
);
});
;})(pred__27661,expr__27662))
} else {
return ((function (pred__27661,expr__27662){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27661,expr__27662))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27665,callback){
var map__27668 = p__27665;
var map__27668__$1 = ((((!((map__27668 == null)))?((((map__27668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27668):map__27668);
var file_msg = map__27668__$1;
var request_url = cljs.core.get.call(null,map__27668__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27668,map__27668__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27668,map__27668__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_27692){
var state_val_27693 = (state_27692[(1)]);
if((state_val_27693 === (7))){
var inst_27688 = (state_27692[(2)]);
var state_27692__$1 = state_27692;
var statearr_27694_27714 = state_27692__$1;
(statearr_27694_27714[(2)] = inst_27688);

(statearr_27694_27714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (1))){
var state_27692__$1 = state_27692;
var statearr_27695_27715 = state_27692__$1;
(statearr_27695_27715[(2)] = null);

(statearr_27695_27715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (4))){
var inst_27672 = (state_27692[(7)]);
var inst_27672__$1 = (state_27692[(2)]);
var state_27692__$1 = (function (){var statearr_27696 = state_27692;
(statearr_27696[(7)] = inst_27672__$1);

return statearr_27696;
})();
if(cljs.core.truth_(inst_27672__$1)){
var statearr_27697_27716 = state_27692__$1;
(statearr_27697_27716[(1)] = (5));

} else {
var statearr_27698_27717 = state_27692__$1;
(statearr_27698_27717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (6))){
var state_27692__$1 = state_27692;
var statearr_27699_27718 = state_27692__$1;
(statearr_27699_27718[(2)] = null);

(statearr_27699_27718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (3))){
var inst_27690 = (state_27692[(2)]);
var state_27692__$1 = state_27692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27692__$1,inst_27690);
} else {
if((state_val_27693 === (2))){
var state_27692__$1 = state_27692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27692__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27693 === (11))){
var inst_27684 = (state_27692[(2)]);
var state_27692__$1 = (function (){var statearr_27700 = state_27692;
(statearr_27700[(8)] = inst_27684);

return statearr_27700;
})();
var statearr_27701_27719 = state_27692__$1;
(statearr_27701_27719[(2)] = null);

(statearr_27701_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (9))){
var inst_27676 = (state_27692[(9)]);
var inst_27678 = (state_27692[(10)]);
var inst_27680 = inst_27678.call(null,inst_27676);
var state_27692__$1 = state_27692;
var statearr_27702_27720 = state_27692__$1;
(statearr_27702_27720[(2)] = inst_27680);

(statearr_27702_27720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (5))){
var inst_27672 = (state_27692[(7)]);
var inst_27674 = figwheel.client.file_reloading.blocking_load.call(null,inst_27672);
var state_27692__$1 = state_27692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27692__$1,(8),inst_27674);
} else {
if((state_val_27693 === (10))){
var inst_27676 = (state_27692[(9)]);
var inst_27682 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27676);
var state_27692__$1 = state_27692;
var statearr_27703_27721 = state_27692__$1;
(statearr_27703_27721[(2)] = inst_27682);

(statearr_27703_27721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (8))){
var inst_27678 = (state_27692[(10)]);
var inst_27672 = (state_27692[(7)]);
var inst_27676 = (state_27692[(2)]);
var inst_27677 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27678__$1 = cljs.core.get.call(null,inst_27677,inst_27672);
var state_27692__$1 = (function (){var statearr_27704 = state_27692;
(statearr_27704[(9)] = inst_27676);

(statearr_27704[(10)] = inst_27678__$1);

return statearr_27704;
})();
if(cljs.core.truth_(inst_27678__$1)){
var statearr_27705_27722 = state_27692__$1;
(statearr_27705_27722[(1)] = (9));

} else {
var statearr_27706_27723 = state_27692__$1;
(statearr_27706_27723[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20882__auto__ = null;
var figwheel$client$file_reloading$state_machine__20882__auto____0 = (function (){
var statearr_27710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27710[(0)] = figwheel$client$file_reloading$state_machine__20882__auto__);

(statearr_27710[(1)] = (1));

return statearr_27710;
});
var figwheel$client$file_reloading$state_machine__20882__auto____1 = (function (state_27692){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_27692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e27711){if((e27711 instanceof Object)){
var ex__20885__auto__ = e27711;
var statearr_27712_27724 = state_27692;
(statearr_27712_27724[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27725 = state_27692;
state_27692 = G__27725;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20882__auto__ = function(state_27692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20882__auto____1.call(this,state_27692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20882__auto____0;
figwheel$client$file_reloading$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20882__auto____1;
return figwheel$client$file_reloading$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_27713 = f__20947__auto__.call(null);
(statearr_27713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_27713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27726,callback){
var map__27729 = p__27726;
var map__27729__$1 = ((((!((map__27729 == null)))?((((map__27729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27729):map__27729);
var file_msg = map__27729__$1;
var namespace = cljs.core.get.call(null,map__27729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27729,map__27729__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27729,map__27729__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27731){
var map__27734 = p__27731;
var map__27734__$1 = ((((!((map__27734 == null)))?((((map__27734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27734):map__27734);
var file_msg = map__27734__$1;
var namespace = cljs.core.get.call(null,map__27734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16363__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16363__auto__){
var or__16375__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16363__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27736,callback){
var map__27739 = p__27736;
var map__27739__$1 = ((((!((map__27739 == null)))?((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var file_msg = map__27739__$1;
var request_url = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20946__auto___27827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___27827,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___27827,out){
return (function (state_27809){
var state_val_27810 = (state_27809[(1)]);
if((state_val_27810 === (1))){
var inst_27787 = cljs.core.nth.call(null,files,(0),null);
var inst_27788 = cljs.core.nthnext.call(null,files,(1));
var inst_27789 = files;
var state_27809__$1 = (function (){var statearr_27811 = state_27809;
(statearr_27811[(7)] = inst_27787);

(statearr_27811[(8)] = inst_27788);

(statearr_27811[(9)] = inst_27789);

return statearr_27811;
})();
var statearr_27812_27828 = state_27809__$1;
(statearr_27812_27828[(2)] = null);

(statearr_27812_27828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (2))){
var inst_27792 = (state_27809[(10)]);
var inst_27789 = (state_27809[(9)]);
var inst_27792__$1 = cljs.core.nth.call(null,inst_27789,(0),null);
var inst_27793 = cljs.core.nthnext.call(null,inst_27789,(1));
var inst_27794 = (inst_27792__$1 == null);
var inst_27795 = cljs.core.not.call(null,inst_27794);
var state_27809__$1 = (function (){var statearr_27813 = state_27809;
(statearr_27813[(11)] = inst_27793);

(statearr_27813[(10)] = inst_27792__$1);

return statearr_27813;
})();
if(inst_27795){
var statearr_27814_27829 = state_27809__$1;
(statearr_27814_27829[(1)] = (4));

} else {
var statearr_27815_27830 = state_27809__$1;
(statearr_27815_27830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (3))){
var inst_27807 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27809__$1,inst_27807);
} else {
if((state_val_27810 === (4))){
var inst_27792 = (state_27809[(10)]);
var inst_27797 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27792);
var state_27809__$1 = state_27809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27809__$1,(7),inst_27797);
} else {
if((state_val_27810 === (5))){
var inst_27803 = cljs.core.async.close_BANG_.call(null,out);
var state_27809__$1 = state_27809;
var statearr_27816_27831 = state_27809__$1;
(statearr_27816_27831[(2)] = inst_27803);

(statearr_27816_27831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (6))){
var inst_27805 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
var statearr_27817_27832 = state_27809__$1;
(statearr_27817_27832[(2)] = inst_27805);

(statearr_27817_27832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (7))){
var inst_27793 = (state_27809[(11)]);
var inst_27799 = (state_27809[(2)]);
var inst_27800 = cljs.core.async.put_BANG_.call(null,out,inst_27799);
var inst_27789 = inst_27793;
var state_27809__$1 = (function (){var statearr_27818 = state_27809;
(statearr_27818[(12)] = inst_27800);

(statearr_27818[(9)] = inst_27789);

return statearr_27818;
})();
var statearr_27819_27833 = state_27809__$1;
(statearr_27819_27833[(2)] = null);

(statearr_27819_27833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20946__auto___27827,out))
;
return ((function (switch__20881__auto__,c__20946__auto___27827,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____0 = (function (){
var statearr_27823 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27823[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__);

(statearr_27823[(1)] = (1));

return statearr_27823;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____1 = (function (state_27809){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_27809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e27824){if((e27824 instanceof Object)){
var ex__20885__auto__ = e27824;
var statearr_27825_27834 = state_27809;
(statearr_27825_27834[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27835 = state_27809;
state_27809 = G__27835;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__ = function(state_27809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____1.call(this,state_27809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___27827,out))
})();
var state__20948__auto__ = (function (){var statearr_27826 = f__20947__auto__.call(null);
(statearr_27826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___27827);

return statearr_27826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___27827,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27836,opts){
var map__27840 = p__27836;
var map__27840__$1 = ((((!((map__27840 == null)))?((((map__27840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);
var eval_body__$1 = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16363__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16363__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16363__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27842){var e = e27842;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27843_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27843_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27848){
var vec__27849 = p__27848;
var k = cljs.core.nth.call(null,vec__27849,(0),null);
var v = cljs.core.nth.call(null,vec__27849,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27850){
var vec__27851 = p__27850;
var k = cljs.core.nth.call(null,vec__27851,(0),null);
var v = cljs.core.nth.call(null,vec__27851,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27855,p__27856){
var map__28103 = p__27855;
var map__28103__$1 = ((((!((map__28103 == null)))?((((map__28103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28103):map__28103);
var opts = map__28103__$1;
var before_jsload = cljs.core.get.call(null,map__28103__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28103__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28103__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28104 = p__27856;
var map__28104__$1 = ((((!((map__28104 == null)))?((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28104):map__28104);
var msg = map__28104__$1;
var files = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28120 = (state_28257[(7)]);
var inst_28118 = (state_28257[(8)]);
var inst_28121 = (state_28257[(9)]);
var inst_28119 = (state_28257[(10)]);
var inst_28126 = cljs.core._nth.call(null,inst_28119,inst_28121);
var inst_28127 = figwheel.client.file_reloading.eval_body.call(null,inst_28126,opts);
var inst_28128 = (inst_28121 + (1));
var tmp28259 = inst_28120;
var tmp28260 = inst_28118;
var tmp28261 = inst_28119;
var inst_28118__$1 = tmp28260;
var inst_28119__$1 = tmp28261;
var inst_28120__$1 = tmp28259;
var inst_28121__$1 = inst_28128;
var state_28257__$1 = (function (){var statearr_28262 = state_28257;
(statearr_28262[(7)] = inst_28120__$1);

(statearr_28262[(8)] = inst_28118__$1);

(statearr_28262[(9)] = inst_28121__$1);

(statearr_28262[(10)] = inst_28119__$1);

(statearr_28262[(11)] = inst_28127);

return statearr_28262;
})();
var statearr_28263_28349 = state_28257__$1;
(statearr_28263_28349[(2)] = null);

(statearr_28263_28349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (20))){
var inst_28161 = (state_28257[(12)]);
var inst_28169 = figwheel.client.file_reloading.sort_files.call(null,inst_28161);
var state_28257__$1 = state_28257;
var statearr_28264_28350 = state_28257__$1;
(statearr_28264_28350[(2)] = inst_28169);

(statearr_28264_28350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (27))){
var state_28257__$1 = state_28257;
var statearr_28265_28351 = state_28257__$1;
(statearr_28265_28351[(2)] = null);

(statearr_28265_28351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var inst_28110 = (state_28257[(13)]);
var inst_28107 = before_jsload.call(null,files);
var inst_28108 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28109 = (function (){return ((function (inst_28110,inst_28107,inst_28108,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27852_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27852_SHARP_);
});
;})(inst_28110,inst_28107,inst_28108,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28110__$1 = cljs.core.filter.call(null,inst_28109,files);
var inst_28111 = cljs.core.not_empty.call(null,inst_28110__$1);
var state_28257__$1 = (function (){var statearr_28266 = state_28257;
(statearr_28266[(13)] = inst_28110__$1);

(statearr_28266[(14)] = inst_28108);

(statearr_28266[(15)] = inst_28107);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28267_28352 = state_28257__$1;
(statearr_28267_28352[(1)] = (2));

} else {
var statearr_28268_28353 = state_28257__$1;
(statearr_28268_28353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (24))){
var state_28257__$1 = state_28257;
var statearr_28269_28354 = state_28257__$1;
(statearr_28269_28354[(2)] = null);

(statearr_28269_28354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (39))){
var inst_28211 = (state_28257[(16)]);
var state_28257__$1 = state_28257;
var statearr_28270_28355 = state_28257__$1;
(statearr_28270_28355[(2)] = inst_28211);

(statearr_28270_28355[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (46))){
var inst_28252 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28271_28356 = state_28257__$1;
(statearr_28271_28356[(2)] = inst_28252);

(statearr_28271_28356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28155 = (state_28257[(2)]);
var inst_28156 = cljs.core.List.EMPTY;
var inst_28157 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28156);
var inst_28158 = (function (){return ((function (inst_28155,inst_28156,inst_28157,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27853_SHARP_){
var and__16363__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27853_SHARP_);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27853_SHARP_));
} else {
return and__16363__auto__;
}
});
;})(inst_28155,inst_28156,inst_28157,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28159 = cljs.core.filter.call(null,inst_28158,files);
var inst_28160 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28161 = cljs.core.concat.call(null,inst_28159,inst_28160);
var state_28257__$1 = (function (){var statearr_28272 = state_28257;
(statearr_28272[(17)] = inst_28157);

(statearr_28272[(18)] = inst_28155);

(statearr_28272[(12)] = inst_28161);

return statearr_28272;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28273_28357 = state_28257__$1;
(statearr_28273_28357[(1)] = (16));

} else {
var statearr_28274_28358 = state_28257__$1;
(statearr_28274_28358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (15))){
var inst_28145 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28275_28359 = state_28257__$1;
(statearr_28275_28359[(2)] = inst_28145);

(statearr_28275_28359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (21))){
var inst_28171 = (state_28257[(19)]);
var inst_28171__$1 = (state_28257[(2)]);
var inst_28172 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28171__$1);
var state_28257__$1 = (function (){var statearr_28276 = state_28257;
(statearr_28276[(19)] = inst_28171__$1);

return statearr_28276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(22),inst_28172);
} else {
if((state_val_28258 === (31))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (32))){
var inst_28211 = (state_28257[(16)]);
var inst_28216 = inst_28211.cljs$lang$protocol_mask$partition0$;
var inst_28217 = (inst_28216 & (64));
var inst_28218 = inst_28211.cljs$core$ISeq$;
var inst_28219 = (inst_28217) || (inst_28218);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28219)){
var statearr_28277_28360 = state_28257__$1;
(statearr_28277_28360[(1)] = (35));

} else {
var statearr_28278_28361 = state_28257__$1;
(statearr_28278_28361[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (40))){
var inst_28232 = (state_28257[(20)]);
var inst_28231 = (state_28257[(2)]);
var inst_28232__$1 = cljs.core.get.call(null,inst_28231,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28233 = cljs.core.get.call(null,inst_28231,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28234 = cljs.core.not_empty.call(null,inst_28232__$1);
var state_28257__$1 = (function (){var statearr_28279 = state_28257;
(statearr_28279[(20)] = inst_28232__$1);

(statearr_28279[(21)] = inst_28233);

return statearr_28279;
})();
if(cljs.core.truth_(inst_28234)){
var statearr_28280_28362 = state_28257__$1;
(statearr_28280_28362[(1)] = (41));

} else {
var statearr_28281_28363 = state_28257__$1;
(statearr_28281_28363[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (33))){
var state_28257__$1 = state_28257;
var statearr_28282_28364 = state_28257__$1;
(statearr_28282_28364[(2)] = false);

(statearr_28282_28364[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var inst_28131 = (state_28257[(22)]);
var inst_28135 = cljs.core.chunk_first.call(null,inst_28131);
var inst_28136 = cljs.core.chunk_rest.call(null,inst_28131);
var inst_28137 = cljs.core.count.call(null,inst_28135);
var inst_28118 = inst_28136;
var inst_28119 = inst_28135;
var inst_28120 = inst_28137;
var inst_28121 = (0);
var state_28257__$1 = (function (){var statearr_28283 = state_28257;
(statearr_28283[(7)] = inst_28120);

(statearr_28283[(8)] = inst_28118);

(statearr_28283[(9)] = inst_28121);

(statearr_28283[(10)] = inst_28119);

return statearr_28283;
})();
var statearr_28284_28365 = state_28257__$1;
(statearr_28284_28365[(2)] = null);

(statearr_28284_28365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (22))){
var inst_28175 = (state_28257[(23)]);
var inst_28179 = (state_28257[(24)]);
var inst_28174 = (state_28257[(25)]);
var inst_28171 = (state_28257[(19)]);
var inst_28174__$1 = (state_28257[(2)]);
var inst_28175__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28174__$1);
var inst_28176 = (function (){var all_files = inst_28171;
var res_SINGLEQUOTE_ = inst_28174__$1;
var res = inst_28175__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28175,inst_28179,inst_28174,inst_28171,inst_28174__$1,inst_28175__$1,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27854_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27854_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28175,inst_28179,inst_28174,inst_28171,inst_28174__$1,inst_28175__$1,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28177 = cljs.core.filter.call(null,inst_28176,inst_28174__$1);
var inst_28178 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28179__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28178);
var inst_28180 = cljs.core.not_empty.call(null,inst_28179__$1);
var state_28257__$1 = (function (){var statearr_28285 = state_28257;
(statearr_28285[(23)] = inst_28175__$1);

(statearr_28285[(24)] = inst_28179__$1);

(statearr_28285[(25)] = inst_28174__$1);

(statearr_28285[(26)] = inst_28177);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28180)){
var statearr_28286_28366 = state_28257__$1;
(statearr_28286_28366[(1)] = (23));

} else {
var statearr_28287_28367 = state_28257__$1;
(statearr_28287_28367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (36))){
var state_28257__$1 = state_28257;
var statearr_28288_28368 = state_28257__$1;
(statearr_28288_28368[(2)] = false);

(statearr_28288_28368[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (41))){
var inst_28232 = (state_28257[(20)]);
var inst_28236 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28237 = cljs.core.map.call(null,inst_28236,inst_28232);
var inst_28238 = cljs.core.pr_str.call(null,inst_28237);
var inst_28239 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28238)].join('');
var inst_28240 = figwheel.client.utils.log.call(null,inst_28239);
var state_28257__$1 = state_28257;
var statearr_28289_28369 = state_28257__$1;
(statearr_28289_28369[(2)] = inst_28240);

(statearr_28289_28369[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (43))){
var inst_28233 = (state_28257[(21)]);
var inst_28243 = (state_28257[(2)]);
var inst_28244 = cljs.core.not_empty.call(null,inst_28233);
var state_28257__$1 = (function (){var statearr_28290 = state_28257;
(statearr_28290[(27)] = inst_28243);

return statearr_28290;
})();
if(cljs.core.truth_(inst_28244)){
var statearr_28291_28370 = state_28257__$1;
(statearr_28291_28370[(1)] = (44));

} else {
var statearr_28292_28371 = state_28257__$1;
(statearr_28292_28371[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (29))){
var inst_28175 = (state_28257[(23)]);
var inst_28179 = (state_28257[(24)]);
var inst_28211 = (state_28257[(16)]);
var inst_28174 = (state_28257[(25)]);
var inst_28171 = (state_28257[(19)]);
var inst_28177 = (state_28257[(26)]);
var inst_28207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28210 = (function (){var all_files = inst_28171;
var res_SINGLEQUOTE_ = inst_28174;
var res = inst_28175;
var files_not_loaded = inst_28177;
var dependencies_that_loaded = inst_28179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28211,inst_28174,inst_28171,inst_28177,inst_28207,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28209){
var map__28293 = p__28209;
var map__28293__$1 = ((((!((map__28293 == null)))?((((map__28293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28293):map__28293);
var namespace = cljs.core.get.call(null,map__28293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28211,inst_28174,inst_28171,inst_28177,inst_28207,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28211__$1 = cljs.core.group_by.call(null,inst_28210,inst_28177);
var inst_28213 = (inst_28211__$1 == null);
var inst_28214 = cljs.core.not.call(null,inst_28213);
var state_28257__$1 = (function (){var statearr_28295 = state_28257;
(statearr_28295[(28)] = inst_28207);

(statearr_28295[(16)] = inst_28211__$1);

return statearr_28295;
})();
if(inst_28214){
var statearr_28296_28372 = state_28257__$1;
(statearr_28296_28372[(1)] = (32));

} else {
var statearr_28297_28373 = state_28257__$1;
(statearr_28297_28373[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (44))){
var inst_28233 = (state_28257[(21)]);
var inst_28246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28233);
var inst_28247 = cljs.core.pr_str.call(null,inst_28246);
var inst_28248 = [cljs.core.str("not required: "),cljs.core.str(inst_28247)].join('');
var inst_28249 = figwheel.client.utils.log.call(null,inst_28248);
var state_28257__$1 = state_28257;
var statearr_28298_28374 = state_28257__$1;
(statearr_28298_28374[(2)] = inst_28249);

(statearr_28298_28374[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28152 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28299_28375 = state_28257__$1;
(statearr_28299_28375[(2)] = inst_28152);

(statearr_28299_28375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (28))){
var inst_28177 = (state_28257[(26)]);
var inst_28204 = (state_28257[(2)]);
var inst_28205 = cljs.core.not_empty.call(null,inst_28177);
var state_28257__$1 = (function (){var statearr_28300 = state_28257;
(statearr_28300[(29)] = inst_28204);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28205)){
var statearr_28301_28376 = state_28257__$1;
(statearr_28301_28376[(1)] = (29));

} else {
var statearr_28302_28377 = state_28257__$1;
(statearr_28302_28377[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (25))){
var inst_28175 = (state_28257[(23)]);
var inst_28191 = (state_28257[(2)]);
var inst_28192 = cljs.core.not_empty.call(null,inst_28175);
var state_28257__$1 = (function (){var statearr_28303 = state_28257;
(statearr_28303[(30)] = inst_28191);

return statearr_28303;
})();
if(cljs.core.truth_(inst_28192)){
var statearr_28304_28378 = state_28257__$1;
(statearr_28304_28378[(1)] = (26));

} else {
var statearr_28305_28379 = state_28257__$1;
(statearr_28305_28379[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (34))){
var inst_28226 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28226)){
var statearr_28306_28380 = state_28257__$1;
(statearr_28306_28380[(1)] = (38));

} else {
var statearr_28307_28381 = state_28257__$1;
(statearr_28307_28381[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (17))){
var state_28257__$1 = state_28257;
var statearr_28308_28382 = state_28257__$1;
(statearr_28308_28382[(2)] = recompile_dependents);

(statearr_28308_28382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var state_28257__$1 = state_28257;
var statearr_28309_28383 = state_28257__$1;
(statearr_28309_28383[(2)] = null);

(statearr_28309_28383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (12))){
var inst_28148 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28310_28384 = state_28257__$1;
(statearr_28310_28384[(2)] = inst_28148);

(statearr_28310_28384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (2))){
var inst_28110 = (state_28257[(13)]);
var inst_28117 = cljs.core.seq.call(null,inst_28110);
var inst_28118 = inst_28117;
var inst_28119 = null;
var inst_28120 = (0);
var inst_28121 = (0);
var state_28257__$1 = (function (){var statearr_28311 = state_28257;
(statearr_28311[(7)] = inst_28120);

(statearr_28311[(8)] = inst_28118);

(statearr_28311[(9)] = inst_28121);

(statearr_28311[(10)] = inst_28119);

return statearr_28311;
})();
var statearr_28312_28385 = state_28257__$1;
(statearr_28312_28385[(2)] = null);

(statearr_28312_28385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (23))){
var inst_28175 = (state_28257[(23)]);
var inst_28179 = (state_28257[(24)]);
var inst_28174 = (state_28257[(25)]);
var inst_28171 = (state_28257[(19)]);
var inst_28177 = (state_28257[(26)]);
var inst_28182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28184 = (function (){var all_files = inst_28171;
var res_SINGLEQUOTE_ = inst_28174;
var res = inst_28175;
var files_not_loaded = inst_28177;
var dependencies_that_loaded = inst_28179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28182,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28183){
var map__28313 = p__28183;
var map__28313__$1 = ((((!((map__28313 == null)))?((((map__28313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var request_url = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28182,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28185 = cljs.core.reverse.call(null,inst_28179);
var inst_28186 = cljs.core.map.call(null,inst_28184,inst_28185);
var inst_28187 = cljs.core.pr_str.call(null,inst_28186);
var inst_28188 = figwheel.client.utils.log.call(null,inst_28187);
var state_28257__$1 = (function (){var statearr_28315 = state_28257;
(statearr_28315[(31)] = inst_28182);

return statearr_28315;
})();
var statearr_28316_28386 = state_28257__$1;
(statearr_28316_28386[(2)] = inst_28188);

(statearr_28316_28386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (35))){
var state_28257__$1 = state_28257;
var statearr_28317_28387 = state_28257__$1;
(statearr_28317_28387[(2)] = true);

(statearr_28317_28387[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (19))){
var inst_28161 = (state_28257[(12)]);
var inst_28167 = figwheel.client.file_reloading.expand_files.call(null,inst_28161);
var state_28257__$1 = state_28257;
var statearr_28318_28388 = state_28257__$1;
(statearr_28318_28388[(2)] = inst_28167);

(statearr_28318_28388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (11))){
var state_28257__$1 = state_28257;
var statearr_28319_28389 = state_28257__$1;
(statearr_28319_28389[(2)] = null);

(statearr_28319_28389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var inst_28150 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28320_28390 = state_28257__$1;
(statearr_28320_28390[(2)] = inst_28150);

(statearr_28320_28390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var inst_28120 = (state_28257[(7)]);
var inst_28121 = (state_28257[(9)]);
var inst_28123 = (inst_28121 < inst_28120);
var inst_28124 = inst_28123;
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28124)){
var statearr_28321_28391 = state_28257__$1;
(statearr_28321_28391[(1)] = (7));

} else {
var statearr_28322_28392 = state_28257__$1;
(statearr_28322_28392[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var inst_28131 = (state_28257[(22)]);
var inst_28140 = cljs.core.first.call(null,inst_28131);
var inst_28141 = figwheel.client.file_reloading.eval_body.call(null,inst_28140,opts);
var inst_28142 = cljs.core.next.call(null,inst_28131);
var inst_28118 = inst_28142;
var inst_28119 = null;
var inst_28120 = (0);
var inst_28121 = (0);
var state_28257__$1 = (function (){var statearr_28323 = state_28257;
(statearr_28323[(7)] = inst_28120);

(statearr_28323[(8)] = inst_28118);

(statearr_28323[(9)] = inst_28121);

(statearr_28323[(10)] = inst_28119);

(statearr_28323[(32)] = inst_28141);

return statearr_28323;
})();
var statearr_28324_28393 = state_28257__$1;
(statearr_28324_28393[(2)] = null);

(statearr_28324_28393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (45))){
var state_28257__$1 = state_28257;
var statearr_28325_28394 = state_28257__$1;
(statearr_28325_28394[(2)] = null);

(statearr_28325_28394[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (26))){
var inst_28175 = (state_28257[(23)]);
var inst_28179 = (state_28257[(24)]);
var inst_28174 = (state_28257[(25)]);
var inst_28171 = (state_28257[(19)]);
var inst_28177 = (state_28257[(26)]);
var inst_28194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28196 = (function (){var all_files = inst_28171;
var res_SINGLEQUOTE_ = inst_28174;
var res = inst_28175;
var files_not_loaded = inst_28177;
var dependencies_that_loaded = inst_28179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28194,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28195){
var map__28326 = p__28195;
var map__28326__$1 = ((((!((map__28326 == null)))?((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var namespace = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28194,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28197 = cljs.core.map.call(null,inst_28196,inst_28175);
var inst_28198 = cljs.core.pr_str.call(null,inst_28197);
var inst_28199 = figwheel.client.utils.log.call(null,inst_28198);
var inst_28200 = (function (){var all_files = inst_28171;
var res_SINGLEQUOTE_ = inst_28174;
var res = inst_28175;
var files_not_loaded = inst_28177;
var dependencies_that_loaded = inst_28179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28194,inst_28196,inst_28197,inst_28198,inst_28199,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28175,inst_28179,inst_28174,inst_28171,inst_28177,inst_28194,inst_28196,inst_28197,inst_28198,inst_28199,state_val_28258,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28201 = setTimeout(inst_28200,(10));
var state_28257__$1 = (function (){var statearr_28328 = state_28257;
(statearr_28328[(33)] = inst_28199);

(statearr_28328[(34)] = inst_28194);

return statearr_28328;
})();
var statearr_28329_28395 = state_28257__$1;
(statearr_28329_28395[(2)] = inst_28201);

(statearr_28329_28395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (16))){
var state_28257__$1 = state_28257;
var statearr_28330_28396 = state_28257__$1;
(statearr_28330_28396[(2)] = reload_dependents);

(statearr_28330_28396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (38))){
var inst_28211 = (state_28257[(16)]);
var inst_28228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28211);
var state_28257__$1 = state_28257;
var statearr_28331_28397 = state_28257__$1;
(statearr_28331_28397[(2)] = inst_28228);

(statearr_28331_28397[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (30))){
var state_28257__$1 = state_28257;
var statearr_28332_28398 = state_28257__$1;
(statearr_28332_28398[(2)] = null);

(statearr_28332_28398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28131 = (state_28257[(22)]);
var inst_28133 = cljs.core.chunked_seq_QMARK_.call(null,inst_28131);
var state_28257__$1 = state_28257;
if(inst_28133){
var statearr_28333_28399 = state_28257__$1;
(statearr_28333_28399[(1)] = (13));

} else {
var statearr_28334_28400 = state_28257__$1;
(statearr_28334_28400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (18))){
var inst_28165 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28165)){
var statearr_28335_28401 = state_28257__$1;
(statearr_28335_28401[(1)] = (19));

} else {
var statearr_28336_28402 = state_28257__$1;
(statearr_28336_28402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (42))){
var state_28257__$1 = state_28257;
var statearr_28337_28403 = state_28257__$1;
(statearr_28337_28403[(2)] = null);

(statearr_28337_28403[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (37))){
var inst_28223 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28338_28404 = state_28257__$1;
(statearr_28338_28404[(2)] = inst_28223);

(statearr_28338_28404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28118 = (state_28257[(8)]);
var inst_28131 = (state_28257[(22)]);
var inst_28131__$1 = cljs.core.seq.call(null,inst_28118);
var state_28257__$1 = (function (){var statearr_28339 = state_28257;
(statearr_28339[(22)] = inst_28131__$1);

return statearr_28339;
})();
if(inst_28131__$1){
var statearr_28340_28405 = state_28257__$1;
(statearr_28340_28405[(1)] = (10));

} else {
var statearr_28341_28406 = state_28257__$1;
(statearr_28341_28406[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20881__auto__,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____0 = (function (){
var statearr_28345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28345[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__);

(statearr_28345[(1)] = (1));

return statearr_28345;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____1 = (function (state_28257){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28346){if((e28346 instanceof Object)){
var ex__20885__auto__ = e28346;
var statearr_28347_28407 = state_28257;
(statearr_28347_28407[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28408 = state_28257;
state_28257 = G__28408;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20948__auto__ = (function (){var statearr_28348 = f__20947__auto__.call(null);
(statearr_28348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_28348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__,map__28103,map__28103__$1,opts,before_jsload,on_jsload,reload_dependents,map__28104,map__28104__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20946__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28411,link){
var map__28414 = p__28411;
var map__28414__$1 = ((((!((map__28414 == null)))?((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);
var file = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28414,map__28414__$1,file){
return (function (p1__28409_SHARP_,p2__28410_SHARP_){
if(cljs.core._EQ_.call(null,p1__28409_SHARP_,p2__28410_SHARP_)){
return p1__28409_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28414,map__28414__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28420){
var map__28421 = p__28420;
var map__28421__$1 = ((((!((map__28421 == null)))?((((map__28421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28421):map__28421);
var match_length = cljs.core.get.call(null,map__28421__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28421__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28416_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28416_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28423 = [];
var len__17433__auto___28426 = arguments.length;
var i__17434__auto___28427 = (0);
while(true){
if((i__17434__auto___28427 < len__17433__auto___28426)){
args28423.push((arguments[i__17434__auto___28427]));

var G__28428 = (i__17434__auto___28427 + (1));
i__17434__auto___28427 = G__28428;
continue;
} else {
}
break;
}

var G__28425 = args28423.length;
switch (G__28425) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28423.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28430_SHARP_,p2__28431_SHARP_){
return cljs.core.assoc.call(null,p1__28430_SHARP_,cljs.core.get.call(null,p2__28431_SHARP_,key),p2__28431_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28432){
var map__28435 = p__28432;
var map__28435__$1 = ((((!((map__28435 == null)))?((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var f_data = map__28435__$1;
var file = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28437,files_msg){
var map__28444 = p__28437;
var map__28444__$1 = ((((!((map__28444 == null)))?((((map__28444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28444):map__28444);
var opts = map__28444__$1;
var on_cssload = cljs.core.get.call(null,map__28444__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28446_28450 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28447_28451 = null;
var count__28448_28452 = (0);
var i__28449_28453 = (0);
while(true){
if((i__28449_28453 < count__28448_28452)){
var f_28454 = cljs.core._nth.call(null,chunk__28447_28451,i__28449_28453);
figwheel.client.file_reloading.reload_css_file.call(null,f_28454);

var G__28455 = seq__28446_28450;
var G__28456 = chunk__28447_28451;
var G__28457 = count__28448_28452;
var G__28458 = (i__28449_28453 + (1));
seq__28446_28450 = G__28455;
chunk__28447_28451 = G__28456;
count__28448_28452 = G__28457;
i__28449_28453 = G__28458;
continue;
} else {
var temp__4425__auto___28459 = cljs.core.seq.call(null,seq__28446_28450);
if(temp__4425__auto___28459){
var seq__28446_28460__$1 = temp__4425__auto___28459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28446_28460__$1)){
var c__17178__auto___28461 = cljs.core.chunk_first.call(null,seq__28446_28460__$1);
var G__28462 = cljs.core.chunk_rest.call(null,seq__28446_28460__$1);
var G__28463 = c__17178__auto___28461;
var G__28464 = cljs.core.count.call(null,c__17178__auto___28461);
var G__28465 = (0);
seq__28446_28450 = G__28462;
chunk__28447_28451 = G__28463;
count__28448_28452 = G__28464;
i__28449_28453 = G__28465;
continue;
} else {
var f_28466 = cljs.core.first.call(null,seq__28446_28460__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28466);

var G__28467 = cljs.core.next.call(null,seq__28446_28460__$1);
var G__28468 = null;
var G__28469 = (0);
var G__28470 = (0);
seq__28446_28450 = G__28467;
chunk__28447_28451 = G__28468;
count__28448_28452 = G__28469;
i__28449_28453 = G__28470;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28444,map__28444__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28444,map__28444__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map