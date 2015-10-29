(ns magic-ring.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [magic-ring.pixelshooter :as pixelshooter]
            [magic-ring.colorchooser :as colorchooser]))

(om/add-root! pixelshooter/reconciler pixelshooter/component (gdom/getElement "shooter"))
(om/add-root! colorchooser/reconciler colorchooser/component (gdom/getElement "color"))