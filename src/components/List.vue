<template>
    <div class="List_wrap">
        <div class="Wrappuno">
        <h1>Rick & Morty Characters</h1>
        <div 
        v-for="character in characters.results" 
        :key="character.id" 
        class="wrappdos"
        type="text"
            @click="">

            <img v-bind:src="character.image" :alt="character.name" srcset="" class="image_wrapp">
            <br>
            <div class="info_wrapp">
                <p>{{character.name}} - {{character.origin.name}}</p>




                <div class="hiddenwrap" id="Ishidden">
                    <span>{{character.gender}}</span>
                </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'List',
    data(){
        return{
            characters: [],
        }
    }, methods:{
        callingAPI (){
            fetch('https://rickandmortyapi.com/api/character').then(res => res.json().then(data =>{
                this.characters = data
            }))
        },
        handleClose(done) {
            this.$confirm('Are you sure?')
            then(_=>{
                done()
            })
            .catch(_=> {})
        },
        Show(){
            this.hiddenwrap.style.display = 'block'
        }
    }, mounted(){
        this.callingAPI()
    }
}
</script>
<style scoped>
h1{
    padding: 2em;
    /* background-color: white; */
}
.Wrappuno{
    background-color: rgba(19, 19, 19, 0.401);
    margin: -50px 200px 0 200px;
    border-radius: 20px;
}
.wrappdos{
    color: white;
    background-color: rgba(0, 0, 0, 0.372);
    display: inline-flex;
    margin: 5px;
    padding: 1em;
    border-radius: 10px;
    max-height: 200px;
    width: 30vw;
    cursor: pointer;
}
div>img{
    margin: 0.5em;
    padding: 0;
    border-radius: 10px;
    width: 200px;
}
.info_wrapp{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
}
.info_wrapp::-webkit-scrollbar {
    display: none;
}
h3{
    text-align: start;
    font-size: 1.5em;
}
span{
    display: inline-block;
}
.green{
    background-color: green;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.red{
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
i{
    color: rgb(117, 167, 0);
}
.hiddenwrap{
    display: none;
}
/* .hidden_wrap{
    background-color: rgb(50, 50, 50);
    min-width: 300px;
    z-index: 10;
    border-radius: 20px;
    border: 5px solid rgb(46, 46, 46); */
    /* display: none; */
/* } */
</style>