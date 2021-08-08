var openButton = document.querySelector(".btn"),
    closeButton = document.querySelector(".close"),
    popup = document.querySelector(".pop-up")

openButton.addEventListener('click', function(evt) {
    popup.classList.remove('hidden');
})

closeButton.addEventListener('click', function(evt) {
    popup.classList.add('hidden');
})

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
    }

function setValue(elem) {
    elem.setAttribute('value', '+7(___)___-____')
}
    var input = document.querySelector("[name=tel]");
    input.addEventListener("focus", function (evt) {
        input.setAttribute('value', '+7(___)___-____');
        input.focus();
        input.selectionStart = input.value.length;
    });
    input.addEventListener("input", mask, false);