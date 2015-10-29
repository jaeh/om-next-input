(ns magic-ring.colorchooser
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [magic-ring.appstate :as app]))

(defn read [{:keys [app/state] :as env} key params]
  (let [st @app/state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'color/set key)
    {:value [:color]
     :action #(swap! state assoc :color (-> params :color))}
    {:value :not-found}))

(def reconciler
  (om/reconciler
    {:state app/state
     :parser (om/parser {:read read
                         :mutate mutate})}))

(defui component
  static om/IQuery
  (query [this]
    [:color])
  Object
  (render [this]
    (let [{:keys [color]} (om/props this)]
      (html
        [:div
         [:span (str "Color: " color)]
         [:input {:type "color"
                  :value color
                  :onChange (fn [e]
                              (let [target (. e -target)]
                                (om/transact! this `[(color/set {:color ~(. target -value)})])))}]]))))
