/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {
  "use strict";

  Drupal.behaviors.d8test = {
    attach: function(context, settings) {
      console.log("dans manage-show-dates.js");
      const dates = [];
      let first_date = "";
      let last_date = "";
      const nb_dates = $("#detail-show .datetime").length;
      $("#detail-show .datetime").each(function(index) {
        console.log("date : ", $(this).attr("datetime"));
        const date = new Date($(this).attr("datetime"));
        if (index == 0) first_date = date;
        if (index == nb_dates - 1) last_date = date;
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        };
        $(this).text(date.toLocaleDateString("fr-FR", options));
      });
      if (nb_dates > 1) {
        const txt_dates_headband = "";
        const options = {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        };
        first_date = first_date.toLocaleDateString("fr-FR", options);
        last_date = last_date.toLocaleDateString("fr-FR", options);
        $("#hover-image .field--type-datetime").text(
          first_date + " > " + last_date
        );
      }
    }
  };
})(jQuery, Drupal);
