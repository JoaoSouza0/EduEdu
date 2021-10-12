<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap');

:root {
    --dark-blue: #25abe6;
    --light-blue: #47cdff;
}

body,
ul,
li,
h1,
h2,
p {
    padding: 0px;
    margin: 0px;
}
ul {
    list-style: none;
}
body {
    font-family: 'Montserrat', sans-serif;
    background-color: #e5e5e5;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
img {
    max-width: 100%;
    display: block;
}
label {
    background-color: #fff;
    padding: 0 8px;
    font-weight: 500;
    color: var(--light-blue);
}

input {
    border-radius: 0px;
    border: 2px solid var(--light-blue);
    border-radius: 10px;
}
button {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
}

.btn-dark,
.btn-light:hover {
    background: var(--light-blue);
    box-shadow: 0px 4px 0px var(--dark-blue);
    border-radius: 20px;
    border: none;
    color: #fff;
}
.btn-light,
.btn-dark:hover {
    background: #ffffff;
    border: 1px solid var(--light-blue);
    box-shadow: 0px 4px 0px var(--dark-blue);
    border-radius: 20px;
    color: var(--dark-blue);
}
</style>
