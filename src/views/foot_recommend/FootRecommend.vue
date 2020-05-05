<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-layout justify-center>
                    <label class="green--text" >FOOT RECOMMEND</label>
                </v-layout>

                <v-layout> 
                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
                            <router-link to="/Recipe">
                                <v-img height="300px" src="/static/주먹밥.jpg"></v-img>
                            </router-link>
                            <v-card-text class="img_name">
                                <div>주먹밥</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
                            <v-img height="300px" src="/static/e.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>된장찌개</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
                            <v-img height="300px" src="/static/d.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>육꺠쟝</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
                            <v-img height="300px" src="/static/c.jpg"></v-img>

                            <v-card-text>
                                <div>땅뽐</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
                            <v-img height="300px" src="/static/b.jpg"></v-img>

                            <v-card-text class="img_name">
                                <div>떡볶이</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card style="margin-top: 150px; height: 400px; width:500px;">
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
    name: 'FootRecommend',
    data(){
        return{
            
        }     
    },
    // methods: {
    //     img_click:function(){
    //        window.open("http://localhost:8080/Detailed");
    //     }
    // }
}
</script>

<style scoped>


</style>