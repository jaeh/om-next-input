// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('om_tutorial.colorchooser');
goog.require('goog.dom');
goog.require('om_tutorial.pixelshooter');
goog.require('sablono.core');
goog.require('om.next');
om.next.add_root_BANG_.call(null,om_tutorial.pixelshooter.reconciler,om_tutorial.pixelshooter.component,goog.dom.getElement("shooter"));
om.next.add_root_BANG_.call(null,om_tutorial.colorchooser.reconciler,om_tutorial.colorchooser.component,goog.dom.getElement("color"));

//# sourceMappingURL=core.js.map