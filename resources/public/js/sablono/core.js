// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20848__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20847 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20847,(0),null);
var body = cljs.core.nthnext.call(null,vec__20847,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20849__i = 0, G__20849__a = new Array(arguments.length -  0);
while (G__20849__i < G__20849__a.length) {G__20849__a[G__20849__i] = arguments[G__20849__i + 0]; ++G__20849__i;}
  args = new cljs.core.IndexedSeq(G__20849__a,0);
} 
return G__20848__delegate.call(this,args);};
G__20848.cljs$lang$maxFixedArity = 0;
G__20848.cljs$lang$applyTo = (function (arglist__20850){
var args = cljs.core.seq(arglist__20850);
return G__20848__delegate(args);
});
G__20848.cljs$core$IFn$_invoke$arity$variadic = G__20848__delegate;
return G__20848;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17147__auto__ = (function sablono$core$update_arglists_$_iter__20855(s__20856){
return (new cljs.core.LazySeq(null,(function (){
var s__20856__$1 = s__20856;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20856__$1);
if(temp__4425__auto__){
var s__20856__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20856__$2)){
var c__17145__auto__ = cljs.core.chunk_first.call(null,s__20856__$2);
var size__17146__auto__ = cljs.core.count.call(null,c__17145__auto__);
var b__20858 = cljs.core.chunk_buffer.call(null,size__17146__auto__);
if((function (){var i__20857 = (0);
while(true){
if((i__20857 < size__17146__auto__)){
var args = cljs.core._nth.call(null,c__17145__auto__,i__20857);
cljs.core.chunk_append.call(null,b__20858,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20859 = (i__20857 + (1));
i__20857 = G__20859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20858),sablono$core$update_arglists_$_iter__20855.call(null,cljs.core.chunk_rest.call(null,s__20856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20858),null);
}
} else {
var args = cljs.core.first.call(null,s__20856__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20855.call(null,cljs.core.rest.call(null,s__20856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17147__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17440__auto__ = [];
var len__17433__auto___20865 = arguments.length;
var i__17434__auto___20866 = (0);
while(true){
if((i__17434__auto___20866 < len__17433__auto___20865)){
args__17440__auto__.push((arguments[i__17434__auto___20866]));

var G__20867 = (i__17434__auto___20866 + (1));
i__17434__auto___20866 = G__20867;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((0) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17441__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17147__auto__ = (function sablono$core$iter__20861(s__20862){
return (new cljs.core.LazySeq(null,(function (){
var s__20862__$1 = s__20862;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20862__$1);
if(temp__4425__auto__){
var s__20862__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20862__$2)){
var c__17145__auto__ = cljs.core.chunk_first.call(null,s__20862__$2);
var size__17146__auto__ = cljs.core.count.call(null,c__17145__auto__);
var b__20864 = cljs.core.chunk_buffer.call(null,size__17146__auto__);
if((function (){var i__20863 = (0);
while(true){
if((i__20863 < size__17146__auto__)){
var style = cljs.core._nth.call(null,c__17145__auto__,i__20863);
cljs.core.chunk_append.call(null,b__20864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20868 = (i__20863 + (1));
i__20863 = G__20868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20864),sablono$core$iter__20861.call(null,cljs.core.chunk_rest.call(null,s__20862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20864),null);
}
} else {
var style = cljs.core.first.call(null,s__20862__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20861.call(null,cljs.core.rest.call(null,s__20862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17147__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20860){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20860));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20869 = (function sablono$core$link_to20869(var_args){
var args__17440__auto__ = [];
var len__17433__auto___20872 = arguments.length;
var i__17434__auto___20873 = (0);
while(true){
if((i__17434__auto___20873 < len__17433__auto___20872)){
args__17440__auto__.push((arguments[i__17434__auto___20873]));

var G__20874 = (i__17434__auto___20873 + (1));
i__17434__auto___20873 = G__20874;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return sablono.core.link_to20869.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

sablono.core.link_to20869.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20869.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20869.cljs$lang$applyTo = (function (seq20870){
var G__20871 = cljs.core.first.call(null,seq20870);
var seq20870__$1 = cljs.core.next.call(null,seq20870);
return sablono.core.link_to20869.cljs$core$IFn$_invoke$arity$variadic(G__20871,seq20870__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20869);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20875 = (function sablono$core$mail_to20875(var_args){
var args__17440__auto__ = [];
var len__17433__auto___20880 = arguments.length;
var i__17434__auto___20881 = (0);
while(true){
if((i__17434__auto___20881 < len__17433__auto___20880)){
args__17440__auto__.push((arguments[i__17434__auto___20881]));

var G__20882 = (i__17434__auto___20881 + (1));
i__17434__auto___20881 = G__20882;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20875.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

sablono.core.mail_to20875.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20878){
var vec__20879 = p__20878;
var content = cljs.core.nth.call(null,vec__20879,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16375__auto__ = content;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20875.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20875.cljs$lang$applyTo = (function (seq20876){
var G__20877 = cljs.core.first.call(null,seq20876);
var seq20876__$1 = cljs.core.next.call(null,seq20876);
return sablono.core.mail_to20875.cljs$core$IFn$_invoke$arity$variadic(G__20877,seq20876__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20875);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20883 = (function sablono$core$unordered_list20883(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17147__auto__ = (function sablono$core$unordered_list20883_$_iter__20888(s__20889){
return (new cljs.core.LazySeq(null,(function (){
var s__20889__$1 = s__20889;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20889__$1);
if(temp__4425__auto__){
var s__20889__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20889__$2)){
var c__17145__auto__ = cljs.core.chunk_first.call(null,s__20889__$2);
var size__17146__auto__ = cljs.core.count.call(null,c__17145__auto__);
var b__20891 = cljs.core.chunk_buffer.call(null,size__17146__auto__);
if((function (){var i__20890 = (0);
while(true){
if((i__20890 < size__17146__auto__)){
var x = cljs.core._nth.call(null,c__17145__auto__,i__20890);
cljs.core.chunk_append.call(null,b__20891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20892 = (i__20890 + (1));
i__20890 = G__20892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20891),sablono$core$unordered_list20883_$_iter__20888.call(null,cljs.core.chunk_rest.call(null,s__20889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20891),null);
}
} else {
var x = cljs.core.first.call(null,s__20889__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20883_$_iter__20888.call(null,cljs.core.rest.call(null,s__20889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17147__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20883);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20893 = (function sablono$core$ordered_list20893(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17147__auto__ = (function sablono$core$ordered_list20893_$_iter__20898(s__20899){
return (new cljs.core.LazySeq(null,(function (){
var s__20899__$1 = s__20899;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20899__$1);
if(temp__4425__auto__){
var s__20899__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20899__$2)){
var c__17145__auto__ = cljs.core.chunk_first.call(null,s__20899__$2);
var size__17146__auto__ = cljs.core.count.call(null,c__17145__auto__);
var b__20901 = cljs.core.chunk_buffer.call(null,size__17146__auto__);
if((function (){var i__20900 = (0);
while(true){
if((i__20900 < size__17146__auto__)){
var x = cljs.core._nth.call(null,c__17145__auto__,i__20900);
cljs.core.chunk_append.call(null,b__20901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20902 = (i__20900 + (1));
i__20900 = G__20902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20901),sablono$core$ordered_list20893_$_iter__20898.call(null,cljs.core.chunk_rest.call(null,s__20899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20901),null);
}
} else {
var x = cljs.core.first.call(null,s__20899__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20893_$_iter__20898.call(null,cljs.core.rest.call(null,s__20899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17147__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20893);
/**
 * Create an image element.
 */
sablono.core.image20903 = (function sablono$core$image20903(var_args){
var args20904 = [];
var len__17433__auto___20907 = arguments.length;
var i__17434__auto___20908 = (0);
while(true){
if((i__17434__auto___20908 < len__17433__auto___20907)){
args20904.push((arguments[i__17434__auto___20908]));

var G__20909 = (i__17434__auto___20908 + (1));
i__17434__auto___20908 = G__20909;
continue;
} else {
}
break;
}

var G__20906 = args20904.length;
switch (G__20906) {
case 1:
return sablono.core.image20903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20904.length)].join('')));

}
});

sablono.core.image20903.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20903.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20903.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20903);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20911_SHARP_,p2__20912_SHARP_){
return [cljs.core.str(p1__20911_SHARP_),cljs.core.str("["),cljs.core.str(p2__20912_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20913_SHARP_,p2__20914_SHARP_){
return [cljs.core.str(p1__20913_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20914_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20915 = (function sablono$core$color_field20915(var_args){
var args20916 = [];
var len__17433__auto___20983 = arguments.length;
var i__17434__auto___20984 = (0);
while(true){
if((i__17434__auto___20984 < len__17433__auto___20983)){
args20916.push((arguments[i__17434__auto___20984]));

var G__20985 = (i__17434__auto___20984 + (1));
i__17434__auto___20984 = G__20985;
continue;
} else {
}
break;
}

var G__20918 = args20916.length;
switch (G__20918) {
case 1:
return sablono.core.color_field20915.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20916.length)].join('')));

}
});

sablono.core.color_field20915.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.color_field20915.call(null,name__19561__auto__,null);
});

sablono.core.color_field20915.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.color_field20915.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20915);

/**
 * Creates a date input field.
 */
sablono.core.date_field20919 = (function sablono$core$date_field20919(var_args){
var args20920 = [];
var len__17433__auto___20987 = arguments.length;
var i__17434__auto___20988 = (0);
while(true){
if((i__17434__auto___20988 < len__17433__auto___20987)){
args20920.push((arguments[i__17434__auto___20988]));

var G__20989 = (i__17434__auto___20988 + (1));
i__17434__auto___20988 = G__20989;
continue;
} else {
}
break;
}

var G__20922 = args20920.length;
switch (G__20922) {
case 1:
return sablono.core.date_field20919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20920.length)].join('')));

}
});

sablono.core.date_field20919.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.date_field20919.call(null,name__19561__auto__,null);
});

sablono.core.date_field20919.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.date_field20919.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20919);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20923 = (function sablono$core$datetime_field20923(var_args){
var args20924 = [];
var len__17433__auto___20991 = arguments.length;
var i__17434__auto___20992 = (0);
while(true){
if((i__17434__auto___20992 < len__17433__auto___20991)){
args20924.push((arguments[i__17434__auto___20992]));

var G__20993 = (i__17434__auto___20992 + (1));
i__17434__auto___20992 = G__20993;
continue;
} else {
}
break;
}

var G__20926 = args20924.length;
switch (G__20926) {
case 1:
return sablono.core.datetime_field20923.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20923.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20924.length)].join('')));

}
});

sablono.core.datetime_field20923.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.datetime_field20923.call(null,name__19561__auto__,null);
});

sablono.core.datetime_field20923.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.datetime_field20923.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20923);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20927 = (function sablono$core$datetime_local_field20927(var_args){
var args20928 = [];
var len__17433__auto___20995 = arguments.length;
var i__17434__auto___20996 = (0);
while(true){
if((i__17434__auto___20996 < len__17433__auto___20995)){
args20928.push((arguments[i__17434__auto___20996]));

var G__20997 = (i__17434__auto___20996 + (1));
i__17434__auto___20996 = G__20997;
continue;
} else {
}
break;
}

var G__20930 = args20928.length;
switch (G__20930) {
case 1:
return sablono.core.datetime_local_field20927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20928.length)].join('')));

}
});

sablono.core.datetime_local_field20927.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.datetime_local_field20927.call(null,name__19561__auto__,null);
});

sablono.core.datetime_local_field20927.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.datetime_local_field20927.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20927);

/**
 * Creates a email input field.
 */
sablono.core.email_field20931 = (function sablono$core$email_field20931(var_args){
var args20932 = [];
var len__17433__auto___20999 = arguments.length;
var i__17434__auto___21000 = (0);
while(true){
if((i__17434__auto___21000 < len__17433__auto___20999)){
args20932.push((arguments[i__17434__auto___21000]));

var G__21001 = (i__17434__auto___21000 + (1));
i__17434__auto___21000 = G__21001;
continue;
} else {
}
break;
}

var G__20934 = args20932.length;
switch (G__20934) {
case 1:
return sablono.core.email_field20931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20932.length)].join('')));

}
});

sablono.core.email_field20931.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.email_field20931.call(null,name__19561__auto__,null);
});

sablono.core.email_field20931.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.email_field20931.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20931);

/**
 * Creates a file input field.
 */
sablono.core.file_field20935 = (function sablono$core$file_field20935(var_args){
var args20936 = [];
var len__17433__auto___21003 = arguments.length;
var i__17434__auto___21004 = (0);
while(true){
if((i__17434__auto___21004 < len__17433__auto___21003)){
args20936.push((arguments[i__17434__auto___21004]));

var G__21005 = (i__17434__auto___21004 + (1));
i__17434__auto___21004 = G__21005;
continue;
} else {
}
break;
}

var G__20938 = args20936.length;
switch (G__20938) {
case 1:
return sablono.core.file_field20935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20936.length)].join('')));

}
});

sablono.core.file_field20935.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.file_field20935.call(null,name__19561__auto__,null);
});

sablono.core.file_field20935.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.file_field20935.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20935);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20939 = (function sablono$core$hidden_field20939(var_args){
var args20940 = [];
var len__17433__auto___21007 = arguments.length;
var i__17434__auto___21008 = (0);
while(true){
if((i__17434__auto___21008 < len__17433__auto___21007)){
args20940.push((arguments[i__17434__auto___21008]));

var G__21009 = (i__17434__auto___21008 + (1));
i__17434__auto___21008 = G__21009;
continue;
} else {
}
break;
}

var G__20942 = args20940.length;
switch (G__20942) {
case 1:
return sablono.core.hidden_field20939.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20939.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20940.length)].join('')));

}
});

sablono.core.hidden_field20939.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.hidden_field20939.call(null,name__19561__auto__,null);
});

sablono.core.hidden_field20939.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.hidden_field20939.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20939);

/**
 * Creates a month input field.
 */
sablono.core.month_field20943 = (function sablono$core$month_field20943(var_args){
var args20944 = [];
var len__17433__auto___21011 = arguments.length;
var i__17434__auto___21012 = (0);
while(true){
if((i__17434__auto___21012 < len__17433__auto___21011)){
args20944.push((arguments[i__17434__auto___21012]));

var G__21013 = (i__17434__auto___21012 + (1));
i__17434__auto___21012 = G__21013;
continue;
} else {
}
break;
}

var G__20946 = args20944.length;
switch (G__20946) {
case 1:
return sablono.core.month_field20943.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20943.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20944.length)].join('')));

}
});

sablono.core.month_field20943.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.month_field20943.call(null,name__19561__auto__,null);
});

sablono.core.month_field20943.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.month_field20943.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20943);

/**
 * Creates a number input field.
 */
sablono.core.number_field20947 = (function sablono$core$number_field20947(var_args){
var args20948 = [];
var len__17433__auto___21015 = arguments.length;
var i__17434__auto___21016 = (0);
while(true){
if((i__17434__auto___21016 < len__17433__auto___21015)){
args20948.push((arguments[i__17434__auto___21016]));

var G__21017 = (i__17434__auto___21016 + (1));
i__17434__auto___21016 = G__21017;
continue;
} else {
}
break;
}

var G__20950 = args20948.length;
switch (G__20950) {
case 1:
return sablono.core.number_field20947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20948.length)].join('')));

}
});

sablono.core.number_field20947.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.number_field20947.call(null,name__19561__auto__,null);
});

sablono.core.number_field20947.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.number_field20947.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20947);

/**
 * Creates a password input field.
 */
sablono.core.password_field20951 = (function sablono$core$password_field20951(var_args){
var args20952 = [];
var len__17433__auto___21019 = arguments.length;
var i__17434__auto___21020 = (0);
while(true){
if((i__17434__auto___21020 < len__17433__auto___21019)){
args20952.push((arguments[i__17434__auto___21020]));

var G__21021 = (i__17434__auto___21020 + (1));
i__17434__auto___21020 = G__21021;
continue;
} else {
}
break;
}

var G__20954 = args20952.length;
switch (G__20954) {
case 1:
return sablono.core.password_field20951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20952.length)].join('')));

}
});

sablono.core.password_field20951.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.password_field20951.call(null,name__19561__auto__,null);
});

sablono.core.password_field20951.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.password_field20951.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20951);

/**
 * Creates a range input field.
 */
sablono.core.range_field20955 = (function sablono$core$range_field20955(var_args){
var args20956 = [];
var len__17433__auto___21023 = arguments.length;
var i__17434__auto___21024 = (0);
while(true){
if((i__17434__auto___21024 < len__17433__auto___21023)){
args20956.push((arguments[i__17434__auto___21024]));

var G__21025 = (i__17434__auto___21024 + (1));
i__17434__auto___21024 = G__21025;
continue;
} else {
}
break;
}

var G__20958 = args20956.length;
switch (G__20958) {
case 1:
return sablono.core.range_field20955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20956.length)].join('')));

}
});

sablono.core.range_field20955.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.range_field20955.call(null,name__19561__auto__,null);
});

sablono.core.range_field20955.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.range_field20955.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20955);

/**
 * Creates a search input field.
 */
sablono.core.search_field20959 = (function sablono$core$search_field20959(var_args){
var args20960 = [];
var len__17433__auto___21027 = arguments.length;
var i__17434__auto___21028 = (0);
while(true){
if((i__17434__auto___21028 < len__17433__auto___21027)){
args20960.push((arguments[i__17434__auto___21028]));

var G__21029 = (i__17434__auto___21028 + (1));
i__17434__auto___21028 = G__21029;
continue;
} else {
}
break;
}

var G__20962 = args20960.length;
switch (G__20962) {
case 1:
return sablono.core.search_field20959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20960.length)].join('')));

}
});

sablono.core.search_field20959.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.search_field20959.call(null,name__19561__auto__,null);
});

sablono.core.search_field20959.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.search_field20959.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20959);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20963 = (function sablono$core$tel_field20963(var_args){
var args20964 = [];
var len__17433__auto___21031 = arguments.length;
var i__17434__auto___21032 = (0);
while(true){
if((i__17434__auto___21032 < len__17433__auto___21031)){
args20964.push((arguments[i__17434__auto___21032]));

var G__21033 = (i__17434__auto___21032 + (1));
i__17434__auto___21032 = G__21033;
continue;
} else {
}
break;
}

var G__20966 = args20964.length;
switch (G__20966) {
case 1:
return sablono.core.tel_field20963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20964.length)].join('')));

}
});

sablono.core.tel_field20963.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.tel_field20963.call(null,name__19561__auto__,null);
});

sablono.core.tel_field20963.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.tel_field20963.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20963);

/**
 * Creates a text input field.
 */
sablono.core.text_field20967 = (function sablono$core$text_field20967(var_args){
var args20968 = [];
var len__17433__auto___21035 = arguments.length;
var i__17434__auto___21036 = (0);
while(true){
if((i__17434__auto___21036 < len__17433__auto___21035)){
args20968.push((arguments[i__17434__auto___21036]));

var G__21037 = (i__17434__auto___21036 + (1));
i__17434__auto___21036 = G__21037;
continue;
} else {
}
break;
}

var G__20970 = args20968.length;
switch (G__20970) {
case 1:
return sablono.core.text_field20967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20968.length)].join('')));

}
});

sablono.core.text_field20967.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.text_field20967.call(null,name__19561__auto__,null);
});

sablono.core.text_field20967.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.text_field20967.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20967);

/**
 * Creates a time input field.
 */
sablono.core.time_field20971 = (function sablono$core$time_field20971(var_args){
var args20972 = [];
var len__17433__auto___21039 = arguments.length;
var i__17434__auto___21040 = (0);
while(true){
if((i__17434__auto___21040 < len__17433__auto___21039)){
args20972.push((arguments[i__17434__auto___21040]));

var G__21041 = (i__17434__auto___21040 + (1));
i__17434__auto___21040 = G__21041;
continue;
} else {
}
break;
}

var G__20974 = args20972.length;
switch (G__20974) {
case 1:
return sablono.core.time_field20971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20972.length)].join('')));

}
});

sablono.core.time_field20971.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.time_field20971.call(null,name__19561__auto__,null);
});

sablono.core.time_field20971.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.time_field20971.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20971);

/**
 * Creates a url input field.
 */
sablono.core.url_field20975 = (function sablono$core$url_field20975(var_args){
var args20976 = [];
var len__17433__auto___21043 = arguments.length;
var i__17434__auto___21044 = (0);
while(true){
if((i__17434__auto___21044 < len__17433__auto___21043)){
args20976.push((arguments[i__17434__auto___21044]));

var G__21045 = (i__17434__auto___21044 + (1));
i__17434__auto___21044 = G__21045;
continue;
} else {
}
break;
}

var G__20978 = args20976.length;
switch (G__20978) {
case 1:
return sablono.core.url_field20975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20976.length)].join('')));

}
});

sablono.core.url_field20975.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.url_field20975.call(null,name__19561__auto__,null);
});

sablono.core.url_field20975.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.url_field20975.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20975);

/**
 * Creates a week input field.
 */
sablono.core.week_field20979 = (function sablono$core$week_field20979(var_args){
var args20980 = [];
var len__17433__auto___21047 = arguments.length;
var i__17434__auto___21048 = (0);
while(true){
if((i__17434__auto___21048 < len__17433__auto___21047)){
args20980.push((arguments[i__17434__auto___21048]));

var G__21049 = (i__17434__auto___21048 + (1));
i__17434__auto___21048 = G__21049;
continue;
} else {
}
break;
}

var G__20982 = args20980.length;
switch (G__20982) {
case 1:
return sablono.core.week_field20979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20980.length)].join('')));

}
});

sablono.core.week_field20979.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.week_field20979.call(null,name__19561__auto__,null);
});

sablono.core.week_field20979.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.week_field20979.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20979);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21051 = (function sablono$core$check_box21051(var_args){
var args21052 = [];
var len__17433__auto___21055 = arguments.length;
var i__17434__auto___21056 = (0);
while(true){
if((i__17434__auto___21056 < len__17433__auto___21055)){
args21052.push((arguments[i__17434__auto___21056]));

var G__21057 = (i__17434__auto___21056 + (1));
i__17434__auto___21056 = G__21057;
continue;
} else {
}
break;
}

var G__21054 = args21052.length;
switch (G__21054) {
case 1:
return sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21052.length)].join('')));

}
});

sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21051.call(null,name,null);
});

sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21051.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box21051.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21051.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21051);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21059 = (function sablono$core$radio_button21059(var_args){
var args21060 = [];
var len__17433__auto___21063 = arguments.length;
var i__17434__auto___21064 = (0);
while(true){
if((i__17434__auto___21064 < len__17433__auto___21063)){
args21060.push((arguments[i__17434__auto___21064]));

var G__21065 = (i__17434__auto___21064 + (1));
i__17434__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var G__21062 = args21060.length;
switch (G__21062) {
case 1:
return sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21060.length)].join('')));

}
});

sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21059.call(null,group,null);
});

sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21059.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button21059.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21059.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21059);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21067 = (function sablono$core$select_options21067(coll){
var iter__17147__auto__ = (function sablono$core$select_options21067_$_iter__21076(s__21077){
return (new cljs.core.LazySeq(null,(function (){
var s__21077__$1 = s__21077;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21077__$1);
if(temp__4425__auto__){
var s__21077__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21077__$2)){
var c__17145__auto__ = cljs.core.chunk_first.call(null,s__21077__$2);
var size__17146__auto__ = cljs.core.count.call(null,c__17145__auto__);
var b__21079 = cljs.core.chunk_buffer.call(null,size__17146__auto__);
if((function (){var i__21078 = (0);
while(true){
if((i__21078 < size__17146__auto__)){
var x = cljs.core._nth.call(null,c__17145__auto__,i__21078);
cljs.core.chunk_append.call(null,b__21079,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21082 = x;
var text = cljs.core.nth.call(null,vec__21082,(0),null);
var val = cljs.core.nth.call(null,vec__21082,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21082,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21067.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__21084 = (i__21078 + (1));
i__21078 = G__21084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21079),sablono$core$select_options21067_$_iter__21076.call(null,cljs.core.chunk_rest.call(null,s__21077__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21079),null);
}
} else {
var x = cljs.core.first.call(null,s__21077__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21083 = x;
var text = cljs.core.nth.call(null,vec__21083,(0),null);
var val = cljs.core.nth.call(null,vec__21083,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21083,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21067.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options21067_$_iter__21076.call(null,cljs.core.rest.call(null,s__21077__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17147__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21067);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21085 = (function sablono$core$drop_down21085(var_args){
var args21086 = [];
var len__17433__auto___21089 = arguments.length;
var i__17434__auto___21090 = (0);
while(true){
if((i__17434__auto___21090 < len__17433__auto___21089)){
args21086.push((arguments[i__17434__auto___21090]));

var G__21091 = (i__17434__auto___21090 + (1));
i__17434__auto___21090 = G__21091;
continue;
} else {
}
break;
}

var G__21088 = args21086.length;
switch (G__21088) {
case 2:
return sablono.core.drop_down21085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21085.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21086.length)].join('')));

}
});

sablono.core.drop_down21085.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21085.call(null,name,options,null);
});

sablono.core.drop_down21085.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down21085.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21085);
/**
 * Creates a text area element.
 */
sablono.core.text_area21093 = (function sablono$core$text_area21093(var_args){
var args21094 = [];
var len__17433__auto___21097 = arguments.length;
var i__17434__auto___21098 = (0);
while(true){
if((i__17434__auto___21098 < len__17433__auto___21097)){
args21094.push((arguments[i__17434__auto___21098]));

var G__21099 = (i__17434__auto___21098 + (1));
i__17434__auto___21098 = G__21099;
continue;
} else {
}
break;
}

var G__21096 = args21094.length;
switch (G__21096) {
case 1:
return sablono.core.text_area21093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21094.length)].join('')));

}
});

sablono.core.text_area21093.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21093.call(null,name,null);
});

sablono.core.text_area21093.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area21093.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21093);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21101 = (function sablono$core$label21101(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21101);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21102 = (function sablono$core$submit_button21102(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21102);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21103 = (function sablono$core$reset_button21103(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21103);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21104 = (function sablono$core$form_to21104(var_args){
var args__17440__auto__ = [];
var len__17433__auto___21109 = arguments.length;
var i__17434__auto___21110 = (0);
while(true){
if((i__17434__auto___21110 < len__17433__auto___21109)){
args__17440__auto__.push((arguments[i__17434__auto___21110]));

var G__21111 = (i__17434__auto___21110 + (1));
i__17434__auto___21110 = G__21111;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return sablono.core.form_to21104.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

sablono.core.form_to21104.cljs$core$IFn$_invoke$arity$variadic = (function (p__21107,body){
var vec__21108 = p__21107;
var method = cljs.core.nth.call(null,vec__21108,(0),null);
var action = cljs.core.nth.call(null,vec__21108,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to21104.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21104.cljs$lang$applyTo = (function (seq21105){
var G__21106 = cljs.core.first.call(null,seq21105);
var seq21105__$1 = cljs.core.next.call(null,seq21105);
return sablono.core.form_to21104.cljs$core$IFn$_invoke$arity$variadic(G__21106,seq21105__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21104);

//# sourceMappingURL=core.js.map