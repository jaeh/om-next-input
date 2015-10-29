// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26319__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26320__i = 0, G__26320__a = new Array(arguments.length -  0);
while (G__26320__i < G__26320__a.length) {G__26320__a[G__26320__i] = arguments[G__26320__i + 0]; ++G__26320__i;}
  args = new cljs.core.IndexedSeq(G__26320__a,0);
} 
return G__26319__delegate.call(this,args);};
G__26319.cljs$lang$maxFixedArity = 0;
G__26319.cljs$lang$applyTo = (function (arglist__26321){
var args = cljs.core.seq(arglist__26321);
return G__26319__delegate(args);
});
G__26319.cljs$core$IFn$_invoke$arity$variadic = G__26319__delegate;
return G__26319;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26322){
var map__26325 = p__26322;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var message = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16375__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16363__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16363__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16363__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20946__auto___26473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___26473,ch){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___26473,ch){
return (function (state_26443){
var state_val_26444 = (state_26443[(1)]);
if((state_val_26444 === (7))){
var inst_26439 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26445_26474 = state_26443__$1;
(statearr_26445_26474[(2)] = inst_26439);

(statearr_26445_26474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (1))){
var state_26443__$1 = state_26443;
var statearr_26446_26475 = state_26443__$1;
(statearr_26446_26475[(2)] = null);

(statearr_26446_26475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (4))){
var inst_26402 = (state_26443[(7)]);
var inst_26402__$1 = (state_26443[(2)]);
var state_26443__$1 = (function (){var statearr_26447 = state_26443;
(statearr_26447[(7)] = inst_26402__$1);

return statearr_26447;
})();
if(cljs.core.truth_(inst_26402__$1)){
var statearr_26448_26476 = state_26443__$1;
(statearr_26448_26476[(1)] = (5));

} else {
var statearr_26449_26477 = state_26443__$1;
(statearr_26449_26477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (15))){
var inst_26409 = (state_26443[(8)]);
var inst_26424 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26409);
var inst_26425 = cljs.core.first.call(null,inst_26424);
var inst_26426 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26425);
var inst_26427 = console.warn("Figwheel: Not loading code with warnings - ",inst_26426);
var state_26443__$1 = state_26443;
var statearr_26450_26478 = state_26443__$1;
(statearr_26450_26478[(2)] = inst_26427);

(statearr_26450_26478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (13))){
var inst_26432 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26451_26479 = state_26443__$1;
(statearr_26451_26479[(2)] = inst_26432);

(statearr_26451_26479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (6))){
var state_26443__$1 = state_26443;
var statearr_26452_26480 = state_26443__$1;
(statearr_26452_26480[(2)] = null);

(statearr_26452_26480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (17))){
var inst_26430 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26453_26481 = state_26443__$1;
(statearr_26453_26481[(2)] = inst_26430);

(statearr_26453_26481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (3))){
var inst_26441 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26443__$1,inst_26441);
} else {
if((state_val_26444 === (12))){
var inst_26408 = (state_26443[(9)]);
var inst_26422 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26408,opts);
var state_26443__$1 = state_26443;
if(cljs.core.truth_(inst_26422)){
var statearr_26454_26482 = state_26443__$1;
(statearr_26454_26482[(1)] = (15));

} else {
var statearr_26455_26483 = state_26443__$1;
(statearr_26455_26483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (2))){
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26443__$1,(4),ch);
} else {
if((state_val_26444 === (11))){
var inst_26409 = (state_26443[(8)]);
var inst_26414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26415 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26409);
var inst_26416 = cljs.core.async.timeout.call(null,(1000));
var inst_26417 = [inst_26415,inst_26416];
var inst_26418 = (new cljs.core.PersistentVector(null,2,(5),inst_26414,inst_26417,null));
var state_26443__$1 = state_26443;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26443__$1,(14),inst_26418);
} else {
if((state_val_26444 === (9))){
var state_26443__$1 = state_26443;
var statearr_26456_26484 = state_26443__$1;
(statearr_26456_26484[(2)] = null);

(statearr_26456_26484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (5))){
var inst_26402 = (state_26443[(7)]);
var inst_26404 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26405 = (new cljs.core.PersistentArrayMap(null,2,inst_26404,null));
var inst_26406 = (new cljs.core.PersistentHashSet(null,inst_26405,null));
var inst_26407 = figwheel.client.focus_msgs.call(null,inst_26406,inst_26402);
var inst_26408 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26407);
var inst_26409 = cljs.core.first.call(null,inst_26407);
var inst_26410 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26443__$1 = (function (){var statearr_26457 = state_26443;
(statearr_26457[(9)] = inst_26408);

(statearr_26457[(8)] = inst_26409);

return statearr_26457;
})();
if(cljs.core.truth_(inst_26410)){
var statearr_26458_26485 = state_26443__$1;
(statearr_26458_26485[(1)] = (8));

} else {
var statearr_26459_26486 = state_26443__$1;
(statearr_26459_26486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (14))){
var inst_26420 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26460_26487 = state_26443__$1;
(statearr_26460_26487[(2)] = inst_26420);

(statearr_26460_26487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (16))){
var state_26443__$1 = state_26443;
var statearr_26461_26488 = state_26443__$1;
(statearr_26461_26488[(2)] = null);

(statearr_26461_26488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (10))){
var inst_26435 = (state_26443[(2)]);
var state_26443__$1 = (function (){var statearr_26462 = state_26443;
(statearr_26462[(10)] = inst_26435);

return statearr_26462;
})();
var statearr_26463_26489 = state_26443__$1;
(statearr_26463_26489[(2)] = null);

(statearr_26463_26489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (8))){
var inst_26408 = (state_26443[(9)]);
var inst_26412 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26408,opts);
var state_26443__$1 = state_26443;
if(cljs.core.truth_(inst_26412)){
var statearr_26464_26490 = state_26443__$1;
(statearr_26464_26490[(1)] = (11));

} else {
var statearr_26465_26491 = state_26443__$1;
(statearr_26465_26491[(1)] = (12));

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
});})(c__20946__auto___26473,ch))
;
return ((function (switch__20881__auto__,c__20946__auto___26473,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26469[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____1 = (function (state_26443){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_26443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__20885__auto__ = e26470;
var statearr_26471_26492 = state_26443;
(statearr_26471_26492[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26493 = state_26443;
state_26443 = G__26493;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__ = function(state_26443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____1.call(this,state_26443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___26473,ch))
})();
var state__20948__auto__ = (function (){var statearr_26472 = f__20947__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___26473);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___26473,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26494_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26494_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26501 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26501){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26499 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26500 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26499,_STAR_print_newline_STAR_26500,base_path_26501){
return (function() { 
var G__26502__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26503__i = 0, G__26503__a = new Array(arguments.length -  0);
while (G__26503__i < G__26503__a.length) {G__26503__a[G__26503__i] = arguments[G__26503__i + 0]; ++G__26503__i;}
  args = new cljs.core.IndexedSeq(G__26503__a,0);
} 
return G__26502__delegate.call(this,args);};
G__26502.cljs$lang$maxFixedArity = 0;
G__26502.cljs$lang$applyTo = (function (arglist__26504){
var args = cljs.core.seq(arglist__26504);
return G__26502__delegate(args);
});
G__26502.cljs$core$IFn$_invoke$arity$variadic = G__26502__delegate;
return G__26502;
})()
;})(_STAR_print_fn_STAR_26499,_STAR_print_newline_STAR_26500,base_path_26501))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26500;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26499;
}}catch (e26498){if((e26498 instanceof Error)){
var e = e26498;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26501], null));
} else {
var e = e26498;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26501))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26505){
var map__26512 = p__26505;
var map__26512__$1 = ((((!((map__26512 == null)))?((((map__26512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26512):map__26512);
var opts = map__26512__$1;
var build_id = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26512,map__26512__$1,opts,build_id){
return (function (p__26514){
var vec__26515 = p__26514;
var map__26516 = cljs.core.nth.call(null,vec__26515,(0),null);
var map__26516__$1 = ((((!((map__26516 == null)))?((((map__26516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26516):map__26516);
var msg = map__26516__$1;
var msg_name = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26515,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26515,map__26516,map__26516__$1,msg,msg_name,_,map__26512,map__26512__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26515,map__26516,map__26516__$1,msg,msg_name,_,map__26512,map__26512__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26512,map__26512__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26522){
var vec__26523 = p__26522;
var map__26524 = cljs.core.nth.call(null,vec__26523,(0),null);
var map__26524__$1 = ((((!((map__26524 == null)))?((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var msg = map__26524__$1;
var msg_name = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26523,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26526){
var map__26536 = p__26526;
var map__26536__$1 = ((((!((map__26536 == null)))?((((map__26536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26536):map__26536);
var on_compile_warning = cljs.core.get.call(null,map__26536__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26536__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26536,map__26536__$1,on_compile_warning,on_compile_fail){
return (function (p__26538){
var vec__26539 = p__26538;
var map__26540 = cljs.core.nth.call(null,vec__26539,(0),null);
var map__26540__$1 = ((((!((map__26540 == null)))?((((map__26540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26540):map__26540);
var msg = map__26540__$1;
var msg_name = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26539,(1));
var pred__26542 = cljs.core._EQ_;
var expr__26543 = msg_name;
if(cljs.core.truth_(pred__26542.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26543))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26542.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26543))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26536,map__26536__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__,msg_hist,msg_names,msg){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26683 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26683)){
var statearr_26761_26807 = state_26759__$1;
(statearr_26761_26807[(1)] = (8));

} else {
var statearr_26762_26808 = state_26759__$1;
(statearr_26762_26808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (20))){
var inst_26753 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26763_26809 = state_26759__$1;
(statearr_26763_26809[(2)] = inst_26753);

(statearr_26763_26809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (27))){
var inst_26749 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26764_26810 = state_26759__$1;
(statearr_26764_26810[(2)] = inst_26749);

(statearr_26764_26810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var inst_26676 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26676)){
var statearr_26765_26811 = state_26759__$1;
(statearr_26765_26811[(1)] = (2));

} else {
var statearr_26766_26812 = state_26759__$1;
(statearr_26766_26812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (24))){
var inst_26751 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26767_26813 = state_26759__$1;
(statearr_26767_26813[(2)] = inst_26751);

(statearr_26767_26813[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (15))){
var inst_26755 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26768_26814 = state_26759__$1;
(statearr_26768_26814[(2)] = inst_26755);

(statearr_26768_26814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (21))){
var inst_26714 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26769_26815 = state_26759__$1;
(statearr_26769_26815[(2)] = inst_26714);

(statearr_26769_26815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (31))){
var inst_26738 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26738)){
var statearr_26770_26816 = state_26759__$1;
(statearr_26770_26816[(1)] = (34));

} else {
var statearr_26771_26817 = state_26759__$1;
(statearr_26771_26817[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (32))){
var inst_26747 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26772_26818 = state_26759__$1;
(statearr_26772_26818[(2)] = inst_26747);

(statearr_26772_26818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (33))){
var inst_26736 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26773_26819 = state_26759__$1;
(statearr_26773_26819[(2)] = inst_26736);

(statearr_26773_26819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (13))){
var inst_26697 = figwheel.client.heads_up.clear.call(null);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(16),inst_26697);
} else {
if((state_val_26760 === (22))){
var inst_26718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26719 = figwheel.client.heads_up.append_message.call(null,inst_26718);
var state_26759__$1 = state_26759;
var statearr_26774_26820 = state_26759__$1;
(statearr_26774_26820[(2)] = inst_26719);

(statearr_26774_26820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (36))){
var inst_26745 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26775_26821 = state_26759__$1;
(statearr_26775_26821[(2)] = inst_26745);

(statearr_26775_26821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (29))){
var inst_26729 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26776_26822 = state_26759__$1;
(statearr_26776_26822[(2)] = inst_26729);

(statearr_26776_26822[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var inst_26678 = (state_26759[(7)]);
var state_26759__$1 = state_26759;
var statearr_26777_26823 = state_26759__$1;
(statearr_26777_26823[(2)] = inst_26678);

(statearr_26777_26823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (28))){
var inst_26725 = (state_26759[(2)]);
var inst_26726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26727 = figwheel.client.heads_up.display_warning.call(null,inst_26726);
var state_26759__$1 = (function (){var statearr_26778 = state_26759;
(statearr_26778[(8)] = inst_26725);

return statearr_26778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(29),inst_26727);
} else {
if((state_val_26760 === (25))){
var inst_26723 = figwheel.client.heads_up.clear.call(null);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(28),inst_26723);
} else {
if((state_val_26760 === (34))){
var inst_26740 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(37),inst_26740);
} else {
if((state_val_26760 === (17))){
var inst_26705 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26779_26824 = state_26759__$1;
(statearr_26779_26824[(2)] = inst_26705);

(statearr_26779_26824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26695 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26695)){
var statearr_26780_26825 = state_26759__$1;
(statearr_26780_26825[(1)] = (13));

} else {
var statearr_26781_26826 = state_26759__$1;
(statearr_26781_26826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (12))){
var inst_26691 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26782_26827 = state_26759__$1;
(statearr_26782_26827[(2)] = inst_26691);

(statearr_26782_26827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (2))){
var inst_26678 = (state_26759[(7)]);
var inst_26678__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26759__$1 = (function (){var statearr_26783 = state_26759;
(statearr_26783[(7)] = inst_26678__$1);

return statearr_26783;
})();
if(cljs.core.truth_(inst_26678__$1)){
var statearr_26784_26828 = state_26759__$1;
(statearr_26784_26828[(1)] = (5));

} else {
var statearr_26785_26829 = state_26759__$1;
(statearr_26785_26829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (23))){
var inst_26721 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26721)){
var statearr_26786_26830 = state_26759__$1;
(statearr_26786_26830[(1)] = (25));

} else {
var statearr_26787_26831 = state_26759__$1;
(statearr_26787_26831[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (35))){
var state_26759__$1 = state_26759;
var statearr_26788_26832 = state_26759__$1;
(statearr_26788_26832[(2)] = null);

(statearr_26788_26832[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (19))){
var inst_26716 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26716)){
var statearr_26789_26833 = state_26759__$1;
(statearr_26789_26833[(1)] = (22));

} else {
var statearr_26790_26834 = state_26759__$1;
(statearr_26790_26834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (11))){
var inst_26687 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26791_26835 = state_26759__$1;
(statearr_26791_26835[(2)] = inst_26687);

(statearr_26791_26835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var inst_26689 = figwheel.client.heads_up.clear.call(null);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(12),inst_26689);
} else {
if((state_val_26760 === (5))){
var inst_26680 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26759__$1 = state_26759;
var statearr_26792_26836 = state_26759__$1;
(statearr_26792_26836[(2)] = inst_26680);

(statearr_26792_26836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (14))){
var inst_26707 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26707)){
var statearr_26793_26837 = state_26759__$1;
(statearr_26793_26837[(1)] = (18));

} else {
var statearr_26794_26838 = state_26759__$1;
(statearr_26794_26838[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (26))){
var inst_26731 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26731)){
var statearr_26795_26839 = state_26759__$1;
(statearr_26795_26839[(1)] = (30));

} else {
var statearr_26796_26840 = state_26759__$1;
(statearr_26796_26840[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (16))){
var inst_26699 = (state_26759[(2)]);
var inst_26700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26701 = figwheel.client.format_messages.call(null,inst_26700);
var inst_26702 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26703 = figwheel.client.heads_up.display_error.call(null,inst_26701,inst_26702);
var state_26759__$1 = (function (){var statearr_26797 = state_26759;
(statearr_26797[(9)] = inst_26699);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(17),inst_26703);
} else {
if((state_val_26760 === (30))){
var inst_26733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26734 = figwheel.client.heads_up.display_warning.call(null,inst_26733);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(33),inst_26734);
} else {
if((state_val_26760 === (10))){
var inst_26693 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26798_26841 = state_26759__$1;
(statearr_26798_26841[(2)] = inst_26693);

(statearr_26798_26841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (18))){
var inst_26709 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26710 = figwheel.client.format_messages.call(null,inst_26709);
var inst_26711 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26712 = figwheel.client.heads_up.display_error.call(null,inst_26710,inst_26711);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(21),inst_26712);
} else {
if((state_val_26760 === (37))){
var inst_26742 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26799_26842 = state_26759__$1;
(statearr_26799_26842[(2)] = inst_26742);

(statearr_26799_26842[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26685 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(11),inst_26685);
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
});})(c__20946__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20881__auto__,c__20946__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____0 = (function (){
var statearr_26803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26803[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__);

(statearr_26803[(1)] = (1));

return statearr_26803;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____1 = (function (state_26759){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object)){
var ex__20885__auto__ = e26804;
var statearr_26805_26843 = state_26759;
(statearr_26805_26843[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26844 = state_26759;
state_26759 = G__26844;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__,msg_hist,msg_names,msg))
})();
var state__20948__auto__ = (function (){var statearr_26806 = f__20947__auto__.call(null);
(statearr_26806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__,msg_hist,msg_names,msg))
);

return c__20946__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20946__auto___26907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___26907,ch){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___26907,ch){
return (function (state_26890){
var state_val_26891 = (state_26890[(1)]);
if((state_val_26891 === (1))){
var state_26890__$1 = state_26890;
var statearr_26892_26908 = state_26890__$1;
(statearr_26892_26908[(2)] = null);

(statearr_26892_26908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (2))){
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26890__$1,(4),ch);
} else {
if((state_val_26891 === (3))){
var inst_26888 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26890__$1,inst_26888);
} else {
if((state_val_26891 === (4))){
var inst_26878 = (state_26890[(7)]);
var inst_26878__$1 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26893 = state_26890;
(statearr_26893[(7)] = inst_26878__$1);

return statearr_26893;
})();
if(cljs.core.truth_(inst_26878__$1)){
var statearr_26894_26909 = state_26890__$1;
(statearr_26894_26909[(1)] = (5));

} else {
var statearr_26895_26910 = state_26890__$1;
(statearr_26895_26910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (5))){
var inst_26878 = (state_26890[(7)]);
var inst_26880 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26878);
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26890__$1,(8),inst_26880);
} else {
if((state_val_26891 === (6))){
var state_26890__$1 = state_26890;
var statearr_26896_26911 = state_26890__$1;
(statearr_26896_26911[(2)] = null);

(statearr_26896_26911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (7))){
var inst_26886 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26897_26912 = state_26890__$1;
(statearr_26897_26912[(2)] = inst_26886);

(statearr_26897_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (8))){
var inst_26882 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26898 = state_26890;
(statearr_26898[(8)] = inst_26882);

return statearr_26898;
})();
var statearr_26899_26913 = state_26890__$1;
(statearr_26899_26913[(2)] = null);

(statearr_26899_26913[(1)] = (2));


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
});})(c__20946__auto___26907,ch))
;
return ((function (switch__20881__auto__,c__20946__auto___26907,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20882__auto____0 = (function (){
var statearr_26903 = [null,null,null,null,null,null,null,null,null];
(statearr_26903[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20882__auto__);

(statearr_26903[(1)] = (1));

return statearr_26903;
});
var figwheel$client$heads_up_plugin_$_state_machine__20882__auto____1 = (function (state_26890){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_26890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e26904){if((e26904 instanceof Object)){
var ex__20885__auto__ = e26904;
var statearr_26905_26914 = state_26890;
(statearr_26905_26914[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26915 = state_26890;
state_26890 = G__26915;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20882__auto__ = function(state_26890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20882__auto____1.call(this,state_26890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___26907,ch))
})();
var state__20948__auto__ = (function (){var statearr_26906 = f__20947__auto__.call(null);
(statearr_26906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___26907);

return statearr_26906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___26907,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_26936){
var state_val_26937 = (state_26936[(1)]);
if((state_val_26937 === (1))){
var inst_26931 = cljs.core.async.timeout.call(null,(3000));
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26936__$1,(2),inst_26931);
} else {
if((state_val_26937 === (2))){
var inst_26933 = (state_26936[(2)]);
var inst_26934 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26936__$1 = (function (){var statearr_26938 = state_26936;
(statearr_26938[(7)] = inst_26933);

return statearr_26938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26936__$1,inst_26934);
} else {
return null;
}
}
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____0 = (function (){
var statearr_26942 = [null,null,null,null,null,null,null,null];
(statearr_26942[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__);

(statearr_26942[(1)] = (1));

return statearr_26942;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____1 = (function (state_26936){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_26936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e26943){if((e26943 instanceof Object)){
var ex__20885__auto__ = e26943;
var statearr_26944_26946 = state_26936;
(statearr_26944_26946[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26947 = state_26936;
state_26936 = G__26947;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_26945 = f__20947__auto__.call(null);
(statearr_26945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26948){
var map__26955 = p__26948;
var map__26955__$1 = ((((!((map__26955 == null)))?((((map__26955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26955):map__26955);
var ed = map__26955__$1;
var formatted_exception = cljs.core.get.call(null,map__26955__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26955__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26955__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26957_26961 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26958_26962 = null;
var count__26959_26963 = (0);
var i__26960_26964 = (0);
while(true){
if((i__26960_26964 < count__26959_26963)){
var msg_26965 = cljs.core._nth.call(null,chunk__26958_26962,i__26960_26964);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26965);

var G__26966 = seq__26957_26961;
var G__26967 = chunk__26958_26962;
var G__26968 = count__26959_26963;
var G__26969 = (i__26960_26964 + (1));
seq__26957_26961 = G__26966;
chunk__26958_26962 = G__26967;
count__26959_26963 = G__26968;
i__26960_26964 = G__26969;
continue;
} else {
var temp__4425__auto___26970 = cljs.core.seq.call(null,seq__26957_26961);
if(temp__4425__auto___26970){
var seq__26957_26971__$1 = temp__4425__auto___26970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26957_26971__$1)){
var c__17178__auto___26972 = cljs.core.chunk_first.call(null,seq__26957_26971__$1);
var G__26973 = cljs.core.chunk_rest.call(null,seq__26957_26971__$1);
var G__26974 = c__17178__auto___26972;
var G__26975 = cljs.core.count.call(null,c__17178__auto___26972);
var G__26976 = (0);
seq__26957_26961 = G__26973;
chunk__26958_26962 = G__26974;
count__26959_26963 = G__26975;
i__26960_26964 = G__26976;
continue;
} else {
var msg_26977 = cljs.core.first.call(null,seq__26957_26971__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26977);

var G__26978 = cljs.core.next.call(null,seq__26957_26971__$1);
var G__26979 = null;
var G__26980 = (0);
var G__26981 = (0);
seq__26957_26961 = G__26978;
chunk__26958_26962 = G__26979;
count__26959_26963 = G__26980;
i__26960_26964 = G__26981;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26982){
var map__26985 = p__26982;
var map__26985__$1 = ((((!((map__26985 == null)))?((((map__26985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26985):map__26985);
var w = map__26985__$1;
var message = cljs.core.get.call(null,map__26985__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16363__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16363__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16363__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26993 = cljs.core.seq.call(null,plugins);
var chunk__26994 = null;
var count__26995 = (0);
var i__26996 = (0);
while(true){
if((i__26996 < count__26995)){
var vec__26997 = cljs.core._nth.call(null,chunk__26994,i__26996);
var k = cljs.core.nth.call(null,vec__26997,(0),null);
var plugin = cljs.core.nth.call(null,vec__26997,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26999 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26993,chunk__26994,count__26995,i__26996,pl_26999,vec__26997,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26999.call(null,msg_hist);
});})(seq__26993,chunk__26994,count__26995,i__26996,pl_26999,vec__26997,k,plugin))
);
} else {
}

var G__27000 = seq__26993;
var G__27001 = chunk__26994;
var G__27002 = count__26995;
var G__27003 = (i__26996 + (1));
seq__26993 = G__27000;
chunk__26994 = G__27001;
count__26995 = G__27002;
i__26996 = G__27003;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26993);
if(temp__4425__auto__){
var seq__26993__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26993__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__26993__$1);
var G__27004 = cljs.core.chunk_rest.call(null,seq__26993__$1);
var G__27005 = c__17178__auto__;
var G__27006 = cljs.core.count.call(null,c__17178__auto__);
var G__27007 = (0);
seq__26993 = G__27004;
chunk__26994 = G__27005;
count__26995 = G__27006;
i__26996 = G__27007;
continue;
} else {
var vec__26998 = cljs.core.first.call(null,seq__26993__$1);
var k = cljs.core.nth.call(null,vec__26998,(0),null);
var plugin = cljs.core.nth.call(null,vec__26998,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27008 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26993,chunk__26994,count__26995,i__26996,pl_27008,vec__26998,k,plugin,seq__26993__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27008.call(null,msg_hist);
});})(seq__26993,chunk__26994,count__26995,i__26996,pl_27008,vec__26998,k,plugin,seq__26993__$1,temp__4425__auto__))
);
} else {
}

var G__27009 = cljs.core.next.call(null,seq__26993__$1);
var G__27010 = null;
var G__27011 = (0);
var G__27012 = (0);
seq__26993 = G__27009;
chunk__26994 = G__27010;
count__26995 = G__27011;
i__26996 = G__27012;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27013 = [];
var len__17433__auto___27016 = arguments.length;
var i__17434__auto___27017 = (0);
while(true){
if((i__17434__auto___27017 < len__17433__auto___27016)){
args27013.push((arguments[i__17434__auto___27017]));

var G__27018 = (i__17434__auto___27017 + (1));
i__17434__auto___27017 = G__27018;
continue;
} else {
}
break;
}

var G__27015 = args27013.length;
switch (G__27015) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27013.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17440__auto__ = [];
var len__17433__auto___27024 = arguments.length;
var i__17434__auto___27025 = (0);
while(true){
if((i__17434__auto___27025 < len__17433__auto___27024)){
args__17440__auto__.push((arguments[i__17434__auto___27025]));

var G__27026 = (i__17434__auto___27025 + (1));
i__17434__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((0) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17441__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27021){
var map__27022 = p__27021;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var opts = map__27022__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27020){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27020));
});

//# sourceMappingURL=client.js.map