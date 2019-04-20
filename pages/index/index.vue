<template>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="demo">
			<block v-if="imageSrc">
				<image :src="imageSrc" class="image" mode="widthFix"></image>
			</block>
			<block v-else>
				<view class="uni-hello-addfile" @click="chooseImage">+ 选择图片</view>
			</block>
		</view>
		<view class="text">
			变换下的风格如下：
			<block v-if="styleImg">
				<image :src="styleImg" class="image" mode="widthFix"></image>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: '',
				styleImg: ''
			}
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			chooseImage: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						this.imageSrc = imageSrc
						uni.uploadFile({
							url: 'https://599618d5.ngrok.io/translate/upload',
							filePath: imageSrc,
							fileType: 'image',
							name: 'file',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								this.styleImg = res.data
								uni.showToast({
									title: '绘画成功',
									icon: 'success',
									duration: 1000
								})
								// this.imageSrc = imageSrc
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			}
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.demo {
		background: #ddd;
		padding: 50upx;
	}
</style>
