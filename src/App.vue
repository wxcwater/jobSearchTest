<template>
  <div id="app">
    <div class="employeeItem" v-for="(employee,index) in employeeList" v-on:click='toggleContent(index,$event)'>
      <!-- <div class="itemMain" >
        <img class="icon" src="src/assets/timg.jpeg" width=100>
        <p class="employeeName" >Name:{{employee.name}}</p>
        <img class="icon" src="src/assets/more2.jpeg" width=100>
      </div>
      <div class="itemDetail" v-show='currentItem==index'>
        <p class="employeeName">sex:{{employee.bioContent.sex}}</p>
        <p class="employeeName">Name:{{employee.bioContent.age}}</p>
        <p class="employeeName">Name:{{employee.bioContent.phoneNumber}}</p>
      </div> -->
      <div class="itemContentcolumn">
          <img class="icon" src="src/assets/timg.jpeg" width=100>
          <p class="employeeName"  v-on:click.stop="alertData('name',employee.name)" v-show='currentItem==index'>Name:{{employee.name}}</p>

      </div>
      <div class="itemContentcolumn">
        <p class="employeeName"  v-show='currentItem!=index'>Name:{{employee.name}}</p>
        <div id = 'contentAge' class="employeeName"  v-on:click.stop="alertData('age',employee.bioContent.age)" v-show='currentItem==index'>Age:{{employee.bioContent.age}}</div>
        <p class="employeeName"  v-on:click.stop="alertData('phoneNumber',employee.bioContent.phoneNumber)" v-show='currentItem==index'>phoneNumber:{{employee.bioContent.phoneNumber}}</p>

      </div>
      <div class="itemContentcolumn">
          <img class="icon" src="src/assets/more2.jpeg" width=100 v-show='currentItem!=index'>
          <p class="employeeName"  v-on:click.stop="alertData('sex',employee.bioContent.sex)" v-show='currentItem==index'>sex:{{employee.bioContent.sex}}</p>
          <p class="employeeName"  v-on:click.stop="alertData('office',employee.bioContent.office)" v-show='currentItem==index'>office:{{employee.bioContent.office}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    toggleContent:function(index,event){
      if(this.currentItem==index){
        this.currentItem = null;
      }else{
        this.currentItem = index;
      }
    },
    alertData(attributeName,attributeValue,event){
      alert('this employee`s '+attributeName+' is :'+attributeValue);
      event.preventDefault();
    }
  },
  data () {
    return {
      employeeList:[{'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                    {'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                    {'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                    {'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                                  ],
      currentItem:NaN,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:blue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 80%;
  height: 100%;
  overflow: auto;
}
p{
  margin:0px;
}
.employeeItem{
  margin:5px;
  border-radius: 5px;
  background-color: #80c7ee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}
.employeeItem :hover{
  background-color: #2b9fdf;

}
.icon{
  margin: 5px;
}
.itemContentcolumn{
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
