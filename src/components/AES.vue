<template>
	<div>
		<b-jumbotron bg-variant="info" text-variant="white" border-variant="white">
            <template slot="header">
                Mã hóa AES
            </template>
            <template slot="lead">
                <div>
				  	
					<b-input-group prepend="Input">
						<b-form-input v-model="input_encode"></b-form-input>
					</b-input-group>

				</div>
            </template>
            <hr class="my-4">
            <p>Kết quả : {{ result_encode }}</p>
            <p>Chiều dài : {{ result_encode.length }}</p>
        </b-jumbotron>

        <b-jumbotron bg-variant="info" text-variant="white" border-variant="white">
            <template slot="header">
                Giải mã AES
            </template>
            <template slot="lead">
                <div>
				  	
					<b-input-group prepend="Input">
						<b-form-input v-model="input_decode"></b-form-input>
					</b-input-group>

				</div>
            </template>
            <hr class="my-4">
            <p>Kết quả : {{ result_decode }}</p>
            <p>Chiều dài : {{ result_decode.length }}</p>
        </b-jumbotron>
	</div>
</template>

<script>
	import CryptoJS from 'crypto-js';
	export default {
		data() {
			return {
				input_encode : '',
				input_decode : '',
				result_encode : '',
				result_decode : '',
				secret_key : 'vuduchong123'
			}
		},
		watch: {
			input_encode(newVal) {
				this.result_encode = CryptoJS.AES.encrypt(newVal, this.secret_key).toString();
			},
			input_decode(newVal) {
				var bytes  = CryptoJS.AES.decrypt(newVal.toString(), this.secret_key);
				this.result_decode = bytes.toString(CryptoJS.enc.Utf8);
			}
		}
	}
</script>