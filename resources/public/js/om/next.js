// Compiled by ClojureScript 1.7.145 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.dom');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
var node_SINGLEQUOTE_ = cljs.core.first.call(null,node);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__25561_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__25561_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__25561_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__25561_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__25562 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__25562;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_.call(null,node)) && (((1) < cljs.core.count.call(null,node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__25571 = clojure.zip.down.call(null,loc);
var G__25572 = path__$1;
loc = G__25571;
path__$1 = G__25572;
continue;
} else {
var vec__25570 = path__$1;
var k = cljs.core.nth.call(null,vec__25570,(0),null);
var ks = cljs.core.nthnext.call(null,vec__25570,(1));
if(om.next.union_QMARK_.call(null,node)){
var node__$1 = clojure.zip.node.call(null,om.next.move_to_key.call(null,loc,k));
var G__25573 = clojure.zip.replace.call(null,loc,node__$1);
var G__25574 = ks;
loc = G__25573;
path__$1 = G__25574;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var G__25575 = om.next.move_to_key.call(null,loc,k);
var G__25576 = ks;
loc = G__25575;
path__$1 = G__25576;
continue;
} else {
var G__25577 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__25578 = ks;
loc = G__25577;
path__$1 = G__25578;
continue;
}
} else {
var G__25579 = clojure.zip.right.call(null,loc);
var G__25580 = path__$1;
loc = G__25579;
path__$1 = G__25580;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query;
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return om$next$join_key.call(null,cljs.core.first.call(null,node));
} else {
return node;

}
}
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,node),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,node)),ks)], true, false);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,node)),om$next$focused_join.call(null,cljs.core.first.call(null,node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__25582 = path;
var k = cljs.core.nth.call(null,vec__25582,(0),null);
var ks = cljs.core.nthnext.call(null,vec__25582,(1));
var match = ((function (vec__25582,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.next.join_key.call(null,x));
});})(vec__25582,k,ks))
;
var value = ((function (vec__25582,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__25582,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks),new cljs.core.Keyword("om.next","union","om.next/union",1397420192),true], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args25583 = [];
var len__17433__auto___25587 = arguments.length;
var i__17434__auto___25588 = (0);
while(true){
if((i__17434__auto___25588 < len__17433__auto___25587)){
args25583.push((arguments[i__17434__auto___25588]));

var G__25589 = (i__17434__auto___25588 + (1));
i__17434__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var G__25585 = args25583.length;
switch (G__25585) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25583.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,path){
while(true){
if(cljs.core.truth_((function (){var and__16363__auto__ = cljs.core.some.call(null,cljs.core.map_QMARK_,focus);
if(cljs.core.truth_(and__16363__auto__)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__16363__auto__;
}
})())){
var vec__25586 = cljs.core.ffirst.call(null,focus);
var k = cljs.core.nth.call(null,vec__25586,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25586,(1),null);
var G__25591 = focus_SINGLEQUOTE_;
var G__25592 = cljs.core.conj.call(null,path,k);
focus = G__25591;
path = G__25592;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next.ident[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$,props);
} else {
var m__17031__auto____$1 = (om.next.ident["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});

(om.next.Ident["_"] = true);

(om.next.ident["_"] = (function (this$,props){
return this$;
}));

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next.params[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$);
} else {
var m__17031__auto____$1 = (om.next.params["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next.query[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$);
} else {
var m__17031__auto____$1 = (om.next.query["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$,new_state);
} else {
var m__17031__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next._get_state[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$);
} else {
var m__17031__auto____$1 = (om.next._get_state["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next._get_rendered_state[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$);
} else {
var m__17031__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__17030__auto__ = (((this$ == null))?null:this$);
var m__17031__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,this$);
} else {
var m__17031__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__16363__auto__ = (x instanceof cljs.core.Symbol);
if(and__16363__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__16363__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;
om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__25594 = om.next.get_reconciler.call(null,component);
var G__25594__$1 = (((G__25594 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__25594));
var G__25594__$2 = (((G__25594__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25594__$1));
var G__25594__$3 = (((G__25594__$2 == null))?null:cljs.core.deref.call(null,G__25594__$2));
var G__25594__$4 = (((G__25594__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__25594__$3));
var G__25594__$5 = (((G__25594__$4 == null))?null:cljs.core.get.call(null,G__25594__$4,component));
return G__25594__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data.call(null,c);
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c)),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,om.next.query.call(null,x),om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1))){
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,om.next.query.call(null,x__$1),om.next.params.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args25601 = [];
var len__17433__auto___25608 = arguments.length;
var i__17434__auto___25609 = (0);
while(true){
if((i__17434__auto___25609 < len__17433__auto___25608)){
args25601.push((arguments[i__17434__auto___25609]));

var G__25610 = (i__17434__auto___25609 + (1));
i__17434__auto___25609 = G__25610;
continue;
} else {
}
break;
}

var G__25603 = args25601.length;
switch (G__25603) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25601.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__25604){
var map__25605 = p__25604;
var map__25605__$1 = ((((!((map__25605 == null)))?((((map__25605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25605):map__25605);
var opts = map__25605__$1;
var validator = cljs.core.get.call(null,map__25605__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__25605__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__25605,map__25605__$1,opts,validator,keyfn){
return (function() { 
var G__25612__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.call(null,om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__25607 = ref;
var G__25607__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__25607)].join(''):G__25607);
return G__25607__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},children);
}
};
var G__25612 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__25613__i = 0, G__25613__a = new Array(arguments.length -  1);
while (G__25613__i < G__25613__a.length) {G__25613__a[G__25613__i] = arguments[G__25613__i + 1]; ++G__25613__i;}
  children = new cljs.core.IndexedSeq(G__25613__a,0);
} 
return G__25612__delegate.call(this,props,children);};
G__25612.cljs$lang$maxFixedArity = 1;
G__25612.cljs$lang$applyTo = (function (arglist__25614){
var props = cljs.core.first(arglist__25614);
var children = cljs.core.rest(arglist__25614);
return G__25612__delegate(props,children);
});
G__25612.cljs$core$IFn$_invoke$arity$variadic = G__25612__delegate;
return G__25612;
})()
;
;})(map__25605,map__25605__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
return x.om$isComponent;
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args25615 = [];
var len__17433__auto___25618 = arguments.length;
var i__17434__auto___25619 = (0);
while(true){
if((i__17434__auto___25619 < len__17433__auto___25618)){
args25615.push((arguments[i__17434__auto___25619]));

var G__25620 = (i__17434__auto___25619 + (1));
i__17434__auto___25619 = G__25620;
continue;
} else {
}
break;
}

var G__25617 = args25615.length;
switch (G__25617) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25615.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args25622 = [];
var len__17433__auto___25625 = arguments.length;
var i__17434__auto___25626 = (0);
while(true){
if((i__17434__auto___25626 < len__17433__auto___25625)){
args25622.push((arguments[i__17434__auto___25626]));

var G__25627 = (i__17434__auto___25626 + (1));
i__17434__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25624 = args25622.length;
switch (G__25624) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25622.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,next_props),om.next.get_props.call(null,component.props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop.call(null,component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__16375__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
om.next.shared = (function om$next$shared(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$shared");
});
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__25630 = c.state;
goog.object.set(G__25630,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__25630;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.ident.call(null,component,om.next.props.call(null,component));
});
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args25633 = [];
var len__17433__auto___25637 = arguments.length;
var i__17434__auto___25638 = (0);
while(true){
if((i__17434__auto___25638 < len__17433__auto___25637)){
args25633.push((arguments[i__17434__auto___25638]));

var G__25639 = (i__17434__auto___25638 + (1));
i__17434__auto___25638 = G__25639;
continue;
} else {
}
break;
}

var G__25635 = args25633.length;
switch (G__25635) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25633.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component)))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__16375__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args25641 = [];
var len__17433__auto___25651 = arguments.length;
var i__17434__auto___25652 = (0);
while(true){
if((i__17434__auto___25652 < len__17433__auto___25651)){
args25641.push((arguments[i__17434__auto___25652]));

var G__25653 = (i__17434__auto___25652 + (1));
i__17434__auto___25652 = G__25653;
continue;
} else {
}
break;
}

var G__25650 = args25641.length;
switch (G__25650) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__17452__auto__ = (new cljs.core.IndexedSeq(args25641.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__17452__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq25642){
var G__25643 = cljs.core.first.call(null,seq25642);
var seq25642__$1 = cljs.core.next.call(null,seq25642);
var G__25644 = cljs.core.first.call(null,seq25642__$1);
var seq25642__$2 = cljs.core.next.call(null,seq25642__$1);
var G__25645 = cljs.core.first.call(null,seq25642__$2);
var seq25642__$3 = cljs.core.next.call(null,seq25642__$2);
var G__25646 = cljs.core.first.call(null,seq25642__$3);
var seq25642__$4 = cljs.core.next.call(null,seq25642__$3);
var G__25647 = cljs.core.first.call(null,seq25642__$4);
var seq25642__$5 = cljs.core.next.call(null,seq25642__$4);
var G__25648 = cljs.core.first.call(null,seq25642__$5);
var seq25642__$6 = cljs.core.next.call(null,seq25642__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25643,G__25644,G__25645,G__25646,G__25647,G__25648,seq25642__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
return om.next._get_rendered_state.call(null,component);
} else {
var G__25658 = component;
var G__25658__$1 = (((G__25658 == null))?null:G__25658.state);
var G__25658__$2 = (((G__25658__$1 == null))?null:goog.object.get(G__25658__$1,"omcljs$state"));
return G__25658__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__25662 = c;
var G__25662__$1 = (((G__25662 == null))?null:G__25662.state);
var G__25662__$2 = (((G__25662__$1 == null))?null:goog.object.get(G__25662__$1,"omcljs$pendingState"));
return G__25662__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args25663 = [];
var len__17433__auto___25666 = arguments.length;
var i__17434__auto___25667 = (0);
while(true){
if((i__17434__auto___25667 < len__17433__auto___25666)){
args25663.push((arguments[i__17434__auto___25667]));

var G__25668 = (i__17434__auto___25667 + (1));
i__17434__auto___25667 = G__25668;
continue;
} else {
}
break;
}

var G__25665 = args25663.length;
switch (G__25665) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25663.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Change the query of a component. Will schedule a re-render.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,new_query){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query '"),cljs.core.str(new_query),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new_query], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Change the query parameters of a component. Will schedule a re-render.
 */
om.next.set_params_BANG_ = (function om$next$set_params_BANG_(component,new_params){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query params "),cljs.core.str(new_params),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new_params], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the dom node associated with a component's React ref.
 */
om.next.dom_node = (function om$next$dom_node(var_args){
var args25670 = [];
var len__17433__auto___25674 = arguments.length;
var i__17434__auto___25675 = (0);
while(true){
if((i__17434__auto___25675 < len__17433__auto___25674)){
args25670.push((arguments[i__17434__auto___25675]));

var G__25676 = (i__17434__auto___25675 + (1));
i__17434__auto___25675 = G__25676;
continue;
} else {
}
break;
}

var G__25672 = args25670.length;
switch (G__25672) {
case 1:
return om.next.dom_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.dom_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25670.length)].join('')));

}
});

om.next.dom_node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

om.next.dom_node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__25673 = component.refs;
var G__25673__$1 = (((G__25673 == null))?null:goog.object.get(G__25673,name));
var G__25673__$2 = (((G__25673__$1 == null))?null:ReactDOM.findDOMNode(G__25673__$1));
return G__25673__$2;
});

om.next.dom_node.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__25679 = component.refs;
var G__25679__$1 = (((G__25679 == null))?null:goog.object.get(G__25679,name));
return G__25679__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args25680 = [];
var len__17433__auto___25683 = arguments.length;
var i__17434__auto___25684 = (0);
while(true){
if((i__17434__auto___25684 < len__17433__auto___25683)){
args25680.push((arguments[i__17434__auto___25684]));

var G__25685 = (i__17434__auto___25684 + (1));
i__17434__auto___25684 = G__25685;
continue;
} else {
}
break;
}

var G__25682 = args25680.length;
switch (G__25682) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25680.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__25687 = p;
var G__25688 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__25687;
ret = G__25688;
continue;
} else {
var G__25689 = p;
var G__25690 = ret;
c__$1 = G__25689;
ret = G__25690;
continue;
}
} else {
return ret;
}
break;
}
});
om.next.join_value = (function om$next$join_value(node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
return cljs.core.first.call(null,node);
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__25692 = subquery_ref;
var G__25692__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__25692)].join(''):G__25692);
return G__25692__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(300));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args25693 = [];
var len__17433__auto___25696 = arguments.length;
var i__17434__auto___25697 = (0);
while(true){
if((i__17434__auto___25697 < len__17433__auto___25696)){
args25693.push((arguments[i__17434__auto___25697]));

var G__25698 = (i__17434__auto___25697 + (1));
i__17434__auto___25697 = G__25698;
continue;
} else {
}
break;
}

var G__25695 = args25693.length;
switch (G__25695) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25693.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto___25700 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___25700)){
var old_reconciler_25701 = temp__4425__auto___25700;
om.next.remove_root_BANG_.call(null,old_reconciler_25701,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__17030__auto__ = (((c == null))?null:c);
var m__17031__auto__ = (om.next.tx_intercept[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,c,tx);
} else {
var m__17031__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310)], null));
});
om.next.gather_sends = (function om$next$gather_sends(p__25703,tx,remotes){
var map__25708 = p__25703;
var map__25708__$1 = ((((!((map__25708 == null)))?((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25708):map__25708);
var env = map__25708__$1;
var parser = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__25708,map__25708__$1,env,parser){
return (function (p1__25702_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25702_SHARP_,parser.call(null,env,tx,p1__25702_SHARP_)],null));
});})(map__25708,map__25708__$1,env,parser))
),cljs.core.filter.call(null,((function (map__25708,map__25708__$1,env,parser){
return (function (p__25710){
var vec__25711 = p__25710;
var _ = cljs.core.nth.call(null,vec__25711,(0),null);
var v = cljs.core.nth.call(null,vec__25711,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__25708,map__25708__$1,env,parser))
)),remotes);
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__16363__auto__ = c;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not.call(null,ref);
} else {
return and__16363__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (((om.next._STAR_logger_STAR_ == null))?null:goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join('')));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,(cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,v))));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args25712 = [];
var len__17433__auto___25716 = arguments.length;
var i__17434__auto___25717 = (0);
while(true){
if((i__17434__auto___25717 < len__17433__auto___25716)){
args25712.push((arguments[i__17434__auto___25717]));

var G__25718 = (i__17434__auto___25717 + (1));
i__17434__auto___25717 = G__25718;
continue;
} else {
}
break;
}

var G__25714 = args25712.length;
switch (G__25714) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25712.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
var p = om.next.parent.call(null,x);
var tx__$1 = tx;
while(true){
if((p == null)){
return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),x,null,tx__$1);
} else {
var tx__$2 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p)))?om.next.tx_intercept.call(null,p,tx__$1):tx__$1);
var G__25720 = om.next.parent.call(null,p);
var G__25721 = tx__$2;
p = G__25720;
tx__$1 = G__25721;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__25722){
var map__25725 = p__25722;
var map__25725__$1 = ((((!((map__25725 == null)))?((((map__25725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25725):map__25725);
var opts = map__25725__$1;
var read = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__25733 = x;
var G__25733__$1 = ((om.next.component_QMARK_.call(null,x))?cljs.core.type.call(null,G__25733):G__25733);
return G__25733__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,selector,path,classpath){
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));
} else {
}

if(cljs.core.vector_QMARK_.call(null,selector)){
var map__25788 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var props = cljs.core.get.call(null,map__25788__$1,false);
var joins = cljs.core.get.call(null,map__25788__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25727_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25727_SHARP_,cljs.core.zipmap.call(null,props,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__25790 = cljs.core.seq.call(null,joins);
var chunk__25791 = null;
var count__25792 = (0);
var i__25793 = (0);
while(true){
if((i__25793 < count__25792)){
var join = cljs.core._nth.call(null,chunk__25791,i__25793);
var vec__25794_25812 = om.next.join_value.call(null,join);
var prop_25813 = cljs.core.nth.call(null,vec__25794_25812,(0),null);
var selector_SINGLEQUOTE__25814 = cljs.core.nth.call(null,vec__25794_25812,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__25790,chunk__25791,count__25792,i__25793,vec__25794_25812,prop_25813,selector_SINGLEQUOTE__25814,join,map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25728_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25728_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_25813,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__25790,chunk__25791,count__25792,i__25793,vec__25794_25812,prop_25813,selector_SINGLEQUOTE__25814,join,map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__25815 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__25814));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25815,selector_SINGLEQUOTE__25814,cljs.core.conj.call(null,path,prop_25813),(function (){var G__25795 = classpath;
var G__25795__$1 = (cljs.core.truth_(class_SINGLEQUOTE__25815)?cljs.core.conj.call(null,G__25795,class_SINGLEQUOTE__25815):G__25795);
return G__25795__$1;
})());

var G__25816 = seq__25790;
var G__25817 = chunk__25791;
var G__25818 = count__25792;
var G__25819 = (i__25793 + (1));
seq__25790 = G__25816;
chunk__25791 = G__25817;
count__25792 = G__25818;
i__25793 = G__25819;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25790);
if(temp__4425__auto__){
var seq__25790__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25790__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__25790__$1);
var G__25820 = cljs.core.chunk_rest.call(null,seq__25790__$1);
var G__25821 = c__17178__auto__;
var G__25822 = cljs.core.count.call(null,c__17178__auto__);
var G__25823 = (0);
seq__25790 = G__25820;
chunk__25791 = G__25821;
count__25792 = G__25822;
i__25793 = G__25823;
continue;
} else {
var join = cljs.core.first.call(null,seq__25790__$1);
var vec__25796_25824 = om.next.join_value.call(null,join);
var prop_25825 = cljs.core.nth.call(null,vec__25796_25824,(0),null);
var selector_SINGLEQUOTE__25826 = cljs.core.nth.call(null,vec__25796_25824,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__25790,chunk__25791,count__25792,i__25793,vec__25796_25824,prop_25825,selector_SINGLEQUOTE__25826,join,seq__25790__$1,temp__4425__auto__,map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25728_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25728_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_25825,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__25790,chunk__25791,count__25792,i__25793,vec__25796_25824,prop_25825,selector_SINGLEQUOTE__25826,join,seq__25790__$1,temp__4425__auto__,map__25788,map__25788__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__25827 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__25826));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25827,selector_SINGLEQUOTE__25826,cljs.core.conj.call(null,path,prop_25825),(function (){var G__25797 = classpath;
var G__25797__$1 = (cljs.core.truth_(class_SINGLEQUOTE__25827)?cljs.core.conj.call(null,G__25797,class_SINGLEQUOTE__25827):G__25797);
return G__25797__$1;
})());

var G__25828 = cljs.core.next.call(null,seq__25790__$1);
var G__25829 = null;
var G__25830 = (0);
var G__25831 = (0);
seq__25790 = G__25828;
chunk__25791 = G__25829;
count__25792 = G__25830;
i__25793 = G__25831;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__25798 = cljs.core.seq.call(null,selector);
var chunk__25799 = null;
var count__25800 = (0);
var i__25801 = (0);
while(true){
if((i__25801 < count__25800)){
var vec__25802 = cljs.core._nth.call(null,chunk__25799,i__25801);
var k = cljs.core.nth.call(null,vec__25802,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25802,(1),null);
var class_SINGLEQUOTE__25832 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25832,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__25803 = classpath;
var G__25803__$1 = (cljs.core.truth_(class_SINGLEQUOTE__25832)?cljs.core.conj.call(null,G__25803,class_SINGLEQUOTE__25832):G__25803);
return G__25803__$1;
})());

var G__25833 = seq__25798;
var G__25834 = chunk__25799;
var G__25835 = count__25800;
var G__25836 = (i__25801 + (1));
seq__25798 = G__25833;
chunk__25799 = G__25834;
count__25800 = G__25835;
i__25801 = G__25836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25798);
if(temp__4425__auto__){
var seq__25798__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25798__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__25798__$1);
var G__25837 = cljs.core.chunk_rest.call(null,seq__25798__$1);
var G__25838 = c__17178__auto__;
var G__25839 = cljs.core.count.call(null,c__17178__auto__);
var G__25840 = (0);
seq__25798 = G__25837;
chunk__25799 = G__25838;
count__25800 = G__25839;
i__25801 = G__25840;
continue;
} else {
var vec__25804 = cljs.core.first.call(null,seq__25798__$1);
var k = cljs.core.nth.call(null,vec__25804,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25804,(1),null);
var class_SINGLEQUOTE__25841 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25841,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__25805 = classpath;
var G__25805__$1 = (cljs.core.truth_(class_SINGLEQUOTE__25841)?cljs.core.conj.call(null,G__25805,class_SINGLEQUOTE__25841):G__25805);
return G__25805__$1;
})());

var G__25842 = cljs.core.next.call(null,seq__25798__$1);
var G__25843 = null;
var G__25844 = (0);
var G__25845 = (0);
seq__25798 = G__25842;
chunk__25799 = G__25843;
count__25800 = G__25844;
i__25801 = G__25845;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__25806 = indexes__$2;
var G__25806__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__25806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__25806);
return G__25806__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__25807 = indexes__$2;
var G__25807__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__25807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c):G__25807);
return G__25807__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__25729_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__25729_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16989__auto__,k__16990__auto__){
var self__ = this;
var this__16989__auto____$1 = this;
return cljs.core._lookup.call(null,this__16989__auto____$1,k__16990__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16991__auto__,k25731,else__16992__auto__){
var self__ = this;
var this__16991__auto____$1 = this;
var G__25808 = (((k25731 instanceof cljs.core.Keyword))?k25731.fqn:null);
switch (G__25808) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25731,else__16992__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17003__auto__,writer__17004__auto__,opts__17005__auto__){
var self__ = this;
var this__17003__auto____$1 = this;
var pr_pair__17006__auto__ = ((function (this__17003__auto____$1){
return (function (keyval__17007__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17004__auto__,cljs.core.pr_writer,""," ","",opts__17005__auto__,keyval__17007__auto__);
});})(this__17003__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17004__auto__,pr_pair__17006__auto__,"#om.next.Indexer{",", ","}",opts__17005__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25730){
var self__ = this;
var G__25730__$1 = this;
return (new cljs.core.RecordIter((0),G__25730__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16987__auto__){
var self__ = this;
var this__16987__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16983__auto__){
var self__ = this;
var this__16983__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16993__auto__){
var self__ = this;
var this__16993__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16984__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16985__auto__,other__16986__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16986__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16985__auto____$1.constructor === other__16986__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16985__auto____$1,other__16986__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16998__auto__,k__16999__auto__){
var self__ = this;
var this__16998__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__16999__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16998__auto____$1),self__.__meta),k__16999__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16999__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16996__auto__,k__16997__auto__,G__25730){
var self__ = this;
var this__16996__auto____$1 = this;
var pred__25809 = cljs.core.keyword_identical_QMARK_;
var expr__25810 = k__16997__auto__;
if(cljs.core.truth_(pred__25809.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__25810))){
return (new om.next.Indexer(G__25730,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16997__auto__,G__25730),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17001__auto__){
var self__ = this;
var this__17001__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16988__auto__,G__25730){
var self__ = this;
var this__16988__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__25730,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16994__auto__,entry__16995__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16995__auto__)){
return cljs.core._assoc.call(null,this__16994__auto____$1,cljs.core._nth.call(null,entry__16995__auto__,(0)),cljs.core._nth.call(null,entry__16995__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16994__auto____$1,entry__16995__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__17023__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__17023__auto__,writer__17024__auto__){
return cljs.core._write.call(null,writer__17024__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__25732){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__25732),null,cljs.core.dissoc.call(null,G__25732,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args25848 = [];
var len__17433__auto___25853 = arguments.length;
var i__17434__auto___25854 = (0);
while(true){
if((i__17434__auto___25854 < len__17433__auto___25853)){
args25848.push((arguments[i__17434__auto___25854]));

var G__25855 = (i__17434__auto___25854 + (1));
i__17434__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var G__25850 = args25848.length;
switch (G__25850) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25848.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,path){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),path);
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__25847_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__25847_SHARP_)));
});})(path_SINGLEQUOTE_,cp,qs))
,qs)),om.next.get_query.call(null,component));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$)))){
return Object.create(class$.prototype);
} else {
return class$;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(selector,data,refs){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),selector)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,selector)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector)));
var ref = om.next.ident.call(null,class$,data);
return om$next$normalize_STAR_.call(null,cljs.core.get.call(null,selector,cljs.core.first.call(null,ref)),data,refs);
} else {
var q = cljs.core.seq.call(null,selector);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((q == null))){
var node = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.next.join_QMARK_.call(null,node))){
var vec__25864 = om.next.join_value.call(null,node);
var k = cljs.core.nth.call(null,vec__25864,(0),null);
var sel = cljs.core.nth.call(null,vec__25864,(1),null);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel)));
var v = cljs.core.get.call(null,data,k);
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel,v,refs);
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__25867 = cljs.core.next.call(null,q);
var G__25868 = cljs.core.assoc.call(null,ret,k,i);
q = G__25867;
ret = G__25868;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__25864,k,sel,class$,v,node){
return (function (p1__25859_SHARP_){
return om$next$normalize_STAR_.call(null,sel,p1__25859_SHARP_,refs);
});})(q,ret,vec__25864,k,sel,class$,v,node))
),v);
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__25864,k,sel,class$,v,node){
return (function (p1__25860_SHARP_){
return om.next.ident.call(null,class$,p1__25860_SHARP_);
});})(q,ret,xs,vec__25864,k,sel,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel)){
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,xs,is,vec__25864,k,sel,class$,v,node){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,xs,is,vec__25864,k,sel,class$,v,node))
);
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,xs,is,vec__25864,k,sel,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,xs,is,vec__25864,k,sel,class$,v,node){
return (function (ret__$1,p__25865){
var vec__25866 = p__25865;
var i = cljs.core.nth.call(null,vec__25866,(0),null);
var x = cljs.core.nth.call(null,vec__25866,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,xs,is,vec__25864,k,sel,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,xs,is,vec__25864,k,sel,class$,v,node))
);
}

var G__25869 = cljs.core.next.call(null,q);
var G__25870 = cljs.core.assoc.call(null,ret,k,is);
q = G__25869;
ret = G__25870;
continue;
} else {
if((v == null)){
var G__25871 = cljs.core.next.call(null,q);
var G__25872 = ret;
q = G__25871;
ret = G__25872;
continue;
} else {
var G__25873 = cljs.core.next.call(null,q);
var G__25874 = cljs.core.assoc.call(null,ret,k,v);
q = G__25873;
ret = G__25874;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.first.call(null,node):node);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__25875 = cljs.core.next.call(null,q);
var G__25876 = ret;
q = G__25875;
ret = G__25876;
continue;
} else {
var G__25877 = cljs.core.next.call(null,q);
var G__25878 = cljs.core.assoc.call(null,ret,k,v);
q = G__25877;
ret = G__25878;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
});
/**
 * Given a Om component class or instance and some data, use the component's
 * query to transform the data into normal form. If merge-ref option is true,
 * will return refs in the result instead of as metadata.
 */
om.next.normalize = (function om$next$normalize(var_args){
var args25879 = [];
var len__17433__auto___25882 = arguments.length;
var i__17434__auto___25883 = (0);
while(true){
if((i__17434__auto___25883 < len__17433__auto___25882)){
args25879.push((arguments[i__17434__auto___25883]));

var G__25884 = (i__17434__auto___25883 + (1));
i__17434__auto___25883 = G__25884;
continue;
} else {
}
break;
}

var G__25881 = args25879.length;
switch (G__25881) {
case 2:
return om.next.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.normalize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25879.length)].join('')));

}
});

om.next.normalize.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.normalize.call(null,x,data,false);
});

om.next.normalize.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = om.next.normalize_STAR_.call(null,om.next.get_query.call(null,x),data,refs);
if(merge_refs){
return cljs.core.merge.call(null,ret,cljs.core.deref.call(null,refs));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.normalize.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__25889 = cljs.core.group_by.call(null,(function (p1__25886_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__25886_SHARP_));
}),res);
var map__25889__$1 = ((((!((map__25889 == null)))?((((map__25889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25889):map__25889);
var refs = cljs.core.get.call(null,map__25889__$1,true);
var rest = cljs.core.get.call(null,map__25889__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a selector, normalized data, and the normalized application state
 * return the denormalized data.
 */
om.next.denormalize = (function om$next$denormalize(selector,data,refs){
if(cljs.core.vector_QMARK_.call(null,data)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__25891_SHARP_){
return om$next$denormalize.call(null,selector,cljs.core.get_in.call(null,refs,p1__25891_SHARP_),refs);
})),data);
} else {
var map__25895 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__25895__$1 = ((((!((map__25895 == null)))?((((map__25895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25895):map__25895);
var props = cljs.core.get.call(null,map__25895__$1,false);
var joins = cljs.core.get.call(null,map__25895__$1,true);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__25897 = om.next.join_value.call(null,join);
var key = cljs.core.nth.call(null,vec__25897,(0),null);
var sel = cljs.core.nth.call(null,vec__25897,(1),null);
var v = cljs.core.get.call(null,data,key);
if(!(om.next.ref_QMARK_.call(null,v))){
var G__25898 = cljs.core.next.call(null,joins__$1);
var G__25899 = cljs.core.assoc.call(null,ret,key,om$next$denormalize.call(null,sel,v,refs));
joins__$1 = G__25898;
ret = G__25899;
continue;
} else {
var G__25900 = cljs.core.next.call(null,joins__$1);
var G__25901 = cljs.core.assoc.call(null,ret,key,om$next$denormalize.call(null,sel,cljs.core.get_in.call(null,refs,v),refs));
joins__$1 = G__25900;
ret = G__25901;
continue;
}
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data,props),ret);
}
break;
}
}
});
om.next.queue_calls_BANG_ = (function om$next$queue_calls_BANG_(reconciler,res){
return om.next.protocols.queue_BANG_.call(null,reconciler,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__25910 = config;
var map__25910__$1 = ((((!((map__25910 == null)))?((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25910):map__25910);
var merge_ref = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403));
var indexer = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var step = ((function (map__25910,map__25910__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__25915){
var vec__25917 = p__25915;
var ref = cljs.core.nth.call(null,vec__25917,(0),null);
var props = cljs.core.nth.call(null,vec__25917,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any.call(null,indexer,ref);
var props_SINGLEQUOTE_ = om.next.normalize.call(null,c,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props);
}
});})(map__25910,map__25910__$1,merge_ref,indexer))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,res){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
var vec__25920 = om.next.sift_refs.call(null,res);
var refs = cljs.core.nth.call(null,vec__25920,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25920,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.normalize.call(null,root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config),((function (config,root,vec__25920,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1){
return (function (p1__25918_SHARP_){
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs.call(null,p1__25918_SHARP_,config,refs),res_SINGLEQUOTE___$1);
});})(config,root,vec__25920,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1))
);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
om.next.queue_calls_BANG_.call(null,reconciler,delta);

return om.next.merge_novelty_BANG_.call(null,reconciler,delta);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16989__auto__,k__16990__auto__){
var self__ = this;
var this__16989__auto____$1 = this;
return cljs.core._lookup.call(null,this__16989__auto____$1,k__16990__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16991__auto__,k25928,else__16992__auto__){
var self__ = this;
var this__16991__auto____$1 = this;
var G__25930 = (((k25928 instanceof cljs.core.Keyword))?k25928.fqn:null);
switch (G__25930) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25928,else__16992__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1){
return (function (state__$1){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});})(___$1))
);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__25926_SHARP_){
om.next.queue_calls_BANG_.call(null,this$__$1,p1__25926_SHARP_);

return om.next.merge_novelty_BANG_.call(null,this$__$1,p1__25926_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_.call(null,q)){
new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
} else {
var cs_25945 = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__25923_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__25923_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__25924_SHARP_,p2__25925_SHARP_){
return cljs.core.into.call(null,p1__25924_SHARP_,p2__25925_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__25931_25946 = self__.config;
var map__25931_25947__$1 = ((((!((map__25931_25946 == null)))?((((map__25931_25946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25931_25946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25931_25946):map__25931_25946);
var ui__GT_props_25948 = cljs.core.get.call(null,map__25931_25947__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env_25949 = om.next.to_env.call(null,self__.config);
var seq__25933_25950 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_25945));
var chunk__25934_25951 = null;
var count__25935_25952 = (0);
var i__25936_25953 = (0);
while(true){
if((i__25936_25953 < count__25935_25952)){
var c_25954 = cljs.core._nth.call(null,chunk__25934_25951,i__25936_25953);
var next_props_25955 = ui__GT_props_25948.call(null,env_25949,c_25954);
if(cljs.core.truth_((function (){var and__16363__auto__ = om.next.should_update_QMARK_.call(null,c_25954,next_props_25955,om.next.get_state.call(null,c_25954));
if(cljs.core.truth_(and__16363__auto__)){
return om.next.mounted_QMARK_.call(null,c_25954);
} else {
return and__16363__auto__;
}
})())){
if(!((next_props_25955 == null))){
om.next.update_component_BANG_.call(null,c_25954,next_props_25955);
} else {
c_25954.forceUpdate();
}
} else {
}

var G__25956 = seq__25933_25950;
var G__25957 = chunk__25934_25951;
var G__25958 = count__25935_25952;
var G__25959 = (i__25936_25953 + (1));
seq__25933_25950 = G__25956;
chunk__25934_25951 = G__25957;
count__25935_25952 = G__25958;
i__25936_25953 = G__25959;
continue;
} else {
var temp__4425__auto___25960 = cljs.core.seq.call(null,seq__25933_25950);
if(temp__4425__auto___25960){
var seq__25933_25961__$1 = temp__4425__auto___25960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25933_25961__$1)){
var c__17178__auto___25962 = cljs.core.chunk_first.call(null,seq__25933_25961__$1);
var G__25963 = cljs.core.chunk_rest.call(null,seq__25933_25961__$1);
var G__25964 = c__17178__auto___25962;
var G__25965 = cljs.core.count.call(null,c__17178__auto___25962);
var G__25966 = (0);
seq__25933_25950 = G__25963;
chunk__25934_25951 = G__25964;
count__25935_25952 = G__25965;
i__25936_25953 = G__25966;
continue;
} else {
var c_25967 = cljs.core.first.call(null,seq__25933_25961__$1);
var next_props_25968 = ui__GT_props_25948.call(null,env_25949,c_25967);
if(cljs.core.truth_((function (){var and__16363__auto__ = om.next.should_update_QMARK_.call(null,c_25967,next_props_25968,om.next.get_state.call(null,c_25967));
if(cljs.core.truth_(and__16363__auto__)){
return om.next.mounted_QMARK_.call(null,c_25967);
} else {
return and__16363__auto__;
}
})())){
if(!((next_props_25968 == null))){
om.next.update_component_BANG_.call(null,c_25967,next_props_25968);
} else {
c_25967.forceUpdate();
}
} else {
}

var G__25969 = cljs.core.next.call(null,seq__25933_25961__$1);
var G__25970 = null;
var G__25971 = (0);
var G__25972 = (0);
seq__25933_25950 = G__25969;
chunk__25934_25951 = G__25970;
count__25935_25952 = G__25971;
i__25936_25953 = G__25972;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class))){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__16363__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__16363__auto__;
}
})())){
var new_state_25973 = om.next.normalize.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_25974 = cljs.core.meta.call(null,new_state_25973);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_25973,refs_25974));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);

om.next.protocols.queue_BANG_.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null));
} else {
}

var renderf = ((function (ret,rctor,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_25938 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_25939 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ReactDOM.render(rctor.call(null,data),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25939;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25938;
}});})(ret,rctor,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__16375__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
var snds = om.next.gather_sends.call(null,env,sel,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,v)){
} else {
renderf.call(null,v);
}

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto__)){
var send = temp__4425__auto__;
return send.call(null,snds,((function (send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1){
return (function (p1__25921_SHARP_){
om.next.merge_novelty_BANG_.call(null,this$__$1,p1__25921_SHARP_);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel));
});})(send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1))
);
} else {
return null;
}
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target);

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (p1__25922_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__25922_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,this$__$1))
);

return ReactDOM.unmountComponentAtNode(target);
});})(renderf,parsef,ret,rctor,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (_,___$1,___$2,___$3){
return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,this$__$1))
);

parsef.call(null);

return ret;
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root))){
return om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17003__auto__,writer__17004__auto__,opts__17005__auto__){
var self__ = this;
var this__17003__auto____$1 = this;
var pr_pair__17006__auto__ = ((function (this__17003__auto____$1){
return (function (keyval__17007__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17004__auto__,cljs.core.pr_writer,""," ","",opts__17005__auto__,keyval__17007__auto__);
});})(this__17003__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17004__auto__,pr_pair__17006__auto__,"#om.next.Reconciler{",", ","}",opts__17005__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25927){
var self__ = this;
var G__25927__$1 = this;
return (new cljs.core.RecordIter((0),G__25927__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16987__auto__){
var self__ = this;
var this__16987__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16983__auto__){
var self__ = this;
var this__16983__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16993__auto__){
var self__ = this;
var this__16993__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16984__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16985__auto__,other__16986__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16986__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16985__auto____$1.constructor === other__16986__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16985__auto____$1,other__16986__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16998__auto__,k__16999__auto__){
var self__ = this;
var this__16998__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__16999__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16998__auto____$1),self__.__meta),k__16999__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16999__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16996__auto__,k__16997__auto__,G__25927){
var self__ = this;
var this__16996__auto____$1 = this;
var pred__25941 = cljs.core.keyword_identical_QMARK_;
var expr__25942 = k__16997__auto__;
if(cljs.core.truth_(pred__25941.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__25942))){
return (new om.next.Reconciler(G__25927,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25941.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__25942))){
return (new om.next.Reconciler(self__.config,G__25927,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16997__auto__,G__25927),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17001__auto__){
var self__ = this;
var this__17001__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16988__auto__,G__25927){
var self__ = this;
var this__16988__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__25927,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16994__auto__,entry__16995__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16995__auto__)){
return cljs.core._assoc.call(null,this__16994__auto____$1,cljs.core._nth.call(null,entry__16995__auto__,(0)),cljs.core._nth.call(null,entry__16995__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16994__auto____$1,entry__16995__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__17023__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__17023__auto__,writer__17024__auto__){
return cljs.core._write.call(null,writer__17024__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__25929){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__25929),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25929),null,cljs.core.dissoc.call(null,G__25929,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__25975,c){
var map__25978 = p__25975;
var map__25978__$1 = ((((!((map__25978 == null)))?((((map__25978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25978):map__25978);
var env = map__25978__$1;
var parser = cljs.core.get.call(null,map__25978__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var path = om.next.path.call(null,c);
var fq = om.next.full_query.call(null,c,path);
if((fq == null)){
return null;
} else {
return cljs.core.get_in.call(null,parser.call(null,env,fq),path);
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
/**
 * Construct a reconciler from a configuration map, the following options
 * are required:
 * 
 * :state   - the application state, must be IAtom.
 * :parser  - the parser to be used
 * :send    - required only if the parser will return a non-empty value when
 *            run against the supplied :remotes. send is a function of two
 *            arguments, the map of remote expressions keyed by remote target
 *            and a callback which should be invoked with the result from each
 *            remote target. Note this means the callback can be invoked
 *            multiple times to support parallel fetching and incremental
 *            loading if desired.
 * :remotes - a vector of keywords representing remote services which can
 *            evaluate query expressions. Defaults to [:remote]
 */
om.next.reconciler = (function om$next$reconciler(p__25984){
var map__25988 = p__25984;
var map__25988__$1 = ((((!((map__25988 == null)))?((((map__25988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25988):map__25988);
var config = map__25988__$1;
var normalize = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var merge_sends = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__25988,map__25988__$1,config,normalize){
return (function (p1__25980_SHARP_,p2__25981_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25980_SHARP_,p2__25981_SHARP_);
});})(map__25988,map__25988__$1,config,normalize))
);
var remotes = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var history = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var merge_ref = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),om.next.default_merge_ref);
var state = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui__GT_props = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var send = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (map__25988,map__25988__$1,config,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,send){
return (function (p1__25982_SHARP_,p2__25983_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.merge,p1__25982_SHARP_,p2__25983_SHARP_);
});})(map__25988,map__25988__$1,config,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,send))
);
var shared = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__25988,map__25988__$1,config,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__25988,map__25988__$1,config,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[merge_sends,remotes,om.next.cache.cache.call(null,history),merge_ref,state_SINGLEQUOTE_,parser,ui__GT_props,idxr,send,shared,merge_tree,optimize,(function (){var or__16375__auto__ = !(norm_QMARK_);
if(or__16375__auto__){
return or__16375__auto__;
} else {
return normalize;
}
})()]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});

//# sourceMappingURL=next.js.map