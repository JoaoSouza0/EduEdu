<template>
    <section class="notfound-container ">
        <div class="not-found-component">
            <h1>Sorry we can't found this page</h1>
            <img src="../assets/sorry-gif.gif" alt="EduEdu Logo" />
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
.notfound-container {
    height: 100vh;
    background: url('../../src/assets/login_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
.not-found-component {
    width: 370px;
    padding: 50px;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px #e3e3e3;
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

h1{
  text-align: center;
  color: #9b9a9a;
}
</style>
