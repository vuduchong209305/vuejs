<template>
	<div>
		<b-jumbotron bg-variant="info" text-variant="white" border-variant="white">
            <template slot="header">
                Mã hóa MD5
            </template>
            <template slot="lead">
                <div>
				  
					<b-input-group prepend="Input">
						<b-form-input v-model="input"></b-form-input>
						<b-input-group-append>
							<b-btn variant="success" v-on:click="encode">Encode</b-btn>
						</b-input-group-append>
					</b-input-group>

				</div>
            </template>
            <hr class="my-4">
            <p>Kết quả : {{ result.words }}</p>
            <p>Chiều dài : {{ result.sigBytes }}</p>
        </b-jumbotron>
	</div>
</template>

<script>
	import CryptoJS  from 'crypto-js';
	export default {
		data() {
			return {
				input : '',
				result : {}
			}
		},
		methods: {
			encode() {
				this.result = CryptoJS.SHA256(this.input)
			}
		}
	}
</script>