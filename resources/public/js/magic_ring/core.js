// Compiled by ClojureScript 1.7.145 {}
goog.provide('magic_ring.core');
goog.require('cljs.core');
goog.require('magic_ring.colorchooser');
goog.require('magic_ring.pixelshooter');
goog.require('goog.dom');
goog.require('sablono.core');
goog.require('om.next');
om.next.add_root_BANG_.call(null,magic_ring.pixelshooter.reconciler,magic_ring.pixelshooter.component,goog.dom.getElement("shooter"));
om.next.add_root_BANG_.call(null,magic_ring.colorchooser.reconciler,magic_ring.colorchooser.component,goog.dom.getElement("color"));

//# sourceMappingURL=core.js.map