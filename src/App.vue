<template>
    <div id="app">
        <left-menu></left-menu>
        <navbar></navbar>
        <title-info></title-info>
        <div class="content-container">
            <p>
                <router-link to="/" exact>欢迎页</router-link>
                <router-link to="/dir">首页</router-link>
                <router-link to="/view">列表</router-link>
                <router-link to="/answer">当前答案</router-link>
            </p>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <pagination></pagination>
    </div>
</template>

<script>
    import LeftMenu from './components/includes/left-menu';
    import Navbar from './components/includes/navbar';
    import Pagination from './components/includes/pagination';
    import TitleInfo from './components/includes/title-info';
    export default {
        components: {
            LeftMenu,
            Navbar,
            Pagination,
            TitleInfo
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
