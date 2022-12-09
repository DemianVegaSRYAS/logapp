<template>
    <div class="home">
        <div class="readme">
            <el-button
            type="text"
            @click="(dialogVisible = true)"
            class="readmebtn">
                Readme 📚
            </el-button>




                <el-dialog
                    title="Readme 📚"
                    :visible.sync="dialogVisible"
                    width="50%"
                    :before-close="handleClose">
                    <span>This is just a Login Page Demo, the credentials are: </span>
                        <br> <br>
                    <span>UserName:  Demian</span>
                    <br>
                    <span>Password:  Dem123</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="$router.push('login')" >Go to Login 👉</el-button>
                        <!-- <router-link to="/login">Login</router-link> -->
                    </span>
                </el-dialog>







        </div>
    </div>
</template>
<script>
export default{
    name: 'Home',
    data(){
        return{
            dialogVisible:false
            // this.$router.push(`/list`)
            
        }
    },
    methods:{
        handleClose(done) {
            this.$confirm('Are you sure?')
            then(_=>{
                done()
            })
            .catch(_=> {})
    }
}
}
</script>
<style scoped>
.home{
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.readmebtn{
    background-color: #009cb76e;
    border: solid 5px #027c92;
    line-height: 2em;
    font-size: 3em;
    padding: 0.5em;
}
.readmebtn:hover{
    background-color: #004e5c6e;
    color: #fff;
    border: solid 5px #00d9ff;
    padding: 0.3em;
}
.dialog-footer button:first-child {
    margin: auto;
    
}
</style>