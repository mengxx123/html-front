<template>
    <my-page title="HTML 工具">
        <div class="wrapper">
            <div class="wwlr auto">
                <form>
                    <div class="clearfix">
            <textarea class="textarea"   id="content" name="content" placeholder="JS/HTML代码"></textarea>
                        <textarea class="textarea" v-model="result"  v-if="result" placeholder="过滤后的结果"></textarea>
                    </div>
                    <!-- <div class="MainCate-choese ToolChoese pr fr zI1 mt3">
                              <div class="MainCateW-cont SearChoese w90">4个空格缩进</div>
                              <input name="tabsize" id="tabsize" value="4" type="hidden">
                              <span class="MCicon-drop-down SearChoese">4个空格缩进</span>
                                  <ul class="MainCateC-down SearChoese-show w100" style="display: none;">
                                    <li><a href="javascript:" val="1">制表符缩进</a></li>
                                    <li><a href="javascript:" val="2">2个空格缩进</a></li>
                                    <li><a href="javascript:" val="4">4个空格缩进</a></li>
                                    <li><a href="javascript:" val="8">8个空格缩进</a></li>
                                  </ul>
                        </div>   -->
                    <div class="buttons">
                        <ui-raised-button class="btn" label="格式化" primary @click="format"/>
                        <ui-raised-button class="btn" label="普通压缩" @click="compress"/>
                        <ui-raised-button class="btn" label="加密压缩" @click="compress2"/>
                        <ui-raised-button class="btn btn-copy" label="复制" v-if="result" />
                        <ui-raised-button class="btn" label="下载" @click="download" v-if="result" />
                        <ui-raised-button class="btn" label="清空" @click="clear" />
                    </div>
                </form>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const saveAs = window.saveAs

    export default {
        data() {
            return {
                code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>

</head>
<body>
<div id="wrap">
	<div id="header">
		<h1>html在线工具</h1>
<!--   如果有用，请别忘了推荐给你的朋友：		--><!--   Html在线美化、格式化：http://html.yunser.com/   -->
	</div>
	<div id="main"><p><!-- [history] -->
			<dl><dt>v1.0</dt>
				<dd>2011-06-05 Html工具上线</dd>
			</dl>
        </p>
	</div>
	<div id="footer">
		This is just an example.
	</div>
</div>
</body>
</html>`,
                result: ''
            }
        },
        mounted() {
            this.clipboard = new Clipboard('.btn-copy', {
                text: function(trigger) {
                    return document.getElementById('result').value;
                }
            });

            this.clipboard.on('success', function(e) {
                console.info('Action:', e.action);
                console.info('Text:', e.text);
                console.info('Trigger:', e.trigger);

                e.clearSelection();
            });

            this.clipboard.on('error', function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            })

        },
        destroyed() {
            this.clipboard.destroy()
        },
        methods: {
            format() {
                // document.getElementById('beautify').disabled = true;
                let js_source = this.code
                let tabsize = 4;
                let tabchar = ' ';
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
                this.result = c.replace(regEmptyTag, '$1$4');
            },
            compress() {
                this.pack_js(0)
            },
            compress2() {
                this.pack_js(1)
            },
            pack_js(base64) {
                var packer = new Packer()
                if (base64) {
                    this.result = packer.pack(this.code, 1, 0);
                } else {
                    this.result = packer.pack(this.code, 0, 0);
                }
            },
            download() {
                var blob = new Blob([this.result], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "yunser.com.html");
            },
            clear() {
                this.code = this.result = null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .textarea {
        width: 300px;
        height: 300px;
        margin-right: 16px;
    }

    .buttons {
        margin-top: 16px;
        .btn {
            margin-right: 8px;
            margin-bottom: 16px;
        }
    }
</style>
