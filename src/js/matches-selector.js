// Matches Selector
var matches;

(function(doc) {
    matches =
        doc.matchesSelector ||
            doc.webkitMatchesSelector ||
            doc.mozMatchesSelector ||
            doc.oMatchesSelector ||
            doc.msMatchesSelector;
})(document.documentElement);
