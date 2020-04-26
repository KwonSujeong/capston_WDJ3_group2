<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-layout justify-center>
                    <label class="label_bottom">RECOMMEND</label>
                </v-layout>

                <v-layout> 
                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/a.jpg" @click="img_click()"></v-img>

                            <v-card-text class="img_name">
                                <div>냠녕띠낀</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/b.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>따땅면</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/c.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>육꺠쟝</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/d.jpg"></v-img>

                            <v-card-text>
                                <div>땅뽐</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/e.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>떡볶이</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card class="my_img">
                            <v-img height="300px" src="/static/f.jpg"></v-img>

                            <v-card-text>
                                <div>뽁음밥</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'recommend',
    data(){
        return{
            
        }     
    },
    methods: {
        img_click:function(){
           window.open("http://localhost:8080/Detailed");
        }
    }
}
</script>

<style scoped>
label{
    color: #2F9D27;
    font-size: 50px;
}
.my_img{
    width:500px;
    height: 400px;
}

.my_img{
    margin-top: 150px;
}

</style>