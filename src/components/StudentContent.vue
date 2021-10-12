<template>
    <div>
        <div class="student-img">
            <img :src="imgUrl" alt="" />
        </div>
        <div class="information">
            <p class="name">{{ student.name }}</p>
            <p v-if="student.yearSchool === '0'">Pré</p>
            <p v-else>{{ student.yearSchool | schoolYear }}</p>
        </div>
    </div>
</template>

<script>
import { api } from '../firebase/Students-Services';

export default {
    name: 'StudentContent',
    data() {
        return {
            imgUrl: null
        };
    },
    props: {
        student: {
            type: Object
        }
    },
    methods: {
        async imageURL() {
            this.imgUrl = await api.downloadImageStorage(this.student.imageURL);
        }
    },
    created() {
        this.imageURL();
    }
};
</script>

<style>
.student-img img {
    border-radius: 10px;
    width: 150px;
}
.information {
    width: 150px;
}

.information p,
.information .name {
    font-family: 'Montserrat';
    font-size: 16px;
    color: #616161;
}
.information p{
    padding-bottom: 10px;
}

.information .name {
    padding-top: 10px;
    font-weight: 800;
}
</style>
