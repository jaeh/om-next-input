// Compiled by ClojureScript 1.7.145 {}
goog.provide('magic_ring.colorchooser');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('sablono.core');
goog.require('magic_ring.appstate');
magic_ring.colorchooser.read = (function magic_ring$colorchooser$read(p__22894,key,params){
var map__22898 = p__22894;
var map__22898__$1 = ((((!((map__22898 == null)))?((((map__22898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22898):map__22898);
var env = map__22898__$1;
var state = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
var st = cljs.core.deref.call(null,magic_ring.appstate.state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22900 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__22900,(0),null);
var value = cljs.core.nth.call(null,vec__22900,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
magic_ring.colorchooser.mutate = (function magic_ring$colorchooser$mutate(p__22901,key,params){
var map__22904 = p__22901;
var map__22904__$1 = ((((!((map__22904 == null)))?((((map__22904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22904):map__22904);
var env = map__22904__$1;
var state = cljs.core.get.call(null,map__22904__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("color","set","color/set",2034848740,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22904,map__22904__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(params));
});})(map__22904,map__22904__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
magic_ring.colorchooser.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),magic_ring.appstate.state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),magic_ring.colorchooser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),magic_ring.colorchooser.mutate], null))], null));
/**
 * @constructor
 */
magic_ring.colorchooser.component = (function magic_ring$colorchooser$component(){
var this__19636__auto__ = this;
React.Component.apply(this__19636__auto__,arguments);

if(!((this__19636__auto__.getInitialState == null))){
this__19636__auto__.state = this__19636__auto__.getInitialState();
} else {
this__19636__auto__.state = {};
}

return this__19636__auto__;
});

magic_ring.colorchooser.component.prototype = goog.object.clone(React.Component.prototype);

var x22910_22921 = magic_ring.colorchooser.component.prototype;
x22910_22921.componentWillUpdate = ((function (x22910_22921){
return (function (next_props__19577__auto__,next_state__19578__auto__){
var this__19576__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19576__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19576__auto__);
});})(x22910_22921))
;

x22910_22921.shouldComponentUpdate = ((function (x22910_22921){
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
});})(x22910_22921))
;

x22910_22921.componentWillUnmount = ((function (x22910_22921){
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
});})(x22910_22921))
;

x22910_22921.componentDidUpdate = ((function (x22910_22921){
return (function (prev_props__19579__auto__,prev_state__19580__auto__){
var this__19576__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19576__auto__);
});})(x22910_22921))
;

x22910_22921.isMounted = ((function (x22910_22921){
return (function (){
var this__19576__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19576__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22910_22921))
;

x22910_22921.componentWillMount = ((function (x22910_22921){
return (function (){
var this__19576__auto__ = this;
var indexer__19581__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19576__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19581__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19581__auto__,this__19576__auto__);
}
});})(x22910_22921))
;

x22910_22921.render = ((function (x22910_22921){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22911 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22912 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22913 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22914 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22915 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22916 = om.next.props.call(null,this$);
var map__22916__$1 = ((((!((map__22916 == null)))?((((map__22916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22916):map__22916);
var color = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return React.createElement("div",null,(function (){var attrs22918 = [cljs.core.str("Color: "),cljs.core.str(color)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs22918))?sablono.interpreter.attributes.call(null,attrs22918):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22918))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22918)], null))));
})(),sablono.interpreter.create_element.call(null,"input",{"type": "color", "value": color, "onChange": ((function (map__22916,map__22916__$1,color,_STAR_reconciler_STAR_22911,_STAR_depth_STAR_22912,_STAR_shared_STAR_22913,_STAR_instrument_STAR_22914,_STAR_parent_STAR_22915,this$,x22910_22921){
return (function (e){
var target = e.target;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("color","set","color/set",2034848740,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,target.value)))))))))))))));
});})(map__22916,map__22916__$1,color,_STAR_reconciler_STAR_22911,_STAR_depth_STAR_22912,_STAR_shared_STAR_22913,_STAR_instrument_STAR_22914,_STAR_parent_STAR_22915,this$,x22910_22921))
}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22915;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22914;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22913;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22912;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22911;
}});})(x22910_22921))
;


magic_ring.colorchooser.component.prototype.constructor = magic_ring.colorchooser.component;

magic_ring.colorchooser.component.prototype.om$isComponent = true;

var x22919_22922 = magic_ring.colorchooser.component;
x22919_22922.om$next$IQuery$ = true;

x22919_22922.om$next$IQuery$query$arity$1 = ((function (x22919_22922){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null);
});})(x22919_22922))
;


var x22920_22923 = magic_ring.colorchooser.component.prototype;
x22920_22923.om$next$IQuery$ = true;

x22920_22923.om$next$IQuery$query$arity$1 = ((function (x22920_22923){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null);
});})(x22920_22923))
;


magic_ring.colorchooser.component.cljs$lang$type = true;

magic_ring.colorchooser.component.cljs$lang$ctorStr = "magic-ring.colorchooser/component";

magic_ring.colorchooser.component.cljs$lang$ctorPrWriter = (function (this__19638__auto__,writer__19639__auto__,opt__19640__auto__){
return cljs.core._write.call(null,writer__19639__auto__,"magic-ring.colorchooser/component");
});

//# sourceMappingURL=colorchooser.js.map