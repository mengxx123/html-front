<template>
    <my-page title="HTML 编码解码" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="HTML"></textarea>
        <!-- <select class="form-control charset" v-model="charset">
            <option value="gbk">gbk</option>
            <option value="big5">big5</option>
            <option value="utf-8" selected="true">utf-8</option>
        </select> -->
        <div class="btns">
            <ui-raised-button class="btn" primary label="编码" @click="encode" />
            <ui-raised-button class="btn" secondary label="解码" @click="decode" />
        </div>
        <textarea class="form-control" v-model="result" rows="6" placeholder="结果" disabled v-if="result"></textarea>
    </my-page>
</template>

<script>
    /* eslint-disable */
    function encode(str) {
        let s =    "";   
         if    (str.length    ==    0)    return    "";   
         s    =    str.replace(/&/g,    "&amp;");   
         s    =    s.replace(/</g,        "&lt;");   
         s    =    s.replace(/>/g,        "&gt;");   
         s    =    s.replace(/ /g,        "&nbsp;");   
         s    =    s.replace(/\'/g,      "'");   
         s    =    s.replace(/\"/g,      "&quot;");   
         s    =    s.replace(/\n/g,      "<br>");   
         return    s;   
    }   
   function    decode(str)   
   {   
         var    s    =    "";   
         if    (str.length    ==    0)    return    "";   
         s    =    str.replace(/&lt;/g,        "<");   
         s    =    s.replace(/&gt;/g,        ">");   
         s    =    s.replace(/&nbsp;/g,        " ");   
         s    =    s.replace(/'/g,      "\'");   
         s    =    s.replace(/&quot;/g,      "\"");   
         s    =    s.replace(/<br>/g,      "\n");   
         s    =    s.replace(/&amp;/g,    "&");   
         return    s;   
   }   

    export default {
        data () {
            return {
                code: '',
                charset: 'utf-8',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/coding/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // this.encode()
            },
            encode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的 HTML 代码'
                    })
                    return
                }
                this.result = encode(this.code)
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的 HTML 代码'
                    })
                    return
                }
                this.result = decode(this.code)
            }
        }
    }
</script>

<style lang="scss" scoped>
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 33px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
}
.charset {
    margin-top: 16px;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
.refer {
    margin-top: 16px;
    color: #999;
}
</style>
