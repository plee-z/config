// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    console.log('hellow');
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

// an example to replace `u` with `?`, click `Default mappings` to see how `u` works.
map('?', 'u');
unmap('?');
mapkey('<Ctrl-b>', '#2Scroll a page up', 'Normal.scroll("pageUp")', {repeatIgnore: true});
mapkey('<Ctrl-f>', '#2Scroll a page down', 'Normal.scroll("pageDown")', {repeatIgnore: true});

// an example to remove mapkey `Ctrl-i`
unmap('<Ctrl-i>');

// click `Save` button to make above settings to take effect.
// set theme
settings.theme = '\
.sk_theme { \
    background: #fff; \
    color: #000; \
} \
.sk_theme tbody { \
    color: #000; \
} \
.sk_theme input { \
    color: #000; \
} \
.sk_theme .url { \
    color: #555; \
} \
.sk_theme .annotation { \
    color: #555; \
} \
.sk_theme .focused { \
    background: #f0f0f0; \
}';
}';
