<template>
	<div class="publish_supply">
		<div class="return_prelevel">
			<a onclick="window.history.go(-1)" class="return_icon">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			我的地址
		</div>
		<ul class="address_list">
			<li v-for="item in addresslist" :class="{active:item.a_is_default==1}" @click="choseAddress($event)">
				<h3>{{item.address}}</h3>
				<h3>
          <span>{{item.a_username}}</span>
          <span>{{item.a_phone}}</span>
        </h3>
				<p>
					<a @click="editAddr($event)" class="edit" :data-a_id="item.a_id" :data-a_username="item.a_username" :data-a_phone="item.a_phone" :data-province="item.a_province" :data-city="item.a_city" :data-dist="item.a_dist" :data-detail="item.a_detail" :data-moren="item.a_is_default" :data-lng="item.a_lng" :data-lat="item.a_lat">编辑</a>
					<a @click="deleteAddr($event)" :data-a_id="item.a_id" class="delete">删除</a>
				</p>
			</li>
		</ul>
		<div class="submit">
			<a @click="addAddr">添加新地址</a>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				addresslist: []
			}
		},
		mounted: function() {
			console.log(this.$route.query)
			this.getAddrlist();
		},
		methods: {
			choseAddress(e) {
				//console.log($(e.currentTarget).find('.edit').attr('data-a_id'));
				if(this.$route.query.edit) {
					this.$router.push({
						path: '/publishEdit',
						query: {
							id: this.$route.query.edit,
							province: $(e.currentTarget).find('.edit').attr('data-province'),
							city: $(e.currentTarget).find('.edit').attr('data-city'),
							dist: $(e.currentTarget).find('.edit').attr('data-dist'),
							detail: $(e.currentTarget).find('.edit').attr('data-detail'),
							lng: $(e.currentTarget).find('.edit').attr('data-lng'),
							lat: $(e.currentTarget).find('.edit').attr('data-lat'),
							a_id: $(e.currentTarget).find('.edit').attr('data-a_id')
						}
					})
				} else if(this.$route.query.logistics) {
					this.$router.push({
					path:'/publishLogistics',
					query: {
						province: $(e.currentTarget).find('.edit').attr('data-province'),
						city: $(e.currentTarget).find('.edit').attr('data-city'),
						dist: $(e.currentTarget).find('.edit').attr('data-dist'),
						detail: $(e.currentTarget).find('.edit').attr('data-detail'),
						lng: $(e.currentTarget).find('.edit').attr('data-lng'),
						lat: $(e.currentTarget).find('.edit').attr('data-lat'),
						a_id: $(e.currentTarget).find('.edit').attr('data-a_id')
					}
					})
				}
				else {
					this.$router.push({
						path: '/publish',
						query: {
							province: $(e.currentTarget).find('.edit').attr('data-province'),
							city: $(e.currentTarget).find('.edit').attr('data-city'),
							dist: $(e.currentTarget).find('.edit').attr('data-dist'),
							detail: $(e.currentTarget).find('.edit').attr('data-detail'),
							lng: $(e.currentTarget).find('.edit').attr('data-lng'),
							lat: $(e.currentTarget).find('.edit').attr('data-lat'),
							a_id: $(e.currentTarget).find('.edit').attr('data-a_id')
						}
					})
				}

			},
			addAddr: function() {
				sessionStorage.removeItem('detailAddr_lng');
				sessionStorage.removeItem('detailAddr_lat');
				sessionStorage.removeItem('detailAddr');
				sessionStorage.removeItem('detailAddress');
				this.$router.push({
					path: '/addAddress'
				});
			},
			editAddr: function(e) {
				sessionStorage.removeItem('detailAddr_lng');
				sessionStorage.removeItem('detailAddr_lat');
				sessionStorage.removeItem('detailAddr');
				sessionStorage.removeItem('detailAddress');
				this.$router.push({
					path: '/addAddress',
					query: {
						a_id: $(e.target).attr('data-a_id'),
						a_username: $(e.target).attr('data-a_username'),
						a_phone: $(e.target).attr('data-a_phone'),
						province: $(e.target).attr('data-province'),
						city: $(e.target).attr('data-city'),
						dist: $(e.target).attr('data-dist'),
						detail: $(e.target).attr('data-detail'),
						moren: $(e.target).attr('data-moren'),
						lng: $(e.target).attr('data-lng'),
						lat: $(e.target).attr('data-lat')
					}
				})
			},
			deleteAddr: function(e) {
				var dpath = 'https://two.zhiqunale.cn/Paper/PersonalCenter/modify_address';
				var dparam = {
					c_id: this.$store.state.loginUser.uid,
					user_state: 1,
					device_number: 'pc_online',
					a_id: $(e.target).attr('data-a_id'),
					a_state: -1
				}
				this.post(dparam, dpath, this.deleteMsg);
			},
			deleteMsg: function(_data) {
				if(_data.status_code == '10000') {
					this.getAddrlist();
				} else {
					alert('地址删除失败');
				}
			},
			getAddrlist: function() {
				var path = 'https://two.zhiqunale.cn/paper/paperbuy/getuseraddresslist';
				var param = {
					user_id: this.$store.state.loginUser.uid,
					device_number: 'pc_online'
				}
				this.post(param, path, this.addrlist);
			},
			addrlist: function(_data) {
				//        console.log(_data);
				if(_data.status_code == '10000') {
					this.addresslist = _data.data;
				}
			}
		}
	}
</script>

<style scoped>
	.submit {
		font-size: 36px;
	}
	
	.submit a {
		display: block;
	}
</style>