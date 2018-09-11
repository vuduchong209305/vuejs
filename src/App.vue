<template>
    <div id="app">
        
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>VUE TOOL</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <router-link :to="{ name : 'Home' }" class="nav-link">Home</router-link>
                    <router-link :to="{ name : 'Md5' }" class="nav-link">MD5</router-link>
                    <router-link :to="{ name : 'Base64' }" class="nav-link">Base64</router-link>
                    <router-link :to="{ name : 'SHA256' }" class="nav-link">SHA256</router-link>
                    <router-link :to="{ name : 'AES' }" class="nav-link">AES</router-link>
                    <router-link :to="{ name : 'BMI' }" class="nav-link">Chỉ số BMI</router-link>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="button">Search</b-button>
                    </b-nav-form>
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        
        <br>

        <b-container class="bv-example-row">    
            <b-row>
                <b-col>
                    <router-view/>
                </b-col>
                
            </b-row>
        </b-container>
        
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>