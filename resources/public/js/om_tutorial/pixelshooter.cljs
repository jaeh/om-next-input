(ns om-tutorial.pixelshooter
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
  (if (= 'increment key)
    {:value [:count]
     :action #(swap! app/state update-in [:count] inc)}
    {:value :not-found}))

(defui component
  static om/IQuery
  (query [this]
    [:count])
  Object
  (render [this]
    (let [{:keys [count]} (om/props this)]
      (html
        [:div
         [:div
          [:span (str "Count: " count)]
          [:button {:onClick
                    (fn [e] (om/transact! this '[(increment)]))}
           "Click me!"]]]))))

(def reconciler
  (om/reconciler
    {:state app/state
     :parser (om/parser {:read read
                         :mutate mutate})}))