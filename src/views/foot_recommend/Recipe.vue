<template>
<v-container>
        <v-layout>
            <v-flex>
                <v-layout justify-center>
                    <label class="label_bottom">RECIPE</label>
                </v-layout>

                <v-layout class="main">
                    <v-flex>
                        <v-img class="my_img_detailed" height="300px" src="/static/주먹밥.jpg"></v-img>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed">
                                <h1>음식 이름</h1>
                                <h3>재료 :</h3>
                                <br>
                                <br>
                                <h3>재료 이름</h3>
                                <h3>재료 이름</h3>
                                <h3>재료 이름</h3>
                                <h3>재료 이름</h3>
                                <h3>재료 이름</h3>
                                <h3>재료 이름</h3>                                
                        </div>
                    </v-flex>                    
                </v-layout>

                <v-layout style="margin-top:100px;">
                    <v-flex>
                        <v-layout justify-center>
                            <v-flex class="text-md-center">
                            <label>요리 과정</label>
                            <v-img class="img_location" style="text-align: center;" src="/static/레시피.jpg"></v-img>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
</v-container>
</template>

<script>
export default {
    name: 'Recipe',
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.label_bottom{
    color: #2F9D27;
    font-size: 50px;
}
.my_img_detailed{
    width:500px;
    height: 400px;

}
.main{
    margin-top: 100px;
}
label{
    margin-top: 30px;
    font-weight: bolder;
    font-size: 30px;
}
.img_location{
    margin-left: 220px;
    margin-top: 25px;
}
</style>
