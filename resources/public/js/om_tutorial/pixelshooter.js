// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_tutorial.pixelshooter');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_tutorial.appstate');
om_tutorial.pixelshooter.read = (function om_tutorial$pixelshooter$read(p__21652,key,params){
var map__21656 = p__21652;
var map__21656__$1 = ((((!((map__21656 == null)))?((((map__21656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21656):map__21656);
var env = map__21656__$1;
var state = cljs.core.get.call(null,map__21656__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
var st = cljs.core.deref.call(null,om_tutorial.appstate.state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21658 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__21658,(0),null);
var value = cljs.core.nth.call(null,vec__21658,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.pixelshooter.mutate = (function om_tutorial$pixelshooter$mutate(p__21659,key,params){
var map__21662 = p__21659;
var map__21662__$1 = ((((!((map__21662 == null)))?((((map__21662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21662):map__21662);
var env = map__21662__$1;
var state = cljs.core.get.call(null,map__21662__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21662,map__21662__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,om_tutorial.appstate.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__21662,map__21662__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
om_tutorial.pixelshooter.component = (function om_tutorial$pixelshooter$component(){
var this__19637__auto__ = this;
React.Component.apply(this__19637__auto__,arguments);

if(!((this__19637__auto__.getInitialState == null))){
this__19637__auto__.state = this__19637__auto__.getInitialState();
} else {
this__19637__auto__.state = {};
}

return this__19637__auto__;
});

om_tutorial.pixelshooter.component.prototype = goog.object.clone(React.Component.prototype);

var x21668_21679 = om_tutorial.pixelshooter.component.prototype;
x21668_21679.componentWillUpdate = ((function (x21668_21679){
return (function (next_props__19578__auto__,next_state__19579__auto__){
var this__19577__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19577__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19577__auto__);
});})(x21668_21679))
;

x21668_21679.shouldComponentUpdate = ((function (x21668_21679){
return (function (next_props__19578__auto__,next_state__19579__auto__){
var this__19577__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19577__auto__),goog.object.get(next_props__19578__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__19577__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19577__auto__.state,"omcljs$state"),goog.object.get(next_state__19579__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x21668_21679))
;

x21668_21679.componentWillUnmount = ((function (x21668_21679){
return (function (){
var this__19577__auto__ = this;
var r__19583__auto__ = om.next.get_reconciler.call(null,this__19577__auto__);
var cfg__19584__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19583__auto__);
var st__19585__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19584__auto__);
var indexer__19582__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19584__auto__);
if((st__19585__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19585__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19577__auto__);
}

if((indexer__19582__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19582__auto__,this__19577__auto__);
}
});})(x21668_21679))
;

x21668_21679.componentDidUpdate = ((function (x21668_21679){
return (function (prev_props__19580__auto__,prev_state__19581__auto__){
var this__19577__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19577__auto__);
});})(x21668_21679))
;

x21668_21679.isMounted = ((function (x21668_21679){
return (function (){
var this__19577__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21668_21679))
;

x21668_21679.componentWillMount = ((function (x21668_21679){
return (function (){
var this__19577__auto__ = this;
var indexer__19582__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19582__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19582__auto__,this__19577__auto__);
}
});})(x21668_21679))
;

x21668_21679.render = ((function (x21668_21679){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21669 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21670 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21671 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21672 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21673 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21674 = om.next.props.call(null,this$);
var map__21674__$1 = ((((!((map__21674 == null)))?((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var count = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs21676 = [cljs.core.str("Count: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21676))?sablono.interpreter.attributes.call(null,attrs21676):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21676))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21676)], null))));
})(),React.createElement("button",{"onClick": ((function (map__21674,map__21674__$1,count,_STAR_reconciler_STAR_21669,_STAR_depth_STAR_21670,_STAR_shared_STAR_21671,_STAR_instrument_STAR_21672,_STAR_parent_STAR_21673,this$,x21668_21679){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__21674,map__21674__$1,count,_STAR_reconciler_STAR_21669,_STAR_depth_STAR_21670,_STAR_shared_STAR_21671,_STAR_instrument_STAR_21672,_STAR_parent_STAR_21673,this$,x21668_21679))
},"Click me!")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21673;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21672;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21671;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21670;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21669;
}});})(x21668_21679))
;


om_tutorial.pixelshooter.component.prototype.constructor = om_tutorial.pixelshooter.component;

om_tutorial.pixelshooter.component.prototype.om$isComponent = true;

var x21677_21680 = om_tutorial.pixelshooter.component;
x21677_21680.om$next$IQuery$ = true;

x21677_21680.om$next$IQuery$query$arity$1 = ((function (x21677_21680){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21677_21680))
;


var x21678_21681 = om_tutorial.pixelshooter.component.prototype;
x21678_21681.om$next$IQuery$ = true;

x21678_21681.om$next$IQuery$query$arity$1 = ((function (x21678_21681){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21678_21681))
;


om_tutorial.pixelshooter.component.cljs$lang$type = true;

om_tutorial.pixelshooter.component.cljs$lang$ctorStr = "om-tutorial.pixelshooter/component";

om_tutorial.pixelshooter.component.cljs$lang$ctorPrWriter = (function (this__19639__auto__,writer__19640__auto__,opt__19641__auto__){
return cljs.core._write.call(null,writer__19640__auto__,"om-tutorial.pixelshooter/component");
});
om_tutorial.pixelshooter.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.appstate.state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.pixelshooter.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.pixelshooter.mutate], null))], null));

//# sourceMappingURL=pixelshooter.js.map