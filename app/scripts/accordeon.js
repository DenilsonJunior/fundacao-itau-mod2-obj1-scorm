events.on("ready",function(){$(".container-accordeon").each(function(e,i){var n=$(i).find(".accordeon-title"),t=$(i).find(".accordeon-texto");$(i).attr("nextLiberate")&&$(i).attr("nextLiberate");n.find(".seta-container").addClass("animated infinite pulse"),n.on("click",function(){$(this).removeClass("animated infinite pulse");var e=$(this),i=(t.filter(":visible").slideUp(function(){$(this).prev(".accordeon-title").removeClass("is-opened")}),e.next(".accordeon-texto"));i.is(":visible")||i.slideDown(function(){e.addClass("is-opened")}),$(this).find(".seta-container").removeClass("animated infinite pulse"),$(this).addClass("open"),$(n).toArray().every(e=>$(e).hasClass("open"))&&$("body").trigger("nextLiberate")})})});
//# sourceMappingURL=accordeon.js.map
