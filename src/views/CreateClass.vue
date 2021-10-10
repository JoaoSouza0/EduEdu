<template>
    <section>
        <div class="form-container">
            <form action="">
                <div class="avatar-photo">
                    <img src="../assets/icons/icon_user.png" class="tryio" />
                    <label class="btn-light" for="avatar">
                        tryi
                    </label>
                    <input type="file" id="avatar" name="avatar" @change="loadImg" accept="image/png, image/jpeg" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>

                <div>
                    <div id="bm"></div>
                    <input type="range" name="" id="" />
                    <p></p>
                    <p></p>
                </div>

                <div>
                    <input type="checkbox" name="check" id="check" />
                </div>

                <button class="btn-dark">Adicionar aluno</button>
            </form>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CreateClass',
    data() {
        return {
            animationOn: false
        };
    },
    methods: {
        loadImg(e) {
            console.log(e.target.files);
            const fr = new FileReader();
            fr.onload = () => {
                document.querySelector('.tryio').src = fr.result;
            };
            fr.readAsDataURL(e.target.files[0]);
        },
        testLottie() {}
    },
    created() {}
};
</script>

<style>
.form-container {
    margin: 93px auto;
    width: 670px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-container div {
    border: 1px solid red;
    width: 590px;
}
</style>
