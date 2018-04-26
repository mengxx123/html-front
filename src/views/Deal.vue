<template>
    <my-page title="HTML 工具">
        <div class="wrapper">
            <div class="wwlr auto">
                <form>
                    <div class="clearfix">
            <textarea class="textarea" id="content" v-model="code" name="content" placeholder="HTML 代码"></textarea>
                        <textarea class="textarea" v-model="result"  v-if="result" placeholder="过滤后的结果"></textarea>
                    </div>
                    <div class="buttons">
                        <ui-raised-button class="btn" label="提取图片" @click="getImage"/>
                        <ui-raised-button class="btn" label="提取链接" @click="getUrl"/>
                    </div>
                </form>
            </div>
        </div>
        <div id="neirong1"></div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const saveAs = window.saveAs

    function find(t){
        // $("#content").val("");
        var code = $("#content").val();
        var condition = 'img';
        switch(t){
            case 1:
            condition = 'img';
            break;
            case 2:
            condition = $("#xpath").val();
            break;
            case 3:
            condition = 'a';
            break;
            
        }
        var html = '';
        $(code).find(condition).each(function(){
            switch(t){
                case 1:
                if($("#showImg").is(":checked")){
                    $("#res").append("<img src='"+$(this).attr("src")+"' style='margin-left:2px'> ");
                }
                html+=$(this).attr("src")+"\r\n\r\n";
                break;
                case 2:
                html+=$(this).html()+"\r\n\r\n";
                break;
                case 3:
                if($(this).attr("href").indexOf("http://")>=0){
                html+=$(this).attr("href")+"\r\n\r\n";
                }
                break;
            }
            
        });
        if(html==''){
            html+='没有匹配到数据';
        }
        $("#neirong1").val(html);
    }

    export default {
        data() {
            return {
                code: `<ul class="Mid1L_img"><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713635.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602041231419605.jpg" alt="这点钱如何养活后宫佳丽？想想就心累的动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">这点钱如何养后宫？</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713080.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602031208408737.jpg" alt="你绝对挡不住女人前进的步伐 午间内涵动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">你挡不住女人的步伐</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/712632.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602021155155249.jpg" alt="你看人家的女友怎么玩 感觉心好痛的午间动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">看人家的女友怎么玩</div></a></li></ul>`,
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
            getImage() {
                var str = "this is test string <img src=\"http:yourweb.com/test.jpg\" width='50' > 123 and the end <img src=\"所有地址也能匹配.jpg\" /> 33! <img src=\"/uploads/attached/image/20120426/20120426225658_92565.png\" alt=\"\" />"
                var imgReg = /<img.*src="(.*?)[^>]*?"/gi;
                var arr = str.match(imgReg);
                console.log(arr)
                // alert('所有已成功匹配图片的数组：'+arr);
            },
            getUrl() {
                find(3)
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
