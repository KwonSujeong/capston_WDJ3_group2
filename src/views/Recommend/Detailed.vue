/*가게 추천 상세보기 */
<template>
<v-container>
        <v-layout>
            <v-flex>
                <v-layout justify-center>
                    <label class="label_bottom">상세보기</label>
                </v-layout>

                <v-layout class="main">
                    <v-flex>
                        <v-img class="my_img_detailed" height="300px" src="/static/a.jpg"></v-img>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed">
                               <h1>가게 이름</h1>
                               <h2>TEL : 123-123-123</h2>
                               <h3>주소 : 북구 복현동</h3>
                                <br>
                                <br>
                                <h3>메뉴 이름</h3>
                                <h3>메뉴 이름</h3>
                                <h3>메뉴 이름</h3>
                                <h3>메뉴 이름</h3>
                                <h3>메뉴 이름</h3>
                                <h3>메뉴 이름</h3>                                
                        </div>
                    </v-flex>                    
                </v-layout>

                <v-layout style="margin-top:100px;">
                    <v-flex>
                        <v-layout justify-center>
                            <v-flex class="text-md-center">
                            <label>가게 위치</label>
                            <v-img class="img_location"  src="/static/위치.png"></v-img>
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
    name: 'Detailed',
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
    width : 700px;
    height: 500px;
    margin-left: 220px;
    margin-top: 25px;
}
</style>