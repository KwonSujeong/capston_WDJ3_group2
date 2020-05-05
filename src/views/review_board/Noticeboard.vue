/*리뷰 -> 음식점 게시판 페이지*/

<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-layout justify-center style="margin-bottom:100px;">
                    <label class="display-3 font-weight-bold green--text font-size: 50px;">Review</label>
                </v-layout>

                <v-layout>
                        <v-flex>
                            <h1 class="display-2 font-weight-bold" style="margin-bottom:15px;">초밥집</h1>
                            <v-img height="400px" width="500px" src="/static/susi.png"></v-img>
                            <h3 style="margin-top:20px;">기본 정보 1</h3>
                            <h3>기본 정보 2</h3>
                        </v-flex>

                    <v-flex>
                        <v-layout>
                            <v-flex style="margin-top:20px;">
                                <v-img height="170px" width="170px" src="/static/a.jpg" style="margin-bottom:10px;" @click="img_click()"></v-img>
                                <h3>치킨</h3>
                            </v-flex>

                            <v-flex style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex style="margin-top:20px;">
                                <v-img height="170px" width="170px" src="/static/b.jpg" style="margin-bottom:10px;"></v-img>
                                <h3>피자</h3>
                            </v-flex>

                            <v-flex style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex style="margin-top:20px;">
                                <v-img height="170px" width="170px" src="/static/c.jpg" style="margin-bottom:10px;"></v-img>
                                <h3>스테이크</h3>
                            </v-flex>

                            <v-flex style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                </v-layout>


                <v-layout style="margin-top:170px; margin-left:300px; margin-right:300px;">
                    <v-flex>
                        <v-img class="my_img_detailed" height="200px" width="200px" src="/static/e.jpg"></v-img>
                        <h3>된장찌개</h3>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed" style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>                            
                        </div>
                    </v-flex>                    
                </v-layout>

                <v-layout style="margin-top:100px; margin-left:300px; margin-right:300px;">
                    <v-flex>
                        <v-img class="my_img_detailed" height="200px" width="200px" src="/static/f.jpg"></v-img>
                        <h3>김치전</h3>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed" style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>                         
                        </div>
                    </v-flex>                    
                </v-layout>

                <v-layout style="margin-top:100px; margin-left:300px; margin-right:300px;">
                    <v-flex>
                        <v-img class="my_img_detailed" height="200px" width="200px" src="/static/g.jpg"></v-img>
                        <h3>칼국수</h3>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed" style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>                            
                        </div>
                    </v-flex>                    
                </v-layout>

                <v-layout style="margin-top:100px; margin-left:300px; margin-right:300px;">
                    <v-flex>
                        <v-img class="my_img_detailed" height="200px" width="200px" src="/static/g.jpg"></v-img>
                        <h3>해물 칼국수</h3>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed" style="margin-top:50px;">
                                <h2>가격 : ~~~</h2>
                                <h2>나오는 시간 : ~~~~</h2>                            
                        </div>
                    </v-flex>                    
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'noticeboard',
    data(){
        return{
            }
        },

        methods: {
        img_click:function(){
           window.open("http://localhost:8080/board");
        }
    }
}
</script>

<style scoped>


</style>
