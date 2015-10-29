// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28537 = (function (fn_handler,f,meta28538){
this.fn_handler = fn_handler;
this.f = f;
this.meta28538 = meta28538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28539,meta28538__$1){
var self__ = this;
var _28539__$1 = this;
return (new cljs.core.async.t_cljs$core$async28537(self__.fn_handler,self__.f,meta28538__$1));
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28539){
var self__ = this;
var _28539__$1 = this;
return self__.meta28538;
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28538","meta28538",-730959098,null)], null);
});

cljs.core.async.t_cljs$core$async28537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28537";

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28537");
});

cljs.core.async.__GT_t_cljs$core$async28537 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28537(fn_handler__$1,f__$1,meta28538){
return (new cljs.core.async.t_cljs$core$async28537(fn_handler__$1,f__$1,meta28538));
});

}

return (new cljs.core.async.t_cljs$core$async28537(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28542 = [];
var len__17433__auto___28545 = arguments.length;
var i__17434__auto___28546 = (0);
while(true){
if((i__17434__auto___28546 < len__17433__auto___28545)){
args28542.push((arguments[i__17434__auto___28546]));

var G__28547 = (i__17434__auto___28546 + (1));
i__17434__auto___28546 = G__28547;
continue;
} else {
}
break;
}

var G__28544 = args28542.length;
switch (G__28544) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28542.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28549 = [];
var len__17433__auto___28552 = arguments.length;
var i__17434__auto___28553 = (0);
while(true){
if((i__17434__auto___28553 < len__17433__auto___28552)){
args28549.push((arguments[i__17434__auto___28553]));

var G__28554 = (i__17434__auto___28553 + (1));
i__17434__auto___28553 = G__28554;
continue;
} else {
}
break;
}

var G__28551 = args28549.length;
switch (G__28551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28549.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28556 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28556);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28556,ret){
return (function (){
return fn1.call(null,val_28556);
});})(val_28556,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28557 = [];
var len__17433__auto___28560 = arguments.length;
var i__17434__auto___28561 = (0);
while(true){
if((i__17434__auto___28561 < len__17433__auto___28560)){
args28557.push((arguments[i__17434__auto___28561]));

var G__28562 = (i__17434__auto___28561 + (1));
i__17434__auto___28561 = G__28562;
continue;
} else {
}
break;
}

var G__28559 = args28557.length;
switch (G__28559) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28557.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17278__auto___28564 = n;
var x_28565 = (0);
while(true){
if((x_28565 < n__17278__auto___28564)){
(a[x_28565] = (0));

var G__28566 = (x_28565 + (1));
x_28565 = G__28566;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28567 = (i + (1));
i = G__28567;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (alt_flag,flag,meta28572){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.alt_flag,self__.flag,meta28572__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28571");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28571 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28571(alt_flag__$1,flag__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(alt_flag__$1,flag__$1,meta28572));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28571(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28577 = (function (alt_handler,flag,cb,meta28578){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28578 = meta28578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28579,meta28578__$1){
var self__ = this;
var _28579__$1 = this;
return (new cljs.core.async.t_cljs$core$async28577(self__.alt_handler,self__.flag,self__.cb,meta28578__$1));
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28579){
var self__ = this;
var _28579__$1 = this;
return self__.meta28578;
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28578","meta28578",1891737923,null)], null);
});

cljs.core.async.t_cljs$core$async28577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28577";

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28577");
});

cljs.core.async.__GT_t_cljs$core$async28577 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28577(alt_handler__$1,flag__$1,cb__$1,meta28578){
return (new cljs.core.async.t_cljs$core$async28577(alt_handler__$1,flag__$1,cb__$1,meta28578));
});

}

return (new cljs.core.async.t_cljs$core$async28577(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28580_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28581_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28581_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16375__auto__ = wport;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28582 = (i + (1));
i = G__28582;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16375__auto__ = ret;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16363__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16363__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___28588 = arguments.length;
var i__17434__auto___28589 = (0);
while(true){
if((i__17434__auto___28589 < len__17433__auto___28588)){
args__17440__auto__.push((arguments[i__17434__auto___28589]));

var G__28590 = (i__17434__auto___28589 + (1));
i__17434__auto___28589 = G__28590;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28585){
var map__28586 = p__28585;
var map__28586__$1 = ((((!((map__28586 == null)))?((((map__28586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);
var opts = map__28586__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28583){
var G__28584 = cljs.core.first.call(null,seq28583);
var seq28583__$1 = cljs.core.next.call(null,seq28583);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28584,seq28583__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28591 = [];
var len__17433__auto___28641 = arguments.length;
var i__17434__auto___28642 = (0);
while(true){
if((i__17434__auto___28642 < len__17433__auto___28641)){
args28591.push((arguments[i__17434__auto___28642]));

var G__28643 = (i__17434__auto___28642 + (1));
i__17434__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var G__28593 = args28591.length;
switch (G__28593) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28591.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20946__auto___28645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___28645){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___28645){
return (function (state_28617){
var state_val_28618 = (state_28617[(1)]);
if((state_val_28618 === (7))){
var inst_28613 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28619_28646 = state_28617__$1;
(statearr_28619_28646[(2)] = inst_28613);

(statearr_28619_28646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (1))){
var state_28617__$1 = state_28617;
var statearr_28620_28647 = state_28617__$1;
(statearr_28620_28647[(2)] = null);

(statearr_28620_28647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (4))){
var inst_28596 = (state_28617[(7)]);
var inst_28596__$1 = (state_28617[(2)]);
var inst_28597 = (inst_28596__$1 == null);
var state_28617__$1 = (function (){var statearr_28621 = state_28617;
(statearr_28621[(7)] = inst_28596__$1);

return statearr_28621;
})();
if(cljs.core.truth_(inst_28597)){
var statearr_28622_28648 = state_28617__$1;
(statearr_28622_28648[(1)] = (5));

} else {
var statearr_28623_28649 = state_28617__$1;
(statearr_28623_28649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (13))){
var state_28617__$1 = state_28617;
var statearr_28624_28650 = state_28617__$1;
(statearr_28624_28650[(2)] = null);

(statearr_28624_28650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (6))){
var inst_28596 = (state_28617[(7)]);
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28617__$1,(11),to,inst_28596);
} else {
if((state_val_28618 === (3))){
var inst_28615 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28617__$1,inst_28615);
} else {
if((state_val_28618 === (12))){
var state_28617__$1 = state_28617;
var statearr_28625_28651 = state_28617__$1;
(statearr_28625_28651[(2)] = null);

(statearr_28625_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (2))){
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28617__$1,(4),from);
} else {
if((state_val_28618 === (11))){
var inst_28606 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
if(cljs.core.truth_(inst_28606)){
var statearr_28626_28652 = state_28617__$1;
(statearr_28626_28652[(1)] = (12));

} else {
var statearr_28627_28653 = state_28617__$1;
(statearr_28627_28653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (9))){
var state_28617__$1 = state_28617;
var statearr_28628_28654 = state_28617__$1;
(statearr_28628_28654[(2)] = null);

(statearr_28628_28654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (5))){
var state_28617__$1 = state_28617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28629_28655 = state_28617__$1;
(statearr_28629_28655[(1)] = (8));

} else {
var statearr_28630_28656 = state_28617__$1;
(statearr_28630_28656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (14))){
var inst_28611 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28631_28657 = state_28617__$1;
(statearr_28631_28657[(2)] = inst_28611);

(statearr_28631_28657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (10))){
var inst_28603 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28632_28658 = state_28617__$1;
(statearr_28632_28658[(2)] = inst_28603);

(statearr_28632_28658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (8))){
var inst_28600 = cljs.core.async.close_BANG_.call(null,to);
var state_28617__$1 = state_28617;
var statearr_28633_28659 = state_28617__$1;
(statearr_28633_28659[(2)] = inst_28600);

(statearr_28633_28659[(1)] = (10));


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
});})(c__20946__auto___28645))
;
return ((function (switch__20881__auto__,c__20946__auto___28645){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_28637 = [null,null,null,null,null,null,null,null];
(statearr_28637[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_28637[(1)] = (1));

return statearr_28637;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_28617){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28638){if((e28638 instanceof Object)){
var ex__20885__auto__ = e28638;
var statearr_28639_28660 = state_28617;
(statearr_28639_28660[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28661 = state_28617;
state_28617 = G__28661;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_28617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_28617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___28645))
})();
var state__20948__auto__ = (function (){var statearr_28640 = f__20947__auto__.call(null);
(statearr_28640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___28645);

return statearr_28640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___28645))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28845){
var vec__28846 = p__28845;
var v = cljs.core.nth.call(null,vec__28846,(0),null);
var p = cljs.core.nth.call(null,vec__28846,(1),null);
var job = vec__28846;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20946__auto___29028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results){
return (function (state_28851){
var state_val_28852 = (state_28851[(1)]);
if((state_val_28852 === (1))){
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28851__$1,(2),res,v);
} else {
if((state_val_28852 === (2))){
var inst_28848 = (state_28851[(2)]);
var inst_28849 = cljs.core.async.close_BANG_.call(null,res);
var state_28851__$1 = (function (){var statearr_28853 = state_28851;
(statearr_28853[(7)] = inst_28848);

return statearr_28853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28851__$1,inst_28849);
} else {
return null;
}
}
});})(c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results))
;
return ((function (switch__20881__auto__,c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28857 = [null,null,null,null,null,null,null,null];
(statearr_28857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28857[(1)] = (1));

return statearr_28857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28851){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28858){if((e28858 instanceof Object)){
var ex__20885__auto__ = e28858;
var statearr_28859_29029 = state_28851;
(statearr_28859_29029[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_28851;
state_28851 = G__29030;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results))
})();
var state__20948__auto__ = (function (){var statearr_28860 = f__20947__auto__.call(null);
(statearr_28860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29028);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29028,res,vec__28846,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28861){
var vec__28862 = p__28861;
var v = cljs.core.nth.call(null,vec__28862,(0),null);
var p = cljs.core.nth.call(null,vec__28862,(1),null);
var job = vec__28862;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17278__auto___29031 = n;
var __29032 = (0);
while(true){
if((__29032 < n__17278__auto___29031)){
var G__28863_29033 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28863_29033) {
case "compute":
var c__20946__auto___29035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29032,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (__29032,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function (state_28876){
var state_val_28877 = (state_28876[(1)]);
if((state_val_28877 === (1))){
var state_28876__$1 = state_28876;
var statearr_28878_29036 = state_28876__$1;
(statearr_28878_29036[(2)] = null);

(statearr_28878_29036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (2))){
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28876__$1,(4),jobs);
} else {
if((state_val_28877 === (3))){
var inst_28874 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28876__$1,inst_28874);
} else {
if((state_val_28877 === (4))){
var inst_28866 = (state_28876[(2)]);
var inst_28867 = process.call(null,inst_28866);
var state_28876__$1 = state_28876;
if(cljs.core.truth_(inst_28867)){
var statearr_28879_29037 = state_28876__$1;
(statearr_28879_29037[(1)] = (5));

} else {
var statearr_28880_29038 = state_28876__$1;
(statearr_28880_29038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (5))){
var state_28876__$1 = state_28876;
var statearr_28881_29039 = state_28876__$1;
(statearr_28881_29039[(2)] = null);

(statearr_28881_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (6))){
var state_28876__$1 = state_28876;
var statearr_28882_29040 = state_28876__$1;
(statearr_28882_29040[(2)] = null);

(statearr_28882_29040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (7))){
var inst_28872 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28883_29041 = state_28876__$1;
(statearr_28883_29041[(2)] = inst_28872);

(statearr_28883_29041[(1)] = (3));


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
});})(__29032,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
;
return ((function (__29032,switch__20881__auto__,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28876){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__20885__auto__ = e28888;
var statearr_28889_29042 = state_28876;
(statearr_28889_29042[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29043 = state_28876;
state_28876 = G__29043;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(__29032,switch__20881__auto__,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28890 = f__20947__auto__.call(null);
(statearr_28890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29035);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(__29032,c__20946__auto___29035,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
);


break;
case "async":
var c__20946__auto___29044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29032,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (__29032,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function (state_28903){
var state_val_28904 = (state_28903[(1)]);
if((state_val_28904 === (1))){
var state_28903__$1 = state_28903;
var statearr_28905_29045 = state_28903__$1;
(statearr_28905_29045[(2)] = null);

(statearr_28905_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (2))){
var state_28903__$1 = state_28903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28903__$1,(4),jobs);
} else {
if((state_val_28904 === (3))){
var inst_28901 = (state_28903[(2)]);
var state_28903__$1 = state_28903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28903__$1,inst_28901);
} else {
if((state_val_28904 === (4))){
var inst_28893 = (state_28903[(2)]);
var inst_28894 = async.call(null,inst_28893);
var state_28903__$1 = state_28903;
if(cljs.core.truth_(inst_28894)){
var statearr_28906_29046 = state_28903__$1;
(statearr_28906_29046[(1)] = (5));

} else {
var statearr_28907_29047 = state_28903__$1;
(statearr_28907_29047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (5))){
var state_28903__$1 = state_28903;
var statearr_28908_29048 = state_28903__$1;
(statearr_28908_29048[(2)] = null);

(statearr_28908_29048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (6))){
var state_28903__$1 = state_28903;
var statearr_28909_29049 = state_28903__$1;
(statearr_28909_29049[(2)] = null);

(statearr_28909_29049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (7))){
var inst_28899 = (state_28903[(2)]);
var state_28903__$1 = state_28903;
var statearr_28910_29050 = state_28903__$1;
(statearr_28910_29050[(2)] = inst_28899);

(statearr_28910_29050[(1)] = (3));


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
});})(__29032,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
;
return ((function (__29032,switch__20881__auto__,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28914 = [null,null,null,null,null,null,null];
(statearr_28914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28914[(1)] = (1));

return statearr_28914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28903){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28915){if((e28915 instanceof Object)){
var ex__20885__auto__ = e28915;
var statearr_28916_29051 = state_28903;
(statearr_28916_29051[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29052 = state_28903;
state_28903 = G__29052;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(__29032,switch__20881__auto__,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28917 = f__20947__auto__.call(null);
(statearr_28917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29044);

return statearr_28917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(__29032,c__20946__auto___29044,G__28863_29033,n__17278__auto___29031,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29053 = (__29032 + (1));
__29032 = G__29053;
continue;
} else {
}
break;
}

var c__20946__auto___29054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29054,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29054,jobs,results,process,async){
return (function (state_28939){
var state_val_28940 = (state_28939[(1)]);
if((state_val_28940 === (1))){
var state_28939__$1 = state_28939;
var statearr_28941_29055 = state_28939__$1;
(statearr_28941_29055[(2)] = null);

(statearr_28941_29055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (2))){
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(4),from);
} else {
if((state_val_28940 === (3))){
var inst_28937 = (state_28939[(2)]);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28939__$1,inst_28937);
} else {
if((state_val_28940 === (4))){
var inst_28920 = (state_28939[(7)]);
var inst_28920__$1 = (state_28939[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var state_28939__$1 = (function (){var statearr_28942 = state_28939;
(statearr_28942[(7)] = inst_28920__$1);

return statearr_28942;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28943_29056 = state_28939__$1;
(statearr_28943_29056[(1)] = (5));

} else {
var statearr_28944_29057 = state_28939__$1;
(statearr_28944_29057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (5))){
var inst_28923 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28939__$1 = state_28939;
var statearr_28945_29058 = state_28939__$1;
(statearr_28945_29058[(2)] = inst_28923);

(statearr_28945_29058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (6))){
var inst_28920 = (state_28939[(7)]);
var inst_28925 = (state_28939[(8)]);
var inst_28925__$1 = cljs.core.async.chan.call(null,(1));
var inst_28926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28927 = [inst_28920,inst_28925__$1];
var inst_28928 = (new cljs.core.PersistentVector(null,2,(5),inst_28926,inst_28927,null));
var state_28939__$1 = (function (){var statearr_28946 = state_28939;
(statearr_28946[(8)] = inst_28925__$1);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28939__$1,(8),jobs,inst_28928);
} else {
if((state_val_28940 === (7))){
var inst_28935 = (state_28939[(2)]);
var state_28939__$1 = state_28939;
var statearr_28947_29059 = state_28939__$1;
(statearr_28947_29059[(2)] = inst_28935);

(statearr_28947_29059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (8))){
var inst_28925 = (state_28939[(8)]);
var inst_28930 = (state_28939[(2)]);
var state_28939__$1 = (function (){var statearr_28948 = state_28939;
(statearr_28948[(9)] = inst_28930);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28939__$1,(9),results,inst_28925);
} else {
if((state_val_28940 === (9))){
var inst_28932 = (state_28939[(2)]);
var state_28939__$1 = (function (){var statearr_28949 = state_28939;
(statearr_28949[(10)] = inst_28932);

return statearr_28949;
})();
var statearr_28950_29060 = state_28939__$1;
(statearr_28950_29060[(2)] = null);

(statearr_28950_29060[(1)] = (2));


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
});})(c__20946__auto___29054,jobs,results,process,async))
;
return ((function (switch__20881__auto__,c__20946__auto___29054,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28954[(1)] = (1));

return statearr_28954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28939){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object)){
var ex__20885__auto__ = e28955;
var statearr_28956_29061 = state_28939;
(statearr_28956_29061[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29062 = state_28939;
state_28939 = G__29062;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29054,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28957 = f__20947__auto__.call(null);
(statearr_28957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29054);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29054,jobs,results,process,async))
);


var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__,jobs,results,process,async){
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_28997_29063 = state_28995__$1;
(statearr_28997_29063[(2)] = inst_28991);

(statearr_28997_29063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (20))){
var state_28995__$1 = state_28995;
var statearr_28998_29064 = state_28995__$1;
(statearr_28998_29064[(2)] = null);

(statearr_28998_29064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (1))){
var state_28995__$1 = state_28995;
var statearr_28999_29065 = state_28995__$1;
(statearr_28999_29065[(2)] = null);

(statearr_28999_29065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var inst_28960 = (state_28995[(7)]);
var inst_28960__$1 = (state_28995[(2)]);
var inst_28961 = (inst_28960__$1 == null);
var state_28995__$1 = (function (){var statearr_29000 = state_28995;
(statearr_29000[(7)] = inst_28960__$1);

return statearr_29000;
})();
if(cljs.core.truth_(inst_28961)){
var statearr_29001_29066 = state_28995__$1;
(statearr_29001_29066[(1)] = (5));

} else {
var statearr_29002_29067 = state_28995__$1;
(statearr_29002_29067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (15))){
var inst_28973 = (state_28995[(8)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(18),to,inst_28973);
} else {
if((state_val_28996 === (21))){
var inst_28986 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29003_29068 = state_28995__$1;
(statearr_29003_29068[(2)] = inst_28986);

(statearr_29003_29068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (13))){
var inst_28988 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29004 = state_28995;
(statearr_29004[(9)] = inst_28988);

return statearr_29004;
})();
var statearr_29005_29069 = state_28995__$1;
(statearr_29005_29069[(2)] = null);

(statearr_29005_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var inst_28960 = (state_28995[(7)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(11),inst_28960);
} else {
if((state_val_28996 === (17))){
var inst_28981 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28981)){
var statearr_29006_29070 = state_28995__$1;
(statearr_29006_29070[(1)] = (19));

} else {
var statearr_29007_29071 = state_28995__$1;
(statearr_29007_29071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (3))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (12))){
var inst_28970 = (state_28995[(10)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(14),inst_28970);
} else {
if((state_val_28996 === (2))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(4),results);
} else {
if((state_val_28996 === (19))){
var state_28995__$1 = state_28995;
var statearr_29008_29072 = state_28995__$1;
(statearr_29008_29072[(2)] = null);

(statearr_29008_29072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (11))){
var inst_28970 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29009 = state_28995;
(statearr_29009[(10)] = inst_28970);

return statearr_29009;
})();
var statearr_29010_29073 = state_28995__$1;
(statearr_29010_29073[(2)] = null);

(statearr_29010_29073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (9))){
var state_28995__$1 = state_28995;
var statearr_29011_29074 = state_28995__$1;
(statearr_29011_29074[(2)] = null);

(statearr_29011_29074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (5))){
var state_28995__$1 = state_28995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29012_29075 = state_28995__$1;
(statearr_29012_29075[(1)] = (8));

} else {
var statearr_29013_29076 = state_28995__$1;
(statearr_29013_29076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (14))){
var inst_28973 = (state_28995[(8)]);
var inst_28975 = (state_28995[(11)]);
var inst_28973__$1 = (state_28995[(2)]);
var inst_28974 = (inst_28973__$1 == null);
var inst_28975__$1 = cljs.core.not.call(null,inst_28974);
var state_28995__$1 = (function (){var statearr_29014 = state_28995;
(statearr_29014[(8)] = inst_28973__$1);

(statearr_29014[(11)] = inst_28975__$1);

return statearr_29014;
})();
if(inst_28975__$1){
var statearr_29015_29077 = state_28995__$1;
(statearr_29015_29077[(1)] = (15));

} else {
var statearr_29016_29078 = state_28995__$1;
(statearr_29016_29078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (16))){
var inst_28975 = (state_28995[(11)]);
var state_28995__$1 = state_28995;
var statearr_29017_29079 = state_28995__$1;
(statearr_29017_29079[(2)] = inst_28975);

(statearr_29017_29079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (10))){
var inst_28967 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29018_29080 = state_28995__$1;
(statearr_29018_29080[(2)] = inst_28967);

(statearr_29018_29080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (18))){
var inst_28978 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29019_29081 = state_28995__$1;
(statearr_29019_29081[(2)] = inst_28978);

(statearr_29019_29081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28964 = cljs.core.async.close_BANG_.call(null,to);
var state_28995__$1 = state_28995;
var statearr_29020_29082 = state_28995__$1;
(statearr_29020_29082[(2)] = inst_28964);

(statearr_29020_29082[(1)] = (10));


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
});})(c__20946__auto__,jobs,results,process,async))
;
return ((function (switch__20881__auto__,c__20946__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_29024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_29024[(1)] = (1));

return statearr_29024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28995){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29025){if((e29025 instanceof Object)){
var ex__20885__auto__ = e29025;
var statearr_29026_29083 = state_28995;
(statearr_29026_29083[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_28995;
state_28995 = G__29084;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_29027 = f__20947__auto__.call(null);
(statearr_29027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__,jobs,results,process,async))
);

return c__20946__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29085 = [];
var len__17433__auto___29088 = arguments.length;
var i__17434__auto___29089 = (0);
while(true){
if((i__17434__auto___29089 < len__17433__auto___29088)){
args29085.push((arguments[i__17434__auto___29089]));

var G__29090 = (i__17434__auto___29089 + (1));
i__17434__auto___29089 = G__29090;
continue;
} else {
}
break;
}

var G__29087 = args29085.length;
switch (G__29087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29085.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29092 = [];
var len__17433__auto___29095 = arguments.length;
var i__17434__auto___29096 = (0);
while(true){
if((i__17434__auto___29096 < len__17433__auto___29095)){
args29092.push((arguments[i__17434__auto___29096]));

var G__29097 = (i__17434__auto___29096 + (1));
i__17434__auto___29096 = G__29097;
continue;
} else {
}
break;
}

var G__29094 = args29092.length;
switch (G__29094) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29092.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29099 = [];
var len__17433__auto___29152 = arguments.length;
var i__17434__auto___29153 = (0);
while(true){
if((i__17434__auto___29153 < len__17433__auto___29152)){
args29099.push((arguments[i__17434__auto___29153]));

var G__29154 = (i__17434__auto___29153 + (1));
i__17434__auto___29153 = G__29154;
continue;
} else {
}
break;
}

var G__29101 = args29099.length;
switch (G__29101) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29099.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20946__auto___29156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29156,tc,fc){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29156,tc,fc){
return (function (state_29127){
var state_val_29128 = (state_29127[(1)]);
if((state_val_29128 === (7))){
var inst_29123 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29129_29157 = state_29127__$1;
(statearr_29129_29157[(2)] = inst_29123);

(statearr_29129_29157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (1))){
var state_29127__$1 = state_29127;
var statearr_29130_29158 = state_29127__$1;
(statearr_29130_29158[(2)] = null);

(statearr_29130_29158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (4))){
var inst_29104 = (state_29127[(7)]);
var inst_29104__$1 = (state_29127[(2)]);
var inst_29105 = (inst_29104__$1 == null);
var state_29127__$1 = (function (){var statearr_29131 = state_29127;
(statearr_29131[(7)] = inst_29104__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29105)){
var statearr_29132_29159 = state_29127__$1;
(statearr_29132_29159[(1)] = (5));

} else {
var statearr_29133_29160 = state_29127__$1;
(statearr_29133_29160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (13))){
var state_29127__$1 = state_29127;
var statearr_29134_29161 = state_29127__$1;
(statearr_29134_29161[(2)] = null);

(statearr_29134_29161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (6))){
var inst_29104 = (state_29127[(7)]);
var inst_29110 = p.call(null,inst_29104);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29110)){
var statearr_29135_29162 = state_29127__$1;
(statearr_29135_29162[(1)] = (9));

} else {
var statearr_29136_29163 = state_29127__$1;
(statearr_29136_29163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (3))){
var inst_29125 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29127__$1,inst_29125);
} else {
if((state_val_29128 === (12))){
var state_29127__$1 = state_29127;
var statearr_29137_29164 = state_29127__$1;
(statearr_29137_29164[(2)] = null);

(statearr_29137_29164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (2))){
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29127__$1,(4),ch);
} else {
if((state_val_29128 === (11))){
var inst_29104 = (state_29127[(7)]);
var inst_29114 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29127__$1,(8),inst_29114,inst_29104);
} else {
if((state_val_29128 === (9))){
var state_29127__$1 = state_29127;
var statearr_29138_29165 = state_29127__$1;
(statearr_29138_29165[(2)] = tc);

(statearr_29138_29165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (5))){
var inst_29107 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29108 = cljs.core.async.close_BANG_.call(null,fc);
var state_29127__$1 = (function (){var statearr_29139 = state_29127;
(statearr_29139[(8)] = inst_29107);

return statearr_29139;
})();
var statearr_29140_29166 = state_29127__$1;
(statearr_29140_29166[(2)] = inst_29108);

(statearr_29140_29166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (14))){
var inst_29121 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29141_29167 = state_29127__$1;
(statearr_29141_29167[(2)] = inst_29121);

(statearr_29141_29167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (10))){
var state_29127__$1 = state_29127;
var statearr_29142_29168 = state_29127__$1;
(statearr_29142_29168[(2)] = fc);

(statearr_29142_29168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (8))){
var inst_29116 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29116)){
var statearr_29143_29169 = state_29127__$1;
(statearr_29143_29169[(1)] = (12));

} else {
var statearr_29144_29170 = state_29127__$1;
(statearr_29144_29170[(1)] = (13));

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
});})(c__20946__auto___29156,tc,fc))
;
return ((function (switch__20881__auto__,c__20946__auto___29156,tc,fc){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_29148 = [null,null,null,null,null,null,null,null,null];
(statearr_29148[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_29148[(1)] = (1));

return statearr_29148;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_29127){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29149){if((e29149 instanceof Object)){
var ex__20885__auto__ = e29149;
var statearr_29150_29171 = state_29127;
(statearr_29150_29171[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29172 = state_29127;
state_29127 = G__29172;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_29127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_29127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29156,tc,fc))
})();
var state__20948__auto__ = (function (){var statearr_29151 = f__20947__auto__.call(null);
(statearr_29151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29156);

return statearr_29151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29156,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (1))){
var inst_29205 = init;
var state_29219__$1 = (function (){var statearr_29221 = state_29219;
(statearr_29221[(7)] = inst_29205);

return statearr_29221;
})();
var statearr_29222_29237 = state_29219__$1;
(statearr_29222_29237[(2)] = null);

(statearr_29222_29237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (2))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(4),ch);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (4))){
var inst_29208 = (state_29219[(8)]);
var inst_29208__$1 = (state_29219[(2)]);
var inst_29209 = (inst_29208__$1 == null);
var state_29219__$1 = (function (){var statearr_29223 = state_29219;
(statearr_29223[(8)] = inst_29208__$1);

return statearr_29223;
})();
if(cljs.core.truth_(inst_29209)){
var statearr_29224_29238 = state_29219__$1;
(statearr_29224_29238[(1)] = (5));

} else {
var statearr_29225_29239 = state_29219__$1;
(statearr_29225_29239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var inst_29205 = (state_29219[(7)]);
var state_29219__$1 = state_29219;
var statearr_29226_29240 = state_29219__$1;
(statearr_29226_29240[(2)] = inst_29205);

(statearr_29226_29240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var inst_29205 = (state_29219[(7)]);
var inst_29208 = (state_29219[(8)]);
var inst_29212 = f.call(null,inst_29205,inst_29208);
var inst_29205__$1 = inst_29212;
var state_29219__$1 = (function (){var statearr_29227 = state_29219;
(statearr_29227[(7)] = inst_29205__$1);

return statearr_29227;
})();
var statearr_29228_29241 = state_29219__$1;
(statearr_29228_29241[(2)] = null);

(statearr_29228_29241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (7))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29229_29242 = state_29219__$1;
(statearr_29229_29242[(2)] = inst_29215);

(statearr_29229_29242[(1)] = (3));


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
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20882__auto____0 = (function (){
var statearr_29233 = [null,null,null,null,null,null,null,null,null];
(statearr_29233[(0)] = cljs$core$async$reduce_$_state_machine__20882__auto__);

(statearr_29233[(1)] = (1));

return statearr_29233;
});
var cljs$core$async$reduce_$_state_machine__20882__auto____1 = (function (state_29219){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29234){if((e29234 instanceof Object)){
var ex__20885__auto__ = e29234;
var statearr_29235_29243 = state_29219;
(statearr_29235_29243[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29244 = state_29219;
state_29219 = G__29244;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20882__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20882__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20882__auto____0;
cljs$core$async$reduce_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20882__auto____1;
return cljs$core$async$reduce_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_29236 = f__20947__auto__.call(null);
(statearr_29236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29245 = [];
var len__17433__auto___29297 = arguments.length;
var i__17434__auto___29298 = (0);
while(true){
if((i__17434__auto___29298 < len__17433__auto___29297)){
args29245.push((arguments[i__17434__auto___29298]));

var G__29299 = (i__17434__auto___29298 + (1));
i__17434__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var G__29247 = args29245.length;
switch (G__29247) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29245.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_29272){
var state_val_29273 = (state_29272[(1)]);
if((state_val_29273 === (7))){
var inst_29254 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29274_29301 = state_29272__$1;
(statearr_29274_29301[(2)] = inst_29254);

(statearr_29274_29301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (1))){
var inst_29248 = cljs.core.seq.call(null,coll);
var inst_29249 = inst_29248;
var state_29272__$1 = (function (){var statearr_29275 = state_29272;
(statearr_29275[(7)] = inst_29249);

return statearr_29275;
})();
var statearr_29276_29302 = state_29272__$1;
(statearr_29276_29302[(2)] = null);

(statearr_29276_29302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (4))){
var inst_29249 = (state_29272[(7)]);
var inst_29252 = cljs.core.first.call(null,inst_29249);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29272__$1,(7),ch,inst_29252);
} else {
if((state_val_29273 === (13))){
var inst_29266 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29277_29303 = state_29272__$1;
(statearr_29277_29303[(2)] = inst_29266);

(statearr_29277_29303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (6))){
var inst_29257 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
if(cljs.core.truth_(inst_29257)){
var statearr_29278_29304 = state_29272__$1;
(statearr_29278_29304[(1)] = (8));

} else {
var statearr_29279_29305 = state_29272__$1;
(statearr_29279_29305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (3))){
var inst_29270 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29272__$1,inst_29270);
} else {
if((state_val_29273 === (12))){
var state_29272__$1 = state_29272;
var statearr_29280_29306 = state_29272__$1;
(statearr_29280_29306[(2)] = null);

(statearr_29280_29306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (2))){
var inst_29249 = (state_29272[(7)]);
var state_29272__$1 = state_29272;
if(cljs.core.truth_(inst_29249)){
var statearr_29281_29307 = state_29272__$1;
(statearr_29281_29307[(1)] = (4));

} else {
var statearr_29282_29308 = state_29272__$1;
(statearr_29282_29308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (11))){
var inst_29263 = cljs.core.async.close_BANG_.call(null,ch);
var state_29272__$1 = state_29272;
var statearr_29283_29309 = state_29272__$1;
(statearr_29283_29309[(2)] = inst_29263);

(statearr_29283_29309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (9))){
var state_29272__$1 = state_29272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29284_29310 = state_29272__$1;
(statearr_29284_29310[(1)] = (11));

} else {
var statearr_29285_29311 = state_29272__$1;
(statearr_29285_29311[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (5))){
var inst_29249 = (state_29272[(7)]);
var state_29272__$1 = state_29272;
var statearr_29286_29312 = state_29272__$1;
(statearr_29286_29312[(2)] = inst_29249);

(statearr_29286_29312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (10))){
var inst_29268 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29287_29313 = state_29272__$1;
(statearr_29287_29313[(2)] = inst_29268);

(statearr_29287_29313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (8))){
var inst_29249 = (state_29272[(7)]);
var inst_29259 = cljs.core.next.call(null,inst_29249);
var inst_29249__$1 = inst_29259;
var state_29272__$1 = (function (){var statearr_29288 = state_29272;
(statearr_29288[(7)] = inst_29249__$1);

return statearr_29288;
})();
var statearr_29289_29314 = state_29272__$1;
(statearr_29289_29314[(2)] = null);

(statearr_29289_29314[(1)] = (2));


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
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_29293 = [null,null,null,null,null,null,null,null];
(statearr_29293[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_29293[(1)] = (1));

return statearr_29293;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_29272){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object)){
var ex__20885__auto__ = e29294;
var statearr_29295_29315 = state_29272;
(statearr_29295_29315[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29316 = state_29272;
state_29272 = G__29316;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_29272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_29272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_29296 = f__20947__auto__.call(null);
(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17030__auto__ = (((_ == null))?null:_);
var m__17031__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,_);
} else {
var m__17031__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29538 = (function (mult,ch,cs,meta29539){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29539 = meta29539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29540,meta29539__$1){
var self__ = this;
var _29540__$1 = this;
return (new cljs.core.async.t_cljs$core$async29538(self__.mult,self__.ch,self__.cs,meta29539__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29540){
var self__ = this;
var _29540__$1 = this;
return self__.meta29539;
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29539","meta29539",1583222154,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29538";

cljs.core.async.t_cljs$core$async29538.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async29538");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29538 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29538(mult__$1,ch__$1,cs__$1,meta29539){
return (new cljs.core.async.t_cljs$core$async29538(mult__$1,ch__$1,cs__$1,meta29539));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29538(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20946__auto___29759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29759,cs,m,dchan,dctr,done){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29759,cs,m,dchan,dctr,done){
return (function (state_29671){
var state_val_29672 = (state_29671[(1)]);
if((state_val_29672 === (7))){
var inst_29667 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29673_29760 = state_29671__$1;
(statearr_29673_29760[(2)] = inst_29667);

(statearr_29673_29760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (20))){
var inst_29572 = (state_29671[(7)]);
var inst_29582 = cljs.core.first.call(null,inst_29572);
var inst_29583 = cljs.core.nth.call(null,inst_29582,(0),null);
var inst_29584 = cljs.core.nth.call(null,inst_29582,(1),null);
var state_29671__$1 = (function (){var statearr_29674 = state_29671;
(statearr_29674[(8)] = inst_29583);

return statearr_29674;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29675_29761 = state_29671__$1;
(statearr_29675_29761[(1)] = (22));

} else {
var statearr_29676_29762 = state_29671__$1;
(statearr_29676_29762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (27))){
var inst_29614 = (state_29671[(9)]);
var inst_29612 = (state_29671[(10)]);
var inst_29543 = (state_29671[(11)]);
var inst_29619 = (state_29671[(12)]);
var inst_29619__$1 = cljs.core._nth.call(null,inst_29612,inst_29614);
var inst_29620 = cljs.core.async.put_BANG_.call(null,inst_29619__$1,inst_29543,done);
var state_29671__$1 = (function (){var statearr_29677 = state_29671;
(statearr_29677[(12)] = inst_29619__$1);

return statearr_29677;
})();
if(cljs.core.truth_(inst_29620)){
var statearr_29678_29763 = state_29671__$1;
(statearr_29678_29763[(1)] = (30));

} else {
var statearr_29679_29764 = state_29671__$1;
(statearr_29679_29764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (1))){
var state_29671__$1 = state_29671;
var statearr_29680_29765 = state_29671__$1;
(statearr_29680_29765[(2)] = null);

(statearr_29680_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (24))){
var inst_29572 = (state_29671[(7)]);
var inst_29589 = (state_29671[(2)]);
var inst_29590 = cljs.core.next.call(null,inst_29572);
var inst_29552 = inst_29590;
var inst_29553 = null;
var inst_29554 = (0);
var inst_29555 = (0);
var state_29671__$1 = (function (){var statearr_29681 = state_29671;
(statearr_29681[(13)] = inst_29552);

(statearr_29681[(14)] = inst_29554);

(statearr_29681[(15)] = inst_29589);

(statearr_29681[(16)] = inst_29553);

(statearr_29681[(17)] = inst_29555);

return statearr_29681;
})();
var statearr_29682_29766 = state_29671__$1;
(statearr_29682_29766[(2)] = null);

(statearr_29682_29766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (39))){
var state_29671__$1 = state_29671;
var statearr_29686_29767 = state_29671__$1;
(statearr_29686_29767[(2)] = null);

(statearr_29686_29767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (4))){
var inst_29543 = (state_29671[(11)]);
var inst_29543__$1 = (state_29671[(2)]);
var inst_29544 = (inst_29543__$1 == null);
var state_29671__$1 = (function (){var statearr_29687 = state_29671;
(statearr_29687[(11)] = inst_29543__$1);

return statearr_29687;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29688_29768 = state_29671__$1;
(statearr_29688_29768[(1)] = (5));

} else {
var statearr_29689_29769 = state_29671__$1;
(statearr_29689_29769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (15))){
var inst_29552 = (state_29671[(13)]);
var inst_29554 = (state_29671[(14)]);
var inst_29553 = (state_29671[(16)]);
var inst_29555 = (state_29671[(17)]);
var inst_29568 = (state_29671[(2)]);
var inst_29569 = (inst_29555 + (1));
var tmp29683 = inst_29552;
var tmp29684 = inst_29554;
var tmp29685 = inst_29553;
var inst_29552__$1 = tmp29683;
var inst_29553__$1 = tmp29685;
var inst_29554__$1 = tmp29684;
var inst_29555__$1 = inst_29569;
var state_29671__$1 = (function (){var statearr_29690 = state_29671;
(statearr_29690[(13)] = inst_29552__$1);

(statearr_29690[(14)] = inst_29554__$1);

(statearr_29690[(18)] = inst_29568);

(statearr_29690[(16)] = inst_29553__$1);

(statearr_29690[(17)] = inst_29555__$1);

return statearr_29690;
})();
var statearr_29691_29770 = state_29671__$1;
(statearr_29691_29770[(2)] = null);

(statearr_29691_29770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (21))){
var inst_29593 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29695_29771 = state_29671__$1;
(statearr_29695_29771[(2)] = inst_29593);

(statearr_29695_29771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (31))){
var inst_29619 = (state_29671[(12)]);
var inst_29623 = done.call(null,null);
var inst_29624 = cljs.core.async.untap_STAR_.call(null,m,inst_29619);
var state_29671__$1 = (function (){var statearr_29696 = state_29671;
(statearr_29696[(19)] = inst_29623);

return statearr_29696;
})();
var statearr_29697_29772 = state_29671__$1;
(statearr_29697_29772[(2)] = inst_29624);

(statearr_29697_29772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (32))){
var inst_29614 = (state_29671[(9)]);
var inst_29613 = (state_29671[(20)]);
var inst_29612 = (state_29671[(10)]);
var inst_29611 = (state_29671[(21)]);
var inst_29626 = (state_29671[(2)]);
var inst_29627 = (inst_29614 + (1));
var tmp29692 = inst_29613;
var tmp29693 = inst_29612;
var tmp29694 = inst_29611;
var inst_29611__$1 = tmp29694;
var inst_29612__$1 = tmp29693;
var inst_29613__$1 = tmp29692;
var inst_29614__$1 = inst_29627;
var state_29671__$1 = (function (){var statearr_29698 = state_29671;
(statearr_29698[(9)] = inst_29614__$1);

(statearr_29698[(20)] = inst_29613__$1);

(statearr_29698[(10)] = inst_29612__$1);

(statearr_29698[(21)] = inst_29611__$1);

(statearr_29698[(22)] = inst_29626);

return statearr_29698;
})();
var statearr_29699_29773 = state_29671__$1;
(statearr_29699_29773[(2)] = null);

(statearr_29699_29773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (40))){
var inst_29639 = (state_29671[(23)]);
var inst_29643 = done.call(null,null);
var inst_29644 = cljs.core.async.untap_STAR_.call(null,m,inst_29639);
var state_29671__$1 = (function (){var statearr_29700 = state_29671;
(statearr_29700[(24)] = inst_29643);

return statearr_29700;
})();
var statearr_29701_29774 = state_29671__$1;
(statearr_29701_29774[(2)] = inst_29644);

(statearr_29701_29774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (33))){
var inst_29630 = (state_29671[(25)]);
var inst_29632 = cljs.core.chunked_seq_QMARK_.call(null,inst_29630);
var state_29671__$1 = state_29671;
if(inst_29632){
var statearr_29702_29775 = state_29671__$1;
(statearr_29702_29775[(1)] = (36));

} else {
var statearr_29703_29776 = state_29671__$1;
(statearr_29703_29776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (13))){
var inst_29562 = (state_29671[(26)]);
var inst_29565 = cljs.core.async.close_BANG_.call(null,inst_29562);
var state_29671__$1 = state_29671;
var statearr_29704_29777 = state_29671__$1;
(statearr_29704_29777[(2)] = inst_29565);

(statearr_29704_29777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (22))){
var inst_29583 = (state_29671[(8)]);
var inst_29586 = cljs.core.async.close_BANG_.call(null,inst_29583);
var state_29671__$1 = state_29671;
var statearr_29705_29778 = state_29671__$1;
(statearr_29705_29778[(2)] = inst_29586);

(statearr_29705_29778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (36))){
var inst_29630 = (state_29671[(25)]);
var inst_29634 = cljs.core.chunk_first.call(null,inst_29630);
var inst_29635 = cljs.core.chunk_rest.call(null,inst_29630);
var inst_29636 = cljs.core.count.call(null,inst_29634);
var inst_29611 = inst_29635;
var inst_29612 = inst_29634;
var inst_29613 = inst_29636;
var inst_29614 = (0);
var state_29671__$1 = (function (){var statearr_29706 = state_29671;
(statearr_29706[(9)] = inst_29614);

(statearr_29706[(20)] = inst_29613);

(statearr_29706[(10)] = inst_29612);

(statearr_29706[(21)] = inst_29611);

return statearr_29706;
})();
var statearr_29707_29779 = state_29671__$1;
(statearr_29707_29779[(2)] = null);

(statearr_29707_29779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (41))){
var inst_29630 = (state_29671[(25)]);
var inst_29646 = (state_29671[(2)]);
var inst_29647 = cljs.core.next.call(null,inst_29630);
var inst_29611 = inst_29647;
var inst_29612 = null;
var inst_29613 = (0);
var inst_29614 = (0);
var state_29671__$1 = (function (){var statearr_29708 = state_29671;
(statearr_29708[(9)] = inst_29614);

(statearr_29708[(20)] = inst_29613);

(statearr_29708[(10)] = inst_29612);

(statearr_29708[(27)] = inst_29646);

(statearr_29708[(21)] = inst_29611);

return statearr_29708;
})();
var statearr_29709_29780 = state_29671__$1;
(statearr_29709_29780[(2)] = null);

(statearr_29709_29780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (43))){
var state_29671__$1 = state_29671;
var statearr_29710_29781 = state_29671__$1;
(statearr_29710_29781[(2)] = null);

(statearr_29710_29781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (29))){
var inst_29655 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29711_29782 = state_29671__$1;
(statearr_29711_29782[(2)] = inst_29655);

(statearr_29711_29782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (44))){
var inst_29664 = (state_29671[(2)]);
var state_29671__$1 = (function (){var statearr_29712 = state_29671;
(statearr_29712[(28)] = inst_29664);

return statearr_29712;
})();
var statearr_29713_29783 = state_29671__$1;
(statearr_29713_29783[(2)] = null);

(statearr_29713_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (6))){
var inst_29603 = (state_29671[(29)]);
var inst_29602 = cljs.core.deref.call(null,cs);
var inst_29603__$1 = cljs.core.keys.call(null,inst_29602);
var inst_29604 = cljs.core.count.call(null,inst_29603__$1);
var inst_29605 = cljs.core.reset_BANG_.call(null,dctr,inst_29604);
var inst_29610 = cljs.core.seq.call(null,inst_29603__$1);
var inst_29611 = inst_29610;
var inst_29612 = null;
var inst_29613 = (0);
var inst_29614 = (0);
var state_29671__$1 = (function (){var statearr_29714 = state_29671;
(statearr_29714[(9)] = inst_29614);

(statearr_29714[(20)] = inst_29613);

(statearr_29714[(10)] = inst_29612);

(statearr_29714[(29)] = inst_29603__$1);

(statearr_29714[(30)] = inst_29605);

(statearr_29714[(21)] = inst_29611);

return statearr_29714;
})();
var statearr_29715_29784 = state_29671__$1;
(statearr_29715_29784[(2)] = null);

(statearr_29715_29784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (28))){
var inst_29630 = (state_29671[(25)]);
var inst_29611 = (state_29671[(21)]);
var inst_29630__$1 = cljs.core.seq.call(null,inst_29611);
var state_29671__$1 = (function (){var statearr_29716 = state_29671;
(statearr_29716[(25)] = inst_29630__$1);

return statearr_29716;
})();
if(inst_29630__$1){
var statearr_29717_29785 = state_29671__$1;
(statearr_29717_29785[(1)] = (33));

} else {
var statearr_29718_29786 = state_29671__$1;
(statearr_29718_29786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (25))){
var inst_29614 = (state_29671[(9)]);
var inst_29613 = (state_29671[(20)]);
var inst_29616 = (inst_29614 < inst_29613);
var inst_29617 = inst_29616;
var state_29671__$1 = state_29671;
if(cljs.core.truth_(inst_29617)){
var statearr_29719_29787 = state_29671__$1;
(statearr_29719_29787[(1)] = (27));

} else {
var statearr_29720_29788 = state_29671__$1;
(statearr_29720_29788[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (34))){
var state_29671__$1 = state_29671;
var statearr_29721_29789 = state_29671__$1;
(statearr_29721_29789[(2)] = null);

(statearr_29721_29789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (17))){
var state_29671__$1 = state_29671;
var statearr_29722_29790 = state_29671__$1;
(statearr_29722_29790[(2)] = null);

(statearr_29722_29790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (3))){
var inst_29669 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29671__$1,inst_29669);
} else {
if((state_val_29672 === (12))){
var inst_29598 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29723_29791 = state_29671__$1;
(statearr_29723_29791[(2)] = inst_29598);

(statearr_29723_29791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (2))){
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29671__$1,(4),ch);
} else {
if((state_val_29672 === (23))){
var state_29671__$1 = state_29671;
var statearr_29724_29792 = state_29671__$1;
(statearr_29724_29792[(2)] = null);

(statearr_29724_29792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (35))){
var inst_29653 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29725_29793 = state_29671__$1;
(statearr_29725_29793[(2)] = inst_29653);

(statearr_29725_29793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (19))){
var inst_29572 = (state_29671[(7)]);
var inst_29576 = cljs.core.chunk_first.call(null,inst_29572);
var inst_29577 = cljs.core.chunk_rest.call(null,inst_29572);
var inst_29578 = cljs.core.count.call(null,inst_29576);
var inst_29552 = inst_29577;
var inst_29553 = inst_29576;
var inst_29554 = inst_29578;
var inst_29555 = (0);
var state_29671__$1 = (function (){var statearr_29726 = state_29671;
(statearr_29726[(13)] = inst_29552);

(statearr_29726[(14)] = inst_29554);

(statearr_29726[(16)] = inst_29553);

(statearr_29726[(17)] = inst_29555);

return statearr_29726;
})();
var statearr_29727_29794 = state_29671__$1;
(statearr_29727_29794[(2)] = null);

(statearr_29727_29794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (11))){
var inst_29552 = (state_29671[(13)]);
var inst_29572 = (state_29671[(7)]);
var inst_29572__$1 = cljs.core.seq.call(null,inst_29552);
var state_29671__$1 = (function (){var statearr_29728 = state_29671;
(statearr_29728[(7)] = inst_29572__$1);

return statearr_29728;
})();
if(inst_29572__$1){
var statearr_29729_29795 = state_29671__$1;
(statearr_29729_29795[(1)] = (16));

} else {
var statearr_29730_29796 = state_29671__$1;
(statearr_29730_29796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (9))){
var inst_29600 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29731_29797 = state_29671__$1;
(statearr_29731_29797[(2)] = inst_29600);

(statearr_29731_29797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (5))){
var inst_29550 = cljs.core.deref.call(null,cs);
var inst_29551 = cljs.core.seq.call(null,inst_29550);
var inst_29552 = inst_29551;
var inst_29553 = null;
var inst_29554 = (0);
var inst_29555 = (0);
var state_29671__$1 = (function (){var statearr_29732 = state_29671;
(statearr_29732[(13)] = inst_29552);

(statearr_29732[(14)] = inst_29554);

(statearr_29732[(16)] = inst_29553);

(statearr_29732[(17)] = inst_29555);

return statearr_29732;
})();
var statearr_29733_29798 = state_29671__$1;
(statearr_29733_29798[(2)] = null);

(statearr_29733_29798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (14))){
var state_29671__$1 = state_29671;
var statearr_29734_29799 = state_29671__$1;
(statearr_29734_29799[(2)] = null);

(statearr_29734_29799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (45))){
var inst_29661 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29735_29800 = state_29671__$1;
(statearr_29735_29800[(2)] = inst_29661);

(statearr_29735_29800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (26))){
var inst_29603 = (state_29671[(29)]);
var inst_29657 = (state_29671[(2)]);
var inst_29658 = cljs.core.seq.call(null,inst_29603);
var state_29671__$1 = (function (){var statearr_29736 = state_29671;
(statearr_29736[(31)] = inst_29657);

return statearr_29736;
})();
if(inst_29658){
var statearr_29737_29801 = state_29671__$1;
(statearr_29737_29801[(1)] = (42));

} else {
var statearr_29738_29802 = state_29671__$1;
(statearr_29738_29802[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (16))){
var inst_29572 = (state_29671[(7)]);
var inst_29574 = cljs.core.chunked_seq_QMARK_.call(null,inst_29572);
var state_29671__$1 = state_29671;
if(inst_29574){
var statearr_29739_29803 = state_29671__$1;
(statearr_29739_29803[(1)] = (19));

} else {
var statearr_29740_29804 = state_29671__$1;
(statearr_29740_29804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (38))){
var inst_29650 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29741_29805 = state_29671__$1;
(statearr_29741_29805[(2)] = inst_29650);

(statearr_29741_29805[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (30))){
var state_29671__$1 = state_29671;
var statearr_29742_29806 = state_29671__$1;
(statearr_29742_29806[(2)] = null);

(statearr_29742_29806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (10))){
var inst_29553 = (state_29671[(16)]);
var inst_29555 = (state_29671[(17)]);
var inst_29561 = cljs.core._nth.call(null,inst_29553,inst_29555);
var inst_29562 = cljs.core.nth.call(null,inst_29561,(0),null);
var inst_29563 = cljs.core.nth.call(null,inst_29561,(1),null);
var state_29671__$1 = (function (){var statearr_29743 = state_29671;
(statearr_29743[(26)] = inst_29562);

return statearr_29743;
})();
if(cljs.core.truth_(inst_29563)){
var statearr_29744_29807 = state_29671__$1;
(statearr_29744_29807[(1)] = (13));

} else {
var statearr_29745_29808 = state_29671__$1;
(statearr_29745_29808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (18))){
var inst_29596 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29746_29809 = state_29671__$1;
(statearr_29746_29809[(2)] = inst_29596);

(statearr_29746_29809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (42))){
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29671__$1,(45),dchan);
} else {
if((state_val_29672 === (37))){
var inst_29630 = (state_29671[(25)]);
var inst_29639 = (state_29671[(23)]);
var inst_29543 = (state_29671[(11)]);
var inst_29639__$1 = cljs.core.first.call(null,inst_29630);
var inst_29640 = cljs.core.async.put_BANG_.call(null,inst_29639__$1,inst_29543,done);
var state_29671__$1 = (function (){var statearr_29747 = state_29671;
(statearr_29747[(23)] = inst_29639__$1);

return statearr_29747;
})();
if(cljs.core.truth_(inst_29640)){
var statearr_29748_29810 = state_29671__$1;
(statearr_29748_29810[(1)] = (39));

} else {
var statearr_29749_29811 = state_29671__$1;
(statearr_29749_29811[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (8))){
var inst_29554 = (state_29671[(14)]);
var inst_29555 = (state_29671[(17)]);
var inst_29557 = (inst_29555 < inst_29554);
var inst_29558 = inst_29557;
var state_29671__$1 = state_29671;
if(cljs.core.truth_(inst_29558)){
var statearr_29750_29812 = state_29671__$1;
(statearr_29750_29812[(1)] = (10));

} else {
var statearr_29751_29813 = state_29671__$1;
(statearr_29751_29813[(1)] = (11));

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
});})(c__20946__auto___29759,cs,m,dchan,dctr,done))
;
return ((function (switch__20881__auto__,c__20946__auto___29759,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20882__auto__ = null;
var cljs$core$async$mult_$_state_machine__20882__auto____0 = (function (){
var statearr_29755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29755[(0)] = cljs$core$async$mult_$_state_machine__20882__auto__);

(statearr_29755[(1)] = (1));

return statearr_29755;
});
var cljs$core$async$mult_$_state_machine__20882__auto____1 = (function (state_29671){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29756){if((e29756 instanceof Object)){
var ex__20885__auto__ = e29756;
var statearr_29757_29814 = state_29671;
(statearr_29757_29814[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29815 = state_29671;
state_29671 = G__29815;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20882__auto__ = function(state_29671){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20882__auto____1.call(this,state_29671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20882__auto____0;
cljs$core$async$mult_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20882__auto____1;
return cljs$core$async$mult_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29759,cs,m,dchan,dctr,done))
})();
var state__20948__auto__ = (function (){var statearr_29758 = f__20947__auto__.call(null);
(statearr_29758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29759);

return statearr_29758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29759,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29816 = [];
var len__17433__auto___29819 = arguments.length;
var i__17434__auto___29820 = (0);
while(true){
if((i__17434__auto___29820 < len__17433__auto___29819)){
args29816.push((arguments[i__17434__auto___29820]));

var G__29821 = (i__17434__auto___29820 + (1));
i__17434__auto___29820 = G__29821;
continue;
} else {
}
break;
}

var G__29818 = args29816.length;
switch (G__29818) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29816.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,state_map);
} else {
var m__17031__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,mode);
} else {
var m__17031__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___29833 = arguments.length;
var i__17434__auto___29834 = (0);
while(true){
if((i__17434__auto___29834 < len__17433__auto___29833)){
args__17440__auto__.push((arguments[i__17434__auto___29834]));

var G__29835 = (i__17434__auto___29834 + (1));
i__17434__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((3) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29827){
var map__29828 = p__29827;
var map__29828__$1 = ((((!((map__29828 == null)))?((((map__29828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29828):map__29828);
var opts = map__29828__$1;
var statearr_29830_29836 = state;
(statearr_29830_29836[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29828,map__29828__$1,opts){
return (function (val){
var statearr_29831_29837 = state;
(statearr_29831_29837[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29828,map__29828__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29832_29838 = state;
(statearr_29832_29838[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29823){
var G__29824 = cljs.core.first.call(null,seq29823);
var seq29823__$1 = cljs.core.next.call(null,seq29823);
var G__29825 = cljs.core.first.call(null,seq29823__$1);
var seq29823__$2 = cljs.core.next.call(null,seq29823__$1);
var G__29826 = cljs.core.first.call(null,seq29823__$2);
var seq29823__$3 = cljs.core.next.call(null,seq29823__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29824,G__29825,G__29826,seq29823__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30002 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30003){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30003 = meta30003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30004,meta30003__$1){
var self__ = this;
var _30004__$1 = this;
return (new cljs.core.async.t_cljs$core$async30002(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30003__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30004){
var self__ = this;
var _30004__$1 = this;
return self__.meta30003;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30003","meta30003",-1063664167,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30002";

cljs.core.async.t_cljs$core$async30002.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30002");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30002 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30002(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30003){
return (new cljs.core.async.t_cljs$core$async30002(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30003));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30002(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20946__auto___30165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30102){
var state_val_30103 = (state_30102[(1)]);
if((state_val_30103 === (7))){
var inst_30020 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30104_30166 = state_30102__$1;
(statearr_30104_30166[(2)] = inst_30020);

(statearr_30104_30166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (20))){
var inst_30032 = (state_30102[(7)]);
var state_30102__$1 = state_30102;
var statearr_30105_30167 = state_30102__$1;
(statearr_30105_30167[(2)] = inst_30032);

(statearr_30105_30167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (27))){
var state_30102__$1 = state_30102;
var statearr_30106_30168 = state_30102__$1;
(statearr_30106_30168[(2)] = null);

(statearr_30106_30168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (1))){
var inst_30008 = (state_30102[(8)]);
var inst_30008__$1 = calc_state.call(null);
var inst_30010 = (inst_30008__$1 == null);
var inst_30011 = cljs.core.not.call(null,inst_30010);
var state_30102__$1 = (function (){var statearr_30107 = state_30102;
(statearr_30107[(8)] = inst_30008__$1);

return statearr_30107;
})();
if(inst_30011){
var statearr_30108_30169 = state_30102__$1;
(statearr_30108_30169[(1)] = (2));

} else {
var statearr_30109_30170 = state_30102__$1;
(statearr_30109_30170[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (24))){
var inst_30055 = (state_30102[(9)]);
var inst_30076 = (state_30102[(10)]);
var inst_30062 = (state_30102[(11)]);
var inst_30076__$1 = inst_30055.call(null,inst_30062);
var state_30102__$1 = (function (){var statearr_30110 = state_30102;
(statearr_30110[(10)] = inst_30076__$1);

return statearr_30110;
})();
if(cljs.core.truth_(inst_30076__$1)){
var statearr_30111_30171 = state_30102__$1;
(statearr_30111_30171[(1)] = (29));

} else {
var statearr_30112_30172 = state_30102__$1;
(statearr_30112_30172[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (4))){
var inst_30023 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30023)){
var statearr_30113_30173 = state_30102__$1;
(statearr_30113_30173[(1)] = (8));

} else {
var statearr_30114_30174 = state_30102__$1;
(statearr_30114_30174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (15))){
var inst_30049 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30049)){
var statearr_30115_30175 = state_30102__$1;
(statearr_30115_30175[(1)] = (19));

} else {
var statearr_30116_30176 = state_30102__$1;
(statearr_30116_30176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (21))){
var inst_30054 = (state_30102[(12)]);
var inst_30054__$1 = (state_30102[(2)]);
var inst_30055 = cljs.core.get.call(null,inst_30054__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30056 = cljs.core.get.call(null,inst_30054__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30057 = cljs.core.get.call(null,inst_30054__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30102__$1 = (function (){var statearr_30117 = state_30102;
(statearr_30117[(13)] = inst_30056);

(statearr_30117[(9)] = inst_30055);

(statearr_30117[(12)] = inst_30054__$1);

return statearr_30117;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30102__$1,(22),inst_30057);
} else {
if((state_val_30103 === (31))){
var inst_30084 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30084)){
var statearr_30118_30177 = state_30102__$1;
(statearr_30118_30177[(1)] = (32));

} else {
var statearr_30119_30178 = state_30102__$1;
(statearr_30119_30178[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (32))){
var inst_30061 = (state_30102[(14)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30102__$1,(35),out,inst_30061);
} else {
if((state_val_30103 === (33))){
var inst_30054 = (state_30102[(12)]);
var inst_30032 = inst_30054;
var state_30102__$1 = (function (){var statearr_30120 = state_30102;
(statearr_30120[(7)] = inst_30032);

return statearr_30120;
})();
var statearr_30121_30179 = state_30102__$1;
(statearr_30121_30179[(2)] = null);

(statearr_30121_30179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (13))){
var inst_30032 = (state_30102[(7)]);
var inst_30039 = inst_30032.cljs$lang$protocol_mask$partition0$;
var inst_30040 = (inst_30039 & (64));
var inst_30041 = inst_30032.cljs$core$ISeq$;
var inst_30042 = (inst_30040) || (inst_30041);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30042)){
var statearr_30122_30180 = state_30102__$1;
(statearr_30122_30180[(1)] = (16));

} else {
var statearr_30123_30181 = state_30102__$1;
(statearr_30123_30181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (22))){
var inst_30061 = (state_30102[(14)]);
var inst_30062 = (state_30102[(11)]);
var inst_30060 = (state_30102[(2)]);
var inst_30061__$1 = cljs.core.nth.call(null,inst_30060,(0),null);
var inst_30062__$1 = cljs.core.nth.call(null,inst_30060,(1),null);
var inst_30063 = (inst_30061__$1 == null);
var inst_30064 = cljs.core._EQ_.call(null,inst_30062__$1,change);
var inst_30065 = (inst_30063) || (inst_30064);
var state_30102__$1 = (function (){var statearr_30124 = state_30102;
(statearr_30124[(14)] = inst_30061__$1);

(statearr_30124[(11)] = inst_30062__$1);

return statearr_30124;
})();
if(cljs.core.truth_(inst_30065)){
var statearr_30125_30182 = state_30102__$1;
(statearr_30125_30182[(1)] = (23));

} else {
var statearr_30126_30183 = state_30102__$1;
(statearr_30126_30183[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (36))){
var inst_30054 = (state_30102[(12)]);
var inst_30032 = inst_30054;
var state_30102__$1 = (function (){var statearr_30127 = state_30102;
(statearr_30127[(7)] = inst_30032);

return statearr_30127;
})();
var statearr_30128_30184 = state_30102__$1;
(statearr_30128_30184[(2)] = null);

(statearr_30128_30184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (29))){
var inst_30076 = (state_30102[(10)]);
var state_30102__$1 = state_30102;
var statearr_30129_30185 = state_30102__$1;
(statearr_30129_30185[(2)] = inst_30076);

(statearr_30129_30185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (6))){
var state_30102__$1 = state_30102;
var statearr_30130_30186 = state_30102__$1;
(statearr_30130_30186[(2)] = false);

(statearr_30130_30186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (28))){
var inst_30072 = (state_30102[(2)]);
var inst_30073 = calc_state.call(null);
var inst_30032 = inst_30073;
var state_30102__$1 = (function (){var statearr_30131 = state_30102;
(statearr_30131[(7)] = inst_30032);

(statearr_30131[(15)] = inst_30072);

return statearr_30131;
})();
var statearr_30132_30187 = state_30102__$1;
(statearr_30132_30187[(2)] = null);

(statearr_30132_30187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (25))){
var inst_30098 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30133_30188 = state_30102__$1;
(statearr_30133_30188[(2)] = inst_30098);

(statearr_30133_30188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (34))){
var inst_30096 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30134_30189 = state_30102__$1;
(statearr_30134_30189[(2)] = inst_30096);

(statearr_30134_30189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (17))){
var state_30102__$1 = state_30102;
var statearr_30135_30190 = state_30102__$1;
(statearr_30135_30190[(2)] = false);

(statearr_30135_30190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (3))){
var state_30102__$1 = state_30102;
var statearr_30136_30191 = state_30102__$1;
(statearr_30136_30191[(2)] = false);

(statearr_30136_30191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (12))){
var inst_30100 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else {
if((state_val_30103 === (2))){
var inst_30008 = (state_30102[(8)]);
var inst_30013 = inst_30008.cljs$lang$protocol_mask$partition0$;
var inst_30014 = (inst_30013 & (64));
var inst_30015 = inst_30008.cljs$core$ISeq$;
var inst_30016 = (inst_30014) || (inst_30015);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30016)){
var statearr_30137_30192 = state_30102__$1;
(statearr_30137_30192[(1)] = (5));

} else {
var statearr_30138_30193 = state_30102__$1;
(statearr_30138_30193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (23))){
var inst_30061 = (state_30102[(14)]);
var inst_30067 = (inst_30061 == null);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30067)){
var statearr_30139_30194 = state_30102__$1;
(statearr_30139_30194[(1)] = (26));

} else {
var statearr_30140_30195 = state_30102__$1;
(statearr_30140_30195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (35))){
var inst_30087 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30087)){
var statearr_30141_30196 = state_30102__$1;
(statearr_30141_30196[(1)] = (36));

} else {
var statearr_30142_30197 = state_30102__$1;
(statearr_30142_30197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (19))){
var inst_30032 = (state_30102[(7)]);
var inst_30051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30032);
var state_30102__$1 = state_30102;
var statearr_30143_30198 = state_30102__$1;
(statearr_30143_30198[(2)] = inst_30051);

(statearr_30143_30198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (11))){
var inst_30032 = (state_30102[(7)]);
var inst_30036 = (inst_30032 == null);
var inst_30037 = cljs.core.not.call(null,inst_30036);
var state_30102__$1 = state_30102;
if(inst_30037){
var statearr_30144_30199 = state_30102__$1;
(statearr_30144_30199[(1)] = (13));

} else {
var statearr_30145_30200 = state_30102__$1;
(statearr_30145_30200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (9))){
var inst_30008 = (state_30102[(8)]);
var state_30102__$1 = state_30102;
var statearr_30146_30201 = state_30102__$1;
(statearr_30146_30201[(2)] = inst_30008);

(statearr_30146_30201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (5))){
var state_30102__$1 = state_30102;
var statearr_30147_30202 = state_30102__$1;
(statearr_30147_30202[(2)] = true);

(statearr_30147_30202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (14))){
var state_30102__$1 = state_30102;
var statearr_30148_30203 = state_30102__$1;
(statearr_30148_30203[(2)] = false);

(statearr_30148_30203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (26))){
var inst_30062 = (state_30102[(11)]);
var inst_30069 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30062);
var state_30102__$1 = state_30102;
var statearr_30149_30204 = state_30102__$1;
(statearr_30149_30204[(2)] = inst_30069);

(statearr_30149_30204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (16))){
var state_30102__$1 = state_30102;
var statearr_30150_30205 = state_30102__$1;
(statearr_30150_30205[(2)] = true);

(statearr_30150_30205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (38))){
var inst_30092 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30151_30206 = state_30102__$1;
(statearr_30151_30206[(2)] = inst_30092);

(statearr_30151_30206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (30))){
var inst_30056 = (state_30102[(13)]);
var inst_30055 = (state_30102[(9)]);
var inst_30062 = (state_30102[(11)]);
var inst_30079 = cljs.core.empty_QMARK_.call(null,inst_30055);
var inst_30080 = inst_30056.call(null,inst_30062);
var inst_30081 = cljs.core.not.call(null,inst_30080);
var inst_30082 = (inst_30079) && (inst_30081);
var state_30102__$1 = state_30102;
var statearr_30152_30207 = state_30102__$1;
(statearr_30152_30207[(2)] = inst_30082);

(statearr_30152_30207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (10))){
var inst_30008 = (state_30102[(8)]);
var inst_30028 = (state_30102[(2)]);
var inst_30029 = cljs.core.get.call(null,inst_30028,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30030 = cljs.core.get.call(null,inst_30028,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30031 = cljs.core.get.call(null,inst_30028,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30032 = inst_30008;
var state_30102__$1 = (function (){var statearr_30153 = state_30102;
(statearr_30153[(7)] = inst_30032);

(statearr_30153[(16)] = inst_30031);

(statearr_30153[(17)] = inst_30030);

(statearr_30153[(18)] = inst_30029);

return statearr_30153;
})();
var statearr_30154_30208 = state_30102__$1;
(statearr_30154_30208[(2)] = null);

(statearr_30154_30208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (18))){
var inst_30046 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30155_30209 = state_30102__$1;
(statearr_30155_30209[(2)] = inst_30046);

(statearr_30155_30209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (37))){
var state_30102__$1 = state_30102;
var statearr_30156_30210 = state_30102__$1;
(statearr_30156_30210[(2)] = null);

(statearr_30156_30210[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (8))){
var inst_30008 = (state_30102[(8)]);
var inst_30025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30008);
var state_30102__$1 = state_30102;
var statearr_30157_30211 = state_30102__$1;
(statearr_30157_30211[(2)] = inst_30025);

(statearr_30157_30211[(1)] = (10));


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
});})(c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20881__auto__,c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20882__auto__ = null;
var cljs$core$async$mix_$_state_machine__20882__auto____0 = (function (){
var statearr_30161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30161[(0)] = cljs$core$async$mix_$_state_machine__20882__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var cljs$core$async$mix_$_state_machine__20882__auto____1 = (function (state_30102){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30162){if((e30162 instanceof Object)){
var ex__20885__auto__ = e30162;
var statearr_30163_30212 = state_30102;
(statearr_30163_30212[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_30102;
state_30102 = G__30213;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20882__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20882__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20882__auto____0;
cljs$core$async$mix_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20882__auto____1;
return cljs$core$async$mix_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20948__auto__ = (function (){var statearr_30164 = f__20947__auto__.call(null);
(statearr_30164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30165);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30214 = [];
var len__17433__auto___30217 = arguments.length;
var i__17434__auto___30218 = (0);
while(true){
if((i__17434__auto___30218 < len__17433__auto___30217)){
args30214.push((arguments[i__17434__auto___30218]));

var G__30219 = (i__17434__auto___30218 + (1));
i__17434__auto___30218 = G__30219;
continue;
} else {
}
break;
}

var G__30216 = args30214.length;
switch (G__30216) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30214.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30222 = [];
var len__17433__auto___30347 = arguments.length;
var i__17434__auto___30348 = (0);
while(true){
if((i__17434__auto___30348 < len__17433__auto___30347)){
args30222.push((arguments[i__17434__auto___30348]));

var G__30349 = (i__17434__auto___30348 + (1));
i__17434__auto___30348 = G__30349;
continue;
} else {
}
break;
}

var G__30224 = args30222.length;
switch (G__30224) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30222.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16375__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16375__auto__,mults){
return (function (p1__30221_SHARP_){
if(cljs.core.truth_(p1__30221_SHARP_.call(null,topic))){
return p1__30221_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30221_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30225 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30226){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30226 = meta30226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30227,meta30226__$1){
var self__ = this;
var _30227__$1 = this;
return (new cljs.core.async.t_cljs$core$async30225(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30226__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30227){
var self__ = this;
var _30227__$1 = this;
return self__.meta30226;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30226","meta30226",1122055317,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30225";

cljs.core.async.t_cljs$core$async30225.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30225");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30225 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30225(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30226){
return (new cljs.core.async.t_cljs$core$async30225(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30226));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30225(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20946__auto___30351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30351,mults,ensure_mult,p){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30351,mults,ensure_mult,p){
return (function (state_30299){
var state_val_30300 = (state_30299[(1)]);
if((state_val_30300 === (7))){
var inst_30295 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30301_30352 = state_30299__$1;
(statearr_30301_30352[(2)] = inst_30295);

(statearr_30301_30352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (20))){
var state_30299__$1 = state_30299;
var statearr_30302_30353 = state_30299__$1;
(statearr_30302_30353[(2)] = null);

(statearr_30302_30353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (1))){
var state_30299__$1 = state_30299;
var statearr_30303_30354 = state_30299__$1;
(statearr_30303_30354[(2)] = null);

(statearr_30303_30354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (24))){
var inst_30278 = (state_30299[(7)]);
var inst_30287 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30278);
var state_30299__$1 = state_30299;
var statearr_30304_30355 = state_30299__$1;
(statearr_30304_30355[(2)] = inst_30287);

(statearr_30304_30355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (4))){
var inst_30230 = (state_30299[(8)]);
var inst_30230__$1 = (state_30299[(2)]);
var inst_30231 = (inst_30230__$1 == null);
var state_30299__$1 = (function (){var statearr_30305 = state_30299;
(statearr_30305[(8)] = inst_30230__$1);

return statearr_30305;
})();
if(cljs.core.truth_(inst_30231)){
var statearr_30306_30356 = state_30299__$1;
(statearr_30306_30356[(1)] = (5));

} else {
var statearr_30307_30357 = state_30299__$1;
(statearr_30307_30357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (15))){
var inst_30272 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30308_30358 = state_30299__$1;
(statearr_30308_30358[(2)] = inst_30272);

(statearr_30308_30358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (21))){
var inst_30292 = (state_30299[(2)]);
var state_30299__$1 = (function (){var statearr_30309 = state_30299;
(statearr_30309[(9)] = inst_30292);

return statearr_30309;
})();
var statearr_30310_30359 = state_30299__$1;
(statearr_30310_30359[(2)] = null);

(statearr_30310_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (13))){
var inst_30254 = (state_30299[(10)]);
var inst_30256 = cljs.core.chunked_seq_QMARK_.call(null,inst_30254);
var state_30299__$1 = state_30299;
if(inst_30256){
var statearr_30311_30360 = state_30299__$1;
(statearr_30311_30360[(1)] = (16));

} else {
var statearr_30312_30361 = state_30299__$1;
(statearr_30312_30361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (22))){
var inst_30284 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
if(cljs.core.truth_(inst_30284)){
var statearr_30313_30362 = state_30299__$1;
(statearr_30313_30362[(1)] = (23));

} else {
var statearr_30314_30363 = state_30299__$1;
(statearr_30314_30363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (6))){
var inst_30230 = (state_30299[(8)]);
var inst_30278 = (state_30299[(7)]);
var inst_30280 = (state_30299[(11)]);
var inst_30278__$1 = topic_fn.call(null,inst_30230);
var inst_30279 = cljs.core.deref.call(null,mults);
var inst_30280__$1 = cljs.core.get.call(null,inst_30279,inst_30278__$1);
var state_30299__$1 = (function (){var statearr_30315 = state_30299;
(statearr_30315[(7)] = inst_30278__$1);

(statearr_30315[(11)] = inst_30280__$1);

return statearr_30315;
})();
if(cljs.core.truth_(inst_30280__$1)){
var statearr_30316_30364 = state_30299__$1;
(statearr_30316_30364[(1)] = (19));

} else {
var statearr_30317_30365 = state_30299__$1;
(statearr_30317_30365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (25))){
var inst_30289 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30318_30366 = state_30299__$1;
(statearr_30318_30366[(2)] = inst_30289);

(statearr_30318_30366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (17))){
var inst_30254 = (state_30299[(10)]);
var inst_30263 = cljs.core.first.call(null,inst_30254);
var inst_30264 = cljs.core.async.muxch_STAR_.call(null,inst_30263);
var inst_30265 = cljs.core.async.close_BANG_.call(null,inst_30264);
var inst_30266 = cljs.core.next.call(null,inst_30254);
var inst_30240 = inst_30266;
var inst_30241 = null;
var inst_30242 = (0);
var inst_30243 = (0);
var state_30299__$1 = (function (){var statearr_30319 = state_30299;
(statearr_30319[(12)] = inst_30242);

(statearr_30319[(13)] = inst_30243);

(statearr_30319[(14)] = inst_30240);

(statearr_30319[(15)] = inst_30265);

(statearr_30319[(16)] = inst_30241);

return statearr_30319;
})();
var statearr_30320_30367 = state_30299__$1;
(statearr_30320_30367[(2)] = null);

(statearr_30320_30367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (3))){
var inst_30297 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30299__$1,inst_30297);
} else {
if((state_val_30300 === (12))){
var inst_30274 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30321_30368 = state_30299__$1;
(statearr_30321_30368[(2)] = inst_30274);

(statearr_30321_30368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (2))){
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30299__$1,(4),ch);
} else {
if((state_val_30300 === (23))){
var state_30299__$1 = state_30299;
var statearr_30322_30369 = state_30299__$1;
(statearr_30322_30369[(2)] = null);

(statearr_30322_30369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (19))){
var inst_30230 = (state_30299[(8)]);
var inst_30280 = (state_30299[(11)]);
var inst_30282 = cljs.core.async.muxch_STAR_.call(null,inst_30280);
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30299__$1,(22),inst_30282,inst_30230);
} else {
if((state_val_30300 === (11))){
var inst_30240 = (state_30299[(14)]);
var inst_30254 = (state_30299[(10)]);
var inst_30254__$1 = cljs.core.seq.call(null,inst_30240);
var state_30299__$1 = (function (){var statearr_30323 = state_30299;
(statearr_30323[(10)] = inst_30254__$1);

return statearr_30323;
})();
if(inst_30254__$1){
var statearr_30324_30370 = state_30299__$1;
(statearr_30324_30370[(1)] = (13));

} else {
var statearr_30325_30371 = state_30299__$1;
(statearr_30325_30371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (9))){
var inst_30276 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30326_30372 = state_30299__$1;
(statearr_30326_30372[(2)] = inst_30276);

(statearr_30326_30372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (5))){
var inst_30237 = cljs.core.deref.call(null,mults);
var inst_30238 = cljs.core.vals.call(null,inst_30237);
var inst_30239 = cljs.core.seq.call(null,inst_30238);
var inst_30240 = inst_30239;
var inst_30241 = null;
var inst_30242 = (0);
var inst_30243 = (0);
var state_30299__$1 = (function (){var statearr_30327 = state_30299;
(statearr_30327[(12)] = inst_30242);

(statearr_30327[(13)] = inst_30243);

(statearr_30327[(14)] = inst_30240);

(statearr_30327[(16)] = inst_30241);

return statearr_30327;
})();
var statearr_30328_30373 = state_30299__$1;
(statearr_30328_30373[(2)] = null);

(statearr_30328_30373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (14))){
var state_30299__$1 = state_30299;
var statearr_30332_30374 = state_30299__$1;
(statearr_30332_30374[(2)] = null);

(statearr_30332_30374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (16))){
var inst_30254 = (state_30299[(10)]);
var inst_30258 = cljs.core.chunk_first.call(null,inst_30254);
var inst_30259 = cljs.core.chunk_rest.call(null,inst_30254);
var inst_30260 = cljs.core.count.call(null,inst_30258);
var inst_30240 = inst_30259;
var inst_30241 = inst_30258;
var inst_30242 = inst_30260;
var inst_30243 = (0);
var state_30299__$1 = (function (){var statearr_30333 = state_30299;
(statearr_30333[(12)] = inst_30242);

(statearr_30333[(13)] = inst_30243);

(statearr_30333[(14)] = inst_30240);

(statearr_30333[(16)] = inst_30241);

return statearr_30333;
})();
var statearr_30334_30375 = state_30299__$1;
(statearr_30334_30375[(2)] = null);

(statearr_30334_30375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (10))){
var inst_30242 = (state_30299[(12)]);
var inst_30243 = (state_30299[(13)]);
var inst_30240 = (state_30299[(14)]);
var inst_30241 = (state_30299[(16)]);
var inst_30248 = cljs.core._nth.call(null,inst_30241,inst_30243);
var inst_30249 = cljs.core.async.muxch_STAR_.call(null,inst_30248);
var inst_30250 = cljs.core.async.close_BANG_.call(null,inst_30249);
var inst_30251 = (inst_30243 + (1));
var tmp30329 = inst_30242;
var tmp30330 = inst_30240;
var tmp30331 = inst_30241;
var inst_30240__$1 = tmp30330;
var inst_30241__$1 = tmp30331;
var inst_30242__$1 = tmp30329;
var inst_30243__$1 = inst_30251;
var state_30299__$1 = (function (){var statearr_30335 = state_30299;
(statearr_30335[(12)] = inst_30242__$1);

(statearr_30335[(13)] = inst_30243__$1);

(statearr_30335[(14)] = inst_30240__$1);

(statearr_30335[(17)] = inst_30250);

(statearr_30335[(16)] = inst_30241__$1);

return statearr_30335;
})();
var statearr_30336_30376 = state_30299__$1;
(statearr_30336_30376[(2)] = null);

(statearr_30336_30376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (18))){
var inst_30269 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30337_30377 = state_30299__$1;
(statearr_30337_30377[(2)] = inst_30269);

(statearr_30337_30377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (8))){
var inst_30242 = (state_30299[(12)]);
var inst_30243 = (state_30299[(13)]);
var inst_30245 = (inst_30243 < inst_30242);
var inst_30246 = inst_30245;
var state_30299__$1 = state_30299;
if(cljs.core.truth_(inst_30246)){
var statearr_30338_30378 = state_30299__$1;
(statearr_30338_30378[(1)] = (10));

} else {
var statearr_30339_30379 = state_30299__$1;
(statearr_30339_30379[(1)] = (11));

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
});})(c__20946__auto___30351,mults,ensure_mult,p))
;
return ((function (switch__20881__auto__,c__20946__auto___30351,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30343[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30343[(1)] = (1));

return statearr_30343;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30299){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30344){if((e30344 instanceof Object)){
var ex__20885__auto__ = e30344;
var statearr_30345_30380 = state_30299;
(statearr_30345_30380[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_30299;
state_30299 = G__30381;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30351,mults,ensure_mult,p))
})();
var state__20948__auto__ = (function (){var statearr_30346 = f__20947__auto__.call(null);
(statearr_30346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30351);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30351,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30382 = [];
var len__17433__auto___30385 = arguments.length;
var i__17434__auto___30386 = (0);
while(true){
if((i__17434__auto___30386 < len__17433__auto___30385)){
args30382.push((arguments[i__17434__auto___30386]));

var G__30387 = (i__17434__auto___30386 + (1));
i__17434__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var G__30384 = args30382.length;
switch (G__30384) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30382.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30389 = [];
var len__17433__auto___30392 = arguments.length;
var i__17434__auto___30393 = (0);
while(true){
if((i__17434__auto___30393 < len__17433__auto___30392)){
args30389.push((arguments[i__17434__auto___30393]));

var G__30394 = (i__17434__auto___30393 + (1));
i__17434__auto___30393 = G__30394;
continue;
} else {
}
break;
}

var G__30391 = args30389.length;
switch (G__30391) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30389.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30396 = [];
var len__17433__auto___30467 = arguments.length;
var i__17434__auto___30468 = (0);
while(true){
if((i__17434__auto___30468 < len__17433__auto___30467)){
args30396.push((arguments[i__17434__auto___30468]));

var G__30469 = (i__17434__auto___30468 + (1));
i__17434__auto___30468 = G__30469;
continue;
} else {
}
break;
}

var G__30398 = args30396.length;
switch (G__30398) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30396.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20946__auto___30471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30437){
var state_val_30438 = (state_30437[(1)]);
if((state_val_30438 === (7))){
var state_30437__$1 = state_30437;
var statearr_30439_30472 = state_30437__$1;
(statearr_30439_30472[(2)] = null);

(statearr_30439_30472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (1))){
var state_30437__$1 = state_30437;
var statearr_30440_30473 = state_30437__$1;
(statearr_30440_30473[(2)] = null);

(statearr_30440_30473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (4))){
var inst_30401 = (state_30437[(7)]);
var inst_30403 = (inst_30401 < cnt);
var state_30437__$1 = state_30437;
if(cljs.core.truth_(inst_30403)){
var statearr_30441_30474 = state_30437__$1;
(statearr_30441_30474[(1)] = (6));

} else {
var statearr_30442_30475 = state_30437__$1;
(statearr_30442_30475[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (15))){
var inst_30433 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30443_30476 = state_30437__$1;
(statearr_30443_30476[(2)] = inst_30433);

(statearr_30443_30476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (13))){
var inst_30426 = cljs.core.async.close_BANG_.call(null,out);
var state_30437__$1 = state_30437;
var statearr_30444_30477 = state_30437__$1;
(statearr_30444_30477[(2)] = inst_30426);

(statearr_30444_30477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var state_30437__$1 = state_30437;
var statearr_30445_30478 = state_30437__$1;
(statearr_30445_30478[(2)] = null);

(statearr_30445_30478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (3))){
var inst_30435 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30437__$1,inst_30435);
} else {
if((state_val_30438 === (12))){
var inst_30423 = (state_30437[(8)]);
var inst_30423__$1 = (state_30437[(2)]);
var inst_30424 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30423__$1);
var state_30437__$1 = (function (){var statearr_30446 = state_30437;
(statearr_30446[(8)] = inst_30423__$1);

return statearr_30446;
})();
if(cljs.core.truth_(inst_30424)){
var statearr_30447_30479 = state_30437__$1;
(statearr_30447_30479[(1)] = (13));

} else {
var statearr_30448_30480 = state_30437__$1;
(statearr_30448_30480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (2))){
var inst_30400 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30401 = (0);
var state_30437__$1 = (function (){var statearr_30449 = state_30437;
(statearr_30449[(9)] = inst_30400);

(statearr_30449[(7)] = inst_30401);

return statearr_30449;
})();
var statearr_30450_30481 = state_30437__$1;
(statearr_30450_30481[(2)] = null);

(statearr_30450_30481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (11))){
var inst_30401 = (state_30437[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30437,(10),Object,null,(9));
var inst_30410 = chs__$1.call(null,inst_30401);
var inst_30411 = done.call(null,inst_30401);
var inst_30412 = cljs.core.async.take_BANG_.call(null,inst_30410,inst_30411);
var state_30437__$1 = state_30437;
var statearr_30451_30482 = state_30437__$1;
(statearr_30451_30482[(2)] = inst_30412);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (9))){
var inst_30401 = (state_30437[(7)]);
var inst_30414 = (state_30437[(2)]);
var inst_30415 = (inst_30401 + (1));
var inst_30401__$1 = inst_30415;
var state_30437__$1 = (function (){var statearr_30452 = state_30437;
(statearr_30452[(10)] = inst_30414);

(statearr_30452[(7)] = inst_30401__$1);

return statearr_30452;
})();
var statearr_30453_30483 = state_30437__$1;
(statearr_30453_30483[(2)] = null);

(statearr_30453_30483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (5))){
var inst_30421 = (state_30437[(2)]);
var state_30437__$1 = (function (){var statearr_30454 = state_30437;
(statearr_30454[(11)] = inst_30421);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30437__$1,(12),dchan);
} else {
if((state_val_30438 === (14))){
var inst_30423 = (state_30437[(8)]);
var inst_30428 = cljs.core.apply.call(null,f,inst_30423);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30437__$1,(16),out,inst_30428);
} else {
if((state_val_30438 === (16))){
var inst_30430 = (state_30437[(2)]);
var state_30437__$1 = (function (){var statearr_30455 = state_30437;
(statearr_30455[(12)] = inst_30430);

return statearr_30455;
})();
var statearr_30456_30484 = state_30437__$1;
(statearr_30456_30484[(2)] = null);

(statearr_30456_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (10))){
var inst_30405 = (state_30437[(2)]);
var inst_30406 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30437__$1 = (function (){var statearr_30457 = state_30437;
(statearr_30457[(13)] = inst_30405);

return statearr_30457;
})();
var statearr_30458_30485 = state_30437__$1;
(statearr_30458_30485[(2)] = inst_30406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (8))){
var inst_30419 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30459_30486 = state_30437__$1;
(statearr_30459_30486[(2)] = inst_30419);

(statearr_30459_30486[(1)] = (5));


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
});})(c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20881__auto__,c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30437){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__20885__auto__ = e30464;
var statearr_30465_30487 = state_30437;
(statearr_30465_30487[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30437;
state_30437 = G__30488;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20948__auto__ = (function (){var statearr_30466 = f__20947__auto__.call(null);
(statearr_30466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30471);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30471,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30490 = [];
var len__17433__auto___30546 = arguments.length;
var i__17434__auto___30547 = (0);
while(true){
if((i__17434__auto___30547 < len__17433__auto___30546)){
args30490.push((arguments[i__17434__auto___30547]));

var G__30548 = (i__17434__auto___30547 + (1));
i__17434__auto___30547 = G__30548;
continue;
} else {
}
break;
}

var G__30492 = args30490.length;
switch (G__30492) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30490.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30550,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30550,out){
return (function (state_30522){
var state_val_30523 = (state_30522[(1)]);
if((state_val_30523 === (7))){
var inst_30502 = (state_30522[(7)]);
var inst_30501 = (state_30522[(8)]);
var inst_30501__$1 = (state_30522[(2)]);
var inst_30502__$1 = cljs.core.nth.call(null,inst_30501__$1,(0),null);
var inst_30503 = cljs.core.nth.call(null,inst_30501__$1,(1),null);
var inst_30504 = (inst_30502__$1 == null);
var state_30522__$1 = (function (){var statearr_30524 = state_30522;
(statearr_30524[(9)] = inst_30503);

(statearr_30524[(7)] = inst_30502__$1);

(statearr_30524[(8)] = inst_30501__$1);

return statearr_30524;
})();
if(cljs.core.truth_(inst_30504)){
var statearr_30525_30551 = state_30522__$1;
(statearr_30525_30551[(1)] = (8));

} else {
var statearr_30526_30552 = state_30522__$1;
(statearr_30526_30552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (1))){
var inst_30493 = cljs.core.vec.call(null,chs);
var inst_30494 = inst_30493;
var state_30522__$1 = (function (){var statearr_30527 = state_30522;
(statearr_30527[(10)] = inst_30494);

return statearr_30527;
})();
var statearr_30528_30553 = state_30522__$1;
(statearr_30528_30553[(2)] = null);

(statearr_30528_30553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (4))){
var inst_30494 = (state_30522[(10)]);
var state_30522__$1 = state_30522;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30522__$1,(7),inst_30494);
} else {
if((state_val_30523 === (6))){
var inst_30518 = (state_30522[(2)]);
var state_30522__$1 = state_30522;
var statearr_30529_30554 = state_30522__$1;
(statearr_30529_30554[(2)] = inst_30518);

(statearr_30529_30554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (3))){
var inst_30520 = (state_30522[(2)]);
var state_30522__$1 = state_30522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30522__$1,inst_30520);
} else {
if((state_val_30523 === (2))){
var inst_30494 = (state_30522[(10)]);
var inst_30496 = cljs.core.count.call(null,inst_30494);
var inst_30497 = (inst_30496 > (0));
var state_30522__$1 = state_30522;
if(cljs.core.truth_(inst_30497)){
var statearr_30531_30555 = state_30522__$1;
(statearr_30531_30555[(1)] = (4));

} else {
var statearr_30532_30556 = state_30522__$1;
(statearr_30532_30556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (11))){
var inst_30494 = (state_30522[(10)]);
var inst_30511 = (state_30522[(2)]);
var tmp30530 = inst_30494;
var inst_30494__$1 = tmp30530;
var state_30522__$1 = (function (){var statearr_30533 = state_30522;
(statearr_30533[(11)] = inst_30511);

(statearr_30533[(10)] = inst_30494__$1);

return statearr_30533;
})();
var statearr_30534_30557 = state_30522__$1;
(statearr_30534_30557[(2)] = null);

(statearr_30534_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (9))){
var inst_30502 = (state_30522[(7)]);
var state_30522__$1 = state_30522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30522__$1,(11),out,inst_30502);
} else {
if((state_val_30523 === (5))){
var inst_30516 = cljs.core.async.close_BANG_.call(null,out);
var state_30522__$1 = state_30522;
var statearr_30535_30558 = state_30522__$1;
(statearr_30535_30558[(2)] = inst_30516);

(statearr_30535_30558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (10))){
var inst_30514 = (state_30522[(2)]);
var state_30522__$1 = state_30522;
var statearr_30536_30559 = state_30522__$1;
(statearr_30536_30559[(2)] = inst_30514);

(statearr_30536_30559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (8))){
var inst_30503 = (state_30522[(9)]);
var inst_30494 = (state_30522[(10)]);
var inst_30502 = (state_30522[(7)]);
var inst_30501 = (state_30522[(8)]);
var inst_30506 = (function (){var cs = inst_30494;
var vec__30499 = inst_30501;
var v = inst_30502;
var c = inst_30503;
return ((function (cs,vec__30499,v,c,inst_30503,inst_30494,inst_30502,inst_30501,state_val_30523,c__20946__auto___30550,out){
return (function (p1__30489_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30489_SHARP_);
});
;})(cs,vec__30499,v,c,inst_30503,inst_30494,inst_30502,inst_30501,state_val_30523,c__20946__auto___30550,out))
})();
var inst_30507 = cljs.core.filterv.call(null,inst_30506,inst_30494);
var inst_30494__$1 = inst_30507;
var state_30522__$1 = (function (){var statearr_30537 = state_30522;
(statearr_30537[(10)] = inst_30494__$1);

return statearr_30537;
})();
var statearr_30538_30560 = state_30522__$1;
(statearr_30538_30560[(2)] = null);

(statearr_30538_30560[(1)] = (2));


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
});})(c__20946__auto___30550,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30550,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30542 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30542[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30542[(1)] = (1));

return statearr_30542;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30522){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30543){if((e30543 instanceof Object)){
var ex__20885__auto__ = e30543;
var statearr_30544_30561 = state_30522;
(statearr_30544_30561[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30562 = state_30522;
state_30522 = G__30562;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30550,out))
})();
var state__20948__auto__ = (function (){var statearr_30545 = f__20947__auto__.call(null);
(statearr_30545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30550);

return statearr_30545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30550,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30563 = [];
var len__17433__auto___30612 = arguments.length;
var i__17434__auto___30613 = (0);
while(true){
if((i__17434__auto___30613 < len__17433__auto___30612)){
args30563.push((arguments[i__17434__auto___30613]));

var G__30614 = (i__17434__auto___30613 + (1));
i__17434__auto___30613 = G__30614;
continue;
} else {
}
break;
}

var G__30565 = args30563.length;
switch (G__30565) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30563.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30616,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30616,out){
return (function (state_30589){
var state_val_30590 = (state_30589[(1)]);
if((state_val_30590 === (7))){
var inst_30571 = (state_30589[(7)]);
var inst_30571__$1 = (state_30589[(2)]);
var inst_30572 = (inst_30571__$1 == null);
var inst_30573 = cljs.core.not.call(null,inst_30572);
var state_30589__$1 = (function (){var statearr_30591 = state_30589;
(statearr_30591[(7)] = inst_30571__$1);

return statearr_30591;
})();
if(inst_30573){
var statearr_30592_30617 = state_30589__$1;
(statearr_30592_30617[(1)] = (8));

} else {
var statearr_30593_30618 = state_30589__$1;
(statearr_30593_30618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (1))){
var inst_30566 = (0);
var state_30589__$1 = (function (){var statearr_30594 = state_30589;
(statearr_30594[(8)] = inst_30566);

return statearr_30594;
})();
var statearr_30595_30619 = state_30589__$1;
(statearr_30595_30619[(2)] = null);

(statearr_30595_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (4))){
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(7),ch);
} else {
if((state_val_30590 === (6))){
var inst_30584 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30596_30620 = state_30589__$1;
(statearr_30596_30620[(2)] = inst_30584);

(statearr_30596_30620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (3))){
var inst_30586 = (state_30589[(2)]);
var inst_30587 = cljs.core.async.close_BANG_.call(null,out);
var state_30589__$1 = (function (){var statearr_30597 = state_30589;
(statearr_30597[(9)] = inst_30586);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30589__$1,inst_30587);
} else {
if((state_val_30590 === (2))){
var inst_30566 = (state_30589[(8)]);
var inst_30568 = (inst_30566 < n);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30568)){
var statearr_30598_30621 = state_30589__$1;
(statearr_30598_30621[(1)] = (4));

} else {
var statearr_30599_30622 = state_30589__$1;
(statearr_30599_30622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (11))){
var inst_30566 = (state_30589[(8)]);
var inst_30576 = (state_30589[(2)]);
var inst_30577 = (inst_30566 + (1));
var inst_30566__$1 = inst_30577;
var state_30589__$1 = (function (){var statearr_30600 = state_30589;
(statearr_30600[(8)] = inst_30566__$1);

(statearr_30600[(10)] = inst_30576);

return statearr_30600;
})();
var statearr_30601_30623 = state_30589__$1;
(statearr_30601_30623[(2)] = null);

(statearr_30601_30623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (9))){
var state_30589__$1 = state_30589;
var statearr_30602_30624 = state_30589__$1;
(statearr_30602_30624[(2)] = null);

(statearr_30602_30624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (5))){
var state_30589__$1 = state_30589;
var statearr_30603_30625 = state_30589__$1;
(statearr_30603_30625[(2)] = null);

(statearr_30603_30625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (10))){
var inst_30581 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30604_30626 = state_30589__$1;
(statearr_30604_30626[(2)] = inst_30581);

(statearr_30604_30626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (8))){
var inst_30571 = (state_30589[(7)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30589__$1,(11),out,inst_30571);
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
});})(c__20946__auto___30616,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30616,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30608[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30608[(1)] = (1));

return statearr_30608;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30589){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object)){
var ex__20885__auto__ = e30609;
var statearr_30610_30627 = state_30589;
(statearr_30610_30627[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30628 = state_30589;
state_30589 = G__30628;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30616,out))
})();
var state__20948__auto__ = (function (){var statearr_30611 = f__20947__auto__.call(null);
(statearr_30611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30616);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30616,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30636 = (function (map_LT_,f,ch,meta30637){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30637 = meta30637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30638,meta30637__$1){
var self__ = this;
var _30638__$1 = this;
return (new cljs.core.async.t_cljs$core$async30636(self__.map_LT_,self__.f,self__.ch,meta30637__$1));
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30638){
var self__ = this;
var _30638__$1 = this;
return self__.meta30637;
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30639 = (function (map_LT_,f,ch,meta30637,_,fn1,meta30640){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30637 = meta30637;
this._ = _;
this.fn1 = fn1;
this.meta30640 = meta30640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30641,meta30640__$1){
var self__ = this;
var _30641__$1 = this;
return (new cljs.core.async.t_cljs$core$async30639(self__.map_LT_,self__.f,self__.ch,self__.meta30637,self__._,self__.fn1,meta30640__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30641){
var self__ = this;
var _30641__$1 = this;
return self__.meta30640;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30629_SHARP_){
return f1.call(null,(((p1__30629_SHARP_ == null))?null:self__.f.call(null,p1__30629_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30639.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30637","meta30637",-2049858785,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30636","cljs.core.async/t_cljs$core$async30636",-221576423,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30640","meta30640",-1647552450,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30639";

cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30639");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30639 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30639(map_LT___$1,f__$1,ch__$1,meta30637__$1,___$2,fn1__$1,meta30640){
return (new cljs.core.async.t_cljs$core$async30639(map_LT___$1,f__$1,ch__$1,meta30637__$1,___$2,fn1__$1,meta30640));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30639(self__.map_LT_,self__.f,self__.ch,self__.meta30637,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16363__auto__ = ret;
if(cljs.core.truth_(and__16363__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16363__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30637","meta30637",-2049858785,null)], null);
});

cljs.core.async.t_cljs$core$async30636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30636";

cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30636");
});

cljs.core.async.__GT_t_cljs$core$async30636 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30636(map_LT___$1,f__$1,ch__$1,meta30637){
return (new cljs.core.async.t_cljs$core$async30636(map_LT___$1,f__$1,ch__$1,meta30637));
});

}

return (new cljs.core.async.t_cljs$core$async30636(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30645 = (function (map_GT_,f,ch,meta30646){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30646 = meta30646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30647,meta30646__$1){
var self__ = this;
var _30647__$1 = this;
return (new cljs.core.async.t_cljs$core$async30645(self__.map_GT_,self__.f,self__.ch,meta30646__$1));
});

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30647){
var self__ = this;
var _30647__$1 = this;
return self__.meta30646;
});

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30646","meta30646",1221693894,null)], null);
});

cljs.core.async.t_cljs$core$async30645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30645";

cljs.core.async.t_cljs$core$async30645.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30645");
});

cljs.core.async.__GT_t_cljs$core$async30645 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30645(map_GT___$1,f__$1,ch__$1,meta30646){
return (new cljs.core.async.t_cljs$core$async30645(map_GT___$1,f__$1,ch__$1,meta30646));
});

}

return (new cljs.core.async.t_cljs$core$async30645(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30651 = (function (filter_GT_,p,ch,meta30652){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30652 = meta30652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30653,meta30652__$1){
var self__ = this;
var _30653__$1 = this;
return (new cljs.core.async.t_cljs$core$async30651(self__.filter_GT_,self__.p,self__.ch,meta30652__$1));
});

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30653){
var self__ = this;
var _30653__$1 = this;
return self__.meta30652;
});

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30652","meta30652",-1144005318,null)], null);
});

cljs.core.async.t_cljs$core$async30651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30651";

cljs.core.async.t_cljs$core$async30651.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30651");
});

cljs.core.async.__GT_t_cljs$core$async30651 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30651(filter_GT___$1,p__$1,ch__$1,meta30652){
return (new cljs.core.async.t_cljs$core$async30651(filter_GT___$1,p__$1,ch__$1,meta30652));
});

}

return (new cljs.core.async.t_cljs$core$async30651(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30654 = [];
var len__17433__auto___30698 = arguments.length;
var i__17434__auto___30699 = (0);
while(true){
if((i__17434__auto___30699 < len__17433__auto___30698)){
args30654.push((arguments[i__17434__auto___30699]));

var G__30700 = (i__17434__auto___30699 + (1));
i__17434__auto___30699 = G__30700;
continue;
} else {
}
break;
}

var G__30656 = args30654.length;
switch (G__30656) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30654.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30702,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30702,out){
return (function (state_30677){
var state_val_30678 = (state_30677[(1)]);
if((state_val_30678 === (7))){
var inst_30673 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30679_30703 = state_30677__$1;
(statearr_30679_30703[(2)] = inst_30673);

(statearr_30679_30703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (1))){
var state_30677__$1 = state_30677;
var statearr_30680_30704 = state_30677__$1;
(statearr_30680_30704[(2)] = null);

(statearr_30680_30704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (4))){
var inst_30659 = (state_30677[(7)]);
var inst_30659__$1 = (state_30677[(2)]);
var inst_30660 = (inst_30659__$1 == null);
var state_30677__$1 = (function (){var statearr_30681 = state_30677;
(statearr_30681[(7)] = inst_30659__$1);

return statearr_30681;
})();
if(cljs.core.truth_(inst_30660)){
var statearr_30682_30705 = state_30677__$1;
(statearr_30682_30705[(1)] = (5));

} else {
var statearr_30683_30706 = state_30677__$1;
(statearr_30683_30706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (6))){
var inst_30659 = (state_30677[(7)]);
var inst_30664 = p.call(null,inst_30659);
var state_30677__$1 = state_30677;
if(cljs.core.truth_(inst_30664)){
var statearr_30684_30707 = state_30677__$1;
(statearr_30684_30707[(1)] = (8));

} else {
var statearr_30685_30708 = state_30677__$1;
(statearr_30685_30708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (3))){
var inst_30675 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30677__$1,inst_30675);
} else {
if((state_val_30678 === (2))){
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30677__$1,(4),ch);
} else {
if((state_val_30678 === (11))){
var inst_30667 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30686_30709 = state_30677__$1;
(statearr_30686_30709[(2)] = inst_30667);

(statearr_30686_30709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (9))){
var state_30677__$1 = state_30677;
var statearr_30687_30710 = state_30677__$1;
(statearr_30687_30710[(2)] = null);

(statearr_30687_30710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (5))){
var inst_30662 = cljs.core.async.close_BANG_.call(null,out);
var state_30677__$1 = state_30677;
var statearr_30688_30711 = state_30677__$1;
(statearr_30688_30711[(2)] = inst_30662);

(statearr_30688_30711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (10))){
var inst_30670 = (state_30677[(2)]);
var state_30677__$1 = (function (){var statearr_30689 = state_30677;
(statearr_30689[(8)] = inst_30670);

return statearr_30689;
})();
var statearr_30690_30712 = state_30677__$1;
(statearr_30690_30712[(2)] = null);

(statearr_30690_30712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (8))){
var inst_30659 = (state_30677[(7)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30677__$1,(11),out,inst_30659);
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
});})(c__20946__auto___30702,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30702,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30677){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30695){if((e30695 instanceof Object)){
var ex__20885__auto__ = e30695;
var statearr_30696_30713 = state_30677;
(statearr_30696_30713[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30714 = state_30677;
state_30677 = G__30714;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30702,out))
})();
var state__20948__auto__ = (function (){var statearr_30697 = f__20947__auto__.call(null);
(statearr_30697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30702);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30702,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30715 = [];
var len__17433__auto___30718 = arguments.length;
var i__17434__auto___30719 = (0);
while(true){
if((i__17434__auto___30719 < len__17433__auto___30718)){
args30715.push((arguments[i__17434__auto___30719]));

var G__30720 = (i__17434__auto___30719 + (1));
i__17434__auto___30719 = G__30720;
continue;
} else {
}
break;
}

var G__30717 = args30715.length;
switch (G__30717) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30715.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_30887){
var state_val_30888 = (state_30887[(1)]);
if((state_val_30888 === (7))){
var inst_30883 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30889_30930 = state_30887__$1;
(statearr_30889_30930[(2)] = inst_30883);

(statearr_30889_30930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (20))){
var inst_30853 = (state_30887[(7)]);
var inst_30864 = (state_30887[(2)]);
var inst_30865 = cljs.core.next.call(null,inst_30853);
var inst_30839 = inst_30865;
var inst_30840 = null;
var inst_30841 = (0);
var inst_30842 = (0);
var state_30887__$1 = (function (){var statearr_30890 = state_30887;
(statearr_30890[(8)] = inst_30841);

(statearr_30890[(9)] = inst_30864);

(statearr_30890[(10)] = inst_30842);

(statearr_30890[(11)] = inst_30840);

(statearr_30890[(12)] = inst_30839);

return statearr_30890;
})();
var statearr_30891_30931 = state_30887__$1;
(statearr_30891_30931[(2)] = null);

(statearr_30891_30931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (1))){
var state_30887__$1 = state_30887;
var statearr_30892_30932 = state_30887__$1;
(statearr_30892_30932[(2)] = null);

(statearr_30892_30932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (4))){
var inst_30828 = (state_30887[(13)]);
var inst_30828__$1 = (state_30887[(2)]);
var inst_30829 = (inst_30828__$1 == null);
var state_30887__$1 = (function (){var statearr_30893 = state_30887;
(statearr_30893[(13)] = inst_30828__$1);

return statearr_30893;
})();
if(cljs.core.truth_(inst_30829)){
var statearr_30894_30933 = state_30887__$1;
(statearr_30894_30933[(1)] = (5));

} else {
var statearr_30895_30934 = state_30887__$1;
(statearr_30895_30934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (15))){
var state_30887__$1 = state_30887;
var statearr_30899_30935 = state_30887__$1;
(statearr_30899_30935[(2)] = null);

(statearr_30899_30935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (21))){
var state_30887__$1 = state_30887;
var statearr_30900_30936 = state_30887__$1;
(statearr_30900_30936[(2)] = null);

(statearr_30900_30936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (13))){
var inst_30841 = (state_30887[(8)]);
var inst_30842 = (state_30887[(10)]);
var inst_30840 = (state_30887[(11)]);
var inst_30839 = (state_30887[(12)]);
var inst_30849 = (state_30887[(2)]);
var inst_30850 = (inst_30842 + (1));
var tmp30896 = inst_30841;
var tmp30897 = inst_30840;
var tmp30898 = inst_30839;
var inst_30839__$1 = tmp30898;
var inst_30840__$1 = tmp30897;
var inst_30841__$1 = tmp30896;
var inst_30842__$1 = inst_30850;
var state_30887__$1 = (function (){var statearr_30901 = state_30887;
(statearr_30901[(8)] = inst_30841__$1);

(statearr_30901[(14)] = inst_30849);

(statearr_30901[(10)] = inst_30842__$1);

(statearr_30901[(11)] = inst_30840__$1);

(statearr_30901[(12)] = inst_30839__$1);

return statearr_30901;
})();
var statearr_30902_30937 = state_30887__$1;
(statearr_30902_30937[(2)] = null);

(statearr_30902_30937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (22))){
var state_30887__$1 = state_30887;
var statearr_30903_30938 = state_30887__$1;
(statearr_30903_30938[(2)] = null);

(statearr_30903_30938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (6))){
var inst_30828 = (state_30887[(13)]);
var inst_30837 = f.call(null,inst_30828);
var inst_30838 = cljs.core.seq.call(null,inst_30837);
var inst_30839 = inst_30838;
var inst_30840 = null;
var inst_30841 = (0);
var inst_30842 = (0);
var state_30887__$1 = (function (){var statearr_30904 = state_30887;
(statearr_30904[(8)] = inst_30841);

(statearr_30904[(10)] = inst_30842);

(statearr_30904[(11)] = inst_30840);

(statearr_30904[(12)] = inst_30839);

return statearr_30904;
})();
var statearr_30905_30939 = state_30887__$1;
(statearr_30905_30939[(2)] = null);

(statearr_30905_30939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (17))){
var inst_30853 = (state_30887[(7)]);
var inst_30857 = cljs.core.chunk_first.call(null,inst_30853);
var inst_30858 = cljs.core.chunk_rest.call(null,inst_30853);
var inst_30859 = cljs.core.count.call(null,inst_30857);
var inst_30839 = inst_30858;
var inst_30840 = inst_30857;
var inst_30841 = inst_30859;
var inst_30842 = (0);
var state_30887__$1 = (function (){var statearr_30906 = state_30887;
(statearr_30906[(8)] = inst_30841);

(statearr_30906[(10)] = inst_30842);

(statearr_30906[(11)] = inst_30840);

(statearr_30906[(12)] = inst_30839);

return statearr_30906;
})();
var statearr_30907_30940 = state_30887__$1;
(statearr_30907_30940[(2)] = null);

(statearr_30907_30940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (3))){
var inst_30885 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30887__$1,inst_30885);
} else {
if((state_val_30888 === (12))){
var inst_30873 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30908_30941 = state_30887__$1;
(statearr_30908_30941[(2)] = inst_30873);

(statearr_30908_30941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (2))){
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30887__$1,(4),in$);
} else {
if((state_val_30888 === (23))){
var inst_30881 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30909_30942 = state_30887__$1;
(statearr_30909_30942[(2)] = inst_30881);

(statearr_30909_30942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (19))){
var inst_30868 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30910_30943 = state_30887__$1;
(statearr_30910_30943[(2)] = inst_30868);

(statearr_30910_30943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (11))){
var inst_30839 = (state_30887[(12)]);
var inst_30853 = (state_30887[(7)]);
var inst_30853__$1 = cljs.core.seq.call(null,inst_30839);
var state_30887__$1 = (function (){var statearr_30911 = state_30887;
(statearr_30911[(7)] = inst_30853__$1);

return statearr_30911;
})();
if(inst_30853__$1){
var statearr_30912_30944 = state_30887__$1;
(statearr_30912_30944[(1)] = (14));

} else {
var statearr_30913_30945 = state_30887__$1;
(statearr_30913_30945[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (9))){
var inst_30875 = (state_30887[(2)]);
var inst_30876 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30887__$1 = (function (){var statearr_30914 = state_30887;
(statearr_30914[(15)] = inst_30875);

return statearr_30914;
})();
if(cljs.core.truth_(inst_30876)){
var statearr_30915_30946 = state_30887__$1;
(statearr_30915_30946[(1)] = (21));

} else {
var statearr_30916_30947 = state_30887__$1;
(statearr_30916_30947[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (5))){
var inst_30831 = cljs.core.async.close_BANG_.call(null,out);
var state_30887__$1 = state_30887;
var statearr_30917_30948 = state_30887__$1;
(statearr_30917_30948[(2)] = inst_30831);

(statearr_30917_30948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (14))){
var inst_30853 = (state_30887[(7)]);
var inst_30855 = cljs.core.chunked_seq_QMARK_.call(null,inst_30853);
var state_30887__$1 = state_30887;
if(inst_30855){
var statearr_30918_30949 = state_30887__$1;
(statearr_30918_30949[(1)] = (17));

} else {
var statearr_30919_30950 = state_30887__$1;
(statearr_30919_30950[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (16))){
var inst_30871 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30920_30951 = state_30887__$1;
(statearr_30920_30951[(2)] = inst_30871);

(statearr_30920_30951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (10))){
var inst_30842 = (state_30887[(10)]);
var inst_30840 = (state_30887[(11)]);
var inst_30847 = cljs.core._nth.call(null,inst_30840,inst_30842);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30887__$1,(13),out,inst_30847);
} else {
if((state_val_30888 === (18))){
var inst_30853 = (state_30887[(7)]);
var inst_30862 = cljs.core.first.call(null,inst_30853);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30887__$1,(20),out,inst_30862);
} else {
if((state_val_30888 === (8))){
var inst_30841 = (state_30887[(8)]);
var inst_30842 = (state_30887[(10)]);
var inst_30844 = (inst_30842 < inst_30841);
var inst_30845 = inst_30844;
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30845)){
var statearr_30921_30952 = state_30887__$1;
(statearr_30921_30952[(1)] = (10));

} else {
var statearr_30922_30953 = state_30887__$1;
(statearr_30922_30953[(1)] = (11));

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
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_30926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30926[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__);

(statearr_30926[(1)] = (1));

return statearr_30926;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1 = (function (state_30887){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30927){if((e30927 instanceof Object)){
var ex__20885__auto__ = e30927;
var statearr_30928_30954 = state_30887;
(statearr_30928_30954[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30955 = state_30887;
state_30887 = G__30955;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_30929 = f__20947__auto__.call(null);
(statearr_30929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_30929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30956 = [];
var len__17433__auto___30959 = arguments.length;
var i__17434__auto___30960 = (0);
while(true){
if((i__17434__auto___30960 < len__17433__auto___30959)){
args30956.push((arguments[i__17434__auto___30960]));

var G__30961 = (i__17434__auto___30960 + (1));
i__17434__auto___30960 = G__30961;
continue;
} else {
}
break;
}

var G__30958 = args30956.length;
switch (G__30958) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30956.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30963 = [];
var len__17433__auto___30966 = arguments.length;
var i__17434__auto___30967 = (0);
while(true){
if((i__17434__auto___30967 < len__17433__auto___30966)){
args30963.push((arguments[i__17434__auto___30967]));

var G__30968 = (i__17434__auto___30967 + (1));
i__17434__auto___30967 = G__30968;
continue;
} else {
}
break;
}

var G__30965 = args30963.length;
switch (G__30965) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30963.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30970 = [];
var len__17433__auto___31021 = arguments.length;
var i__17434__auto___31022 = (0);
while(true){
if((i__17434__auto___31022 < len__17433__auto___31021)){
args30970.push((arguments[i__17434__auto___31022]));

var G__31023 = (i__17434__auto___31022 + (1));
i__17434__auto___31022 = G__31023;
continue;
} else {
}
break;
}

var G__30972 = args30970.length;
switch (G__30972) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30970.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31025,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31025,out){
return (function (state_30996){
var state_val_30997 = (state_30996[(1)]);
if((state_val_30997 === (7))){
var inst_30991 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_30998_31026 = state_30996__$1;
(statearr_30998_31026[(2)] = inst_30991);

(statearr_30998_31026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (1))){
var inst_30973 = null;
var state_30996__$1 = (function (){var statearr_30999 = state_30996;
(statearr_30999[(7)] = inst_30973);

return statearr_30999;
})();
var statearr_31000_31027 = state_30996__$1;
(statearr_31000_31027[(2)] = null);

(statearr_31000_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (4))){
var inst_30976 = (state_30996[(8)]);
var inst_30976__$1 = (state_30996[(2)]);
var inst_30977 = (inst_30976__$1 == null);
var inst_30978 = cljs.core.not.call(null,inst_30977);
var state_30996__$1 = (function (){var statearr_31001 = state_30996;
(statearr_31001[(8)] = inst_30976__$1);

return statearr_31001;
})();
if(inst_30978){
var statearr_31002_31028 = state_30996__$1;
(statearr_31002_31028[(1)] = (5));

} else {
var statearr_31003_31029 = state_30996__$1;
(statearr_31003_31029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (6))){
var state_30996__$1 = state_30996;
var statearr_31004_31030 = state_30996__$1;
(statearr_31004_31030[(2)] = null);

(statearr_31004_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (3))){
var inst_30993 = (state_30996[(2)]);
var inst_30994 = cljs.core.async.close_BANG_.call(null,out);
var state_30996__$1 = (function (){var statearr_31005 = state_30996;
(statearr_31005[(9)] = inst_30993);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30996__$1,inst_30994);
} else {
if((state_val_30997 === (2))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30996__$1,(4),ch);
} else {
if((state_val_30997 === (11))){
var inst_30976 = (state_30996[(8)]);
var inst_30985 = (state_30996[(2)]);
var inst_30973 = inst_30976;
var state_30996__$1 = (function (){var statearr_31006 = state_30996;
(statearr_31006[(10)] = inst_30985);

(statearr_31006[(7)] = inst_30973);

return statearr_31006;
})();
var statearr_31007_31031 = state_30996__$1;
(statearr_31007_31031[(2)] = null);

(statearr_31007_31031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (9))){
var inst_30976 = (state_30996[(8)]);
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30996__$1,(11),out,inst_30976);
} else {
if((state_val_30997 === (5))){
var inst_30976 = (state_30996[(8)]);
var inst_30973 = (state_30996[(7)]);
var inst_30980 = cljs.core._EQ_.call(null,inst_30976,inst_30973);
var state_30996__$1 = state_30996;
if(inst_30980){
var statearr_31009_31032 = state_30996__$1;
(statearr_31009_31032[(1)] = (8));

} else {
var statearr_31010_31033 = state_30996__$1;
(statearr_31010_31033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (10))){
var inst_30988 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31011_31034 = state_30996__$1;
(statearr_31011_31034[(2)] = inst_30988);

(statearr_31011_31034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (8))){
var inst_30973 = (state_30996[(7)]);
var tmp31008 = inst_30973;
var inst_30973__$1 = tmp31008;
var state_30996__$1 = (function (){var statearr_31012 = state_30996;
(statearr_31012[(7)] = inst_30973__$1);

return statearr_31012;
})();
var statearr_31013_31035 = state_30996__$1;
(statearr_31013_31035[(2)] = null);

(statearr_31013_31035[(1)] = (2));


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
});})(c__20946__auto___31025,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31025,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31017[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31017[(1)] = (1));

return statearr_31017;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30996){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31018){if((e31018 instanceof Object)){
var ex__20885__auto__ = e31018;
var statearr_31019_31036 = state_30996;
(statearr_31019_31036[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_30996;
state_30996 = G__31037;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31025,out))
})();
var state__20948__auto__ = (function (){var statearr_31020 = f__20947__auto__.call(null);
(statearr_31020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31025);

return statearr_31020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31025,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31038 = [];
var len__17433__auto___31108 = arguments.length;
var i__17434__auto___31109 = (0);
while(true){
if((i__17434__auto___31109 < len__17433__auto___31108)){
args31038.push((arguments[i__17434__auto___31109]));

var G__31110 = (i__17434__auto___31109 + (1));
i__17434__auto___31109 = G__31110;
continue;
} else {
}
break;
}

var G__31040 = args31038.length;
switch (G__31040) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31038.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31112,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31112,out){
return (function (state_31078){
var state_val_31079 = (state_31078[(1)]);
if((state_val_31079 === (7))){
var inst_31074 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31080_31113 = state_31078__$1;
(statearr_31080_31113[(2)] = inst_31074);

(statearr_31080_31113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (1))){
var inst_31041 = (new Array(n));
var inst_31042 = inst_31041;
var inst_31043 = (0);
var state_31078__$1 = (function (){var statearr_31081 = state_31078;
(statearr_31081[(7)] = inst_31043);

(statearr_31081[(8)] = inst_31042);

return statearr_31081;
})();
var statearr_31082_31114 = state_31078__$1;
(statearr_31082_31114[(2)] = null);

(statearr_31082_31114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (4))){
var inst_31046 = (state_31078[(9)]);
var inst_31046__$1 = (state_31078[(2)]);
var inst_31047 = (inst_31046__$1 == null);
var inst_31048 = cljs.core.not.call(null,inst_31047);
var state_31078__$1 = (function (){var statearr_31083 = state_31078;
(statearr_31083[(9)] = inst_31046__$1);

return statearr_31083;
})();
if(inst_31048){
var statearr_31084_31115 = state_31078__$1;
(statearr_31084_31115[(1)] = (5));

} else {
var statearr_31085_31116 = state_31078__$1;
(statearr_31085_31116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (15))){
var inst_31068 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31086_31117 = state_31078__$1;
(statearr_31086_31117[(2)] = inst_31068);

(statearr_31086_31117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (13))){
var state_31078__$1 = state_31078;
var statearr_31087_31118 = state_31078__$1;
(statearr_31087_31118[(2)] = null);

(statearr_31087_31118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (6))){
var inst_31043 = (state_31078[(7)]);
var inst_31064 = (inst_31043 > (0));
var state_31078__$1 = state_31078;
if(cljs.core.truth_(inst_31064)){
var statearr_31088_31119 = state_31078__$1;
(statearr_31088_31119[(1)] = (12));

} else {
var statearr_31089_31120 = state_31078__$1;
(statearr_31089_31120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (3))){
var inst_31076 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31078__$1,inst_31076);
} else {
if((state_val_31079 === (12))){
var inst_31042 = (state_31078[(8)]);
var inst_31066 = cljs.core.vec.call(null,inst_31042);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31078__$1,(15),out,inst_31066);
} else {
if((state_val_31079 === (2))){
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(4),ch);
} else {
if((state_val_31079 === (11))){
var inst_31058 = (state_31078[(2)]);
var inst_31059 = (new Array(n));
var inst_31042 = inst_31059;
var inst_31043 = (0);
var state_31078__$1 = (function (){var statearr_31090 = state_31078;
(statearr_31090[(10)] = inst_31058);

(statearr_31090[(7)] = inst_31043);

(statearr_31090[(8)] = inst_31042);

return statearr_31090;
})();
var statearr_31091_31121 = state_31078__$1;
(statearr_31091_31121[(2)] = null);

(statearr_31091_31121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (9))){
var inst_31042 = (state_31078[(8)]);
var inst_31056 = cljs.core.vec.call(null,inst_31042);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31078__$1,(11),out,inst_31056);
} else {
if((state_val_31079 === (5))){
var inst_31046 = (state_31078[(9)]);
var inst_31043 = (state_31078[(7)]);
var inst_31051 = (state_31078[(11)]);
var inst_31042 = (state_31078[(8)]);
var inst_31050 = (inst_31042[inst_31043] = inst_31046);
var inst_31051__$1 = (inst_31043 + (1));
var inst_31052 = (inst_31051__$1 < n);
var state_31078__$1 = (function (){var statearr_31092 = state_31078;
(statearr_31092[(11)] = inst_31051__$1);

(statearr_31092[(12)] = inst_31050);

return statearr_31092;
})();
if(cljs.core.truth_(inst_31052)){
var statearr_31093_31122 = state_31078__$1;
(statearr_31093_31122[(1)] = (8));

} else {
var statearr_31094_31123 = state_31078__$1;
(statearr_31094_31123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (14))){
var inst_31071 = (state_31078[(2)]);
var inst_31072 = cljs.core.async.close_BANG_.call(null,out);
var state_31078__$1 = (function (){var statearr_31096 = state_31078;
(statearr_31096[(13)] = inst_31071);

return statearr_31096;
})();
var statearr_31097_31124 = state_31078__$1;
(statearr_31097_31124[(2)] = inst_31072);

(statearr_31097_31124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (10))){
var inst_31062 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31098_31125 = state_31078__$1;
(statearr_31098_31125[(2)] = inst_31062);

(statearr_31098_31125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (8))){
var inst_31051 = (state_31078[(11)]);
var inst_31042 = (state_31078[(8)]);
var tmp31095 = inst_31042;
var inst_31042__$1 = tmp31095;
var inst_31043 = inst_31051;
var state_31078__$1 = (function (){var statearr_31099 = state_31078;
(statearr_31099[(7)] = inst_31043);

(statearr_31099[(8)] = inst_31042__$1);

return statearr_31099;
})();
var statearr_31100_31126 = state_31078__$1;
(statearr_31100_31126[(2)] = null);

(statearr_31100_31126[(1)] = (2));


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
});})(c__20946__auto___31112,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31112,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31104[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31104[(1)] = (1));

return statearr_31104;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_31078){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_31078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object)){
var ex__20885__auto__ = e31105;
var statearr_31106_31127 = state_31078;
(statearr_31106_31127[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31128 = state_31078;
state_31078 = G__31128;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_31078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_31078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31112,out))
})();
var state__20948__auto__ = (function (){var statearr_31107 = f__20947__auto__.call(null);
(statearr_31107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31112);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31112,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31129 = [];
var len__17433__auto___31203 = arguments.length;
var i__17434__auto___31204 = (0);
while(true){
if((i__17434__auto___31204 < len__17433__auto___31203)){
args31129.push((arguments[i__17434__auto___31204]));

var G__31205 = (i__17434__auto___31204 + (1));
i__17434__auto___31204 = G__31205;
continue;
} else {
}
break;
}

var G__31131 = args31129.length;
switch (G__31131) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31129.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31207,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31207,out){
return (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (7))){
var inst_31169 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31175_31208 = state_31173__$1;
(statearr_31175_31208[(2)] = inst_31169);

(statearr_31175_31208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (1))){
var inst_31132 = [];
var inst_31133 = inst_31132;
var inst_31134 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31173__$1 = (function (){var statearr_31176 = state_31173;
(statearr_31176[(7)] = inst_31133);

(statearr_31176[(8)] = inst_31134);

return statearr_31176;
})();
var statearr_31177_31209 = state_31173__$1;
(statearr_31177_31209[(2)] = null);

(statearr_31177_31209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (4))){
var inst_31137 = (state_31173[(9)]);
var inst_31137__$1 = (state_31173[(2)]);
var inst_31138 = (inst_31137__$1 == null);
var inst_31139 = cljs.core.not.call(null,inst_31138);
var state_31173__$1 = (function (){var statearr_31178 = state_31173;
(statearr_31178[(9)] = inst_31137__$1);

return statearr_31178;
})();
if(inst_31139){
var statearr_31179_31210 = state_31173__$1;
(statearr_31179_31210[(1)] = (5));

} else {
var statearr_31180_31211 = state_31173__$1;
(statearr_31180_31211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (15))){
var inst_31163 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31181_31212 = state_31173__$1;
(statearr_31181_31212[(2)] = inst_31163);

(statearr_31181_31212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (13))){
var state_31173__$1 = state_31173;
var statearr_31182_31213 = state_31173__$1;
(statearr_31182_31213[(2)] = null);

(statearr_31182_31213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (6))){
var inst_31133 = (state_31173[(7)]);
var inst_31158 = inst_31133.length;
var inst_31159 = (inst_31158 > (0));
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31159)){
var statearr_31183_31214 = state_31173__$1;
(statearr_31183_31214[(1)] = (12));

} else {
var statearr_31184_31215 = state_31173__$1;
(statearr_31184_31215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (3))){
var inst_31171 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31173__$1,inst_31171);
} else {
if((state_val_31174 === (12))){
var inst_31133 = (state_31173[(7)]);
var inst_31161 = cljs.core.vec.call(null,inst_31133);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31173__$1,(15),out,inst_31161);
} else {
if((state_val_31174 === (2))){
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31173__$1,(4),ch);
} else {
if((state_val_31174 === (11))){
var inst_31137 = (state_31173[(9)]);
var inst_31141 = (state_31173[(10)]);
var inst_31151 = (state_31173[(2)]);
var inst_31152 = [];
var inst_31153 = inst_31152.push(inst_31137);
var inst_31133 = inst_31152;
var inst_31134 = inst_31141;
var state_31173__$1 = (function (){var statearr_31185 = state_31173;
(statearr_31185[(7)] = inst_31133);

(statearr_31185[(8)] = inst_31134);

(statearr_31185[(11)] = inst_31153);

(statearr_31185[(12)] = inst_31151);

return statearr_31185;
})();
var statearr_31186_31216 = state_31173__$1;
(statearr_31186_31216[(2)] = null);

(statearr_31186_31216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (9))){
var inst_31133 = (state_31173[(7)]);
var inst_31149 = cljs.core.vec.call(null,inst_31133);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31173__$1,(11),out,inst_31149);
} else {
if((state_val_31174 === (5))){
var inst_31137 = (state_31173[(9)]);
var inst_31134 = (state_31173[(8)]);
var inst_31141 = (state_31173[(10)]);
var inst_31141__$1 = f.call(null,inst_31137);
var inst_31142 = cljs.core._EQ_.call(null,inst_31141__$1,inst_31134);
var inst_31143 = cljs.core.keyword_identical_QMARK_.call(null,inst_31134,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31144 = (inst_31142) || (inst_31143);
var state_31173__$1 = (function (){var statearr_31187 = state_31173;
(statearr_31187[(10)] = inst_31141__$1);

return statearr_31187;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31188_31217 = state_31173__$1;
(statearr_31188_31217[(1)] = (8));

} else {
var statearr_31189_31218 = state_31173__$1;
(statearr_31189_31218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (14))){
var inst_31166 = (state_31173[(2)]);
var inst_31167 = cljs.core.async.close_BANG_.call(null,out);
var state_31173__$1 = (function (){var statearr_31191 = state_31173;
(statearr_31191[(13)] = inst_31166);

return statearr_31191;
})();
var statearr_31192_31219 = state_31173__$1;
(statearr_31192_31219[(2)] = inst_31167);

(statearr_31192_31219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (10))){
var inst_31156 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31193_31220 = state_31173__$1;
(statearr_31193_31220[(2)] = inst_31156);

(statearr_31193_31220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (8))){
var inst_31133 = (state_31173[(7)]);
var inst_31137 = (state_31173[(9)]);
var inst_31141 = (state_31173[(10)]);
var inst_31146 = inst_31133.push(inst_31137);
var tmp31190 = inst_31133;
var inst_31133__$1 = tmp31190;
var inst_31134 = inst_31141;
var state_31173__$1 = (function (){var statearr_31194 = state_31173;
(statearr_31194[(7)] = inst_31133__$1);

(statearr_31194[(14)] = inst_31146);

(statearr_31194[(8)] = inst_31134);

return statearr_31194;
})();
var statearr_31195_31221 = state_31173__$1;
(statearr_31195_31221[(2)] = null);

(statearr_31195_31221[(1)] = (2));


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
});})(c__20946__auto___31207,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31207,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31199[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31199[(1)] = (1));

return statearr_31199;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_31173){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_31173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31200){if((e31200 instanceof Object)){
var ex__20885__auto__ = e31200;
var statearr_31201_31222 = state_31173;
(statearr_31201_31222[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31223 = state_31173;
state_31173 = G__31223;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31207,out))
})();
var state__20948__auto__ = (function (){var statearr_31202 = f__20947__auto__.call(null);
(statearr_31202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31207);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31207,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map