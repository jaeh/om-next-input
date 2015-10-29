// Compiled by ClojureScript 1.7.145 {}
goog.provide('magic_ring.pixelshooter');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('sablono.core');
goog.require('magic_ring.appstate');
magic_ring.pixelshooter.read = (function magic_ring$pixelshooter$read(p__22927,key,params){
var map__22931 = p__22927;
var map__22931__$1 = ((((!((map__22931 == null)))?((((map__22931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22931):map__22931);
var env = map__22931__$1;
var state = cljs.core.get.call(null,map__22931__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
var st = cljs.core.deref.call(null,magic_ring.appstate.state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22933 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__22933,(0),null);
var value = cljs.core.nth.call(null,vec__22933,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
magic_ring.pixelshooter.mutate = (function magic_ring$pixelshooter$mutate(p__22934,key,params){
var map__22937 = p__22934;
var map__22937__$1 = ((((!((map__22937 == null)))?((((map__22937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22937):map__22937);
var env = map__22937__$1;
var state = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22937,map__22937__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,magic_ring.appstate.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__22937,map__22937__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
magic_ring.pixelshooter.component = (function magic_ring$pixelshooter$component(){
var this__19636__auto__ = this;
React.Component.apply(this__19636__auto__,arguments);

if(!((this__19636__auto__.getInitialState == null))){
this__19636__auto__.state = this__19636__auto__.getInitialState();
} else {
this__19636__auto__.state = {};
}

return this__19636__auto__;
});

magic_ring.pixelshooter.component.prototype = goog.object.clone(React.Component.prototype);

var x22943_22954 = magic_ring.pixelshooter.component.prototype;
x22943_22954.componentWillUpdate = ((function (x22943_22954){
return (function (next_props__19577__auto__,next_state__19578__auto__){
var this__19576__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19576__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19576__auto__);
});})(x22943_22954))
;

x22943_22954.shouldComponentUpdate = ((function (x22943_22954){
return (function (next_props__19577__auto__,next_state__19578__auto__){
var this__19576__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19576__auto__),goog.object.get(next_props__19577__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__19576__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19576__auto__.state,"omcljs$state"),goog.object.get(next_state__19578__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x22943_22954))
;

x22943_22954.componentWillUnmount = ((function (x22943_22954){
return (function (){
var this__19576__auto__ = this;
var r__19582__auto__ = om.next.get_reconciler.call(null,this__19576__auto__);
var cfg__19583__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19582__auto__);
var st__19584__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19583__auto__);
var indexer__19581__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19583__auto__);
if((st__19584__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19584__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19576__auto__);
}

if((indexer__19581__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19581__auto__,this__19576__auto__);
}
});})(x22943_22954))
;

x22943_22954.componentDidUpdate = ((function (x22943_22954){
return (function (prev_props__19579__auto__,prev_state__19580__auto__){
var this__19576__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19576__auto__);
});})(x22943_22954))
;

x22943_22954.isMounted = ((function (x22943_22954){
return (function (){
var this__19576__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19576__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22943_22954))
;

x22943_22954.componentWillMount = ((function (x22943_22954){
return (function (){
var this__19576__auto__ = this;
var indexer__19581__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19576__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19581__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19581__auto__,this__19576__auto__);
}
});})(x22943_22954))
;

x22943_22954.render = ((function (x22943_22954){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22944 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22945 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22946 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22947 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22948 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22949 = om.next.props.call(null,this$);
var map__22949__$1 = ((((!((map__22949 == null)))?((((map__22949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);
var count = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs22951 = [cljs.core.str("Your Pixels: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs22951))?sablono.interpreter.attributes.call(null,attrs22951):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22951))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22951)], null))));
})(),React.createElement("button",{"onClick": ((function (map__22949,map__22949__$1,count,_STAR_reconciler_STAR_22944,_STAR_depth_STAR_22945,_STAR_shared_STAR_22946,_STAR_instrument_STAR_22947,_STAR_parent_STAR_22948,this$,x22943_22954){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__22949,map__22949__$1,count,_STAR_reconciler_STAR_22944,_STAR_depth_STAR_22945,_STAR_shared_STAR_22946,_STAR_instrument_STAR_22947,_STAR_parent_STAR_22948,this$,x22943_22954))
},"Send pixel")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22948;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22947;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22946;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22945;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22944;
}});})(x22943_22954))
;


magic_ring.pixelshooter.component.prototype.constructor = magic_ring.pixelshooter.component;

magic_ring.pixelshooter.component.prototype.om$isComponent = true;

var x22952_22955 = magic_ring.pixelshooter.component;
x22952_22955.om$next$IQuery$ = true;

x22952_22955.om$next$IQuery$query$arity$1 = ((function (x22952_22955){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x22952_22955))
;


var x22953_22956 = magic_ring.pixelshooter.component.prototype;
x22953_22956.om$next$IQuery$ = true;

x22953_22956.om$next$IQuery$query$arity$1 = ((function (x22953_22956){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x22953_22956))
;


magic_ring.pixelshooter.component.cljs$lang$type = true;

magic_ring.pixelshooter.component.cljs$lang$ctorStr = "magic-ring.pixelshooter/component";

magic_ring.pixelshooter.component.cljs$lang$ctorPrWriter = (function (this__19638__auto__,writer__19639__auto__,opt__19640__auto__){
return cljs.core._write.call(null,writer__19639__auto__,"magic-ring.pixelshooter/component");
});
magic_ring.pixelshooter.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),magic_ring.appstate.state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),magic_ring.pixelshooter.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),magic_ring.pixelshooter.mutate], null))], null));

//# sourceMappingURL=pixelshooter.js.map