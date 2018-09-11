<template>
	<div>
		<b-card bg-variant="light">
		    <b-form-group horizontal
		        breakpoint="lg"
		        label="Nhập số đo của chị Tú vào đây"
		        label-size="lg"
		        label-class="font-weight-bold pt-0"
		        class="mb-0">
		        <b-form-group horizontal
		            label="Chiều cao (cm):"
		            label-class="text-sm-right"
		            label-for="nestedStreet">
		            <b-form-input id="nestedStreet" type="number" placeholder="ví dụ : 165" v-model="height"></b-form-input>
		        </b-form-group>
		        <b-form-group horizontal
		            label="Cân nặng (kg):"
		            label-class="text-sm-right"
		            label-for="nestedCity">
		            <b-form-input id="nestedCity" type="number" placeholder="ví dụ : 50" v-model="weight"></b-form-input>
		        </b-form-group>
		        <b-form-group horizontal
		            label="Kết quả:"
		            label-class="text-sm-right"
		            label-for="nestedState">
		            <div class="text-left" v-if="avg > 0">
						<b-button variant="primary">
							{{ str }} <b-badge variant="light">{{ avg }}</b-badge>
						</b-button>
					</div>
		        </b-form-group>
		        		        
		    </b-form-group>
		</b-card>
	</div>
</template>

<script>
	import CryptoJS from 'crypto-js';
	export default {
		data() {
			return {
				height : '',
				weight : '',
				avg : '',
				str : ''
			}
		},
		watch: {
			height(newVal) {

				if(this.weight != '') {

					this.avg = this.weight / Math.pow(newVal/100, 2)
					
					if(this.avg < 18.5) {
						this.str = 'Gầy quá, nên ăn thêm thịt'
						
					} else if (18.5 < this.avg && this.avg  < 24.9) {
						this.str = 'Bình thường, nhưng vẫn nên ăn thêm thịt'
						
					} else if (this.avg == 25) {
						this.str = 'Thừa cân, nhưng vẫn nên ăn thêm thịt'
						
					} else if (25 < this.avg && this.avg < 29.9) {
						this.str = 'Béo phì, nhưng vẫn nên ăn thêm thịt'

					} else if(this.avg > 29.9) {
						this.str = 'Béo kinh khủng, nhưng vẫn nên ăn thêm thịt'
						
					}
				}
			},
			weight(newVal) {

				if(this.height != '') {

					this.avg = newVal / Math.pow(this.height/100, 2)

					if(this.avg < 18.5) {
						this.str = 'Gầy quá, nên ăn thêm thịt'
						
					} else if (18.5 < this.avg && this.avg  < 24.9) {
						this.str = 'Bình thường, nhưng vẫn nên ăn thêm thịt'
						
					} else if (this.avg == 25) {
						this.str = 'Thừa cân, nhưng vẫn nên ăn thêm thịt'
						
					} else if (25 < this.avg && this.avg < 29.9) {
						this.str = 'Béo phì, nhưng vẫn nên ăn thêm thịt'

					} else if(this.avg > 29.9) {
						this.str = 'Béo kinh khủng, nhưng vẫn nên ăn thêm thịt'
						
					}
				}
			}
		}
	}
</script>