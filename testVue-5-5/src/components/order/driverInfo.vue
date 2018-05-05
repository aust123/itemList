<template>
	<div class="drivers">
		<div class="return_prelevel">
			<a class="return_icon" onclick="window.history.go(-1)">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			上传司机信息
		</div>
		<div class="driver_list">
			<div class="driver_msg">
				<a class="delete"></a>
				<p class="name">
					司机名称
					<input type="text" placeholder="请填写司机名称" />
				</p>
				<p class="phone">
					联系方式
					<input type="text" placeholder="请填写司机联系方式" />
				</p>
				<p class="number">
					车牌号
					<input type="text" placeholder="请填写车牌号" />
				</p>
				<div>
					<p style="border:none;">司机照片（最多上传2张）</p>
					<div class="detail-upload">
						<a>
							<input accept="image/*" class="img" type="file" />
						</a>
					</div>
					<ul class="upload-list">
					</ul>
				</div>
			</div>
		</div>
		<p class="addRemarkBtn">
			<a @click="addDriver">
				<img src="../../assets/img/orderbeizhu_add.png" /> 添加司机
			</a>
		</p>
		<div class="submit">
			<a style="display: block" @click="sure">确认上传</a>
		</div>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			var _this = this;
			$('.driver_list').delegate('.delete', 'click', function() {
				$(this).parents('.driver_msg').remove();
			});
			$('.driver_list').delegate('.img', 'change', function() {
				_this.uploadImg(event);
			});
		},
		methods: {
			//添加司机
			addDriver: function() {
				var remarkHtml = '<div class="driver_msg"><a class="delete"></a><p class="name">司机名称<input type="text" placeholder="请填写司机名称"/></p><p class="phone">联系方式<input type="text" placeholder="请填写司机联系方式"/></p><p class="number">车牌号<input type="text" placeholder="请填写车牌号"/></p><div><p style="border:none;">司机照片（最多上传2张）</p><div class="detail-upload"><a><input accept="image/*" class="img" type="file"/></a></div><ul class="upload-list"></ul></div></div>';
				$('.driver_list').append(remarkHtml);
			},
			//上传图片
			uploadImg: function(e) {
				if($(e.target).parents('.detail-upload').siblings('.upload-list').children('li').length < 2) {
					this.upLoadImg(e);
				}
			},
			//确认上传司机
			sure: function() {
				var arr = [];			
				for(var i = 0; i < $('.driver_msg').length; i++) {
					var imgli = $($('.driver_msg')[i]).children('div').children('.upload-list').children('li');
					var imglist = [];
					for(var j = 0; j < imgli.length; j++) {
						var imgurl = $(imgli[j]).children('img').attr('src');
						imgurl = imgurl.split('https://two.zhiqunale.cn/')[1];
						imglist.push(imgurl);
					}
					var list = {
						'lo_driver_name': $($('.driver_msg')[i]).children('.name').children('input').val(),
						'lo_driver_phone': $($('.driver_msg')[i]).children('.phone').children('input').val(),
						'lo_plat_num': $($('.driver_msg')[i]).children('.number').children('input').val(),
						'lo_photos': imglist.join()
					};
					arr.push(list);
				}				
				if(!arr[0].lo_driver_name || !arr[0].lo_plat_num || !arr[0].lo_driver_phone) {
					alert('请完善司机信息');
				} else {
					var driverMsg = JSON.stringify(arr);					
					this.$store.commit({
						type:'driver',
						length:arr.length,
						driverInfo:driverMsg
					})
					window.history.back(-1);
				}				
			}
		}
	}
</script>

<style scoped>
	.drivers {
		/*padding-top: 88px;*/
	}
	
	.addRemarkBtn {
		margin: 20px 0;
	}
	
	.addRemarkBtn a {
		color: #ff5000;
	}
	
	.submit a {
		font-size: 36px;
	}
</style>