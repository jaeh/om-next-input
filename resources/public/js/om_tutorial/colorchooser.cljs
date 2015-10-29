(ns om-tutorial.colorchooser
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [om-tutorial.appstate :as app]))

(defn read [{:keys [app/state] :as env} key params]
  (let [st @app/state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [app/state] :as env} key params]
  (js/console.log key params)
  (if (= 'set key)
    {:value [:color]
     :action #(swap! app/state update-in [:color] "#ff00ff")}
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
                  :onChange (fn [e] (om/transact! this '[(set)]))}]]))))
