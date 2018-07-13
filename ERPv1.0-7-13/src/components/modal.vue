<template>  
    <div class="modal-content" v-show="show" >
        <div class="modal" >
            <!-- <P class="modal-title">{{title}}<img @click="cancle" src="../assets/imgs/window_cancel.png" alt=""></P>
            <p class="modal-info">{{tip}}</p> -->
             <P class="modal-title"><slot name="title">提示</slot><img @click="cancle" src="../assets/imgs/window_cancel.png" alt=""></P>
            <p class="modal-info"><slot name="tip"></slot></p>
            <p class='modal-option'><button @click="cancle">取消</button><button class="sure" @click="submit">确认</button></p>
        </div>
    </div>  
</template>
<script>
export default {
  props: ['show','tip','title'],
  data() {
    return {};
  },
  methods: {    
    submit() {
        //1表示确认
      this.$emit("confirm",1);
    },
    cancle(){
        //0表示确认取消和关闭
        this.$emit("confirm",0);
    }
  }
};
</script>
<style scoped>
.modal-content {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.modal {
  width: 536px;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  border-radius: 5px;
}
 p{
    display: block;
    padding: 0
}
.modal-title {
  display: flex;
  position: relative;
  align-items: center;
  color: #666;
  font-size: 30px;
  padding: 30px 0;
  border-bottom: 1px solid #e0e0e0;
}
.modal-title img {
  width: 28px;
  height: 28px;
  position: absolute;
  right: 0;
}
.modal-info {
  font-size: 34px;
  color: #111;
  margin: 64px 0;
}
.modal-option {
  text-align: right;
  padding-bottom: 24px;
}
.modal-option button {
  width: 147px;
  height: 68px;
  border-radius: 4px;
  color: #111;
  font-size: 30px;
  text-align: center;
  line-height: 68px;
  background-color: transparent;
  border: 2px solid #c9c9c9;
}
.modal-option .sure {
  color: #fff;
  background-color: #00d3af;
  border-color: #00d3af;
  margin-left: 20px;
}
</style>
