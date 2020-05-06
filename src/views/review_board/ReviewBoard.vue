/*가게 추천 상세보기 */
<template>
<v-container>
                        <v-layout style="margin-top:100px; margin-left:300px; margin-right:300px;">
                    <v-flex>
                        <v-img class="my_img_detailed" height="200px" width="200px" src="/static/f.jpg"></v-img>
                        <h3>매콤매콤 김치김치전</h3>
                    </v-flex>

                    <v-flex>
                        <div class="my_img_detailed" style="margin-top:50px;">
                                <h2>매콤갈비 추천합니다*^^*</h2>
                                <h4>이것이다!</h4>                         
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
</v-container>
</template>

<script>
export default {
    name: 'reviewboard',
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>