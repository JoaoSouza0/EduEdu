<template>
    <section class="form-container">
        <form action="">
            <div class="avatar">
                <img src="../assets/kids/form-kid.svg" class="profile-img" />
                <label class="btn-light change-avatar" for="avatar">
                    Mudar Avatar
                </label>
                <input
                    type="file"
                    style="display:none;"
                    id="avatar"
                    name="avatar"
                    @change="loadImg"
                    accept="image/png, image/jpeg"
                />
            </div>
            <div class="inputs">
                <div>
                    <label for="name">Nome Completo</label>
                    <input type="text" class="input-form" name="name" id="name" />
                    <img class="icon-input" src="../assets/icons/icon_user.png" alt="" />
                </div>
                <div>
                    <label for="school">Escola</label>
                    <input type="text" class="input-form" name="school" id="school" />
                    <img class="icon-input" src="../assets/icons/icon_hat.png" alt="" />
                </div>
            </div>
            <div class="school-information">
                <div class="lottie"></div>
                <div class="student-information">
                    <label for="year-school">Ano Escolar</label>
                    <div class="input-range">
                        <div class="output">
                            <output>Pré</output>
                            <output>1 </output>
                            <output>2</output>
                            <output>3</output>
                        </div>
                        <input
                            type="range"
                            class="range"
                            name="year-school"
                            id="year-school"
                            value="0"
                            min="0"
                            max="3"
                        />
                    </div>
                    <div class="year-information">
                        <p><b>Pré I: </b>Aluno completou 4 anos antes do dia 32 de março de 2020</p>
                        <p><b>Pré II: </b> Aluno completou 5 anos antes do dia 31 de março de 2020</p>
                    </div>
                </div>
            </div>
            <div class="checkbox-information">
                <input type="checkbox" name="check" id="check" />
                <label for="check"
                    >Eu autorizo o EduEdu a coletar e processar os daos do meu filho(a) conforme a politica de
                    privacidade</label
                >
            </div>
        </form>
        <div class="button-container">
            <slot> </slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'StudentForm',
    methods: {
        loadImg(e) {
            const fr = new FileReader();
            fr.onload = () => {
                document.querySelector('.profile-img').src = fr.result;
            };
            fr.readAsDataURL(e.target.files[0]);
        }
    }
};
</script>

<style scoped>
.form-container {
    margin: 55px auto 0 auto;
    width: 670px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #e3e3e3;
    border-radius: 25px;
}

form > div,
.button-container {
    display: flex;
    width: 590px;
}
.avatar {
    position: relative;

    padding-top: 36px;

    flex-direction: column;
    align-items: center;
}
.avatar img {
    width: 156px;
    height: 157px;
}

.change-avatar {
    width: 220px;
    padding: 13px 0;
    text-align: center;

    position: relative;
    bottom: 20px;

    cursor: pointer;
}

.inputs {
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    padding-bottom: 20px;
}

.inputs div {
    position: relative;
}

.inputs img {
    position: absolute;
    bottom: 40px;
    left: 20px;
    background-color: transparent;
}

.inputs label {
    position: relative;
    top: 12px;
    left: 15px;

    padding: 2px 0 2px 8px;
    width: 154px;

    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
}

.inputs div {
    padding-top: 2px;
    padding-bottom: 20px;
}

.input-form {
    width: 480px;
    padding: 22px 55px;
    border-radius: 10px;
}

.lottie {
    width: 210px;
}

.student-information {
    width: 380px;
}
.student-information p,
.checkbox-information label {
    font-size: 16px;
    font-weight: 300;
    color: #c4c4c4;
}
.student-information label {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    padding-left: 30px;
    padding-bottom: 7px;
}
.output {
    width: 370px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 13px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #47cdff;
}
input[type='range'] {
    -webkit-appearance: none;
    width: 376px;
    position: relative;
    border: none;
    padding-bottom: 40px;
}
input[type='range']::-webkit-slider-runnable-track {
    margin: 0;
    background: #e3e3e3;
    height: 13px;
    border: none;
    border-radius: 50px;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #47cdff;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin-top: -7px;
    box-shadow: 0px 2px 0px #1bb7db;
}
input[type='checkbox'] {
    border: 2px solid #47cdff;
    padding: 12px;
    border-radius: 25px;
}

.year-information {
    padding-bottom: 20px;
}
.button-container {
    justify-content: center;
    padding: 35px 0;
}
.year-information,
.year-information p {
    padding-bottom: 10px;
}

.checkbox-information {
    padding-bottom: 10px;
}
</style>
