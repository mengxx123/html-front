<template>
    <my-page title="HTML 工具">
        <div class="wrapper">
            <div class="wwlr auto">
                <form>
                    <div class="clearfix">
            <textarea class="textarea" id="content" name="content" placeholder="JS/HTML代码">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;/&gt;
&lt;script src=&quot;http://code.jquery.com/jquery-latest.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;wrap&quot;&gt;
	&lt;div id=&quot;header&quot;&gt;
		&lt;h1&gt;html在线工具&lt;/h1&gt;
&lt;!--   如果有用，请别忘了推荐给你的朋友：		--&gt;&lt;!--   Html在线美化、格式化：http://html.yunser.com/   --&gt;
	&lt;/div&gt;
	&lt;div id=&quot;main&quot;&gt;&lt;p&gt;&lt;!-- [history] --&gt;
			&lt;dl&gt;&lt;dt&gt;v1.0&lt;/dt&gt;
				&lt;dd&gt;2011-06-05 Html工具上线&lt;/dd&gt;
			&lt;/dl&gt;
        &lt;/p&gt;
	&lt;/div&gt;
	&lt;div id=&quot;footer&quot;&gt;
		This is just an example.
	&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
                        <textarea class="textarea" id="result" placeholder="过滤后的结果"></textarea>
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
                        <ui-raised-button class="btn" id="beautify" label="格式化"/>
                        <ui-raised-button class="btn" id="pack0" label="普通压缩"/>
                        <ui-raised-button class="btn" id="pack1" label="加密压缩"/>
                        <ui-raised-button class="btn btn-copy" label="复制" />
                        <ui-raised-button class="btn" label="下载" @click="download" />
                        <ui-raised-button class="btn" id="clear" label="清空" />
                    </div>
                    <!-- <div class="GuoLvWrapCenter pt10 clearfix">

                      <div class="GuoLvCbtn"><input type="button" value="格式化" class="GLOkBtn" id="beautify">
                      <input type="button" value="普通压缩" class="GLOkBtn" id="pack0">
                      <input type="button" value="加密压缩" class="GLOkBtn" id="pack1">
                      <input type="button" value="复制" class="bg-blue02" id="clip" data-clipboard-target="result">
                      <input type="button" id="clear" value="清空" class="bg-blue02"></div>


                    </div>  -->
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
            return {}
        },
        mounted() {
            window.init()

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
            download() {
                let html = document.getElementById('result').value
                var blob = new Blob([html], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "yunser.com.html");
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
