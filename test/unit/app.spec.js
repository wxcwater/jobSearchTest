 // @file app.vue测试用例
 // @author wxcwater

 import Vue from 'vue';
 import app from '../../src/app.vue'

 describe('test app.vue',()=>{
   it('组建加载后，title应该是test',()=>{
     let vm = new Vue(app).$mount();
     vm.employeeList = [{'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                   {'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                   {'name':'jack',bioContent:{'sex':'male','age':22,'phoneNumber':'15201321623','office':'417'}},
                                 ]
     expect(vm.employeeList.length).toEqual(3);

   });

 });

 describe('test app.vue method', () => {

    // 描述要测试的最小单元
    it('测试方法', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();

        // 执行setMessage方法
        vm.toggleContent(1);
        // 断言组件的message是否变为了'你好世界'
        expect(vm.currentItem).toEqual(1);
        Vue.nextTick(() => {
            let age = vm.$el.getElementById('contentAge');
            expect(age.textContent).toEqual('Age:22')
            done();
        });

        vm.toggleContent(2);

        // 断言组件的message是否变为了'你好世界'
        expect(vm.currentItem).toEqual(2);

        vm.toggleContent(2);

        // 断言组件的message是否变为了'你好世界'
        expect(vm.currentItem).toEqual(null);
    });
});
