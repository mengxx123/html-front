function init() {
    $("#beautify").click(function () {
        // document.getElementById('beautify').disabled = true;
        js_source = document.getElementById('content').value.replace(/^\s+/, '');
        tabsize = 4;
        tabchar = ' ';
        if (tabsize == 1) {
            tabchar = '\t';
        }
        var regEmptyTag = /(<([^\/][^>|^\/>].*)>)(\s*)?(<\/([^>]*)>)/g;
        var c = "";
        if (js_source && js_source.charAt(0) === '<') {
            //document.getElementById('result').value = style_html(js_source, tabsize, tabchar, 80);
            c = style_html(js_source, tabsize, tabchar, 80);
        } else {
            //document.getElementById('result').value = js_beautify(js_source, tabsize, tabchar);
            c = js_beautify(js_source, tabsize, tabchar);
        }
        document.getElementById('result').value = c.replace(regEmptyTag, '$1$4');
        document.getElementById('beautify').disabled = false;
        return false;
    });
    $("#pack0").click(function (base64) {
        pack_js(0);
    });
    $("#pack1").click(function (base64) {
        pack_js(1);
    });
    $("#clear").click(function () { tools.clear([getid("result"), getid("content")]) });
    function pack_js(base64) {
        var input = document.getElementById('content').value;
        var packer = new Packer;
        if (base64) {
            var output = packer.pack(input, 1, 0);
        } else {
            var output = packer.pack(input, 0, 0);
        }
        document.getElementById('result').value = output;
        // if (jQuery("#result").val())
        //     $("#result").siblings().hide();
    }
}