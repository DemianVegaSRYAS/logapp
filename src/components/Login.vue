<template>
    <div class="login_wrap">
        
        <div class="screen_wrap">
            <div class="fk_cam"></div>
            <!-- <el-form> -->
                <div class="log">
                    <form 
                    :model="form" 
                    status-icon 
                    
                    ref="form" 
                    label-width="120px" 
                    class="demo-ruleForm">
                            <el-avatar src="https://appsdejoseluis.com/wp-content/uploads/2020/04/face_co.png" class="avat"></el-avatar>
                            
                            <input
                            id="user"
                            type="user" 
                            v-model="form.user" 
                            class="name" 
                            placeholder="USERNAME"/>

                            <input 
                            id="password"
                            type="password" 
                            v-model="form.password" 
                            autocomplete="off" 
                            class="pass" 
                            placeholder="PASSWORD"/>

                            
                            <el-button 
                            @click="Open()" 
                            class="btn_log">
                                Login
                            </el-button>
                    </form>
                </div>
            <!-- </el-form> -->
        </div>
        <div class="btn"></div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name : 'Login',
    props:{
        msg: String,
    },
    methods:{
        Open(){
            if(this.form.user === this.MyUser && this.form.password === this.MyPassword){
                this.$router.push(`/list`)
            }else{
                this.$alert('Incorrect Information, please write your correct information','Error',{
                    confirmButtonText:'Ok'
                })
            }
        }
    },
    components: {RouterLink},
    data() {
        return{
            form:{
                user: '',
                password: '',
            },
            MyUser: 'Demian',
            MyPassword: 'Dem123'
        }
            }
                }
</script>
<style scoped>
.login_wrap{
    height: 82vh;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.71);
    border-radius: 30px;
    padding: 5px;
    border: solid 1px rgba(255, 255, 255, 0.237);
    box-shadow: 20px 17px 115px 32px rgba(0,0,0,1);
    -webkit-box-shadow: 20px 17px 115px 32px rgba(0,0,0,1);
    -moz-box-shadow: 20px 17px 115px 32px rgba(0,0,0,1);
}
.el-form-item__label{
    text-align: center;
}
.screen_wrap{
    /* margin: 5px; */
    border-radius: 30px;
    height: 75vh;
    background-color: rgba(255, 255, 255, 0.345);
    padding-top: 5px;
    display:grid;
    grid-template-rows: 40px auto;
    align-items: center;
    justify-items: center;
}
.btn{
    background-color: rgba(0, 0, 0, 0.183);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 2px auto;
    border: solid 1px #fff;
}
.fk_cam{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 2px auto;
    background-color: rgba(0, 0, 0, 0.183);

}
.log{
    height: 100%;
    background-color: transparent;
    padding: 1em;
}
.name{
    margin: 5px;
}
.pass{
    margin: 5px;
}
.avat{
    height: 150px;
    width: 150px;
}
.btn_log{

    margin-top: 1em;
    width: auto;
    background-color: transparent;
}
.btn_log:hover{
    background-color: #009BB7;
    color: white;
}
input{
    padding: 1em;
    border-radius: 10px;
    width: 100%;
    font-weight: bold;
    color: #009BB7;
    border-color: transparent;
    height: 3em;
    opacity: 70%;
}
input:focus-visible {
    outline-width: 0;
    font-weight: bold;
    color: #009BB7;
    }
</style>
