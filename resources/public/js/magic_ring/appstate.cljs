(ns magic-ring.appstate)

(defonce state (atom {:count 0
                      :title "Magic Ring"
                      :color "#ff0000"}))