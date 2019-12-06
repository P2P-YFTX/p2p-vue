export default {
  // type(事件类型)： 其值为setResturantName,以为它是个方法名
  // payload：官方给它还取了一个高大上的名字：载荷，其实就是一个保存要传递参数的容器
  setLogin:(state,sysUser)=>{
    state.sysUser = sysUser
  },
  setLoginout:(state) => {
    state.sysUser = undefined
  }
}
