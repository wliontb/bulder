<template>
   <div class="container">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
            <NavMenu></NavMenu>
        </div>
        <div class="row">
            <div class="col-3">
                <SideBar></SideBar>
            </div>
            <div class="col-9">
                <Main><slot /></Main>
            </div>
        </div>
        <div class="row">
            <Footer></Footer>
        </div>
   </div>

</template>
<style scoped>
    body {
        background: #f6f6f6;
    }

    .container {
        background: #fff;
    }

    .row {
        width: 100%;
        display: flex;
    }

    .col-9 {
        width: 70%;
    }

    .col-3 {
        width: 30%;
    }
</style>