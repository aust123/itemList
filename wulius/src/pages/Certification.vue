<template>
	<div>
		<div class="certification">
    <div class="back tl">
        <img src="../assets/img/title_jiantou.png"/>
        实名认证
    </div>
    <div class="certiContent">
        <div class="certiMsg">
            <div>
                <span>姓名</span>
                <input type="text" placeholder="请填写您的姓名"/>
            </div>
            <div>
                <span>身份证</span>
                <input type="text" placeholder="请填写您的身份证号码"/>
            </div>
            <div>
                <span>保险单号</span>
                <input type="text" placeholder="请填写您的保险单号"/>
            </div>
            <div>
                <span>保险截止日期</span>
                <span class="field-container date-picker" type="date" style="touch-action: manipulation; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input class="date-input" type="text" onblur="(this.type='text')" onfocus="(this.type='date')" oninput="(this.type='text')" onchange="(this.type='text')" id="picker" placeholder="请选择您的保险截止日期">
                    <b class="mask">
                        <label for="picker"></label>
                    </b>
                </span>
            </div>
            <div>
                <span>手机号</span>
                <b>
                    <input type="text" placeholder="请填写您的手机号"/>
                </b>
            </div>
            <div>
                <span>验证码</span>
                <input style="width: 40%;margin-right:0.6rem" type="text" placeholder="请填写验证码"/>
                <button style="width: 30%;" class="get_code">获取验证码</button>
            </div>
        </div>
        <div class="certiPics">
            <h3>上传证件<span>（营运证为可选）</span></h3>
            <div class="uploadImg">
                <div class="upload">
                    <input accept="image/*" type="file" onchange="uploadImg(this)" />
                    <img src='../assets/img/renzheng_upload1.png'>
                </div>
                <div class="upload">
                    <input accept="image/*" type="file" onchange="uploadImg(this)" />
                    <img src='../assets/img/renzheng_upload1.png'>
                </div>
                <div class="upload">
                    <input accept="image/*" type="file" onchange="uploadImg(this)" />
                    <img src='../assets/img/renzheng_upload1.png'>
                </div>
                <div class="upload">
                    <input accept="image/*" type="file" onchange="uploadImg(this)" />
                    <img src='../assets/img/renzheng_upload1.png'>
                </div>
            </div>
        </div>
    </div>
    <div class="submit">
        <button>提交</button>
    </div>
</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>