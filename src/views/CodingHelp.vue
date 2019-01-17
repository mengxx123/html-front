<template>
    <my-page title="HTML 编码解码 - 帮助" backable>
        <ui-article class="article">
            <h2>工具介绍</h2>
            <p>替换 HTML 文本中的 <code>&</code>, <code>&lt;</code>, <code>></code>, <code>"</code>, <code>&nbsp;</code>（空格）。</p>
            <p>HTML 文本需要替换的文本对照：</p>
            <table>
                <tr>
                    <th>文本</th>
                    <th>HTML 转义编码</th>
                </tr>
                <tr>
                    <td>&amp;amp;</td>
                    <td>&</td>
                </tr>
                <tr>
                    <td>&amp;lt;</td>
                    <td>&lt;</td>
                </tr>
                <tr>
                    <td>&amp;gt;</td>
                    <td>></td>
                </tr>
                <tr>
                    <td>&amp;quot;</td>
                    <td>"</td>
                </tr>
                <tr>
                    <td>&amp;nbsp;</td>
                    <td>&nbsp;（空格）</td>
                </tr>
            </table>
        </ui-article>
    </my-page>
</template>
