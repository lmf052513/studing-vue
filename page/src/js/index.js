const template = ` <div id="app">
<h2>{{title}}</h2>
商品名称：<input type="text" v-model="newProduct.name"/>
库存数量：<input type="text" v-model="newProduct.stock"/>
<button @click="addShopping">添加</button>

<ul>
    <li v-for="(item,index) in products">
        <span>{{item.name}}</span>
        <button @click="item.stock <= 0 ? 0 : item.stock--">-</button>
        <span v-if="item.stock">{{item.stock}}</span>
        <span v-else>售尽</span>
        <button @click="item.stock++">+</button>
        库存:<input type="number" class="stock" v-model="item.stock" min='0'/>
        <button @click="del(index)">删除</button>
        
    </li>
</ul>
</div>`
const config = {
    el:'#app',
    template,
    data:{
        title:'商品库存列表',
        newProduct:{
            shoppingName:"",
            stock:0,
        },
        products:[
            {name:'华为手机',stock:10},
            {name:'华为手机',stock:10},
            {name:'华为手机',stock:10},
        ]
    },
    methods:{
        addShopping(){
            this.products.push(this.newProduct);
            this.newProduct = {
                name:"",
                stock:0,
            }
        },
        del(index){
            this.products.splice(index,1);
        }
    }
    
}


const app = new Vue(config);