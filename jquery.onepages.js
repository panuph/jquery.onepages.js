(function($) {
    $.extend($, {
        "onepages": {
            "show": function(root, targets) {
                var $root = $(root);
                targets = (typeof targets == "string") ? targets.split(/\s*,\s*/) : targets;
                var effect = $root.hasClass("onepages-effect-fade") ? "fade" : (
                             $root.hasClass("onepages-effect-slide") ? "slide" : null);
                var index_key = "show-index-";
                var id_key = "show-id-";
                var class_key = "show-class-";
                $.each(targets, function() {
                    if (this.substr(0, index_key.length) == index_key) {
                        var index = parseInt(this.substr(index_key.length));
                        if (effect == "fade") {
                            $root.children().eq(index).fadeIn();
                        } else if (effect == "slide") {
                            $root.children().eq(index).slideDown();
                        } else {
                            $root.children().eq(index).show();
                        }
                    } else if (this.substr(0, id_key.length) == id_key) {
                        var id = this.substr(id_key.length);
                        if (effect == "fade") {
                            $("#" + id).fadeIn();
                        } else if (effect == "slide") {
                            $("#" + id).slideDown();
                        } else {
                            $("#" + id).show();
                        }
                    } else if (this.substr(0, class_key.length) == class_key) {
                        var cls = this.substr(class_key.length);
                        if (effect == "fade") {
                            $root.children("." + cls).fadeIn();
                        } else if (effect == "slide") {
                            $root.children("." + cls).slideDown();
                        } else {
                            $root.children("." + cls).show();
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
            $.each(args.ctrls, function() {
                $(this[0]).bind(this[1], function() {
                    $this.children().hide();
                    $.onepages.show($this, $(this).attr("class").split(/\s+/));
                });
            });
        });
    };
})(jQuery);
