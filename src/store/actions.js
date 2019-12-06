export default {
  setLoginByAsync: function(context, sysUser){
    context.commit('setLogin',sysUser)
  },
  setLoginOutByAsync:function(context){
    context.commit('setLoginout')
  }

}
