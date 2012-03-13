// Extension to module core

(function ( name, definition ) {
    var theModule = definition(),
        hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;

    if ( hasDefine ) { // AMD Module
        define(theModule);
    } else if ( hasExports ) { // Node.js Module
        module.exports = theModule;
    } else { // Assign to common namespaces or simply the global object (window)

        // account for for flat-file/global module extensions
        var obj = null;
        var namespaces = name.split(".");
        var scope = (this.jQuery || this.ender || this.$ || this);
        for (var i = 0; i < namespaces.length; i++) {
            var packageName = namespaces[i];
            if (obj && i == namespaces.length - 1) {
                obj[packageName] = theModule;
            } else if (typeof scope[packageName] === "undefined") {
                scope[packageName] = {};
            }
            obj = scope[packageName];
        }

    }
})('core.plugin', function () {

    // Define your module here and return the public API.
    // This code could be easily adapted with the core to
    // allow for methods that overwrite and extend core functionality
    // in order to expand the highlight method to do more if you wish.
    return {
        setGreen: function ( el ) {
            highlight(el, 'green');
        },
        setRed: function ( el ) {
            highlight(el, errorColor);
        }
    };

});