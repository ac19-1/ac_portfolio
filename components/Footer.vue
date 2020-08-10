<template>
  <v-footer class="footer" padless>
		<div class="w-100 p-3" style="background:#ffd2d2">
			<div class="d-flex justify-content-center">
				<div >
					<a href="mailto:angelaaudreychen15@gmail.com" target="_blank" class="icon-button px-2">
						<font-awesome-icon id="gmail" :icon="[icons.envelope_square.style, icons.envelope_square.name]" />
					</a>
				</div>
				<div >
					<a href="https://github.com/ac19-1" target="_blank" class="icon-button px-2">
						<font-awesome-icon id="github" :icon="[icons.github.style, icons.github.name]" />
					</a>
				</div>
				<div>
					<a href="https://linkedin.com/in/audrey-chen-5143981b4" target="_blank" class="icon-button px-2">
						<font-awesome-icon id="linkedin" :icon="[icons.linkedIn.style, icons.linkedIn.name]" />
					</a>
				</div>
			</div>
			<hr>
			<div class="d-flex justify-content-center font-weight-bold">
				Copyright &copy; 2020{{new Date().getFullYear() != '2020' ? ' - ' + new Date().getFullYear() : '' }} Audrey Chen
			</div>
		</div>
	</v-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name:"Footer",
	computed: mapGetters({
    icons: 'constants/get'
  }),
}
</script>

<style>
	#github, #linkedin{
		transition: color 0.2s ease !important;
	}

	.icon-button, .icon-button:active, .icon-button:focus{
		outline:none;
		box-shadow: none;
		cursor: pointer;
    font-size: 30px;
    color: #555555;
	}

	.icon-button:hover {
		color: #555555 !important;
	}

	#github:hover {
		color: #181717
	}

	#linkedin:hover {
		color: #0077B5
	}

	#gmail:hover {
		color: #D14836
	}

	.footer a:hover{
		background: transparent
	}
</style>