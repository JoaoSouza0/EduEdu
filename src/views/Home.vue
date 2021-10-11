<template>
    <section class="page-container">
        <NavigationMenu />
        <div class="router-view-container">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
export default {
    name: 'Home',
    components: {
        NavigationMenu
    }
};
</script>

<style>
.page-container {
    display: flex;
}
.page-container div {
    display: inline;
}
.router-view-container {
    width: 100%;
}
</style>
