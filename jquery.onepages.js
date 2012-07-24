(function($) {
    $.extend($, {
        "onepages": {
            "show": function(root, targets) {
                var $root = $(root);
                targets = (typeof targets == "string") ? targets.split(/\s*,\s*/) : targets;
                console.log(targets);
                var effect = $root.hasClass("onepages-effect-fade") ? "fade" : (
                $root.hasClass("onepages-effect-slide") ? "slide" : null);
                $.each(targets, function(_, target) {
                    if (target.substr(0, 15) == "onepages-index-") {
                        if (effect == "fade") {
                            $root.children().eq(parseInt(target.substr(15))).fadeIn();
                        } else if (effect == "slide") {
                            $root.children().eq(parseInt(target.substr(15))).slideDown();
                        } else {
                            $root.children().eq(parseInt(target.substr(15))).show();
                        }
                    } else if (target.substr(0, 12) == "onepages-id-") {
                        if (effect == "fade") {
                            $("#" + target.substr(12)).fadeIn();
                        } else if (effect == "slide") {
                            $("#" + target.substr(12)).slideDown();
                        } else {
                            $("#" + target.substr(12)).show();
                        }
                    } else if (target.substr(0, 15) == "onepages-class-") {
                        if (effect == "fade") {
                            $root.children("." + target.substr(15)).fadeIn();
                        } else if (effect == "slide") {
                            $root.children("." + target.substr(15)).slideDown();
                        } else {
                            $root.children("." + target.substr(15)).show();
                        }
                    }
                });
            }
        }
    });
    $.fn.onepages = function(options) {
        var args = $.extend({
            hide: true,
            ctrols: [],
            effect: null
        }, options);
        return this.each(function() {
            var $this = $(this);
            if (args.hide) {
                $this.children().hide();
            }
            if (args.effect == "fade" || args.effect == "slide") {
                $this.addClass("onepages-effect-" + args.effect);
            }
            $.each(args.ctrls, function(_, ctrl) {
                $(ctrl[0]).bind(ctrl[1], function() {
                    $this.children().hide();
                    $.onepages.show($this, $(this).attr("class").split(/\s+/));
                });
            });
        });
    };
})(jQuery);